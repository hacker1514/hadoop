# DEVELOPMENT.md - Development & Testing Guide

This guide explains how to set up, run, test, build, and extend the Hadoop Simulator codebase.

---

## 1. Prerequisites

- **Node.js**: v18.0.0 or higher (v24.x recommended)
- **npm**: v9.0.0 or higher (v11.x recommended)

---

## 2. Project Commands

```bash
# Install dependencies
npm install

# Start local Vite development server (http://localhost:3000)
npm run dev

# Run Vitest test suite
npm test

# Run tests in watch mode
npm test:watch

# Run TypeScript typecheck
npm run typecheck

# Run research verification script
npm run research

# Run research bootstrap script
npm run bootstrap

# Build production distribution (`dist/`)
npm run build

# Preview production build locally
npm run preview
```

---

## 3. Testing Strategy

1. **Unit Tests**: Test domain entities, FSM transitions, command parser, block placement policy, and capacity scheduler in isolation.
2. **Integration Tests**: Verify full end-to-end flows:
   - CLI `hdfs dfs -put` -> Block Splitting -> DataNode Placement -> Safemode update.
   - DataNode Failure -> Heartbeat Lost -> Under-Replicated Queue -> Re-replication -> Cluster Recovery.
   - MapReduce submission -> Container Allocation -> Mapper execution -> Network Shuffle -> Reducer execution -> HDFS output creation.
3. **Golden Scenarios & Determinism Tests**: Validate replay determinism (`golden-wordcount.json`, `golden-replication.json`, `golden-datanode-failure.json`).
