import { HadoopBackend } from '../core/backend/hadoopBackend';

export interface PracticeLab {
  id: number;
  title: string;
  category: 'HDFS' | 'MAPREDUCE' | 'YARN' | 'FAILURES' | 'ADVANCED';
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  description: string;
  instructions: string[];
  hints: string[];
  validate: (backend: HadoopBackend) => { passed: boolean; feedback: string };
}

export const PRACTICE_LABS: PracticeLab[] = [
  {
    id: 1,
    title: 'Lab 1: Create an HDFS Directory',
    category: 'HDFS',
    difficulty: 'BEGINNER',
    description: 'Learn how to create directories in HDFS using the command terminal.',
    instructions: ['Execute the command: `hdfs dfs -mkdir /data/input` in the terminal.'],
    hints: ['Use the `-mkdir -p` command if creating nested directories.'],
    validate: (backend: HadoopBackend) => {
      const node = backend.getNameNode().getNamespace().resolvePath('/data/input');
      if (node && node.type === 'DIRECTORY') {
        return { passed: true, feedback: 'PASS: HDFS directory /data/input successfully created.' };
      }
      return { passed: false, feedback: 'FAIL: Directory /data/input does not exist in HDFS.' };
    }
  },
  {
    id: 2,
    title: 'Lab 2: Upload a File to HDFS',
    category: 'HDFS',
    difficulty: 'BEGINNER',
    description: 'Upload a text file into HDFS and observe file creation.',
    instructions: ['Execute `hdfs dfs -put "hello hadoop" /input/lab2.txt`'],
    hints: ['Check the HDFS Visualizer tab after uploading.'],
    validate: (backend: HadoopBackend) => {
      const node = backend.getNameNode().getNamespace().resolvePath('/input/lab2.txt');
      if (node && node.type === 'FILE') {
        return { passed: true, feedback: 'PASS: File /input/lab2.txt is present in HDFS.' };
      }
      return { passed: false, feedback: 'FAIL: File /input/lab2.txt was not found in HDFS.' };
    }
  },
  {
    id: 3,
    title: 'Lab 3: Observe Block Placement & Replication',
    category: 'HDFS',
    difficulty: 'INTERMEDIATE',
    description: 'Verify that HDFS places replicas across multiple DataNodes.',
    instructions: ['Ensure `/input/sample.txt` exists and has at least 3 block replicas.'],
    hints: ['Use `hdfs fsck /` or inspect the NameNode block map.'],
    validate: (backend: HadoopBackend) => {
      const node = backend.getNameNode().getNamespace().resolvePath('/input/sample.txt');
      if (node && node.type === 'FILE' && node.blocks.length > 0) {
        const block = backend.getNameNode().getBlock(node.blocks[0]);
        if (block && block.replicas.length >= 3) {
          return { passed: true, feedback: 'PASS: File blocks are replicated across 3 DataNodes.' };
        }
      }
      return { passed: false, feedback: 'FAIL: File /input/sample.txt lacks required 3 replicas.' };
    }
  },
  {
    id: 4,
    title: 'Lab 4: DataNode Failure & Auto-Replication',
    category: 'FAILURES',
    difficulty: 'INTERMEDIATE',
    description: 'Simulate a DataNode crash and observe automatic HDFS re-replication.',
    instructions: ['Kill a DataNode using the Failure Injection panel and trigger re-replication.'],
    hints: ['The NameNode heartbeat audit will mark inactive DataNodes as DEAD.'],
    validate: (backend: HadoopBackend) => {
      const dns = backend.getNameNode().getDataNodes();
      const deadNodes = dns.filter((n) => n.state === 'DEAD');
      if (deadNodes.length > 0) {
        return { passed: true, feedback: 'PASS: DataNode failure detected successfully.' };
      }
      return { passed: false, feedback: 'FAIL: No DataNode has been killed yet.' };
    }
  },
  {
    id: 5,
    title: 'Lab 5: Submit a WordCount MapReduce Job',
    category: 'MAPREDUCE',
    difficulty: 'INTERMEDIATE',
    description: 'Submit and run a WordCount MapReduce job on YARN.',
    instructions: ['Execute `hadoop jar wordcount.jar /input/sample.txt /output/wc` in terminal.'],
    hints: ['Inspect the YARN application list and MapReduce pipeline visualizer.'],
    validate: (backend: HadoopBackend) => {
      const jobs = backend.getMapReduceEngine().getJobs();
      const succeededJob = jobs.find((j) => j.state === 'SUCCEEDED');
      if (succeededJob) {
        return { passed: true, feedback: `PASS: Job ${succeededJob.id} completed successfully.` };
      }
      return { passed: false, feedback: 'FAIL: No MapReduce job has succeeded yet.' };
    }
  },
  {
    id: 6,
    title: 'Lab 6: Run HDFS FSCK Diagnostic Tool',
    category: 'HDFS',
    difficulty: 'BEGINNER',
    description: 'Run HDFS FSCK command to check cluster health.',
    instructions: ['Execute `hdfs fsck /` in the terminal.'],
    hints: ['FSCK displays total files, blocks, and under-replicated block counts.'],
    validate: (backend: HadoopBackend) => {
      const report = backend.getNameNode().runFSCK('/');
      if (report.totalFiles > 0) {
        return { passed: true, feedback: `PASS: FSCK completed. Total files checked: ${report.totalFiles}.` };
      }
      return { passed: false, feedback: 'FAIL: FSCK found no files.' };
    }
  },
  {
    id: 7,
    title: 'Lab 7: Inspect YARN Queues & Application Allocation',
    category: 'YARN',
    difficulty: 'INTERMEDIATE',
    description: 'Check YARN queue capacity and active applications.',
    instructions: ['Execute `yarn application -list` in terminal.'],
    hints: ['Check the YARN dashboard visualizer.'],
    validate: (backend: HadoopBackend) => {
      const queues = backend.getResourceManager().getQueues();
      if (queues.length >= 3) {
        return { passed: true, feedback: 'PASS: YARN Capacity Multi-Queue Scheduler active.' };
      }
      return { passed: false, feedback: 'FAIL: YARN queues unavailable.' };
    }
  }
];
