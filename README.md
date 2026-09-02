# Apache Hadoop Enterprise Simulator & Ecosystem (v3.3.0)

<p align="center">
  <img src="./hadoop_logo.jpg" alt="Apache Hadoop Golden Elephant Logo" width="180" style="border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);" />
</p>

<p align="center">
  <b>Architected & Engineered by <a href="https://github.com/hacker1514">Niranjan Kumar K</a></b><br/>
  Deployment URL: <a href="https://hacker1514.github.io/hadoop/">https://hacker1514.github.io/hadoop/</a><br/>
  GitHub Username: <code>hacker1514</code> | Repository: <code>hacker1514/hadoop</code>
</p>

<p align="center">
  <a href="#-key-features"><img src="https://img.shields.io/badge/Hadoop_Version-3.3.0-F59E0B?style=for-the-badge&logo=apache" alt="Hadoop Version"/></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/PySpark-v3.3.0_WASM-3776AB?style=for-the-badge&logo=python" alt="PySpark Version"/></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/Offline_PWA-100%25_Supported-00E5FF?style=for-the-badge&logo=pwa" alt="PWA Support"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-EF4444?style=for-the-badge" alt="License"/></a>
</p>

---

## 📌 Overview

**Apache Hadoop Enterprise Simulator & Practice Laboratory** is a state-of-the-art, 100% client-side big data infrastructure practice platform. It simulates a full-featured Apache Hadoop 3.x cluster inside your web browser—complete with **PySpark v3.3.0 Engine & Interactive REPL (`>>> `)**, **KSQL WebAssembly Database (`>> `)**, **HDFS Distributed Storage**, **YARN Capacity Scheduler**, **MapReduce**, **Vim Editor**, and **Offline PWA Capabilities**.

- **Zero Server Overhead**: 100% Client-Side WebAssembly & React Engine.
- **100% Offline PWA**: Runs anywhere without internet connection via Chrome CacheStorage.
- **PySpark WASM Engine**: Run `pyspark` or `spark` for interactive `>>> ` REPL or `spark-submit app.py`.
- **KSQL WASM Engine**: Run `hive`, `pig`, or `ksql` for interactive `>> ` SQL database REPL with Pig-style `load` / `store`.
- **Terminal Local File I/O**: Use `get` to import host files or `download <file>` to export to host OS.
- **Built-in Master Guide**: Type `about` or `cat /home/Hacker/about.txt` for system documentation.

---

## 🚀 Key Subsystems & Features

### 🐍 1. PySpark v3.3.0 WebAssembly Engine & REPL
- **Interactive PySpark REPL**: Type `pyspark` or `spark` in the main terminal to enter interactive Python REPL (`>>> ` prompt).
- **DataFrame API**: `createDataFrame()`, `show()`, `printSchema()`, `select()`, `filter()`, `where()`, `withColumn()`, `withColumnRenamed()`, `drop()`, `groupBy()`, `count()`, `sum()`, `avg()`, `min()`, `max()`, `sort()`, `orderBy()`, `createOrReplaceTempView()`, `spark.sql()`.
- **DataFrame Readers**: Seamless path resolution for `spark.read.csv("/Hacker/data.csv")` and `spark.read.json("/Hacker/data.json")`.
- **RDD API**: `sc.parallelize()`, `rdd.map()`, `rdd.filter()`, `rdd.flatMap()`, `rdd.reduce()`, `rdd.reduceByKey()`, `rdd.groupByKey()`, `rdd.collect()`, `rdd.count()`.
- **Script Submission**: `spark-submit script.py` executes DAG MapReduce tasks.

### 🗄️ 2. KSQL SQLite WASM Database Engine
- **Interactive Database REPL**: Type `hive`, `pig`, or `ksql` to enter interactive SQL shell (`>> ` prompt).
- **Pig-Style Data Pipelines**:
  - `load 'data.csv' into table_name`
  - `store table_name into 'output.csv'`
  - `save database.db`
- **IndexedDB Persistence**: Automatically preserves tables across browser reloads (`hadoop-lab-db`).

### 📂 3. HDFS Distributed Storage & YARN Compute
- **HDFS Command Suite**: `hdfs dfs` (`-mkdir`, `-put`, `-get`, `-cat`, `-ls`, `-rm`, `-chmod`, `-chown`, `-du`, `-df`, `-touchz`, `-checksum`, `-count`, `-find`).
- **Cluster Diagnostics**: NameNode block reports, `hdfs fsck`, metadata dumps (`hdfs dfsadmin -metasave`), quotas, snapshots, and failovers.
- **YARN Resource Manager**: Application scheduling, container tracking, and logs (`yarn logs -applicationId app_001`).

### 📝 4. Vim Editor & Host Storage I/O
- **In-Terminal Vim**: `vim file.py` or `vi data.txt` opens interactive Vim text editor with `-- INSERT --` mode and `:` command mode (`:wq` to save).
- **Host Import (`get`)**: Type `get` to open host OS file picker and import files directly into terminal storage.
- **Host Export (`download`)**: Type `download filename.csv` to export any terminal file to host OS Downloads folder.

---

## 🛠️ Quick Start Command Guide

```bash
# 1. Start Cluster Services
start-all.sh

# 2. Launch Interactive PySpark REPL Shell
pyspark

# Inside PySpark REPL (>>> prompt):
>>> df = spark.read.json("/Hacker/data.json")
>>> df.show()
>>> df.filter(df.id == 1).show()
>>> exit()

# 3. Launch Interactive KSQL Database Shell
hive

# Inside KSQL REPL (>> prompt):
>> CREATE TABLE users (id INT, name TEXT);
>> INSERT INTO users VALUES (1, 'Niranjan');
>> SELECT * FROM users;
>> store users into 'users.csv';
>> exit

# 4. Local File Storage I/O
get                      # Import file from host OS
download users.csv       # Export file to host OS Downloads
about                    # View system architecture guide
```

---

## 📱 Offline PWA App Installation

1. Open **[https://hacker1514.github.io/hadoop/](https://hacker1514.github.io/hadoop/)** in Chrome / Edge / Brave.
2. Click the **Install Hadoop App** floating banner at the bottom left (or (+) icon in browser address bar).
3. The app will install onto your desktop or mobile home screen, running 100% offline via Chrome CacheStorage.

---

## 👤 Author & License

- **Developer**: [Niranjan Kumar K](https://github.com/hacker1514)
- **Deployment URL**: [https://hacker1514.github.io/hadoop/](https://hacker1514.github.io/hadoop/)
- **GitHub Repository**: [`hacker1514/hadoop`](https://github.com/hacker1514/hadoop)
- **License**: MIT License.
