import { NameNode } from '../../hdfs/namenode/nameNode';
import { ResourceManager } from '../../yarn/resourcemanager/resourceManager';
import { MapReduceEngine } from '../../mapreduce/engine/mapReduceEngine';
import { parseHadoopCommand, ParsedCommand } from '../parser/lexerParser';
import { INodeFile } from '../../core/domain/types';
import { HadoopDB, ShellState } from '../../storage/hadoopDB';
import { PythonEngine, transpilePythonToJS } from '../../ecosystem/python/pythonEngine';


const ABOUT_GUIDE_CONTENT = `================================================================================
           BROWSER-BASED HADOOP SIMULATOR & PRACTICE LABORATORY GUIDE
================================================================================
DEVELOPER     : Niranjan Kumar K
DEPLOYMENT URL: https://hacker1514.github.io/hadoop/
ENVIRONMENT   : Apache Hadoop, PySpark v3.3.0, KSQL SQLite WASM, HDFS & YARN Engine

--------------------------------------------------------------------------------
1. ENTERPRISE ARCHITECTURE & ECOSYSTEM OVERVIEW
--------------------------------------------------------------------------------
- HDFS (Hadoop Distributed File System):
  Fault-tolerant, rack-aware distributed filesystem for storing datasets.
  Full support for hdfs dfs utilities: -mkdir, -put, -get, -cat, -ls, -rm,
  -chmod, -chown, -du, -df, -touchz, -checksum, -count, -find, block reports.

- YARN & MapReduce Engine:
  Distributed resource management framework with Capacity Scheduler.
  Supports MapReduce jobs (yarn jar wordcount.jar) & Hadoop Streaming.

- PySpark v3.3.0 Engine & REPL Shell (Python WebAssembly):
  High-class SparkSession & SparkContext integration running 100% offline.
  DataFrame API: createDataFrame, show(), printSchema(), select(), filter(),
  where(), withColumn(), withColumnRenamed(), drop(), groupBy(), count(), sum(),
  avg(), min(), max(), sort(), orderBy(), createOrReplaceTempView(), spark.sql().
  DataFrame Readers: spark.read.csv(), spark.read.json().
  RDD API: sc.parallelize(), map(), filter(), flatMap(), reduce(), reduceByKey(),
  groupByKey(), collect(), count(), take().
  Interactive Shell: Type pyspark or spark to open >>> prompt.
  Script Execution: spark-submit script.py or python script.py.

- KSQL SQLite WebAssembly Engine:
  Interactive SQL engine (>> prompt) launched via hive, pig, or ksql.
  Pig-style LOAD and STORE/SAVE: load 'file.csv' into table, store table into 'out.csv',
  save database.db. Full IndexedDB persistence across reloads (hadoop-lab-db).

- Terminal Local Storage & Host I/O:
  get                   Import file from local computer OS into terminal directory.
  download <filename>   Export file from terminal directory to computer Downloads folder.
  vim <file>            In-terminal Vim text editor with -- INSERT -- and : commands (:wq to save).

- PWA Offline Capability:
  Chrome CacheStorage precaching for 100% offline usage anywhere.

--------------------------------------------------------------------------------
2. GETTING STARTED (START HADOOP DAEMONS FIRST):
--------------------------------------------------------------------------------
  start-dfs.sh                   Start HDFS daemons (NameNode & DataNodes)
  start-yarn.sh                  Start YARN daemons (ResourceManager & NodeManagers)
  start-all.sh                   Start all Hadoop daemons

--------------------------------------------------------------------------------
3. COMPLETE COMMAND REFERENCE:
--------------------------------------------------------------------------------
[NODE.JS RUNTIME & HADOOP STREAMING MAPREDUCE]
  node -v                       Display Node.js runtime version (v18.16.0)
  node script.js                Execute JavaScript file with full JS Function execution
  node -e "console.log(2+3)"    Evaluate JavaScript code inline
  hadoop jar hadoop-streaming.jar -mapper "node mapper.js" -reducer "node reducer.js" -input /in -output /out

[HADOOP HDFS STORAGE, ERASURE CODING & DISTCP]
  hdfs dfs -ls <path>           List HDFS directory contents
  hdfs dfs -find / -name "*.txt" Search files recursively across HDFS
  hdfs dfs -count /             Count directories, files, and bytes in HDFS
  hdfs fsck /file -files -blocks -locations  Inspect HDFS block IDs & DataNode locations
  hdfs dfsadmin -triggerBlockReport datanode1 Trigger Full Block Report to NameNode
  hdfs dfsadmin -metasave metasave.log Dump NameNode block state to log
  hdfs dfsadmin -refreshNodes   Refresh DataNode membership & Decommissioning list
  hdfs storagepolicies -isSatisfierRunning Check Storage Policy Satisfier daemon state
  hdfs ec -enablePolicy -policy RS-6-3-1024k  Enable Erasure Coding policy
  hdfs ec -disablePolicy -policy RS-6-3-1024k Disable Erasure Coding policy
  hdfs dfs -mkdir -p <path>     Create HDFS directory
  hdfs dfs -put <local> <hdfs>  Upload local file to HDFS
  hdfs dfs -get <hdfs> <local>  Download HDFS file to local Linux space
  hdfs dfs -cat <path>          Print HDFS file content
  hdfs dfs -checksum <path>     Compute file MD5 checksum
  hdfs dfs -stat "%F %u:%g"     Display file metadata
  hdfs dfs -cp <src> <dst>      Copy file within HDFS
  hdfs dfs -mv <src> <dst>      Move/rename file within HDFS
  hdfs dfs -chmod <mode> <path> Change file permissions (e.g. 755)
  hdfs dfs -chown <user> <path> Change file owner
  hdfs dfs -getfacl <path>      Inspect HDFS Access Control List (ACL)
  hdfs dfs -setfacl -m user:alice:rwx <path> Set granular ACL permissions
  hdfs dfs -expunge             Empty HDFS trash (.Trash)
  hadoop distcp hdfs://nn1/src hdfs://nn2/dst Distributed Copy across clusters
  hdfs dfsadmin -setQuota 1000 /Hacker  Set file count quota
  hdfs dfsadmin -setSpaceQuota 10g /Hacker Set storage space quota
  hdfs dfsadmin -saveNamespace  Save NameNode fsimage checkpoint
  hdfs dfsadmin -enterMaintenance datanode1 Graceful DataNode Maintenance window
  hdfs crypto -listZones        Inspect HDFS Encryption Zones
  hdfs crypto -createZone -keyName key1 -path /Hacker/secure  Create KMS Encryption Zone
  hdfs dfs -allowSnapshot <dir> Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1> Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1> Delete HDFS Snapshot
  hdfs fsck /                   Run HDFS File System Check
  hdfs dfsadmin -report         Display DataNode cluster report
  hdfs haadmin -getServiceState nn1   Check NameNode HA State
  hdfs haadmin -failover nn1 nn2      Trigger NameNode HA Failover

[HADOOP YARN COMPUTE, TEZ & KYUUBI]
  hadoop jar wordcount.jar <in> <out>   Submit MapReduce Job
  tez-job.sh --submit dag.xml           Submit Apache Tez DAG job
  yarn application -list                List active YARN applications
  yarn application -kill <appId>        Kill running YARN application
  yarn applicationattempt -list <appId> List YARN application attempts
  yarn container -list <attemptId>      List YARN container allocations
  yarn logs -applicationId <id>        View MapReduce job container logs
  yarn queue -status root.default       Check YARN Capacity Queue Status
  yarn node -list                       List live NodeManagers & container capacity
  yarn node -list -states DECOMMISSIONED List decommissioned nodes
  yarn rmadmin -refreshNodes            Refresh NodeManager membership in YARN
  yarn rmadmin -refreshSuperUserGroupsConfiguration Refresh superuser ACLs
  kyuubi start                          Start Kyuubi Multi-Tenant SQL Gateway

[HIVE & LLAP IN-MEMORY QUERY ACCELERATOR]
  hive -e "SHOW TABLES"
  hive -e "ALTER TABLE sales ADD COLUMNS (country STRING)"
  hive -e "DROP TABLE sales"
  hive --service llap                   Start Hive LLAP In-Memory Cache Daemon
  impala-shell -q "SELECT * FROM sales"
  presto --execute "SELECT * FROM sales"
  pig -e "sales = LOAD '/Hacker/sales.csv' USING PigStorage(','); DUMP sales;"
  phoenix-sqlline -e "SELECT * FROM users"
  nifi.sh start
  zeppelin-daemon.sh start

[HBASE NOSQL SHELL]
  hbase shell
  hbase shell -c "list"
  hbase shell -c "create 'users', 'info'"
  hbase shell -c "put 'users', 'r1', 'info:name', 'Hacker'"
  hbase shell -c "get 'users', 'r1'"
  hbase shell -c "scan 'users'"

[SPARK CONSOLES, SQOOP, KAFKA, FLUME, OOZIE]
  spark-submit --class org.apache.spark.examples.WordCount spark-app.jar /Hacker/in /Hacker/out
  spark-shell                   Interactive Scala REPL for Spark
  pyspark                       Interactive Python REPL for Spark
  sqoop import --table users --target-dir /Hacker/sqoop_users
  kafka-topics.sh --create --topic logs --bootstrap-server localhost:9092
  flume-ng agent --conf-file flume.conf --name a1
  oozie job -config job.properties -run

[SECURITY, NETWORK DIAGNOSTICS & LINUX POWER TOOLS]
  ps -ef                        Display full process listing
  kill -9 <PID> / killall java  Terminate processes or daemons
  ifconfig / ip addr            Display virtual network interface IPs
  ping <node>                   Test network latency across DataNodes
  netstat -tuln                 Display open Hadoop listening ports (9000, 8088, 9870, 2181)
  ranger policy -list           Inspect Ranger authorization policies
  kinit Hacker@HADOOP.LOCAL     Acquire Kerberos authentication ticket
  klist                         Inspect active Kerberos tickets
  kdestroy                      Destroy Kerberos tickets
  ls, pwd, cd, mkdir, echo, cat, touch, rm, whoami
  grep <pattern> <file>         Search text in local files
  sort <file> / uniq <file>     Sort lines & count unique lines
  wc -l <file>                  Count lines/words/chars
  head / tail <file>            Display start/end of file
  top                           Display Linux process monitor
  df -h                         Display Linux filesystem disk usage
  free -m                       Display system RAM memory stats
  uname -a                      Display system kernel architecture
  history                       Display command history
  vim <file> / vi <file>        Open interactive Vim text editor (:wq to save & exit)
  clear                         Clear terminal screen
================================================================================`;

const CORE_SITE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>fs.defaultFS</name>
        <value>hdfs://localhost:9000</value>
        <description>NameNode URI for HDFS cluster default filesystem.</description>
    </property>
    <property>
        <name>hadoop.tmp.dir</name>
        <value>/tmp/hadoop-\${user.name}</value>
        <description>Base directory for temporary simulated storage files.</description>
    </property>
    <property>
        <name>io.file.buffer.size</name>
        <value>131072</value>
        <description>Buffer size used in sequence files (128 KB).</description>
    </property>
    <property>
        <name>hadoop.security.authentication</name>
        <value>simple</value>
        <description>Authentication mechanism: simple or kerberos.</description>
    </property>
    <property>
        <name>hadoop.security.authorization</name>
        <value>true</value>
        <description>Enable Service Level Authorization in Hadoop.</description>
    </property>
</configuration>`;

const HDFS_SITE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>dfs.replication</name>
        <value>3</value>
        <description>Default HDFS block replication factor across DataNodes.</description>
    </property>
    <property>
        <name>dfs.blocksize</name>
        <value>134217728</value>
        <description>Default HDFS block size in bytes (128 MB).</description>
    </property>
    <property>
        <name>dfs.namenode.name.dir</name>
        <value>file:///var/hadoop/dfs/name</value>
        <description>Local filesystem path where NameNode stores fsimage &amp; edits log.</description>
    </property>
    <property>
        <name>dfs.datanode.data.dir</name>
        <value>file:///var/hadoop/dfs/data</value>
        <description>Local filesystem directory where DataNodes store blocks.</description>
    </property>
    <property>
        <name>dfs.permissions.enabled</name>
        <value>true</value>
        <description>Enable POSIX file permissions checking in HDFS.</description>
    </property>
    <property>
        <name>dfs.namenode.servicerpc-address</name>
        <value>localhost:8021</value>
        <description>NameNode Service RPC listener port.</description>
    </property>
    <property>
        <name>dfs.namenode.http-address</name>
        <value>localhost:9870</value>
        <description>NameNode Web UI HTTP address.</description>
    </property>
</configuration>`;

const MAPRED_SITE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
        <description>Execution framework set to YARN (instead of local/classic).</description>
    </property>
    <property>
        <name>mapreduce.application.classpath</name>
        <value>$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/*:$HADOOP_MAPRED_HOME/share/hadoop/mapreduce/lib/*</value>
        <description>Class path for MapReduce applications.</description>
    </property>
    <property>
        <name>mapreduce.map.memory.mb</name>
        <value>1024</value>
        <description>Amount of memory allocated for each Map task container.</description>
    </property>
    <property>
        <name>mapreduce.reduce.memory.mb</name>
        <value>2048</value>
        <description>Amount of memory allocated for each Reduce task container.</description>
    </property>
    <property>
        <name>mapreduce.jobhistory.address</name>
        <value>localhost:10020</value>
        <description>MapReduce JobHistory Server IPC address.</description>
    </property>
</configuration>`;

const YARN_SITE_XML = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>
<configuration>
    <property>
        <name>yarn.resourcemanager.hostname</name>
        <value>localhost</value>
        <description>Hostname of the YARN ResourceManager daemon.</description>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value>
        <description>Auxiliary service required for MapReduce shuffle phase.</description>
    </property>
    <property>
        <name>yarn.nodemanager.aux-services.mapreduce_shuffle.class</name>
        <value>org.apache.hadoop.mapred.ShuffleHandler</value>
    </property>
    <property>
        <name>yarn.nodemanager.resource.memory-mb</name>
        <value>8192</value>
        <description>Total physical RAM (in MB) allocated to containers on NodeManager.</description>
    </property>
    <property>
        <name>yarn.nodemanager.resource.cpu-vcores</name>
        <value>8</value>
        <description>Total CPU virtual cores allocated to containers on NodeManager.</description>
    </property>
    <property>
        <name>yarn.resourcemanager.scheduler.class</name>
        <value>org.apache.hadoop.yarn.server.resourcemanager.scheduler.capacity.CapacityScheduler</value>
        <description>YARN Pluggable Scheduler class.</description>
    </property>
</configuration>`;

export class HadoopShellExecutor {
  private nameNode: NameNode;
  public resourceManager: ResourceManager;
  private mapReduceEngine: MapReduceEngine;
  private pythonEngine: PythonEngine;
  private db: HadoopDB;

  private isHDFSStarted: boolean = false;
  private isYARNStarted: boolean = false;
  private kerberosTicket: string | null = null;
  private activeNameNodeId: string = 'nn1';

  private storagePolicies: Map<string, string> = new Map();
  private ecPolicies: Map<string, string> = new Map();
  private cacheDirectives: Map<string, string> = new Map();
  private snapshots: Map<string, Set<string>> = new Map();
  private acls: Map<string, string[]> = new Map();
  private cryptoZones: Map<string, string> = new Map();
  private fileQuotas: Map<string, number> = new Map();
  private spaceQuotas: Map<string, string> = new Map();

  private historyList: string[] = [];
  private isNameNodeFormatted: boolean = false;

  private localDir: string = '/home/Hacker';
  private localFiles: Map<string, string> = new Map([
    ['/home/Hacker/about.txt', ABOUT_GUIDE_CONTENT],
    ['/etc/hadoop/core-site.xml', CORE_SITE_XML],
    ['/etc/hadoop/hdfs-site.xml', HDFS_SITE_XML],
    ['/etc/hadoop/mapred-site.xml', MAPRED_SITE_XML],
    ['/etc/hadoop/yarn-site.xml', YARN_SITE_XML],
    ['/home/Hacker/hadoop/etc/hadoop/core-site.xml', CORE_SITE_XML],
    ['/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml', HDFS_SITE_XML],
    ['/home/Hacker/hadoop/etc/hadoop/mapred-site.xml', MAPRED_SITE_XML],
    ['/home/Hacker/hadoop/etc/hadoop/yarn-site.xml', YARN_SITE_XML]
  ]);
  private localDirs: Set<string> = new Set([
    '/',
    '/etc',
    '/etc/hadoop',
    '/home',
    '/home/Hacker',
    '/home/Hacker/hadoop',
    '/home/Hacker/hadoop/etc',
    '/home/Hacker/hadoop/etc/hadoop'
  ]);

  private cachedStorageUsage: number = 0;
  private cachedStorageQuota: number = 0;

  constructor(nameNode: NameNode, resourceManager: ResourceManager, mapReduceEngine: MapReduceEngine, db: HadoopDB) {
    this.nameNode = nameNode;
    this.resourceManager = resourceManager;
    this.mapReduceEngine = mapReduceEngine;
    this.pythonEngine = new PythonEngine();
    this.db = db;
    this.startStorageRefresh();
  }

  private startStorageRefresh(): void {
    const refresh = () => {
      this.db.getStorageEstimate().then(({ usageBytes, quotaBytes }) => {
        this.cachedStorageUsage = usageBytes;
        this.cachedStorageQuota = quotaBytes;
      });
    };
    refresh();
    setInterval(refresh, 30000);
  }

  public async executePySparkRepl(line: string): Promise<string> {
    const res = await this.pythonEngine.runPySparkReplLine(
      line,
      this.localFiles,
      (path, content) => this.saveLocalFileContent(path, content)
    );
    if (res.stderr) {
      return res.stdout ? `${res.stdout}\n${res.stderr}` : res.stderr;
    }
    return res.stdout;
  }

  public async loadFromDB(): Promise<void> {
    await this.db.waitReady();

    const savedFiles = await this.db.loadAllLocalFiles();
    if (savedFiles.size > 0) {
      this.localFiles = savedFiles;
    }

    // Clean XML files from home directory /home/Hacker/
    const homeXmls = [
      '/home/Hacker/core-site.xml',
      '/home/Hacker/hdfs-site.xml',
      '/home/Hacker/mapred-site.xml',
      '/home/Hacker/yarn-site.xml'
    ];
    for (const xmlPath of homeXmls) {
      if (this.localFiles.has(xmlPath)) {
        this.localFiles.delete(xmlPath);
        await this.db.deleteLocalFile(xmlPath);
      }
    }

    const defaultConfigs: [string, string][] = [
      ['/home/Hacker/about.txt', ABOUT_GUIDE_CONTENT],
      ['/etc/hadoop/core-site.xml', CORE_SITE_XML],
      ['/etc/hadoop/hdfs-site.xml', HDFS_SITE_XML],
      ['/etc/hadoop/mapred-site.xml', MAPRED_SITE_XML],
      ['/etc/hadoop/yarn-site.xml', YARN_SITE_XML],
      ['/home/Hacker/hadoop/etc/hadoop/core-site.xml', CORE_SITE_XML],
      ['/home/Hacker/hadoop/etc/hadoop/hdfs-site.xml', HDFS_SITE_XML],
      ['/home/Hacker/hadoop/etc/hadoop/mapred-site.xml', MAPRED_SITE_XML],
      ['/home/Hacker/hadoop/etc/hadoop/yarn-site.xml', YARN_SITE_XML]
    ];

    for (const [pathKey, defaultContent] of defaultConfigs) {
      if (!this.localFiles.has(pathKey)) {
        this.localFiles.set(pathKey, defaultContent);
      }
    }

    const savedDirs = await this.db.loadAllLocalDirs();
    if (savedDirs.size > 0) {
      this.localDirs = savedDirs;
    }

    const defaultDirectories = [
      '/',
      '/etc',
      '/etc/hadoop',
      '/home',
      '/home/Hacker',
      '/home/Hacker/hadoop',
      '/home/Hacker/hadoop/etc',
      '/home/Hacker/hadoop/etc/hadoop'
    ];
    for (const dirKey of defaultDirectories) {
      this.localDirs.add(dirKey);
    }

    const savedHistory = await this.db.loadCommandHistory();
    if (savedHistory.length > 0) {
      this.historyList = savedHistory;
    }

    const savedState = await this.db.loadShellState();
    if (savedState) {
      this.isHDFSStarted = savedState.isHDFSStarted;
      this.isYARNStarted = savedState.isYARNStarted;
      this.isNameNodeFormatted = savedState.isNameNodeFormatted ?? false;
      this.localDir = savedState.localDir;
      this.kerberosTicket = savedState.kerberosTicket;
      this.activeNameNodeId = savedState.activeNameNodeId;
    }

    const savedHdfsFiles = await this.db.loadAllHdfsFileContents();
    if (savedHdfsFiles.size > 0) {
      savedHdfsFiles.forEach((content, hdfsPath) => {
        try {
          if (content === '__HADOOP_DIR__') {
            this.nameNode.getNamespace().mkdir(hdfsPath, true);
          } else {
            this.nameNode.createAndWriteFile(hdfsPath, content);
          }
        } catch {
        }
      });
    }
  }



  private persistShellState(): void {
    const state: ShellState = {
      isHDFSStarted: this.isHDFSStarted,
      isYARNStarted: this.isYARNStarted,
      isNameNodeFormatted: this.isNameNodeFormatted,
      localDir: this.localDir,
      kerberosTicket: this.kerberosTicket,
      activeNameNodeId: this.activeNameNodeId
    };
    this.db.saveShellState(state);
  }



  public getWorkingDirDisplay(): string {
    if (this.localDir === '/home/Hacker') return '~';
    if (this.localDir.startsWith('/home/Hacker/')) {
      return '~/' + this.localDir.substring('/home/Hacker/'.length);
    }
    return this.localDir;
  }

  public getLocalFileContent(pathStr: string): string | undefined {
    const resolved = this.resolveLocalPath(pathStr);
    return this.localFiles.get(resolved);
  }

  public saveLocalFileContent(pathStr: string, content: string): void {
    const resolved = this.resolveLocalPath(pathStr);
    this.localFiles.set(resolved, content);
    this.db.saveLocalFile(resolved, content);
  }

  public execute(commandLine: string): string {
    const trimmed = commandLine.trim();
    if (trimmed.startsWith('#')) {
      return '';
    }

    if (trimmed) {
      this.historyList.push(trimmed);
      this.db.saveCommandHistory(this.historyList);
    }

    const cmd = parseHadoopCommand(commandLine);
    if (cmd.utility === 'comment') {
      return '';
    }

    
    if (trimmed.startsWith('hive --service llap')) {
      return `[Hive LLAP Engine] Initializing Long-Lived Process Daemons...
[LLAP Daemon] Allocated 16GB off-heap memory cache across NodeManagers.
✓ Hive LLAP Service Active (Low-latency in-memory SQL execution ready).`;
    }

    
    if (trimmed.startsWith('spark-shell')) {
      if (!this.isYARNStarted) return `Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.`;
      return `Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn, app id = app_${Date.now()}_0010).
SparkSession available as 'spark'.
Using Scala version 2.12.15 (Java HotSpot(TM) 64-Bit Server VM, Java 1.8.0_311)
scala> val textFile = spark.read.text("/Hacker/about.txt")
textFile: org.apache.spark.sql.DataFrame = [value: string]
scala> textFile.count()
res0: Long = 125`;
    }

    
    if (trimmed.startsWith('pyspark')) {
      if (!this.isYARNStarted) return `Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.`;
      return `Welcome to
      ____              __
     / __/__  ___ _____/ /__
    _\\ \\/ _ \\/ _ \`/ __/  '_/
   /__ / .__/\\_,_/_/ /_/\\_\\   version 3.3.0
      /_/

Using Python version 3.9.7
Spark context Web UI available at http://localhost:4040
Spark context available as 'sc' (master = yarn).
SparkSession available as 'spark'.
>>> df = spark.read.json("/Hacker/data.json")
>>> df.show()
+----+--------+
| id |   name |
+----+--------+
|  1 | Hacker |
+----+--------+`;
    }

    
    if (trimmed.startsWith('kyuubi')) {
      return `[Apache Kyuubi SQL Gateway] Server starting on thrift server port 10009...
✓ Kyuubi Server active (Engine: Spark SQL, Multi-tenant Session Isolation Enabled).`;
    }

    
    if (trimmed.startsWith('impala-shell')) {
      return `[Impala Shell v3.4.0] Connected to impalad at localhost:21000
Query: SELECT * FROM sales
+----+--------+---------+--------+
| id | region | product | amount |
+----+--------+---------+--------+
| 1  | North  | Laptop  | 1200.0 |
| 2  | South  | Phone   | 800.0  |
+----+--------+---------+--------+
Fetched 2 row(s) in 0.015s`;
    }

    
    if (trimmed.startsWith('nifi.sh')) {
      return `[Apache NiFi Flow Engine] Starting Flow Controller...
✓ NiFi Web UI initialized on https://localhost:8443/nifi (Active Flow Processors: 12).`;
    }

    
    if (trimmed.startsWith('zeppelin-daemon.sh')) {
      return `[Zeppelin Notebook Server] Starting Web UI server on http://localhost:8080...
✓ Zeppelin Daemon started successfully (Interpreters: Spark, Hive, Shell, Presto active).`;
    }

    
    if (trimmed.startsWith('tez-job.sh') || trimmed.startsWith('tez')) {
      if (!this.isYARNStarted) return `Tez Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.`;
      return `[Apache Tez Engine] Compiling DAG (Vertices: 3, Edges: 2)...
[Tez DAG Client] Submitting ApplicationToYARN (AppID: application_${Date.now()}_0009)
[Tez Task Scheduler] Memory-pipelined data transfers active between vertices.
✓ Tez DAG Execution Succeeded. Bypassed intermediate HDFS disk writes.`;
    }

    
    if (trimmed.startsWith('phoenix-sqlline')) {
      return `Building JDBC Connection to HBase Zookeeper [localhost:2181]...
Connected to: Phoenix (version 5.1)
1/1          SELECT * FROM users;
+-------+-------+
| NAME  | ROLE  |
+-------+-------+
| Hacker| Admin |
+-------+-------+
1 row selected (0.042 seconds)`;
    }

    
    if (trimmed.startsWith('presto') || trimmed.startsWith('trino')) {
      return `Presto/Trino Distributed Engine:
id   region   product   amount
------------------------------
1    North    Laptop    1200.0
2    South    Phone     800.0
Query 20260825_0001, FINISHED, 4 nodes`;
    }



    
    if (trimmed.startsWith('ranger policy')) {
      return `Apache Ranger Security Policies:
  ID   Resource               Service   Permission   Users
  1    /Hacker/*              HDFS      rwx          Hacker, alice
  2    default.sales          Hive      select       Hacker, analytics_team
  3    users                  HBase     read, write  Hacker`;
    }

    
    if (trimmed.startsWith('kafka-topics.sh')) {
      return `Created topic logs on Kafka cluster [localhost:9092] (Partitions: 3, ReplicationFactor: 2)`;
    }

    
    if (trimmed.startsWith('flume-ng')) {
      if (!this.isHDFSStarted) return `Flume Error: Cannot ingest stream. HDFS NameNode is STOPPED. Run 'start-dfs.sh'.`;
      return `[Flume Agent a1] Ingesting event stream -> HDFS sink (/Hacker/flume_stream)
✓ Stream Event Sink active (Ingested 500 events/sec into HDFS).`;
    }

    
    if (trimmed.startsWith('oozie job')) {
      if (!this.isYARNStarted) return `Oozie Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh'.`;
      return `Job ID: 0000001-${Date.now()}-oozie-oozi-W
[Oozie DAG Engine] Workflow started: Fork Node -> MapReduce -> Hive Action -> Join Node
✓ Workflow status: SUCCEEDED`;
    }

    
    if (trimmed.startsWith('kinit')) {
      const principal = trimmed.split(/\s+/)[1] || 'Hacker@HADOOP.LOCAL';
      this.kerberosTicket = principal;
      return `Password for ${principal}: ********
✓ Ticket grant received for principal ${principal} (Valid for 24h).`;
    }

    if (trimmed === 'klist') {
      if (!this.kerberosTicket) return `klist: No credentials cache found`;
      return `Ticket cache: FILE:/tmp/krb5cc_1000
Default principal: ${this.kerberosTicket}

Valid starting       Expires              Service principal
${new Date().toISOString()}  ${new Date(Date.now() + 86400000).toISOString()}  krbtgt/HADOOP.LOCAL@HADOOP.LOCAL`;
    }

    if (trimmed === 'kdestroy') {
      this.kerberosTicket = null;
      return `✓ Kerberos ticket cache destroyed.`;
    }

    
    
    if (trimmed.startsWith('spark-submit')) {
      if (!this.isYARNStarted) {
        return `Spark Error: YARN ResourceManager is STOPPED. Run 'start-yarn.sh' to start YARN.`;
      }
      return `[SparkSubmit] Submitting application to YARN cluster...
[YARN Client] Application ID: application_${Date.now()}_0002
[Spark Engine] Initialized SparkContext on YARN cluster (vCores: 4, Executing RDD Transformations)
✓ Spark Job Executed Successfully. Output written to HDFS.`;
    }

    
    if (trimmed.startsWith('sqoop import')) {
      if (!this.isHDFSStarted) {
        return `Sqoop Error: HDFS NameNode is STOPPED. Run 'start-dfs.sh' to start HDFS.`;
      }
      return `[Sqoop Importer] Connecting to Relational Database (RDBMS)...
[Sqoop Importer] Extracting database schema...
[MapReduce Engine] Map-only job started to import records into HDFS
✓ Sqoop Import Complete. Imported 1,000 records into HDFS target directory.`;
    }

    if (cmd.utility === 'clear') return '__CLEAR__';
    if (cmd.utility === 'unknown') {
      return `Command not recognized: '${commandLine}'. Type help for available commands.`;
    }

    if (cmd.utility === 'help') {
      return this.getGeneralHelpText();
    }

    if (cmd.utility === 'script') {
      return this.executeScriptCommand(cmd);
    }

    if (cmd.utility === 'linux') {
      return this.executeLinuxCommand(cmd);
    }

    
    if (cmd.utility === 'hdfs') {
      const isFormatCmd = cmd.subcommand === 'namenode' || cmd.flags.has('-format') || cmd.action === '-format' || cmd.positionalArgs.includes('-format');
      if (!this.isHDFSStarted && !isFormatCmd) {
        return `ls: Cannot connect to NameNode at localhost:9000. Connection refused.
Hadoop HDFS services are currently STOPPED.
Run 'start-dfs.sh' or 'start-all.sh' to start NameNode & DataNodes.`;
      }
      return this.executeHDFSCommand(cmd);
    }

    if (cmd.utility === 'hadoop') {
      if (!this.isYARNStarted) {
        return `Unable to connect to ResourceManager at localhost:8088. Connection refused.
Hadoop YARN services are currently STOPPED.
Run 'start-yarn.sh' or 'start-all.sh' to start YARN services.`;
      }
      return this.executeHadoopCommand(cmd);
    }

    if (cmd.utility === 'yarn') {
      if (!this.isYARNStarted) {
        return `Unable to connect to ResourceManager at localhost:8088. Connection refused.
Hadoop YARN services are currently STOPPED.
Run 'start-yarn.sh' or 'start-all.sh' to start YARN services.`;
      }
      return this.executeYARNCommand(cmd);
    }

    return `Unsupported command: ${commandLine}`;
  }

  private executeScriptCommand(cmd: ParsedCommand): string {
    const act = cmd.action || '';

    if (act.startsWith('start-dfs')) {
      if (!this.isNameNodeFormatted) {
        return `Error: NameNode is not formatted! Please run 'hdfs namenode -format' first.`;
      }
      this.isHDFSStarted = true;
      this.persistShellState();
      return `Starting namenodes on [localhost]
Starting datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Starting secondary namenodes [localhost]
✓ HDFS daemons initialized successfully (NameNode: ACTIVE, DataNodes: 3/3 LIVE).`;
    }

    if (act.startsWith('stop-dfs')) {
      this.isHDFSStarted = false;
      this.persistShellState();
      return `Stopping datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Stopping namenodes on [localhost]
Stopping secondary namenodes [localhost]
✓ HDFS daemons stopped cleanly.`;
    }

    if (act.startsWith('start-yarn')) {
      this.isYARNStarted = true;
      this.persistShellState();
      return `Starting resourcemanager on [localhost]
Starting nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
✓ YARN Capacity Scheduler daemons initialized successfully.`;
    }

    if (act.startsWith('stop-yarn')) {
      this.isYARNStarted = false;
      this.persistShellState();
      return `Stopping nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Stopping resourcemanager on [localhost]
✓ YARN daemons stopped cleanly.`;
    }

    if (act.startsWith('start-all')) {
      if (!this.isNameNodeFormatted) {
        return `Error: NameNode is not formatted! Please run 'hdfs namenode -format' first.`;
      }
      this.isHDFSStarted = true;
      this.isYARNStarted = true;
      this.persistShellState();
      return `Starting HDFS & YARN services...
Starting namenodes on [localhost]
Starting datanodes on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
Starting resourcemanager on [localhost]
Starting nodemanagers on [datanode1.hadoop.local, datanode2.hadoop.local, datanode3.hadoop.local]
✓ All Hadoop cluster daemons started successfully.`;
    }

    if (act.startsWith('stop-all')) {
      this.isHDFSStarted = false;
      this.isYARNStarted = false;
      this.persistShellState();
      return `Stopping all Hadoop cluster daemons...
Stopping nodemanagers & resourcemanager...
Stopping datanodes & namenode...
✓ All Hadoop cluster daemons stopped.`;
    }

    return `Script execution complete: ${act}`;
  }

  private executeLinuxCommand(cmd: ParsedCommand): string {
    const act = cmd.action || '';
    const args = cmd.positionalArgs;

    if (act === 'node') {
      if (args.length === 0) {
        return `Welcome to Node.js v18.16.0.
Type ".help" for more information.
> console.log("Hadoop Polyglot Node.js Engine Active");
Hadoop Polyglot Node.js Engine Active
undefined
> `;
      }

      if (args[0] === '-v' || args[0] === '--version') {
        return `v18.16.0`;
      }

      let codeToRun = '';
      if (args[0] === '-e' || args[0] === '--eval') {
        codeToRun = args.slice(1).join(' ').replace(/^["']|["']$/g, '');
      } else {
        const scriptFile = args[0];
        const resolved = this.resolveLocalPath(scriptFile);
        const content = this.getLocalFileContent(resolved);
        if (content !== undefined) {
          codeToRun = content;
        } else {
          return `node: internal/modules/cjs/loader:1080 throw err; Cannot find module '${scriptFile}'`;
        }
      }

      
      const logs: string[] = [];
      const customConsole = {
        log: (...logArgs: any[]) => logs.push(logArgs.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ')),
        error: (...logArgs: any[]) => logs.push(logArgs.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ')),
        warn: (...logArgs: any[]) => logs.push(logArgs.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' '))
      };

      try {
        const fn = new Function('console', codeToRun);
        fn(customConsole);
        return logs.length > 0 ? logs.join('\n') : '';
      } catch (err: any) {
        return `Uncaught ${err.name || 'Error'}: ${err.message}`;
      }
    }

    if (act === 'hive' || act === 'pig') {
      return '__LAUNCH_KSQL__';
    }

    if (act === 'download') {
      if (args.length === 0) {
        return `Usage: download <filename.ext>`;
      }
      const targetFile = args[0];
      return `__DOWNLOAD_FILE__:${targetFile}`;
    }

    if (act === 'about') {
      return ABOUT_GUIDE_CONTENT;
    }

    if (act === 'get') {
      return '__GET_FILE__';
    }

    if (act === 'jps') {
      const processList: string[] = [];
      if (this.isHDFSStarted) {
        processList.push('18291 NameNode');
        processList.push('18420 DataNode');
        processList.push('18590 SecondaryNameNode');
      }
      if (this.isYARNStarted) {
        processList.push('19842 ResourceManager');
        processList.push('20115 NodeManager');
      }
      processList.push('21045 Jps');
      return processList.join('\n');
    }

    if (act === 'pyspark' || act === 'spark' || act === 'spark-shell') {
      if (args.length > 0) {
        return this.executeLinuxCommand({
          raw: `python ${args.join(' ')}`,
          utility: 'linux',
          action: 'python',
          flags: new Set(),
          positionalArgs: args
        });
      }
      return '__LAUNCH_PYSPARK__';
    }

    if (act === 'spark-submit') {
      if (args.length === 0) {
        return `Usage: spark-submit [options] <app.py> [app arguments]`;
      }
      const scriptFile = args.find((a) => a.endsWith('.py')) || args[args.length - 1];
      const result = this.executeLinuxCommand({
        raw: `python ${scriptFile}`,
        utility: 'linux',
        action: 'python',
        flags: new Set(),
        positionalArgs: [scriptFile]
      });
      return `[Spark DAG Scheduler] Submitting PySpark Job to Cluster...
[Spark DAG Scheduler] Stage 0: MapReduce Pipeline Completed.
[Spark DAG Scheduler] Job 0 finished in 0.42s

${result}`;
    }

    if (act === 'python' || act === 'python3') {
      this.pythonEngine.initPyodide();

      if (args.length === 0) {
        return `python: missing file operand. Usage: python <script.py> [args...]`;
      }

      if (args[0] === '-v' || args[0] === '--version' || args[0] === '-V') {
        return `Python 3.11.3 (Pyodide WebAssembly Engine)`;
      }

      let codeToRun = '';
      const suppliedInputs: string[] = [];

      if (args[0] === '-c') {
        codeToRun = args.slice(1).join(' ').replace(/^["']|["']$/g, '');
      } else {
        const scriptFile = args[0];
        const resolved = this.resolveLocalPath(scriptFile);
        const content = this.getLocalFileContent(resolved);
        if (content !== undefined) {
          codeToRun = content;
          if (args.length > 1) {
            suppliedInputs.push(...args.slice(1));
          }
        } else if (scriptFile.endsWith('.py')) {
          return `python: can't open file '${scriptFile}': [Errno 2] No such file or directory`;
        } else {
          codeToRun = args.join(' ').replace(/^["']|["']$/g, '');
        }
      }

      return this.executePython(codeToRun, suppliedInputs);
    }

    if (act === 'ps') {
      return `UID        PID  PPID  C STIME TTY          TIME CMD
Hacker    1042     1  1 13:00 ?        00:14:22 java -Dproc_namenode org.apache.hadoop.hdfs.server.namenode.NameNode
Hacker    1150     1  0 13:00 ?        00:09:45 java -Dproc_resourcemanager org.apache.hadoop.yarn.server.resourcemanager.ResourceManager
Hacker    1280     1  0 13:00 ?        00:05:12 java -Dproc_datanode org.apache.hadoop.hdfs.server.datanode.DataNode
Hacker    1310     1  0 13:00 ?        00:02:10 java org.apache.hive.service.server.HiveServer2`;
    }

    if (act === 'kill') {
      const pidArg = args[args.length - 1] || '1042';
      return `✓ Process ${pidArg} terminated.`;
    }

    if (act === 'killall') {
      const procName = args[0] || 'java';
      return `✓ All ${procName} processes terminated.`;
    }

    if (act === 'ifconfig' || act === 'ip') {
      return `eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.1.100  netmask 255.255.255.0  broadcast 192.168.1.255
        inet6 fe80::a00:27ff:fe4e:66a1  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:4e:66:a1  txqueuelen 1000  (Ethernet)

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0`;
    }

    if (act === 'ping') {
      const nodeHost = args[0] || 'datanode1.hadoop.local';
      return `PING ${nodeHost} (192.168.1.101) 56(84) bytes of data.
64 bytes from ${nodeHost}: icmp_seq=1 ttl=64 time=0.142 ms
64 bytes from ${nodeHost}: icmp_seq=2 ttl=64 time=0.118 ms
--- ${nodeHost} ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1001ms
rtt min/avg/max/mdev = 0.118/0.130/0.142/0.012 ms`;
    }

    if (act === 'netstat') {
      return `Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name
tcp        0      0 0.0.0.0:9000            0.0.0.0:*               LISTEN      1042/java (NameNode)
tcp        0      0 0.0.0.0:8088            0.0.0.0:*               LISTEN      1150/java (ResourceManager)
tcp        0      0 0.0.0.0:9870            0.0.0.0:*               LISTEN      1042/java (NameNode Web UI)
tcp        0      0 0.0.0.0:2181            0.0.0.0:*               LISTEN      990/java (ZooKeeper)
tcp        0      0 0.0.0.0:10000           0.0.0.0:*               LISTEN      1310/java (Hive Server2)`;
    }

    if (act === 'top') {
      return `top - 13:16:00 up 42 days,  3:14,  1 user,  load average: 0.12, 0.08, 0.05
Tasks: 180 total,   1 running, 179 sleeping,   0 stopped,   0 zombie
%Cpu(s):  2.4 us,  1.2 sy,  0.0 ni, 96.1 id,  0.3 wa,  0.0 hi,  0.0 si,  0.0 st
MiB Mem :  16384.0 total,   4096.0 free,   8192.0 used,   4096.0 buff/cache
MiB Swap:   2048.0 total,   2048.0 free,      0.0 used.   7168.0 avail Mem

  PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND
 1042 Hacker    20   0 4892100 812400 120400 S   1.8   5.0  14:22.10 java (NameNode)
 1150 Hacker    20   0 3120400 512000  98000 S   1.2   3.1   9:45.30 java (ResourceManager)
 1280 Hacker    20   0 2400100 412000  85000 S   0.8   2.5   5:12.10 java (DataNode)`;
    }

    if (act === 'df') {
      const usedMB = (this.cachedStorageUsage / (1024 * 1024)).toFixed(1);
      const quotaMB = (this.cachedStorageQuota / (1024 * 1024)).toFixed(1);
      const availMB = ((this.cachedStorageQuota - this.cachedStorageUsage) / (1024 * 1024)).toFixed(1);
      const usePct = this.cachedStorageQuota > 0
        ? ((this.cachedStorageUsage / this.cachedStorageQuota) * 100).toFixed(0)
        : '0';
      return `Filesystem               Size      Used     Avail    Use%  Mounted on
hadoop-lab (IndexedDB)   ${quotaMB}M    ${usedMB}M    ${availMB}M   ${usePct}%   /
SW Cache                 ${(this.cachedStorageUsage * 0.3 / (1024*1024)).toFixed(1)}M    ${(this.cachedStorageUsage * 0.3 / (1024*1024)).toFixed(1)}M    0.0M  100%   /sw-cache`;
    }



    if (act === 'free') {
      return `               total        used        free      shared  buff/cache   available
Mem:           16384        8192        4096         256        4096        7168
Swap:           2048           0        2048`;
    }

    if (act === 'uname') {
      return `Linux hadoop.local 5.15.0-88-generic #98-Ubuntu SMP Mon Oct 2 15:18:56 UTC 2026 x86_64 x86_64 x86_64 GNU/Linux`;
    }

    if (act === 'pwd') {
      return this.localDir;
    }

    if (act === 'whoami') {
      return 'Hacker';
    }

    if (act === 'history') {
      return this.historyList.map((c, i) => ` ${(i + 1).toString().padStart(4)}  ${c}`).join('\n');
    }

    if (act === 'cd') {
      const target = args[0] || '/home/Hacker';
      const resolved = this.resolveLocalPath(target);
      if (this.localDirs.has(resolved)) {
        this.localDir = resolved;
        this.persistShellState();
        return '';
      }
      return `cd: no such file or directory: ${target}`;
    }

    if (act === 'mkdir') {
      if (args.length === 0) return 'mkdir: missing operand';
      const target = this.resolveLocalPath(args[0]);
      this.localDirs.add(target);
      this.db.saveLocalDir(target);
      return `✓ Created local directory: ${target}`;
    }

    if (act === 'touch') {
      if (args.length === 0) return 'touch: missing file operand';
      const target = this.resolveLocalPath(args[0]);
      if (!this.localFiles.has(target)) {
        this.localFiles.set(target, '');
        this.db.saveLocalFile(target, '');
      }
      return '';
    }

    if (act === 'echo') {
      const line = cmd.raw.substring(cmd.raw.indexOf('echo') + 4).trim();
      if (line.includes('>')) {
        const parts = line.split('>');
        const text = parts[0].replace(/^["']|["']$/g, '').replace(/\\n/g, '\n').replace(/\\t/g, '    ').trim();
        const fileTarget = this.resolveLocalPath(parts[1].trim());
        this.saveLocalFileContent(fileTarget, text + '\n');
        return `✓ Written to local file: ${parts[1].trim()}`;
      }
      return line.replace(/^["']|["']$/g, '').replace(/\\n/g, '\n').replace(/\\t/g, '    ');
    }

    if (act === 'cat') {
      if (args.length === 0) return 'cat: missing file operand';
      const target = this.resolveLocalPath(args[0]);
      const content = this.getLocalFileContent(target);
      if (content !== undefined) {
        return content;
      }
      return `cat: ${args[0]}: No such file or directory`;
    }

    if (act === 'grep') {
      if (args.length < 2) return `grep: Usage: grep <pattern> <file>`;
      const pattern = args[0];
      const target = this.resolveLocalPath(args[1]);
      const content = this.getLocalFileContent(target);
      if (content === undefined) return `grep: ${args[1]}: No such file or directory`;

      const matches = content.split('\n').filter((l) => l.toLowerCase().includes(pattern.toLowerCase()));
      return matches.length > 0 ? matches.join('\n') : '';
    }

    if (act === 'wc') {
      if (args.length === 0) return `wc: missing file operand`;
      const target = this.resolveLocalPath(args[args.length - 1]);
      const content = this.getLocalFileContent(target);
      if (content === undefined) return `wc: ${args[args.length - 1]}: No such file or directory`;

      const lines = content.split('\n').length - (content.endsWith('\n') ? 1 : 0);
      const words = content.trim().split(/\s+/).filter(Boolean).length;
      const chars = content.length;
      return `${lines.toString().padStart(6)} ${words.toString().padStart(6)} ${chars.toString().padStart(6)} ${args[args.length - 1]}`;
    }

    if (act === 'head') {
      if (args.length === 0) return `head: missing file operand`;
      const target = this.resolveLocalPath(args[args.length - 1]);
      const content = this.getLocalFileContent(target);
      if (content === undefined) return `head: ${args[args.length - 1]}: No such file or directory`;

      return content.split('\n').slice(0, 10).join('\n');
    }

    if (act === 'tail') {
      if (args.length === 0) return `tail: missing file operand`;
      const target = this.resolveLocalPath(args[args.length - 1]);
      const content = this.getLocalFileContent(target);
      if (content === undefined) return `tail: ${args[args.length - 1]}: No such file or directory`;

      return content.split('\n').slice(-10).join('\n');
    }

    if (act === 'ls') {
      const targetDir = args[0] ? this.resolveLocalPath(args[0]) : this.localDir;
      const items: string[] = [];
      const prefix = targetDir.endsWith('/') ? targetDir : targetDir + '/';

      this.localDirs.forEach((d) => {
        if (d !== targetDir && d.startsWith(prefix)) {
          const sub = d.substring(prefix.length);
          if (!sub.includes('/')) items.push(`drwxr-xr-x  ${sub}/`);
        }
      });

      this.localFiles.forEach((_, f) => {
        if (f.startsWith(prefix)) {
          const sub = f.substring(prefix.length);
          if (!sub.includes('/')) items.push(`-rw-r--r--  ${sub}`);
        }
      });

      return items.length > 0 ? items.join('\n') : '.';
    }

    if (act === 'rm') {
      if (args.length === 0) return 'rm: missing operand';
      const target = this.resolveLocalPath(args[0]);
      let deleted = false;
      if (this.localFiles.has(target)) {
        this.localFiles.delete(target);
        this.db.deleteLocalFile(target);
        deleted = true;
      }
      if (this.localDirs.has(target)) {
        this.localDirs.delete(target);
        this.db.deleteLocalDir(target);
        deleted = true;
      }

      return deleted ? `✓ Removed local path: ${args[0]}` : `rm: cannot remove '${args[0]}': No such file or directory`;
    }

    if (act === 'cp') {
      if (args.length < 2) return 'cp: missing file operand. Usage: cp <src> <dst>';
      const isRecursive = args.includes('-r') || args.includes('-R');
      const cleanArgs = args.filter((a) => a !== '-r' && a !== '-R');
      if (cleanArgs.length < 2) return 'cp: missing destination file operand after ' + cleanArgs[0];

      const srcPath = this.resolveLocalPath(cleanArgs[0]);
      let dstPath = this.resolveLocalPath(cleanArgs[1]);

      if (this.localDirs.has(dstPath)) {
        const fileName = srcPath.split('/').pop() || 'file';
        dstPath = dstPath.endsWith('/') ? dstPath + fileName : dstPath + '/' + fileName;
      }

      const content = this.getLocalFileContent(srcPath);
      if (content !== undefined) {
        this.saveLocalFileContent(dstPath, content);
        return `✓ Copied local file: ${cleanArgs[0]} -> ${cleanArgs[1]}`;
      }

      if (isRecursive && this.localDirs.has(srcPath)) {
        let copiedCount = 0;
        const srcPrefix = srcPath.endsWith('/') ? srcPath : srcPath + '/';
        const dstPrefix = dstPath.endsWith('/') ? dstPath : dstPath + '/';

        this.localDirs.add(dstPath);
        this.db.saveLocalDir(dstPath);

        this.localDirs.forEach((d) => {
          if (d.startsWith(srcPrefix)) {
            const rel = d.substring(srcPrefix.length);
            const newDir = dstPrefix + rel;
            this.localDirs.add(newDir);
            this.db.saveLocalDir(newDir);
          }
        });

        this.localFiles.forEach((val, f) => {
          if (f.startsWith(srcPrefix)) {
            const rel = f.substring(srcPrefix.length);
            const newFile = dstPrefix + rel;
            this.saveLocalFileContent(newFile, val);
            copiedCount++;
          }
        });

        return `✓ Copied local directory '${cleanArgs[0]}' -> '${cleanArgs[1]}' (${copiedCount} files)`;
      }

      return `cp: cannot stat '${cleanArgs[0]}': No such file or directory`;
    }

    if (act === 'mv') {
      if (args.length < 2) return 'mv: missing file operand. Usage: mv <src> <dst>';
      const srcPath = this.resolveLocalPath(args[0]);
      let dstPath = this.resolveLocalPath(args[1]);

      if (this.localDirs.has(dstPath)) {
        const fileName = srcPath.split('/').pop() || 'file';
        dstPath = dstPath.endsWith('/') ? dstPath + fileName : dstPath + '/' + fileName;
      }

      const content = this.getLocalFileContent(srcPath);
      if (content !== undefined) {
        this.saveLocalFileContent(dstPath, content);
        this.localFiles.delete(srcPath);
        this.db.deleteLocalFile(srcPath);
        return `✓ Moved local file: ${args[0]} -> ${args[1]}`;
      }

      if (this.localDirs.has(srcPath)) {
        const srcPrefix = srcPath.endsWith('/') ? srcPath : srcPath + '/';
        const dstPrefix = dstPath.endsWith('/') ? dstPath : dstPath + '/';

        this.localDirs.add(dstPath);
        this.db.saveLocalDir(dstPath);

        this.localFiles.forEach((val, f) => {
          if (f.startsWith(srcPrefix)) {
            const rel = f.substring(srcPrefix.length);
            const newFile = dstPrefix + rel;
            this.saveLocalFileContent(newFile, val);
            this.localFiles.delete(f);
            this.db.deleteLocalFile(f);
          }
        });

        this.localDirs.delete(srcPath);
        this.db.deleteLocalDir(srcPath);
        return `✓ Renamed/moved directory '${args[0]}' -> '${args[1]}'`;
      }

      return `mv: cannot stat '${args[0]}': No such file or directory`;
    }

    return `Linux command executed: ${act}`;
  }

  private executeHDFSCommand(cmd: ParsedCommand): string {
    const { subcommand, action, flags, positionalArgs } = cmd;

    if (subcommand === 'crypto') {
      if (action === '-listZones') {
        const lines = ['/Hacker/secure   key1', '------------------------+'];
        this.cryptoZones.forEach((key, path) => {
          lines.push(`${path.padEnd(16)} ${key}`);
        });
        return lines.join('\n');
      }
      if (action === '-createZone') {
        const key = positionalArgs[1] || 'key1';
        const path = positionalArgs[3] || '/Hacker/secure';
        this.cryptoZones.set(path, key);
        return `Added encryption zone ${path} with key ${key}`;
      }
    }

    if (subcommand === 'balancer') {
      return `[HDFS Balancer] Rebalancing block allocation across 3 DataNodes (Threshold: 10.0%)
[HDFS Balancer] Moved 1,024 MB across DataNode disks.
✓ Cluster HDFS storage is now balanced.`;
    }

    if (subcommand === 'diskbalancer') {
      return `[DiskBalancer] Generating data volume balancing plan for datanode1.hadoop.local
✓ DiskBalancer Plan generated and executed. Volume skew reduced to 0.01.`;
    }

    if (subcommand === 'storagepolicies') {
      if (action === '-isSatisfierRunning') {
        return `Storage Policy Satisfier (SPS) daemon is RUNNING on Active NameNode nn1.`;
      }
      if (action === '-listPolicies') {
        return `Block Storage Policies:
  1. HOT (Disk: 3) [Default]
  2. WARM (Disk: 1, Archive: 2)
  3. COLD (Archive: 3)
  4. LAZY_PERSIST (RAM_Disk: 1, Disk: 2)`;
      }
      if (action === '-setStoragePolicy') {
        const pathArg = positionalArgs[1] || '/';
        const polArg = positionalArgs[3] || 'COLD';
        this.storagePolicies.set(pathArg, polArg);
        return `Set storage policy ${polArg} on ${pathArg}`;
      }
      if (action === '-satisfyStoragePolicy') {
        const pathArg = positionalArgs[1] || '/';
        return `Scheduled storage policy satisfaction for ${pathArg}`;
      }
    }

    if (subcommand === 'ec') {
      if (action === '-enablePolicy') {
        const polArg = positionalArgs[1] || 'RS-6-3-1024k';
        return `Erasure Coding policy ${polArg} enabled successfully`;
      }
      if (action === '-disablePolicy') {
        const polArg = positionalArgs[1] || 'RS-6-3-1024k';
        return `Erasure Coding policy ${polArg} disabled successfully`;
      }
      if (action === '-listPolicies') {
        return `Erasure Coding Policies:
  - RS-6-3-1024k (Reed-Solomon 6 data, 3 parity) [Enabled]
  - RS-3-2-1024k (Reed-Solomon 3 data, 2 parity)
  - XOR-2-1-1024k (XOR 2 data, 1 parity)`;
      }
      if (action === '-setPolicy') {
        const pathArg = positionalArgs[1] || '/';
        const polArg = positionalArgs[3] || 'RS-6-3-1024k';
        this.ecPolicies.set(pathArg, polArg);
        return `Set Erasure Coding policy ${polArg} on ${pathArg}`;
      }
    }

    if (subcommand === 'cacheadmin') {
      if (action === '-addDirective') {
        const pathArg = positionalArgs[1] || '/';
        const poolArg = positionalArgs[3] || 'pool1';
        this.cacheDirectives.set(pathArg, poolArg);
        return `Added cache directive 1 for path ${pathArg} in pool ${poolArg}`;
      }
      if (action === '-listDirectives') {
        const lines = ['ID   POOL    REPL  PATH', '-------------------------------+'];
        let idx = 1;
        this.cacheDirectives.forEach((pool, path) => {
          lines.push(`${idx.toString().padEnd(4)} ${pool.padEnd(7)} 1     ${path}`);
          idx++;
        });
        return lines.join('\n');
      }
    }

    if (subcommand === 'namenode' || flags.has('-format') || action === '-format' || positionalArgs.includes('-format')) {
      this.isNameNodeFormatted = true;
      this.persistShellState();
      return `26/09/02 15:00:00 INFO namenode.NameNode: STARTUP_MSG:
/************************************************************
STARTUP_MSG: Starting NameNode
STARTUP_MSG:   host = localhost/127.0.0.1
STARTUP_MSG:   version = 3.3.6
************************************************************/
26/09/02 15:00:01 INFO namenode.FSNamesystem: Formatting NameNode in /home/Hacker/hadoop/data/dfs/name
26/09/02 15:00:01 INFO namenode.FSImage: Storage directory /home/Hacker/hadoop/data/dfs/name has been successfully formatted.
26/09/02 15:00:01 INFO namenode.FSImage: Creating initial FSImage checkpoint with Cluster ID: CID-8f92a10b-4e12-4c22-901a
26/09/02 15:00:01 INFO namenode.NameNode: SHUTDOWN_MSG:
/************************************************************
SHUTDOWN_MSG: Shutting down NameNode at localhost/127.0.0.1
************************************************************/
✓ NameNode formatted successfully. Ready for 'start-dfs.sh'.`;
    }

    if (subcommand === 'haadmin') {
      if (action === '-getServiceState') {
        const nn = positionalArgs[0] || 'nn1';
        return nn === this.activeNameNodeId ? 'active' : 'standby';
      }
      if (action === '-failover') {
        const fromNN = positionalArgs[0] || 'nn1';
        const toNN = positionalArgs[1] || 'nn2';
        this.activeNameNodeId = toNN;
        return `Failover from ${fromNN} to ${toNN} successful
✓ ${fromNN} is now STANDBY
✓ ${toNN} is now ACTIVE`;
      }
    }

    if (subcommand === 'dfs') {
      switch (action) {
        case '-find': {
          const pathArg = positionalArgs[0] || '/';
          const nameArg = positionalArgs[2] || '*';
          return `${pathArg}\n${pathArg}/about.txt (${nameArg})\n${pathArg}/data.csv`;
        }

        case '-count': {
          const pathArg = positionalArgs[0] || '/';
          return `   DIR_COUNT   FILE_COUNT       CONTENT_SIZE PATHNAME\n           4            2               4096 ${pathArg}`;
        }

        case '-checksum': {
          const pathArg = positionalArgs[0] || '/';
          const node = this.nameNode.getNamespace().resolvePath(pathArg);
          if (!node || node.type !== 'FILE') return `checksum: \`${pathArg}\`: No such file`;
          return `${pathArg}\tMD5-of-073741824000000000000000\ta9b8c7d6e5f43210876543210abcdef1`;
        }

        case '-stat': {
          const pathArg = positionalArgs[1] || positionalArgs[0] || '/';
          const node = this.nameNode.getNamespace().resolvePath(pathArg);
          if (!node) return `stat: \`${pathArg}\`: No such file or directory`;
          const typeStr = node.type === 'DIRECTORY' ? 'directory' : 'regular file';
          const size = node.type === 'FILE' ? node.sizeBytes : 4096;
          return `${typeStr} ${node.owner}:${node.group} ${size} ${new Date(node.createdAt).toISOString().slice(0, 16).replace('T', ' ')}`;
        }

        case '-getfacl': {
          const pathArg = positionalArgs[0] || '/';
          const aclList = this.acls.get(pathArg) || ['user::rwx', 'group::r-x', 'other::r-x'];
          return `# file: ${pathArg}\n# owner: Hacker\n# group: supergroup\n${aclList.join('\n')}`;
        }

        case '-setfacl': {
          const pathArg = positionalArgs[1] || '/';
          const aclSpec = positionalArgs[0] || 'user:alice:rwx';
          let aclList = this.acls.get(pathArg) || ['user::rwx', 'group::r-x', 'other::r-x'];
          aclList.push(aclSpec);
          this.acls.set(pathArg, aclList);
          return `✓ Updated ACL for ${pathArg}`;
        }

        case '-expunge': {
          return `✓ Emptied Trash (/user/Hacker/.Trash). Storage reclaimed.`;
        }

        case '-allowSnapshot': {
          const pathArg = positionalArgs[0] || '/';
          let set = this.snapshots.get(pathArg);
          if (!set) {
            set = new Set();
            this.snapshots.set(pathArg, set);
          }
          return `Allowing snapshot on ${pathArg} succeeded`;
        }

        case '-createSnapshot': {
          const pathArg = positionalArgs[0] || '/';
          const snapName = positionalArgs[1] || `s_${Date.now()}`;
          let set = this.snapshots.get(pathArg);
          if (!set) {
            set = new Set();
            this.snapshots.set(pathArg, set);
          }
          set.add(snapName);
          return `Created snapshot ${pathArg}/.snapshot/${snapName}`;
        }

        case '-deleteSnapshot': {
          const pathArg = positionalArgs[0] || '/';
          const snapName = positionalArgs[1] || '';
          const set = this.snapshots.get(pathArg);
          if (set && set.has(snapName)) {
            set.delete(snapName);
            return `✓ Deleted snapshot ${snapName} from ${pathArg}`;
          }
          return `deleteSnapshot: Snapshot \`${snapName}\` does not exist for \`${pathArg}\``;
        }

        case '-ls': {
          const pathStr = positionalArgs[0] || '/';
          const node = this.nameNode.getNamespace().resolvePath(pathStr);
          if (!node) return `ls: \`${pathStr}\`: No such file or directory`;

          if (node.type === 'FILE') {
            return `${node.permissions}   ${node.replicationFactor} ${node.owner} ${node.group}  ${node.sizeBytes.toString().padStart(8)} ${new Date(node.createdAt).toISOString().slice(0, 16).replace('T', ' ')} ${node.name}`;
          } else {
            if (node.children.size === 0) return 'Found 0 items';
            const lines: string[] = [`Found ${node.children.size} items`];
            node.children.forEach((child) => {
              const rep = child.type === 'FILE' ? child.replicationFactor : '-';
              const sz = child.type === 'FILE' ? child.sizeBytes : 0;
              lines.push(
                `${child.permissions}   ${rep} ${child.owner} ${child.group}  ${sz.toString().padStart(8)} ${new Date(child.createdAt).toISOString().slice(0, 16).replace('T', ' ')} ${child.name}`
              );
            });
            return lines.join('\n');
          }
        }

        case '-mkdir': {
          if (positionalArgs.length === 0) return `mkdir: Missing directory argument`;
          const dirPath = positionalArgs[0];
          const isRecursive = flags.has('-p');
          try {
            this.nameNode.getNamespace().mkdir(dirPath, isRecursive);
            this.db.saveHdfsFileContent(dirPath, '__HADOOP_DIR__');
            return `✓ Created HDFS directory: ${dirPath}`;
          } catch (err: any) {
            return `mkdir: ${err.message}`;
          }
        }

        case '-touchz': {
          if (positionalArgs.length === 0) return `touchz: Missing file path argument`;
          const targetPath = positionalArgs[0];
          try {
            this.nameNode.createAndWriteFile(targetPath, '');
            this.db.saveHdfsFileContent(targetPath, '');
            return `✓ Created empty 0-byte HDFS file: ${targetPath}`;
          } catch (err: any) {
            return `touchz: ${err.message}`;
          }
        }

        case '-cp': {
          if (positionalArgs.length < 2) return `cp: Usage: hdfs dfs -cp <src> <dst>`;
          const src = positionalArgs[0];
          const dst = positionalArgs[1];
          const content = this.nameNode.readFileContent(src);
          if (content === undefined) return `cp: \`${src}\`: No such file or directory`;

          try {
            this.nameNode.createAndWriteFile(dst, content);
            this.db.saveHdfsFileContent(dst, content);
            return `✓ Copied in HDFS: [${src}] -> [${dst}]`;
          } catch (err: any) {
            return `cp: ${err.message}`;
          }
        }

        case '-mv': {
          if (positionalArgs.length < 2) return `mv: Usage: hdfs dfs -mv <src> <dst>`;
          const src = positionalArgs[0];
          const dst = positionalArgs[1];
          const content = this.nameNode.readFileContent(src);
          if (content === undefined) return `mv: \`${src}\`: No such file or directory`;

          try {
            this.nameNode.createAndWriteFile(dst, content);
            this.nameNode.getNamespace().deletePath(src, true);
            this.db.saveHdfsFileContent(dst, content);
            this.db.deleteHdfsFileContent(src);
            return `✓ Moved in HDFS: [${src}] -> [${dst}]`;
          } catch (err: any) {
            return `mv: ${err.message}`;
          }
        }

        case '-setrep': {
          if (positionalArgs.length < 2) return `setrep: Usage: hdfs dfs -setrep [-w] <replication> <path>`;
          const newRep = parseInt(positionalArgs[0]) || 3;
          const targetPath = positionalArgs[1];
          const node = this.nameNode.getNamespace().resolvePath(targetPath);
          if (!node || node.type !== 'FILE') return `setrep: \`${targetPath}\`: No such file`;

          (node as INodeFile).replicationFactor = newRep;
          return `Replication ${newRep} set for ${targetPath}`;
        }

        case '-chmod': {
          if (positionalArgs.length < 2) return `chmod: Usage: hdfs dfs -chmod <mode> <path>`;
          const mode = positionalArgs[0];
          const targetPath = positionalArgs[1];
          const node = this.nameNode.getNamespace().resolvePath(targetPath);
          if (!node) return `chmod: \`${targetPath}\`: No such file or directory`;
          node.permissions = mode.startsWith('-') || mode.startsWith('d') ? mode : `-${mode}`;
          return `Changed permissions of ${targetPath} to ${node.permissions}`;
        }

        case '-chown': {
          if (positionalArgs.length < 2) return `chown: Usage: hdfs dfs -chown <owner[:group]> <path>`;
          const ownerPart = positionalArgs[0];
          const targetPath = positionalArgs[1];
          const node = this.nameNode.getNamespace().resolvePath(targetPath);
          if (!node) return `chown: \`${targetPath}\`: No such file or directory`;

          if (ownerPart.includes(':')) {
            const [o, g] = ownerPart.split(':');
            node.owner = o;
            node.group = g;
          } else {
            node.owner = ownerPart;
          }
          return `Changed owner of ${targetPath} to ${node.owner}:${node.group}`;
        }

        case '-put':
        case '-copyFromLocal': {
          if (positionalArgs.length < 2) return `put: Usage: hdfs dfs -put <localfile> <hdfspath>`;
          const localSrc = positionalArgs[0];
          const hdfsDst = positionalArgs[1];

          let contentToUpload = localSrc;
          const localContent = this.getLocalFileContent(localSrc);
          if (localContent !== undefined) {
            contentToUpload = localContent;
          }

          try {
            this.nameNode.createAndWriteFile(hdfsDst, contentToUpload);
            this.db.saveHdfsFileContent(hdfsDst, contentToUpload);
            return `✓ Copied from Local [${localSrc}] -> HDFS [${hdfsDst}] (3 replicas allocated across DataNodes)`;
          } catch (err: any) {
            return `put: ${err.message}`;
          }
        }

        case '-get':
        case '-copyToLocal': {
          if (positionalArgs.length < 2) return `get: Usage: hdfs dfs -get <hdfspath> <localfile>`;
          const hdfsSrc = positionalArgs[0];
          const localDst = positionalArgs[1];

          const hdfsContent = this.nameNode.readFileContent(hdfsSrc);
          if (hdfsContent === undefined) {
            return `get: \`${hdfsSrc}\`: No such file or directory in HDFS`;
          }

          this.saveLocalFileContent(localDst, hdfsContent);
          return `✓ Copied from HDFS [${hdfsSrc}] -> Local [${localDst}] successfully.`;
        }

        case '-cat': {
          if (positionalArgs.length === 0) return `cat: Missing file path argument`;
          const filePath = positionalArgs[0];
          const node = this.nameNode.getNamespace().resolvePath(filePath);
          if (!node || node.type !== 'FILE') return `cat: \`${filePath}\`: No such file`;

          const content = this.nameNode.readFileContent(filePath);
          return content !== undefined ? content : `hello hadoop\nhello world\nhadoop world\n`;
        }

        case '-tail': {
          if (positionalArgs.length === 0) return `tail: Missing file path argument`;
          const filePath = positionalArgs[0];
          const content = this.nameNode.readFileContent(filePath);
          if (content === undefined) return `tail: \`${filePath}\`: No such file`;
          const lines = content.split('\n');
          return lines.slice(-10).join('\n');
        }

        case '-head': {
          if (positionalArgs.length === 0) return `head: Missing file path argument`;
          const filePath = positionalArgs[0];
          const content = this.nameNode.readFileContent(filePath);
          if (content === undefined) return `head: \`${filePath}\`: No such file`;
          const lines = content.split('\n');
          return lines.slice(0, 10).join('\n');
        }

        case '-rm':
        case '-rmdir': {
          if (positionalArgs.length === 0) return `rm: Missing file path argument`;
          const targetPath = positionalArgs[0];
          const isRecursive = flags.has('-r') || action === '-rm';
          try {
            const success = this.nameNode.getNamespace().deletePath(targetPath, isRecursive);
            if (success) {
              this.db.deleteHdfsFileContent(targetPath);
            }
            return success ? `✓ Deleted ${targetPath}` : `rm: \`${targetPath}\`: No such file or directory`;
          } catch (err: any) {
            return `rm: ${err.message}`;
          }
        }

        case '-du': {
          const pathStr = positionalArgs[0] || '/';
          const node = this.nameNode.getNamespace().resolvePath(pathStr);
          if (!node) return `du: \`${pathStr}\`: No such file or directory`;
          const sz = node.type === 'FILE' ? node.sizeBytes : 1024;
          return `${sz}  ${sz * 3}  ${pathStr}`;
        }

        case '-df': {
          const dns = this.nameNode.getDataNodes();
          const totalCap = dns.reduce((acc, n) => acc + n.storageCapacityBytes, 0);
          const totalUsed = dns.reduce((acc, n) => acc + n.storageUsedBytes, 0);
          const avail = totalCap - totalUsed;
          return `Filesystem           Size       Used      Available  Use%\nfile:///         ${(totalCap / (1024*1024)).toFixed(1)}MB    ${(totalUsed / (1024*1024)).toFixed(1)}MB    ${(avail / (1024*1024)).toFixed(1)}MB     ${((totalUsed/totalCap)*100).toFixed(1)}%`;
        }

        case '-help':
        default: {
          return `HDFS Shell Commands:
  hdfs dfs -ls [-r] <path>             List HDFS directory contents
  hdfs dfs -find <path> -name <p>      Search files recursively in HDFS
  hdfs dfs -count <path>               Count dirs, files, and bytes in HDFS
  hdfs dfs -mkdir [-p] <path>         Create HDFS directory
  hdfs dfs -put <local> <hdfs>         Copy file from Local Linux FS -> HDFS
  hdfs dfs -get <hdfs> <local>         Copy file from HDFS -> Local Linux FS
  hdfs dfs -cp <src> <dst>             Copy file/directory within HDFS
  hdfs dfs -mv <src> <dst>             Move/rename file/directory within HDFS
  hdfs dfs -chmod <mode> <path>        Change HDFS file permissions (e.g. 755)
  hdfs dfs -chown <owner[:grp]> <path> Change HDFS file owner/group
  hdfs dfs -getfacl <path>             Inspect Granular ACL permissions
  hdfs dfs -setfacl -m user:alice:rwx  Set Granular ACL permissions
  hdfs dfs -checksum <path>            Compute file MD5 checksum
  hdfs dfs -expunge                    Empty HDFS trash (.Trash)
  hdfs dfs -allowSnapshot <dir>        Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1>  Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1>  Delete HDFS Snapshot
  hdfs dfs -touchz <path>              Create empty 0-byte file in HDFS
  hdfs dfs -cat <path>                Display file contents
  hdfs dfs -tail / -head <path>        Display tail/head of file
  hdfs dfs -rm [-r] <path>            Remove file or directory
  hdfs dfs -du <path>                 Display disk usage
  hdfs dfs -df                        Display filesystem storage capacity`;
        }
      }
    }

    if (subcommand === 'fsck') {
      const pathStr = positionalArgs[0] || '/';

      if (flags.has('-files') || flags.has('-blocks') || flags.has('-locations')) {
        return `Connecting to NameNode at localhost:9000...
FSCK started by Hacker for path ${pathStr} at ${new Date().toISOString()}
. Status: HEALTHY
/file.txt 1024 bytes, 1 block(s):  OK
0. BP-10023412-127.0.0.1-1700000000:blk_1073741825_1001 len=1024 repl=3 [datanode1.hadoop.local:9866, datanode2.hadoop.local:9866, datanode3.hadoop.local:9866]

The filesystem under path '${pathStr}' is HEALTHY`;
      }

      const report = this.nameNode.runFSCK(pathStr);
      const lines = [
        `+-------------------------------------------------------------+`,
        `|                    HDFS FILE SYSTEM CHECK                   |`,
        `+-------------------------------------------------------------+`,
        ` Status:                       ${report.isHealthy ? 'HEALTHY ✓' : 'UNHEALTHY ✗'}`,
        ` Total size:                    ${report.totalFiles * 1024} B`,
        ` Total files:                   ${report.totalFiles}`,
        ` Total blocks:                  ${report.totalBlocks}`,
        ` Minimally replicated blocks:   ${report.totalBlocks}`,
        ` Over-replicated blocks:        0`,
        ` Under-replicated blocks:       ${report.underReplicatedBlocks}`,
        ` Mis-replicated blocks:         0`,
        ` Default replication factor:    3`,
        ` Average block replication:     ${report.totalBlocks > 0 ? (report.totalReplicas / report.totalBlocks).toFixed(2) : 0}`,
        ` Corrupt blocks:                ${report.corruptBlocks}`,
        ` Missing replicas:              ${report.missingBlocks}`,
        `+-------------------------------------------------------------+`
      ];
      if (report.details.length > 0) {
        lines.push(`\nDetails:\n` + report.details.join('\n'));
      }
      return lines.join('\n');
    }

    if (subcommand === 'dfsadmin') {
      if (action === '-refreshNodes') {
        return `[HDFS Admin] Re-reading dfs.hosts and dfs.hosts.exclude...
✓ DataNode membership & decommissioning list refreshed successfully.`;
      }

      if (action === '-metasave') {
        const fileArg = positionalArgs[0] || 'metasave.log';
        this.saveLocalFileContent(fileArg, `NameNode Metasave Report at ${new Date().toISOString()}
Live DataNodes: 3
Under-replicated blocks: 0
Corrupt blocks: 0
Replication Queues: Empty`);
        return `Created metasave report in local file ${fileArg}`;
      }

      if (action === '-triggerBlockReport') {
        const nodeArg = positionalArgs[0] || 'datanode1.hadoop.local';
        return `Triggering full block report on ${nodeArg}...
✓ Full block report sent to Active NameNode nn1.`;
      }

      if (action === '-enterMaintenance') {
        const nodeArg = positionalArgs[0] || 'datanode1.hadoop.local';
        return `[HDFS Admin] ${nodeArg} entering maintenance mode...
✓ DataNode ${nodeArg} placed in Maintenance Window. Re-replication suppressed.`;
      }

      if (action === '-exitMaintenance') {
        const nodeArg = positionalArgs[0] || 'datanode1.hadoop.local';
        return `✓ DataNode ${nodeArg} exited maintenance mode.`;
      }

      if (action === '-saveNamespace') {
        return `[SecondaryNameNode] Merging edits log into fsimage...
✓ Saved namespace image (fsimage_0000000000000000124) successfully.`;
      }

      if (action === '-setQuota') {
        const qCount = parseInt(positionalArgs[0]) || 1000;
        const targetPath = positionalArgs[1] || '/';
        this.fileQuotas.set(targetPath, qCount);
        return `Set file count quota ${qCount} on ${targetPath}`;
      }

      if (action === '-setSpaceQuota') {
        const sVal = positionalArgs[0] || '10g';
        const targetPath = positionalArgs[1] || '/';
        this.spaceQuotas.set(targetPath, sVal);
        return `Set space quota ${sVal} on ${targetPath}`;
      }

      if (action === '-clrSpaceQuota') {
        const targetPath = positionalArgs[0] || '/';
        this.spaceQuotas.delete(targetPath);
        return `Cleared space quota on ${targetPath}`;
      }

      if (action === '-report') {
        const dns = this.nameNode.getDataNodes();
        const lines = [
          `Configured Capacity: ${dns.length * 10} GB`,
          `Present Capacity: ${dns.length * 10} GB`,
          `DFS Remaining: ${(dns.length * 10) - 0.1} GB`,
          `DFS Used: 0.1 GB`,
          `DFS Used%: 1.0%`,
          `Under replicated blocks: 0`,
          `Blocks with corrupt replicas: 0`,
          `Missing blocks: 0`,
          `-------------------------------------------------`,
          `Live datanodes (${dns.length}):\n`
        ];
        dns.forEach((dn) => {
          lines.push(`Name: ${dn.hostname} (${dn.id})\nHostname: ${dn.hostname}\nRack: ${dn.rackId}\nState: ${dn.state}\nUsed: ${dn.storageUsedBytes} B\nBlocks: ${dn.blocks.length}\nLast Heartbeat: OK\n`);
        });
        return lines.join('\n');
      }
      if (action === '-safemode') {
        return `Safe mode is ${this.nameNode.getState() === 'SAFE_MODE' ? 'ON' : 'OFF'}`;
      }
    }

    return `Unsupported hdfs subcommand: ${subcommand}`;
  }

  private executeHadoopCommand(cmd: ParsedCommand): string {
    if (cmd.subcommand === 'distcp') {
      const src = cmd.positionalArgs[0] || 'hdfs://nn1/src';
      const dst = cmd.positionalArgs[1] || 'hdfs://nn2/dst';
      return `[DistCp Engine] Submitting MapReduce DistCp job across virtual network links...
[MapReduce DistCp] 4 Map tasks copying data chunks from [${src}] to [${dst}]
✓ Inter-cluster dataset replication completed successfully.`;
    }

    if (cmd.subcommand === 'jar') {
      if (cmd.positionalArgs.length < 3) {
        return `Usage: hadoop jar <jarfile> [mainclass] <input> <output>`;
      }
      const jarName = cmd.positionalArgs[0];

      if (jarName.includes('streaming')) {
        return `[Hadoop Streaming Engine] Executing Polyglot MapReduce Pipeline...
[Map Phase] Executing Node.js / Polyglot mapper script...
[Shuffle & Sort] Partitioning intermediate key-value pairs...
[Reduce Phase] Executing Node.js / Polyglot reducer script...
✓ Hadoop Streaming Job Completed Successfully. Output written to HDFS.`;
      }

      const inputPath = cmd.positionalArgs[1];
      const outputPath = cmd.positionalArgs[2];

      try {
        const job = this.mapReduceEngine.submitJob(`WordCount_${Date.now()}`, inputPath, outputPath);
        return `Submitted MapReduce Job ${job.id} (${job.name}) to YARN queue '${job.queue}'
✓ Container allocated
✓ Mappers running
✓ Shuffle & Sort active
✓ Reducers processing
✓ Output written to HDFS: ${outputPath}/part-r-00000`;
      } catch (err: any) {
        return `Hadoop Jar Error: ${err.message}`;
      }
    }

    return `Hadoop CLI commands:\n  hadoop jar <jarfile> <input> <output>\n  hadoop distcp <src> <dst>`;
  }

  private executeYARNCommand(cmd: ParsedCommand): string {
    if (cmd.subcommand === 'scm') {
      return `[YARN Shared Cache Manager] Cleaning expired dependency artifacts from shared cache...
✓ Reclaimed 512 MB from YARN shared cache.`;
    }

    if (cmd.subcommand === 'rmadmin') {
      if (cmd.action === '-refreshSuperUserGroupsConfiguration') {
        return `[YARN RMAdmin] Re-reading core-site.xml superuser and proxyuser group permissions...
✓ Superuser proxy group ACL configuration refreshed.`;
      }
      if (cmd.action === '-refreshNodes') {
        return `[YARN RMAdmin] Re-reading include/exclude host files...
✓ NodeManager membership refreshed successfully.`;
      }
    }

    if (cmd.subcommand === 'container') {
      const attId = cmd.positionalArgs[0] || 'appattempt_1700000000_0001_000001';
      return `Total Containers for ${attId} : 2
Container-Id                            Node-Id                     Node-Http-Address    LOG-PATH
container_e01_1700000000_0001_01_000001  datanode1.hadoop.local:8041 datanode1:8042       /tmp/logs/container_01
container_e01_1700000000_0001_01_000002  datanode2.hadoop.local:8041 datanode2:8042       /tmp/logs/container_02`;
    }

    if (cmd.subcommand === 'applicationattempt') {
      const appId = cmd.positionalArgs[0] || 'application_1700000000_0001';
      return `Total Application Attempts for ${appId} : 1
ApplicationAttempt-Id               State      AM-Container-Id                            Node-Id
appattempt_1700000000_0001_000001  FINISHED   container_e01_1700000000_0001_01_000001   datanode1.hadoop.local:8041`;
    }

    if (cmd.subcommand === 'application') {
      if (cmd.action === '-kill') {
        const appId = cmd.positionalArgs[0] || 'application_1700000000_0001';
        return `Killing application ${appId}...
✓ Application ${appId} killed by user Hacker.`;
      }

      if (cmd.action === '-list') {
        const jobs = this.mapReduceEngine.getJobs();
        const lines = [
          `Total Applications: ${jobs.length}`,
          `ID                       Name            Type       User     Queue      State`,
          `----------------------------------------------------------------------------------`
        ];
        jobs.forEach((j) => {
          lines.push(`${j.id.padEnd(24)} ${j.name.padEnd(15)} MAPREDUCE  ${j.user.padEnd(8)} ${j.queue.padEnd(10)} ${j.state}`);
        });
        return lines.join('\n');
      }
    }

    if (cmd.subcommand === 'node') {
      if (cmd.action === '-list') {
        if (cmd.raw.includes('DECOMMISSIONED')) {
          return `Total Decommissioned Nodes: 0`;
        }
        return `Total Nodes: 3
Node-Id                        Node-State Node-Http-Address     Number-of-Running-Containers
datanode1.hadoop.local:8041   RUNNING    datanode1:8042        2
datanode2.hadoop.local:8041   RUNNING    datanode2:8042        1
datanode3.hadoop.local:8041   RUNNING    datanode3:8042        1`;
      }
      if (cmd.action === '-status') {
        const nodeArg = cmd.positionalArgs[0] || 'datanode1.hadoop.local';
        return `Node Report:
Node-Id : ${nodeArg}:8041
Rack : /rack-01
Node-State : RUNNING
Memory-Used : 2048MB
Memory-Capacity : 8192MB
vCores-Used : 2
vCores-Capacity : 8`;
      }
    }

    if (cmd.subcommand === 'queue') {
      const qName = cmd.positionalArgs[1] || 'root.default';
      return `Queue Name: ${qName}
State: RUNNING
Capacity: 50.0%
Absolute Capacity: 50.0%
Current Capacity: 0.0%
Maximum Capacity: 100.0%
Num Applications: 0`;
    }

    if (cmd.subcommand === 'logs') {
      const appIdArg = cmd.positionalArgs[0] || 'application_1700000000_0001';
      return `================================================================================
YARN CONTAINER LOG ENGINE - APP ID: ${appIdArg}
================================================================================
Container: container_e01_1700000000_0001_01_000001 on datanode1.hadoop.local
================================================================================
LogType: stdout
Log Upload Time: ${new Date().toISOString()}
Log Length: 512 B

[Mapper Task 0] Read InputSplit (file /Hacker/about.txt) -> Output: 342 key-value pairs
[Mapper Task 1] Read InputSplit (file /Hacker/about.txt) -> Output: 289 key-value pairs
[Shuffle] Transferred 631 map output records across VirtualNetwork links (Rack distance: 1)
[Reducer Task 0] Sort & Merge complete. Reducing keys...
[Reducer Task 0] Successfully written output to HDFS /output/part-r-00000
================================================================================
LogType: stderr
[INFO] Job completed successfully with exit code 0.`;
    }

    return `YARN CLI commands:\n  yarn application -list\n  yarn application -kill <id>\n  yarn applicationattempt -list <id>\n  yarn container -list <attemptId>\n  yarn logs -applicationId <id>\n  yarn queue -status <queue>\n  yarn node -list\n  yarn scm -run\n  yarn rmadmin -refreshNodes`;
  }

  private resolveLocalPath(pathStr: string): string {
    if (!pathStr || pathStr === '~') return '/home/Hacker';

    const raw = pathStr.startsWith('/') ? pathStr : `${this.localDir}/${pathStr}`;
    const parts = raw.split('/').filter(Boolean);
    const stack: string[] = [];

    for (const part of parts) {
      if (part === '.') continue;
      if (part === '..') {
        if (stack.length > 0) stack.pop();
      } else {
        stack.push(part);
      }
    }

    return '/' + stack.join('/');
  }

  private executePython(code: string, inputs: string[]): string {
    const onSaveFile = (filePath: string, content: string) => {
      this.saveLocalFileContent(filePath, content);
    };

    if (this.pythonEngine) {
      const pyodideRes = this.pythonEngine.runSync(code, inputs, this.localFiles, onSaveFile);
      if (pyodideRes) {
        return pyodideRes.stderr ? `${pyodideRes.stdout}\n${pyodideRes.stderr}`.trim() : pyodideRes.stdout;
      }
      const fallbackRes = this.pythonEngine.fallbackExecuteSync(code, inputs, this.localFiles, onSaveFile);
      if (fallbackRes) {
        return fallbackRes.stderr ? `${fallbackRes.stdout}\n${fallbackRes.stderr}`.trim() : fallbackRes.stdout;
      }
    }
    return this.executePythonSync(code, inputs);
  }

  private executePythonSync(code: string, inputs: string[]): string {
    const logs: string[] = [];
    let inputIdx = 0;
    let needInputPrompt: string | null = null;

    const mockInput = (promptMsg: string = ''): string => {
      if (inputIdx < inputs.length) {
        const val = inputs[inputIdx++];
        if (promptMsg) logs.push(`${promptMsg}${val}`);
        return val;
      }
      needInputPrompt = promptMsg || 'Enter input: ';
      throw new Error('__NEED_INPUT__');
    };

    try {
      const jsCode = transpilePythonToJS(code);

      const pyPrint = (...args: any[]) => {
        const line = args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        logs.push(line);
      };

      const pyInput = (promptStr: string = ''): string => {
        return mockInput(promptStr);
      };

      const pyOpen = (path: string, mode: string = 'r') => {
        const resolvedPath = this.resolveLocalPath(path);
        const basename = path.split('/').pop() || path;

        if (mode.includes('w') || mode.includes('a')) {
          let fileData = mode.includes('a') ? (this.getLocalFileContent(resolvedPath) || '') : '';
          return {
            write: (str: string) => {
              fileData += String(str);
              this.saveLocalFileContent(resolvedPath, fileData);
            },
            writelines: (lines: string[]) => {
              fileData += lines.join('');
              this.saveLocalFileContent(resolvedPath, fileData);
            },
            read: () => fileData,
            close: () => {},
            __enter__: function() { return this; },
            __exit__: function() {}
          };
        } else {
          const content = this.getLocalFileContent(resolvedPath) ?? this.getLocalFileContent(basename) ?? '';
          return {
            read: () => content,
            readline: () => content.split('\n')[0] || '',
            readlines: () => content.split('\n'),
            write: () => {},
            close: () => {},
            __enter__: function() { return this; },
            __exit__: function() {}
          };
        }
      };

      const pyImport = (moduleName: string) => {
        const modFile = `${moduleName}.py`;
        const content = this.getLocalFileContent(modFile) || this.getLocalFileContent(`/home/Hacker/${modFile}`);
        if (content === undefined) {
          throw new Error(`No module named '${moduleName}'`);
        }
        const modSandbox: any = {
          Math, JSON, parseInt, parseFloat, String, Number, Array, Object,
          True: true, False: false, None: null
        };
        const modJs = transpilePythonToJS(content);
        const fn = new Function(...Object.keys(modSandbox), modJs);
        fn(...Object.values(modSandbox));
        return modSandbox;
      };

      const sandbox = {
        __py_print__: pyPrint,
        __py_input__: pyInput,
        __py_open__: pyOpen,
        __py_import__: pyImport,
        Math,
        JSON,
        parseInt,
        parseFloat,
        String,
        Number,
        Array,
        Object,
        True: true,
        False: false,
        None: null,
        len: (obj: any) => (obj && obj.length !== undefined ? obj.length : 0),
        range: (start: number, stop?: number, step: number = 1) => {
          if (stop === undefined) {
            stop = start;
            start = 0;
          }
          const arr = [];
          for (let i = start; i < stop; i += step) arr.push(i);
          return arr;
        },
        str: (v: any) => String(v),
        int: (v: any) => parseInt(v, 10) || 0,
        float: (v: any) => parseFloat(v) || 0.0,
        list: (v: any) => Array.from(v || [])
      };

      const fnKeys = Object.keys(sandbox);
      const fnVals = Object.values(sandbox);

      const fn = new Function(...fnKeys, jsCode);
      fn(...fnVals);

      return logs.length > 0 ? logs.join('\n') : '';
    } catch (err: any) {
      if (err && err.message === '__NEED_INPUT__') {
        return `__NEED_INPUT__:${needInputPrompt || 'Enter input: '}`;
      }
      return logs.length > 0
        ? `${logs.join('\n')}\nPython SyntaxError / RuntimeError: ${err.message}`
        : `Python SyntaxError / RuntimeError: ${err.message}`;
    }
  }

  private getGeneralHelpText(): string {
    return `Hadoop Practice Laboratory Terminal Help:
Hadoop Daemon Controls:
  start-dfs.sh / start-all.sh   Start HDFS & YARN cluster daemons
  stop-dfs.sh / stop-all.sh     Stop cluster daemons

Linux Commands & Text Editor:
  ls, pwd, cd, mkdir, echo, cat, touch, rm, whoami
  grep <pattern> <file>         Search text in local files
  wc -l <file>                  Count lines/words/chars
  head / tail <file>            Display start/end of file
  ps -ef                        Display process listing
  kill -9 <PID> / killall java  Terminate processes or daemons
  ifconfig, ping, netstat -tuln Network Diagnostics & Listening Ports
  top, df -h, free -m, uname -a Linux System Monitoring Tools
  history                       Display command history
  vim <file> / vi <file>        Open interactive Vim text editor (:wq to save & exit)

Node.js & Python Engines & Polyglot Hadoop Streaming:
  python script.py / python3    Execute Python file (Pyodide Wasm Engine + input() support)
  python -c "print('hello')"    Evaluate Python code inline
  python -v                     Display Python runtime version
  node -v                       Display Node.js runtime version
  node script.js                Execute JavaScript file
  node -e "console.log('test')" Evaluate JavaScript code inline
  hadoop jar streaming.jar -mapper "python mapper.py" -reducer "python reducer.py"

HDFS Operations (Local <-> HDFS & Inter-HDFS):
  hdfs dfs -put <local> <hdfs>         Copy file from Local Linux FS -> HDFS
  hdfs dfs -get <hdfs> <local>         Copy file from HDFS -> Local Linux FS
  hdfs dfs -cp <src> <dst>             Copy file/directory within HDFS
  hdfs dfs -mv <src> <dst>             Move/rename file/directory within HDFS
  hdfs dfs -chmod <mode> <path>        Change HDFS file permissions (e.g. 755)
  hdfs dfs -chown <owner[:grp]> <path> Change HDFS file owner/group
  hdfs dfs -find <path> -name <p>      Search files recursively in HDFS
  hdfs dfs -count <path>               Count dirs, files, and bytes in HDFS
  hdfs dfs -checksum <path>            Compute file MD5 checksum
  hdfs fsck /file -files -blocks -locations Inspect HDFS Block IDs & DataNodes
  hdfs dfsadmin -triggerBlockReport dn Force Full Block Report to NameNode
  hdfs dfsadmin -metasave metasave.log Dump NameNode Memory State
  hdfs dfsadmin -refreshNodes          Refresh DataNode membership
  hdfs storagepolicies -isSatisfierRunning Check Storage Policy Satisfier Daemon State
  hdfs ec -enablePolicy / -disablePolicy Enable/disable Erasure Coding policies
  hdfs dfs -getfacl / -setfacl         Inspect & set Granular ACL permissions
  hdfs dfs -expunge                    Empty HDFS trash (.Trash)
  hadoop distcp <src> <dst>            Distributed Copy across clusters
  hdfs dfsadmin -setQuota 1000 /dir    Set file count quota
  hdfs dfsadmin -setSpaceQuota 10g     Set space quota
  hdfs dfsadmin -saveNamespace         Save NameNode fsimage checkpoint
  hdfs dfsadmin -enterMaintenance dn   DataNode Maintenance Window
  hdfs crypto -listZones               Inspect KMS Encryption Zones
  hdfs crypto -createZone              Create KMS Encryption Zone
  hdfs dfs -allowSnapshot <dir>        Allow HDFS Snapshots
  hdfs dfs -createSnapshot <dir> <s1>  Create HDFS Snapshot
  hdfs dfs -deleteSnapshot <dir> <s1>  Delete HDFS Snapshot
  hdfs dfs -touchz <path>              Create empty 0-byte file in HDFS
  hdfs dfs -ls <path>                  List HDFS directory contents
  hdfs dfs -cat <path>                 Display HDFS file content
  hdfs dfs -tail / -head <path>        Display tail/head of file
  hdfs fsck /                          Run HDFS File System Check
  hdfs dfsadmin -report                Display DataNode cluster report
  hdfs haadmin -failover nn1 nn2       NameNode HA Failover
  hdfs storagepolicies -listPolicies   Storage Policies (HOT/WARM/COLD)
  hdfs storagepolicies -satisfyStoragePolicy Satisfy storage policy
  hdfs ec -listPolicies               Erasure Coding Policies
  hdfs cacheadmin -addDirective ...   Centralized Cache Directives
  hdfs balancer -threshold 10         HDFS Cluster Balancer
  hdfs diskbalancer -plan datanode1   DataNode Disk Balancer

MapReduce, Tez, YARN & Kyuubi:
  hadoop jar wordcount.jar <in> <out>  Submit MapReduce Job
  tez-job.sh --submit dag.xml          Submit Apache Tez DAG job
  yarn application -list               List YARN applications
  yarn application -kill <appId>       Kill YARN application
  yarn applicationattempt -list <id>   List YARN application attempts
  yarn container -list <attemptId>     List YARN container allocations
  yarn logs -applicationId <id>        View MapReduce job container logs
  yarn queue -status root.default      Check YARN Queue Status
  yarn node -list                      List live YARN NodeManagers
  yarn node -list -states DECOMMISSIONED List decommissioned nodes
  yarn scm -run                        Run YARN Shared Cache Manager
  yarn rmadmin -refreshNodes           Refresh NodeManagers in YARN
  yarn rmadmin -refreshSuperUserGroupsConfiguration Refresh Superuser ACLs
  kyuubi start                         Start Apache Kyuubi Gateway

Hadoop Ecosystem Commands:
  hive -e "SELECT ... FROM ..."        Execute Hive SQL queries over HDFS data
  hive -e "ALTER TABLE sales ADD COLUMNS (...)" Alter Hive Metastore Schema
  hive -e "DROP TABLE sales"          Drop Hive Metastore Table
  hive --service llap                  Start Hive LLAP In-Memory Query Accelerator
  impala-shell -q "SELECT ..."         Execute Impala MPP SQL query
  presto --execute "SELECT ..."        Execute Presto/Trino SQL query
  pig -e "LOAD ... DUMP ..."           Execute Apache Pig Latin script
  phoenix-sqlline -e "SELECT ..."      Execute Apache Phoenix SQL over HBase
  nifi.sh start                        Start Apache NiFi Flow Engine
  zeppelin-daemon.sh start             Start Apache Zeppelin notebook server
  hbase shell                          Open interactive HBase NoSQL shell
  hbase shell -c "list"                Run HBase shell command directly
  pyspark / spark / spark-shell        Interactive PySpark REPL shell (>>> prompt)
  hive / pig / ksql                    Interactive KSQL WASM Database shell (>> prompt)
  spark-submit app.py                  Submit PySpark job execution
  get                                  Import local file from host OS into terminal storage
  download <file>                      Export terminal file to host OS Downloads folder
  about / cat about.txt                Display developer, architecture, and system details
  sqoop import --table tbl --target-dir hdfs_dir  Import database tables into HDFS
  kafka-topics.sh --create --topic logs Create Kafka topic
  flume-ng agent --conf-file flume.conf  Run Flume stream ingestion to HDFS
  oozie job -config job.properties -run Run Oozie DAG Workflow
  ranger policy -list                  Inspect Ranger Security Policies
  kinit Hacker@HADOOP.LOCAL            Authenticate with Kerberos
  klist / kdestroy                     Inspect or clear Kerberos tickets
  clear                                Clear terminal screen`;
  }
}
