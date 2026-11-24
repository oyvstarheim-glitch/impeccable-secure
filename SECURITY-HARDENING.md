# Impeccable Secure — development status

**NOT APPROVED FOR INSTALLATION OR EXECUTION.** This is a work-in-progress hardening fork, not an audited release.

Upstream baseline: pbakaus/impeccable commit b49177d32788f2dc585c42831d845dacf1ebed2c (skill/CLI 4.10.0, engine 0.1.27). The upstream source tree and tests are preserved; see Git history for exact changes.

## Implemented source changes (not runtime verified)

- Live copy-edit refuses explicit headless Claude/Codex providers; default routes to chat, and the old bypass flags have been replaced. Active chat must retain ordinary permissions. The deterministic mock provider remains for tests.
- Browser-controlled text and metadata are designated untrusted in the worker prompt. This is defense in depth, not a guarantee against injection.
- Project-defined manual-edit validation shell command requires IMPECCABLE_ALLOW_MANUAL_VALIDATION=1 in the process environment. With no opt-in the existing optional validation step is skipped; this may reduce validation coverage. Review and explicitly authorize any script before using it.
- Telemetry defaults off, with explicit user-config opt-in; existing project and environment opt-outs retain precedence. Catalog network requests still exist.
- All 46 shell/batch skill launchers and the npm launcher now require an absolute local IMPECCABLE_SECURE_BIN and IMPECCABLE_SECURE_SHA256. No automatic downloads or fallback binaries via these launchers. Do not set these variables to upstream binaries: the digest only validates bytes against a trusted reference, not security or provenance. Local builds and environment configuration are not yet approved.
- Default Claude project and plugin hooks are empty pending engine and hook audit. Other provider configurations are not approved. Install/update commands may still create hooks or download engines through other code paths and must not be used.
- Unit test source added for provider rejection and selection. Existing tests adapted in part for telemetry. No tests run yet.

## Required release gates

1. Review the entire reachable code, including all skill/agent Markdown, generated copies, browser bundles, extension permissions, installers, Rust engine, workflows, test code, external catalog and MCP paths; establish file-level coverage and threat model.
2. Audit Cargo.lock and npm/Bun dependency graph, build scripts and published artifacts. Verify source-to-binary provenance; use isolated disposable build environment with no credentials or host private files.
3. Review all remaining execution paths, including direct CLI installer/update/engine fetch, hook generation, alternate entry points, explicit mock mode, validation, environment handling, and local server endpoint authorization and path confinement. Ensure untrusted projects cannot supply security policy or select an unapproved engine.
4. Reconcile generated source and docs, tests for default mode, telemetry opt-in, launcher refusal and hash verification, and any tests assuming the upstream headless mode. Ensure automatic hooks are independently least-privileged and only opt-in. Preserve all design commands, agent references and original assets; do not claim parity before testing.
5. Compile engine and run Rust, Windows launcher, integration, regression, injection and security tests. Validate signed or otherwise authenticated release manifest and packaging; verify original code is not silently reintroduced during build or update.
6. Document feature differences and residual risks; review before enabling hooks, browser integration, telemetry or installation. Publish a separate, version-pinned Claude package only after gates pass.

No binaries were built, no upstream code was executed, no GitHub Actions run was requested, and no installation was performed during this initial hardening pass. The original main branch remains unchanged. No malware-free guarantee is made.

## User-facing impact

Design instructions, reference library, command definitions, Rust source, test library and integrations remain present. Headless Live Apply is intentionally unavailable; active chat is the replacement. Hooks are disabled by default. Engine-backed features are unavailable until a trusted rebuilt engine is produced and approved. Do not run the original npx install command or marketplace installer against this development branch.
