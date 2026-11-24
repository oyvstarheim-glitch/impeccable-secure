# Dependency advisory check

On 24 November 2026, OSV received the names, ecosystems and versions of 419
unique registry components from the two lockfiles. It returned 75 advisory
IDs across 13 components. This is a version match. Reachability, impact,
publisher review and build-time behavior still require assessment. The npm
lockfile includes development and test dependencies. This scan does not cover
embedded assets or distributed binaries.

The accompanying CycloneDX 1.6 file inventories both lockfiles, including
the 20 local Cargo workspace packages. It contains the locked Cargo
dependency graph and the npm component inventory. It has passed JSON Schema
validation. A release SBOM still needs to identify the components actually
included in the Windows package.

| Locked component | OSV matches |
| --- | --- |
| `cargo/rustls-webpki@0.103.15` | [RUSTSEC-2026-0382](https://osv.dev/vulnerability/RUSTSEC-2026-0382) |
| `cargo/url@2.5.8` | [RUSTSEC-2026-0592](https://osv.dev/vulnerability/RUSTSEC-2026-0592) |
| `cargo/webpki-roots@1.0.9` | [RUSTSEC-2026-0381](https://osv.dev/vulnerability/RUSTSEC-2026-0381) |
| `npm/@hono/node-server@1.19.14` | [GHSA-frvp-7c67-39w9](https://osv.dev/vulnerability/GHSA-frvp-7c67-39w9), [GHSA-jpvv-r467-5p4w](https://osv.dev/vulnerability/GHSA-jpvv-r467-5p4w), [GHSA-rmxm-3fg6-px4f](https://osv.dev/vulnerability/GHSA-rmxm-3fg6-px4f) |
| `npm/@modelcontextprotocol/sdk@1.29.0` | [GHSA-22jm-h49p-29qw](https://osv.dev/vulnerability/GHSA-22jm-h49p-29qw), [GHSA-46jr-4wx8-v453](https://osv.dev/vulnerability/GHSA-46jr-4wx8-v453), [GHSA-6prh-2h8m-c8cw](https://osv.dev/vulnerability/GHSA-6prh-2h8m-c8cw), [GHSA-6qxp-vccf-f47h](https://osv.dev/vulnerability/GHSA-6qxp-vccf-f47h), [GHSA-f897-62hf-6gxq](https://osv.dev/vulnerability/GHSA-f897-62hf-6gxq), [GHSA-rvq5-wwqv-78pq](https://osv.dev/vulnerability/GHSA-rvq5-wwqv-78pq) |
| `npm/body-parser@2.2.2` | [GHSA-27r3-jxmh-p828](https://osv.dev/vulnerability/GHSA-27r3-jxmh-p828), [GHSA-v422-hmwv-36x6](https://osv.dev/vulnerability/GHSA-v422-hmwv-36x6) |
| `npm/brace-expansion@5.0.6` | [GHSA-3jxr-9vmj-r5cp](https://osv.dev/vulnerability/GHSA-3jxr-9vmj-r5cp), [GHSA-6j4f-fj2g-mc7p](https://osv.dev/vulnerability/GHSA-6j4f-fj2g-mc7p), [GHSA-mh99-v99m-4gvg](https://osv.dev/vulnerability/GHSA-mh99-v99m-4gvg), [GHSA-q2hr-2g5m-vwhr](https://osv.dev/vulnerability/GHSA-q2hr-2g5m-vwhr), [GHSA-qhr7-859c-m2p7](https://osv.dev/vulnerability/GHSA-qhr7-859c-m2p7), [GHSA-rgw5-rvv9-x895](https://osv.dev/vulnerability/GHSA-rgw5-rvv9-x895) |
| `npm/fast-uri@3.1.0` | [GHSA-333x-w4r6-6crp](https://osv.dev/vulnerability/GHSA-333x-w4r6-6crp), [GHSA-4c8g-83qw-93j6](https://osv.dev/vulnerability/GHSA-4c8g-83qw-93j6), [GHSA-7p8r-x3mc-p8w7](https://osv.dev/vulnerability/GHSA-7p8r-x3mc-p8w7), [GHSA-f65p-4m7j-42xc](https://osv.dev/vulnerability/GHSA-f65p-4m7j-42xc), [GHSA-hrr3-gc8f-f4qj](https://osv.dev/vulnerability/GHSA-hrr3-gc8f-f4qj), [GHSA-jqff-g426-hqxp](https://osv.dev/vulnerability/GHSA-jqff-g426-hqxp), [GHSA-q3j6-qgpj-74h6](https://osv.dev/vulnerability/GHSA-q3j6-qgpj-74h6), [GHSA-qw65-cvwx-89v3](https://osv.dev/vulnerability/GHSA-qw65-cvwx-89v3), [GHSA-v2hh-gcrm-f6hx](https://osv.dev/vulnerability/GHSA-v2hh-gcrm-f6hx), [GHSA-v39h-62p7-jpjc](https://osv.dev/vulnerability/GHSA-v39h-62p7-jpjc), [GHSA-w74x-v6f9-j3xg](https://osv.dev/vulnerability/GHSA-w74x-v6f9-j3xg), [GHSA-xhq7-xmqj-769h](https://osv.dev/vulnerability/GHSA-xhq7-xmqj-769h) |
| `npm/hono@4.12.14` | [GHSA-2gcr-mfcq-wcc3](https://osv.dev/vulnerability/GHSA-2gcr-mfcq-wcc3), [GHSA-3gg2-335m-rxc6](https://osv.dev/vulnerability/GHSA-3gg2-335m-rxc6), [GHSA-3hrh-pfw6-9m5x](https://osv.dev/vulnerability/GHSA-3hrh-pfw6-9m5x), [GHSA-46wx-v44x-9hh2](https://osv.dev/vulnerability/GHSA-46wx-v44x-9hh2), [GHSA-4h7h-rv7c-7m2v](https://osv.dev/vulnerability/GHSA-4h7h-rv7c-7m2v), [GHSA-4m76-xfj5-7975](https://osv.dev/vulnerability/GHSA-4m76-xfj5-7975), [GHSA-54fx-42gc-7vw4](https://osv.dev/vulnerability/GHSA-54fx-42gc-7vw4), [GHSA-5r4p-p66f-jhc7](https://osv.dev/vulnerability/GHSA-5r4p-p66f-jhc7), [GHSA-69xw-7hcm-h432](https://osv.dev/vulnerability/GHSA-69xw-7hcm-h432), [GHSA-79qm-7rj5-m7r9](https://osv.dev/vulnerability/GHSA-79qm-7rj5-m7r9), [GHSA-88fw-hqm2-52qc](https://osv.dev/vulnerability/GHSA-88fw-hqm2-52qc), [GHSA-8j4g-w8fx-2239](https://osv.dev/vulnerability/GHSA-8j4g-w8fx-2239), [GHSA-9vqf-7f2p-gf9v](https://osv.dev/vulnerability/GHSA-9vqf-7f2p-gf9v), [GHSA-crvj-82cr-hjcx](https://osv.dev/vulnerability/GHSA-crvj-82cr-hjcx), [GHSA-f23p-vx2j-j53r](https://osv.dev/vulnerability/GHSA-f23p-vx2j-j53r), [GHSA-f577-qrjj-4474](https://osv.dev/vulnerability/GHSA-f577-qrjj-4474), [GHSA-g6gw-c38x-mqfc](https://osv.dev/vulnerability/GHSA-g6gw-c38x-mqfc), [GHSA-gqvv-2mrq-wpjv](https://osv.dev/vulnerability/GHSA-gqvv-2mrq-wpjv), [GHSA-h7mg-cq63-vhpq](https://osv.dev/vulnerability/GHSA-h7mg-cq63-vhpq), [GHSA-hm8q-7f3q-5f36](https://osv.dev/vulnerability/GHSA-hm8q-7f3q-5f36), [GHSA-hvrm-45r6-mjfj](https://osv.dev/vulnerability/GHSA-hvrm-45r6-mjfj), [GHSA-hxh3-vqpv-xpqv](https://osv.dev/vulnerability/GHSA-hxh3-vqpv-xpqv), [GHSA-j6c9-x7qj-28xf](https://osv.dev/vulnerability/GHSA-j6c9-x7qj-28xf), [GHSA-p77w-8qqv-26rm](https://osv.dev/vulnerability/GHSA-p77w-8qqv-26rm), [GHSA-qp7p-654g-cw7p](https://osv.dev/vulnerability/GHSA-qp7p-654g-cw7p), [GHSA-rv63-4mwf-qqc2](https://osv.dev/vulnerability/GHSA-rv63-4mwf-qqc2), [GHSA-w62v-xxxg-mg59](https://osv.dev/vulnerability/GHSA-w62v-xxxg-mg59), [GHSA-wgpf-jwqj-8h8p](https://osv.dev/vulnerability/GHSA-wgpf-jwqj-8h8p), [GHSA-wwfh-h76j-fc44](https://osv.dev/vulnerability/GHSA-wwfh-h76j-fc44), [GHSA-xgm2-5f3f-mvvc](https://osv.dev/vulnerability/GHSA-xgm2-5f3f-mvvc), [GHSA-xrhx-7g5j-rcj5](https://osv.dev/vulnerability/GHSA-xrhx-7g5j-rcj5) |
| `npm/ip-address@10.1.0` | [GHSA-h3mg-xc3c-68pw](https://osv.dev/vulnerability/GHSA-h3mg-xc3c-68pw), [GHSA-j6r3-76f7-8jcv](https://osv.dev/vulnerability/GHSA-j6r3-76f7-8jcv), [GHSA-mwp4-54f8-5fhr](https://osv.dev/vulnerability/GHSA-mwp4-54f8-5fhr), [GHSA-rpw4-54j3-4h4q](https://osv.dev/vulnerability/GHSA-rpw4-54j3-4h4q), [GHSA-rxp7-6hxx-x8q5](https://osv.dev/vulnerability/GHSA-rxp7-6hxx-x8q5), [GHSA-v2v4-37r5-5v8g](https://osv.dev/vulnerability/GHSA-v2v4-37r5-5v8g) |
| `npm/minimatch@10.2.5` | [GHSA-g3hv-75wg-m249](https://osv.dev/vulnerability/GHSA-g3hv-75wg-m249) |
| `npm/proxy-addr@2.0.7` | [GHSA-jqcg-44mw-7w3h](https://osv.dev/vulnerability/GHSA-jqcg-44mw-7w3h) |
| `npm/qs@6.15.1` | [GHSA-4mjr-xmp4-gh2g](https://osv.dev/vulnerability/GHSA-4mjr-xmp4-gh2g), [GHSA-6pq8-jhm2-2vcw](https://osv.dev/vulnerability/GHSA-6pq8-jhm2-2vcw), [GHSA-q8mj-m7cp-5q26](https://osv.dev/vulnerability/GHSA-q8mj-m7cp-5q26), [GHSA-x5fp-wj9c-mxmx](https://osv.dev/vulnerability/GHSA-x5fp-wj9c-mxmx) |


The Cargo advisories list fixes in rustls-webpki 0.103.16, webpki-roots
1.0.10, and url 2.5.9. The versions exist in the registry index. Resolving the
URL update also requires form_urlencoded 1.2.3 or later. No lockfile changes
or Rust compatibility tests have been made.
