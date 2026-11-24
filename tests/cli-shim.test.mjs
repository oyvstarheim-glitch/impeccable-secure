import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const shim = fileURLToPath(new URL('../cli/bin/cli.js', import.meta.url));
const digest = createHash('sha256').update(fs.readFileSync(process.execPath)).digest('hex');

function run(args, env = {}, cwd) {
  return spawnSync(process.execPath, [shim, ...args], {
    cwd,
    env: { SystemRoot: process.env.SystemRoot ?? '', ...env },
    encoding: 'utf8',
    timeout: 5000,
  });
}

function requireRefusal(result) {
  assert.ifError(result.error);
  assert.equal(result.status, 127, result.stderr);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /approved local engine and SHA-256 required/);
}

test('retains the npm package version without requiring an engine', () => {
  const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
  const result = run(['--version']);
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout.trim(), pkg.version);
});

test('refuses engine lookup through the legacy override and leaves the cache untouched', (t) => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'impeccable-shim-'));
  t.after(() => fs.rmSync(home, { recursive: true, force: true }));
  const forbidFetch = 'globalThis.fetch = () => { process.exit(99); };';
  requireRefusal(run(['engine-probe'], {
    IMPECCABLE_BIN: process.execPath,
    IMPECCABLE_HOME: home,
    IMPECCABLE_DOWNLOAD_BASE: 'http://127.0.0.1:9',
    NODE_OPTIONS: `--import=data:text/javascript,${encodeURIComponent(forbidFetch)}`,
  }));
  assert.deepEqual(fs.readdirSync(home), []);
});

test('refuses a relative path even when it names the expected bytes', () => {
  requireRefusal(run(['engine-probe'], {
    IMPECCABLE_SECURE_BIN: path.basename(process.execPath),
    IMPECCABLE_SECURE_SHA256: digest,
  }, path.dirname(process.execPath)));
});

test('refuses an approved path when the configured digest differs', () => {
  requireRefusal(run(['engine-probe'], {
    IMPECCABLE_SECURE_BIN: process.execPath,
    IMPECCABLE_SECURE_SHA256: '0'.repeat(64),
  }));
});

test('refuses changed bytes at a previously verified path', (t) => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'impeccable-tampered-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const engine = path.join(dir, path.basename(process.execPath));
  fs.copyFileSync(process.execPath, engine);
  fs.appendFileSync(engine, 'changed');
  requireRefusal(run(['engine-probe'], {
    IMPECCABLE_SECURE_BIN: engine,
    IMPECCABLE_SECURE_SHA256: digest,
  }));
});

test('runs a matching absolute local engine and passes arguments literally', () => {
  const result = run(['-e', 'process.stdout.write(process.argv[1])', 'with spaces & symbols'], {
    IMPECCABLE_SECURE_BIN: process.execPath,
    IMPECCABLE_SECURE_SHA256: digest.toUpperCase(),
  });
  assert.ifError(result.error);
  assert.equal(result.status, 0, result.stderr);
  assert.equal(result.stdout, 'with spaces & symbols');
});
