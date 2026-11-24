#!/usr/bin/env node
// Run only a local engine supplied alongside its expected SHA-256.
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const pkg = require('../../package.json');

function locate() {
  const bin = process.env.IMPECCABLE_SECURE_BIN;
  const expected = process.env.IMPECCABLE_SECURE_SHA256;
  if (!bin || !path.isAbsolute(bin) || !/^[a-fA-F0-9]{64}$/.test(expected || '')) {
    return null;
  }
  try {
    if (!fs.statSync(bin).isFile()) return null;
    const actual = createHash('sha256').update(fs.readFileSync(bin)).digest('hex');
    return actual === expected.toLowerCase() ? bin : null;
  } catch {
    return null;
  }
}

// `--version` / `-v` is answered by the shim itself: the number users mean
// is this npm package's version, not the engine's (docs/CLI-CONTRACT.md).
const argv = process.argv.slice(2);
if (argv[0] === '--version' || argv[0] === '-v') {
  process.stdout.write(`${pkg.version}\n`);
  process.exit(0);
}

const bin = locate();
if (!bin) {
  process.stderr.write('Impeccable Secure: approved local engine and SHA-256 required; no download attempted.\n');
  process.exit(127);
}
const result = spawnSync(bin, argv, {
  stdio: 'inherit',
  env: { IMPECCABLE_SELF: 'npx impeccable', ...process.env },
});
if (result.error) {
  process.stderr.write(`impeccable: failed to run ${bin}: ${result.error.message}\n`);
  process.exit(127);
}
process.exit(result.status === null ? 1 : result.status);
