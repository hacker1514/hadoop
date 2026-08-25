# SIMULATION_LIMITATIONS.md - Hadoop Simulation Scope & Limitations

This document clearly outlines the boundaries, simplifications, and differences between this browser-based simulator and a production Apache Hadoop JVM cluster.

---

## High-Level Differences Summary

| Feature / Subsystem | Apache Hadoop Cluster | Browser-Based Hadoop Simulator | Reason & Impact |
| :--- | :--- | :--- | :--- |
| **Execution Runtime** | Java Virtual Machine (JVM) daemon processes (`NameNode`, `DataNode`, `ResourceManager`, `NodeManager`) | Single-page Web Application in TypeScript / Web Workers | Runs 100% in any modern web browser without server backends or local Java installations. |
| **HDFS Storage** | Physical disk blocks (`/var/hadoop/hdfs/data`) | Browser OPFS (Origin Private File System) & IndexedDB | Simulates physical block allocation, generation stamps, and checksums in browser storage. |
| **Network Traffic** | TCP/IP Sockets over Physical Network | `VirtualNetwork` event-based latency and bandwidth simulation | Simulates network link speed, rack distance, packet loss, and data locality (`NODE_LOCAL`, `RACK_LOCAL`, `OFF_RACK`). |
| **MapReduce Execution** | Forked Java child processes per task attempt | Isolated Web Worker threads with sandboxed JavaScript execution | User jobs execute in JS Web Workers with timeout and memory guards. |
| **Cluster Scale** | Up to 10,000 physical server nodes | 1 to 1000 simulated virtual nodes | Event-driven architecture simulates thousands of nodes without spawning 1000 browser OS threads. |
| **Persistence** | Persistent HDFS edit logs & fsimage | Serialized JSON Event Logs & IndexedDB snapshots | Full deterministic replay, time-travel, import/export scenario files. |

---

## Detailed Component Comparison

### 1. HDFS (Hadoop Distributed File System)
- **Implemented**: Namespace tree, Block splitting (default 128MB / configurable), Block placement policy (`BlockPlacementPolicyDefault`: 1st local, 2nd remote rack, 3rd same remote rack), Safemode, Heartbeat loss detection, FSCK block repair, HDFS snapshots, Namespace & Storage quotas.
- **Simplified**: RPC protocol serialization (replaced with direct TypeScript service calls), EditLog journaling disk sync (replaced with state event sourcing).

### 2. YARN (Yet Another Resource Negotiator)
- **Implemented**: ResourceManager, NodeManagers, ApplicationMaster lifecycle, FIFO & Capacity Multi-Queue schedulers (`root.default`, `root.analytics`, `root.research`), Container resource tracking (`memoryMb`, `vCores`).
- **Simplified**: CGroups CPU isolation (simulated via virtual resource counter allocation).

### 3. MapReduce Engine
- **Implemented**: `InputFormat`, `InputSplit`, Mapper runner, In-memory spill/sort buffer, Multi-way partition merge, Network Shuffle transfer, Reducer runner, `OutputFormat`, Job Counters, Speculative execution.
- **Simplified**: Custom Java bytecode compilation (replaced with TypeScript/JS Mapper/Reducer plugin interfaces).
