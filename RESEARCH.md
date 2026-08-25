# RESEARCH.md - Open Source Research & Attribution Audit

This document records the research conducted on existing distributed systems, Hadoop documentation, discrete simulation frameworks, and frontend visualization libraries.

---

## Analyzed Projects & Frameworks

| Project Name | Repository / URL | License | Status | Reuse Rationale / Rejection Reason |
| :--- | :--- | :--- | :--- | :--- |
| **Apache Hadoop** | `https://github.com/apache/hadoop` | Apache-2.0 | Reference | **Reference Only**. Authoritative behavioral reference for HDFS, YARN, MapReduce specs, command CLI syntax, and replica placement policies. |
| **Sim.js** | `https://github.com/mvarshney/simjs-source` | LGPL-2.1 | Rejected | Discrete event library. **Rejected** in favor of a clean-room TypeScript event-sourced priority queue engine (`SimulationEngine`) for strict determinism and event replay. |
| **JS-Spark / JS-MapReduce** | Various GitHub gists | MIT / Unlicensed | Rejected | Simple JS MapReduce toys. **Rejected** as they lack HDFS block placement, YARN resource allocation, shuffle sorting, and fault tolerance. |
| **Lucide Icons** | `https://github.com/lucide-icons/lucide` | ISC | Reused (`lucide-react`) | Used for UI icons across dashboard, terminal, cluster topology, and lab visualizers. |
| **Tailwind CSS** | `https://github.com/tailwindlabs/tailwindcss` | MIT | Reused (`tailwindcss`) | Used for UI styling, dark theme, responsive grid layouts, and visual status badges. |
| **Vitest** | `https://github.com/vitest-dev/vitest` | MIT | Reused (`vitest`) | Used for unit, integration, state machine, and golden scenario test suites. |

---

## Research Manifest & Dependencies

Automated research tracking is managed via `tools/bootstrap-research.js`, which maintains machine-readable manifests in:
- `research/sources.json`: External project references and commit hashes.
- `research/licenses.json`: License compliance details.
- `research/dependencies.json`: Package version pins.
- `research/compatibility.json`: Browser API feature requirements (Web Workers, OPFS, IndexedDB).
