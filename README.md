# Apache Hadoop Enterprise Simulator & Polyglot Engine (v3.3.0)

<p align="center">
  <img src="./main/hadoop_logo.jpg" alt="Apache Hadoop Golden Elephant Logo" width="180" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />
</p>

<p align="center">
  <b>Architected & Engineered by <a href="https://github.com/hacker1514">Niranjan Kumar K</a></b><br/>
  GitHub Username: <code>hacker1514</code> | Repository: <code>hacker1514/hadoop</code> | User: <code>Hacker</code>
</p>

<p align="center">
  <a href="#-key-features"><img src="https://img.shields.io/badge/Hadoop_Version-3.3.0-F59E0B?style=for-the-badge&logo=apache" alt="Hadoop Version"/></a>
  <a href="#-subsystems--capabilities"><img src="https://img.shields.io/badge/Subsystems-65+-3B82F6?style=for-the-badge&logo=linux" alt="Subsystems"/></a>
  <a href="#-polyglot-nodejs-engine"><img src="https://img.shields.io/badge/Node.js-v18.16.0-10B981?style=for-the-badge&logo=nodedotjs" alt="Node.js Engine"/></a>
  <a href="#-automated-test-suite"><img src="https://img.shields.io/badge/Tests-83_Passed_(100%25)-8B5CF6?style=for-the-badge&logo=vitest" alt="Vitest Tests"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-EF4444?style=for-the-badge" alt="License"/></a>
</p>

---

## 📌 Overview

**Apache Hadoop Enterprise Simulator** is a state-of-the-art, 100% client-side big data infrastructure practice platform. It simulates a full-featured Apache Hadoop 3.x cluster inside the browser—complete with **HDFS Storage Tiering**, **YARN Capacity Schedulers**, **MapReduce**, **Hive LLAP**, **HBase NoSQL**, **Spark RDDs**, **Polyglot Node.js Streaming**, **Tez**, **Ranger**, and **Kerberos Security**.

- **Zero Server Overhead**: 100% Client-Side TypeScript & React Engine (<50MB RAM footprint).
- **0-Second Instant Startup**: No heavy Virtual Machine setups or Docker containers required.
- **Node.js Polyglot Engine**: Write mappers & reducers in JavaScript (`node script.js`) and execute via Hadoop Streaming.
- **65+ Production Subsystems**: Comprehensive big data command coverage.
- **Built-in Master Documentation**: Comprehensive command guide built directly into `/home/Hacker/about.txt`.

---

## 🚀 Key Features

### 🗄️ 1. HDFS Storage & Tiering
- **Rack-Aware Storage**: 128MB block distribution across multiple rack paths (`/rack-01`, `/rack-02`) with automated 3x replication.
- **FSCK Diagnostics**: Health reports, block locations, missing blocks (`hdfs fsck / -files -blocks -locations`).
- **Erasure Coding**: Policy management (`hdfs ec -enablePolicy -policy RS-6-3-1024k`).
- **Storage Policies**: Tiered storage policies (`HOT`, `WARM`, `COLD`) and Storage Policy Satisfier daemon (`hdfs storagepolicies -isSatisfierRunning`).
- **Off-Heap Cache**: Direct memory caching management (`hdfs cacheadmin -addPool -addDirective`).
- **Encryption Zones**: Transparent KMS encryption zones (`hdfs crypto -createZone`).
- **Snapshots & Balancer**: Snapshot creation (`hdfs dfs -createSnapshot`) and storage balancing (`hdfs balancer`).

### ⚡ 2. YARN Compute & Capacity Scheduler
- **Queue Management**: Multi-tenant Capacity Scheduler queue configurations (`root.default`, `root.production`).
- **Container Logs**: YARN application container aggregation logs (`yarn logs -applicationId app_001`).
- **Shared Cache Manager**: Centralized artifact caching (`yarn scm -signal`).
- **Apache Tez Memory DAGs**: Low-latency DAG execution (`tez-job.sh --submit`).
- **Inter-Cluster Replication**: High-throughput file copying (`hadoop distcp hdfs://nn1/src hdfs://nn2/dst`).

### 🟨 3. Polyglot Node.js Engine
- **Dynamic JS Evaluation**: Dynamic JavaScript execution using `new Function('console', codeToRun)` with full console output capture.
- **CLI Commands**: Execute inline expressions (`node -e "console.log(10+20)"`) or JS files (`node script.js`).
- **Hadoop Streaming**: Execute JavaScript mappers/reducers via Hadoop Streaming:
  ```bash
  hadoop jar hadoop-streaming.jar \
    -input /input/data.txt \
    -output /output/wc \
    -mapper "node mapper.js" \
    -reducer "node reducer.js"
  ```

### 📊 4. SQL, Data Warehousing & Analytics
- **Apache Hive Metastore & LLAP**: Interactive SQL DDL/DML parser and LLAP daemon (`hive --service llap`).
- **Apache Spark REPLs**: Scala Spark Shell (`spark-shell`) and Python PySpark (`pyspark`) with RDD transformation logic.
- **Impala & Presto**: Low-latency MPP query processing (`impala-shell`, `presto`).
- **Apache Kyuubi**: Enterprise multi-tenant SQL gateway (`kyuubi status`).

### 📦 5. NoSQL & Event Streaming
- **Apache HBase Shell**: Column-family storage table management (`create 'users', 'cf'`, `put`, `get`, `scan`).
- **Apache Phoenix**: Relational JDBC SQL layer over HBase (`phoenix-sqlline`).
- **Apache Kafka**: Distributed topic management & partitioning (`kafka-topics.sh --create`).
- **Apache Flume & NiFi**: Event ingestion pipelines (`flume-ng agent`, `nifi.sh status`).

### 🔐 6. Security & System Administration
- **Kerberos Authentication**: Enterprise ticket granting (`kinit Hacker@HADOOP.LOCAL`, `klist`, `kdestroy`).
- **Apache Ranger Security**: Fine-grained access control policy evaluation (`ranger policy list`).
- **Interactive Vim Editor**: Full-screen vi/vim editor (`vim file.js`, `:wq` to save and write to local HDFS/Linux storage).
- **Linux Diagnostics**: System monitoring tools (`top`, `ps -ef`, `kill`, `netstat`, `ifconfig`, `ping`).

---

## 🛠️ Quick Start & Command Guide

### 1. Cluster Daemon Management
Before running cluster operations, initialize cluster daemons:
```bash
# Start all cluster daemons (NameNode, DataNodes, ResourceManager)
start-all.sh

# Or start services individually
start-dfs.sh
start-yarn.sh

# Stop all services
stop-all.sh
```

### 2. Basic HDFS File Operations
```bash
# List root HDFS directory
hdfs dfs -ls /

# Create new directory
hdfs dfs -mkdir /data

# Put local file into HDFS
hdfs dfs -put local.txt /data/local.txt

# Inspect file contents
hdfs dfs -cat /data/local.txt
```

### 3. Executing Node.js Scripts
```bash
# Create a JS file in Vim
vim mapper.js

# Execute JS script
node mapper.js

# Evaluate inline JavaScript
node -e "console.log('Hello Hadoop Hacker!')"
```

### 4. Running Hive SQL Queries
```bash
# Interactive Hive query
hive -e "SHOW TABLES"
hive -e "SELECT * FROM sales LIMIT 10"
```

---

## 📖 Built-in Master Documentation (`~/about.txt`)

Complete documentation for all 65+ supported tools is embedded directly inside the Linux user (`Hacker`) home directory:
```bash
# View documentation
cat ~/about.txt

# Or open in Vim
vim ~/about.txt
```

---

## 📂 Project Structure

```text
c:\web/
├── main/
│   ├── index.html         # Ultra-smooth landing page website
│   └── hadoop_logo.jpg    # Custom 3D Vector Hadoop Golden Elephant Logo
├── public/
│   └── hadoop_logo.jpg    # Static logo asset
├── src/
│   ├── App.tsx            # Main React Application entry point
│   ├── core/
│   │   └── backend/       # Simulator backend & HDFS file system
│   ├── shell/
│   │   ├── commands/      # Command registry & 65+ execution handlers
│   │   ├── parser/        # Lexer & parser tokenizers
│   │   └── terminal/      # Autocompletion & terminal utilities
│   ├── ui/
│   │   ├── FullTerminalView.tsx # Full-screen CLI interactive terminal
│   │   └── TerminalWindow.tsx   # Dashboard terminal component
│   └── __tests__/         # Vitest unit test suite (32 files / 83 tests)
├── README.md              # Project documentation
└── package.json           # Dependencies & build scripts
```

---

## 🧪 Automated Test Suite

The simulator is covered by a unit test suite verifying all 65+ subsystems:

```bash
# Run test suite
npm run test
```

```text
 Test Files  32 passed (32)
      Tests  83 passed (83)
   Duration  2.56s
```

---

## 👤 Author & License

- **Developer**: [Niranjan Kumar K](https://github.com/hacker1514)
- **Linux Environment User**: `Hacker` (`/home/Hacker`)
- **GitHub Repository**: [`hacker1514/hadoop`](https://github.com/hacker1514/hadoop)
- **License**: MIT License. See [LICENSE](LICENSE) for details.
