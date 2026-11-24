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
