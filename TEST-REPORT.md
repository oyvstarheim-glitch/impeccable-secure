# Interim test report

| Suite | Environment | Passed | Failed | Status |
| --- | --- | ---: | ---: | --- |
| `node --test tests/cli-shim.test.mjs` | Linux, Node 24.22.3, cleared inherited environment | 6 | 0 | Run |
| Windows launcher smoke checks | GitHub-hosted Windows candidate workflow | — | — | Pending |
| Rust Pro handoff regression | Unix integration test, synthetic Pro account | — | — | Pending |
| Full Rust, dependency, security, parity and Claude Code installation suites | Isolated build and runtime environments | — | — | Pending |

Static Git-object comparison also verified that the baseline paths are present
and the Windows launcher template and tracked copies contain identical content.
These comparisons do not count as runtime tests. The total number of pending
tests remains unknown until the release suites are enumerated.

## Claude Code smoke test

Claude Code 2.1.331 ran in an isolated Linux directory with a fresh config
and the ordinary permission mode. Validation of the project-local skills
directory passed. Validation of the plugin manifest passed and listed one
skill and five agents. The copied standalone plugin produced catalog-only
README, license and icon diagnostics. Catalog submission was outside this
test, and no plugin was published.

The local engine launcher refused to start without an approved engine and
returned 127. A `/impeccable polish index.html` request was attempted on a
synthetic library registration page with local PRODUCT.md and DESIGN.md.
Claude Code exited 1 with `Not logged in` before model execution. The HTML
checksum remained identical. Skill invocation, design changes and tool
permissions inside an authenticated model turn therefore remain unverified.

The rerun of the three dependency-free Node suites passed 30 of 30 tests.
They cover reference contracts, Live reference contracts and the npm shim.
The Live reference checks do not exercise Live Mode at runtime.
