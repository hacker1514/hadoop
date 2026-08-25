# ARCHITECTURE.md - Hadoop Simulator System Architecture

This document describes the 4-Layer Architecture, Domain Models, Finite State Machines, and Event Sourcing model powering the Browser-Based Hadoop Simulator.

---

## 1. The 4-Layer Architecture

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                 Layer 1: React UI                           │
│   Dashboard / Visualizations / Terminal / Labs / Time Control / Debugger    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ (State Subscriptions & Commands)
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                            Layer 2: Hadoop Domain API                       │
│    HadoopBackend Abstraction (SimulatorBackend / RealHadoopBackend)         │
│   HDFS API / YARN API / MapReduce API / CLI Parser / Lab Evaluation Engine  │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ (Domain Operations & State Machines)
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                       Layer 3: Discrete Simulation Engine                   │
│   Clock (0.1x-100x & Step) / Event Queue / Event Store / Seeded RNG /       │
│                  Deterministic Replay / Metric Collector                    │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │ (Scheduled Event Dispatch)
┌──────────────────────────────────────▼──────────────────────────────────────┐
│                       Layer 4: Virtual Infrastructure                       │
│   Virtual Nodes / Virtual Network (Latency, Bandwidth, Packet Loss) /       │
│            DataNode OPFS Storage / Checksum & Quota Subsystem               │
└─────────────────────────────────────────────────────────────────────────────┘
```

1. **Layer 1: Presentation (React UI)**: Renders the cluster dashboard, interactive canvas/SVG visualizers, Linux terminal, lab instructions, time controls, and observability inspectors. Has zero business logic.
2. **Layer 2: Hadoop Domain API (`HadoopBackend`)**: Defines domain entities (`NameNode`, `DataNode`, `ResourceManager`, `NodeManager`, `MapReduceJob`), state machines, CLI command parser, lab validator, and failure injection API.
3. **Layer 3: Discrete Simulation Engine**: Priority queue event loop, simulation clock (0.1x - 100x & step-by-step), immutable event store, seeded RNG (`Mulberry32`), and time machine replay.
4. **Layer 4: Virtual Infrastructure**: Simulated nodes, virtual network link model (latency, bandwidth, packet loss), and OPFS/IndexedDB storage engine.

---

## 2. Directory Layout

```text
src/
├── core/
│   ├── domain/        # Domain entities (Cluster, Node, Block, Task, etc.)
│   ├── fsm/           # Finite state machines for DN, NN, MapTask, Container
│   ├── events/        # Event type definitions and event store
│   ├── simulation/    # SimulationEngine, Clock, PriorityQueue, Seeded RNG
│   ├── network/       # VirtualNetwork, NetworkLink, Latency & Packet Loss
│   ├── replay/        # Deterministic replay and snapshot diffing
│   ├── backend/       # HadoopBackend interface & SimulatorBackend implementation
│   ├── metrics/       # Metrics collector & Cluster Health Score calculator
│   └── observability/ # Multi-level logger, trace viewer, decision explainer
│
├── hdfs/
│   ├── namenode/      # Namespace, Block map, Placement policy, Safemode, FSCK
│   ├── datanode/      # Storage API, Heartbeats, Checksums
│   ├── blocks/        # Block & Replica state management
│   ├── snapshots/     # HDFS Snapshot manager
│   └── quotas/        # Namespace & Storage quota manager
│
├── yarn/
│   ├── resourcemanager/ # Queue scheduler (FIFO, Capacity) & App tracking
│   ├── nodemanager/     # Container lifecycle & resource heartbeats
│   └── appmaster/       # Job coordinator & container requests
│
├── mapreduce/
│   ├── engine/        # InputSplit, Mapper, Partitioner, Sort/Spill, Shuffle, Reducer
│   ├── sandbox/       # Web Worker isolated user job sandbox
│   └── jobs/          # Standard MapReduce jobs (WordCount, LineCount, LogAnalyzer, etc.)
│
├── shell/
│   ├── parser/        # Hadoop command lexer and parser
│   ├── commands/      # HDFS & YARN command handlers
│   └── terminal/      # Autocomplete and terminal state engine
│
├── cluster/
│   ├── topology/      # Rack awareness and cluster node builder
│   └── failures/      # Failure injection framework (kill DN, corrupt block, drop net)
│
├── visualization/
│   ├── cluster/       # Rack & node topology graph
│   ├── hdfs/          # Block placement and replication visualizer
│   ├── mapreduce/     # Pipeline flowchart and network shuffle transfer view
│   ├── yarn/          # Container matrix & queue utilization view
│   └── timeline/      # Time machine event slider
│
├── datasets/          # Built-in datasets & streaming generator (1KB - 100MB)
├── education/         # 15 Interactive practice labs & challenge/teacher modes
└── ui/                # React UI components, dark theme, modal dialogs
```
