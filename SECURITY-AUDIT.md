# Interim security audit

**RED — installation approval pending.** Scope covered so far is recorded
in `PROGRESS.md` and the Git inventory in `AUDIT-COVERAGE.json`. A Git
inventory records identity and mode only.

## ISC-001 — Automatic substitution of the scanned engine

**High impact, conditional on Pro account/cache state.** At the source
snapshot, `crates/cli/src/main.rs:18–30` passed scan and hook verbs to
`crates/account/src/pro/mod.rs:806–859`. Depending on account and lease
state, that path started a detached refresh or delegated execution to a
separately distributed executable, with the caller's environment. The
upstream Pro implementation applies signature and lease checks, but that
trust chain is independent of the Secure build's provenance.

The Secure CLI now routes scans directly to its bundled engine. The
regression fixture in `crates/cli/tests/pro_dispatch.rs` stages a signed
synthetic Pro executable and checks that explicit and shorthand local
scans continue through the bundled engine. The test is pending a Rust build.
Explicit account operations can still refresh Pro state and are outside
this change.

## ISC-002 — Obsolete npm engine download and cache logic

**Low, maintenance risk.** The npm shim already restricted executable
selection to the local path and expected digest. It still shipped unused
HTTP download, package selection and verification-stamp code. The
reachable path now contains only direct local hash verification and
execution. Six local tests passed on Linux. The hash and executable path
are still supplied by the environment, so release provenance and
protection of the installed engine remain open. The Node execution path
has yet to be exercised on Windows.

## Additional review areas

The extension manifest requests debugger, native messaging and all-URL
host permissions. Treat the extension as a separate review target. Account
sign-in, Pro refresh, browser/native messaging, hook installation, Live
Mode authorization, project JavaScript parser loading and network data
flows require further review before distribution. No final counts by
severity are available.
