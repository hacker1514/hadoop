import { MapReduceJob, MapReduceTask } from '../../core/domain/types';
import { transitionTask } from '../../core/fsm/stateMachines';
import { SimulationEngine } from '../../core/simulation/engine';
import { NameNode } from '../../hdfs/namenode/nameNode';
import { ResourceManager } from '../../yarn/resourcemanager/resourceManager';
import { VirtualNetwork } from '../../core/network/virtualNetwork';

export class MapReduceEngine {
  private engine: SimulationEngine;
  private nameNode: NameNode;
  private resourceManager: ResourceManager;
  public network: VirtualNetwork;
  private activeJobs: Map<string, MapReduceJob> = new Map();
  private jobCounter = 0;

  constructor(engine: SimulationEngine, nameNode: NameNode, resourceManager: ResourceManager, network: VirtualNetwork) {
    this.engine = engine;
    this.nameNode = nameNode;
    this.resourceManager = resourceManager;
    this.network = network;
  }

  public submitJob(
    jobName: string,
    inputPath: string,
    outputPath: string,
    mapperClassName: string = 'WordCount',
    numReducers: number = 2,
    queueName: string = 'root.default'
  ): MapReduceJob {
    this.jobCounter++;
    const jobId = `job_${Date.now()}_${this.jobCounter.toString().padStart(4, '0')}`;
    const appId = `app_${Date.now()}_${this.jobCounter.toString().padStart(4, '0')}`;

    
    const inputFileNode = this.nameNode.getNamespace().resolvePath(inputPath);
    if (!inputFileNode || inputFileNode.type !== 'FILE') {
      throw new Error(`Input file not found in HDFS: ${inputPath}`);
    }

    const blocks = inputFileNode.blocks;
    const numMappers = blocks.length;

    const job: MapReduceJob = {
      id: jobId,
      name: jobName,
      user: 'hadoop',
      queue: queueName,
      inputPath,
      outputPath,
      mapperClass: mapperClassName,
      reducerClass: mapperClassName,
      numMapTasks: numMappers,
      numReduceTasks: numReducers,
      state: 'SUBMITTED',
      mapProgressPercent: 0,
      reduceProgressPercent: 0,
      submitTime: this.engine.getClock().getTime(),
      mapTasks: [],
      reduceTasks: [],
      counters: {
        'Map input records': 0,
        'Map output records': 0,
        'Reduce input records': 0,
        'Reduce output records': 0,
        'Shuffle bytes': 0,
        'Spilled records': 0
      }
    };

    
    for (let i = 0; i < numMappers; i++) {
      const blockId = blocks[i];

      const mapTask: MapReduceTask = {
        id: `task_${jobId}_m_${i.toString().padStart(3, '0')}`,
        jobId,
        type: 'MAP',
        taskIndex: i,
        state: 'PENDING',
        inputBlockId: blockId,
        progressPercent: 0,
        recordsProcessed: 0,
        bytesProcessed: 0,
        spillCount: 0,
        attempts: []
      };

      mapTask.state = transitionTask('PENDING', 'SCHEDULED');
      job.mapTasks.push(mapTask);
    }

    
    for (let j = 0; j < numReducers; j++) {
      const reduceTask: MapReduceTask = {
        id: `task_${jobId}_r_${j.toString().padStart(3, '0')}`,
        jobId,
        type: 'REDUCE',
        taskIndex: j,
        state: 'PENDING',
        progressPercent: 0,
        recordsProcessed: 0,
        bytesProcessed: 0,
        spillCount: 0,
        attempts: []
      };

      reduceTask.state = transitionTask('PENDING', 'SCHEDULED');
      job.reduceTasks.push(reduceTask);
    }

    this.activeJobs.set(jobId, job);

    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'JOB_SUBMITTED',
        'MAPREDUCE',
        'JobClient',
        { jobId, jobName, inputPath, mappers: numMappers, reducers: numReducers },
        this.engine.getClock().getTime()
      )
    );

    
    this.executeJob(job, appId);
    return job;
  }

  private executeJob(job: MapReduceJob, appId: string): void {
    job.state = 'RUNNING';
    job.startTime = this.engine.getClock().getTime();

    
    job.mapTasks.forEach((mapTask, idx) => {
      const container = this.resourceManager.requestContainer(appId, 1024, 1, job.queue);
      if (container) {
        mapTask.assignedNodeId = container.nodeId;
        mapTask.assignedContainerId = container.id;
        mapTask.state = transitionTask(mapTask.state, 'RUNNING');
        mapTask.startTime = this.engine.getClock().getTime();

        const block = this.nameNode.getBlock(mapTask.inputBlockId!);
        const isLocal = block && block.replicas.some((r) => r.nodeId === container.nodeId);
        mapTask.locality = isLocal ? 'NODE_LOCAL' : 'OFF_RACK';

        this.engine.getEventStore().record(
          this.engine.getEventStore().createEvent(
            'MAP_STARTED',
            'MAPREDUCE',
            mapTask.id,
            { nodeId: container.nodeId, locality: mapTask.locality },
            this.engine.getClock().getTime()
          )
        );

        
        this.engine.scheduleEvent('MAP_COMPLETED', 'MAPREDUCE', mapTask.id, 1500 + idx * 300, () => {
          mapTask.state = transitionTask(mapTask.state, 'SUCCEEDED');
          mapTask.progressPercent = 100;
          mapTask.recordsProcessed = 15;
          mapTask.bytesProcessed = block ? block.sizeBytes : 1024;
          mapTask.finishTime = this.engine.getClock().getTime();

          job.mapProgressPercent = Math.round(
            (job.mapTasks.filter((t) => t.state === 'SUCCEEDED').length / job.mapTasks.length) * 100
          );

          this.resourceManager.releaseContainer(container.id);

          this.engine.getEventStore().record(
            this.engine.getEventStore().createEvent(
              'MAP_COMPLETED',
              'MAPREDUCE',
              mapTask.id,
              { records: mapTask.recordsProcessed },
              this.engine.getClock().getTime()
            )
          );

          
          if (job.mapTasks.every((t) => t.state === 'SUCCEEDED')) {
            this.executeShuffleAndReduce(job, appId);
          }
        });
      }
    });
  }

  private executeShuffleAndReduce(job: MapReduceJob, appId: string): void {
    this.engine.getEventStore().record(
      this.engine.getEventStore().createEvent(
        'SHUFFLE_STARTED',
        'MAPREDUCE',
        job.id,
        { jobName: job.name },
        this.engine.getClock().getTime()
      )
    );

    
    job.reduceTasks.forEach((reduceTask, idx) => {
      const container = this.resourceManager.requestContainer(appId, 1024, 1, job.queue);
      if (container) {
        reduceTask.assignedNodeId = container.nodeId;
        reduceTask.assignedContainerId = container.id;
        reduceTask.state = transitionTask(reduceTask.state, 'RUNNING');
        reduceTask.startTime = this.engine.getClock().getTime();

        this.engine.getEventStore().record(
          this.engine.getEventStore().createEvent(
            'REDUCE_STARTED',
            'MAPREDUCE',
            reduceTask.id,
            { nodeId: container.nodeId },
            this.engine.getClock().getTime()
          )
        );

        
        this.engine.scheduleEvent('REDUCE_COMPLETED', 'MAPREDUCE', reduceTask.id, 2000 + idx * 400, () => {
          reduceTask.state = transitionTask(reduceTask.state, 'SUCCEEDED');
          reduceTask.progressPercent = 100;
          reduceTask.finishTime = this.engine.getClock().getTime();

          job.reduceProgressPercent = Math.round(
            (job.reduceTasks.filter((t) => t.state === 'SUCCEEDED').length / job.reduceTasks.length) * 100
          );

          this.resourceManager.releaseContainer(container.id);

          this.engine.getEventStore().record(
            this.engine.getEventStore().createEvent(
              'REDUCE_COMPLETED',
              'MAPREDUCE',
              reduceTask.id,
              {},
              this.engine.getClock().getTime()
            )
          );

          
          if (job.reduceTasks.every((t) => t.state === 'SUCCEEDED')) {
            job.state = 'SUCCEEDED';
            job.finishTime = this.engine.getClock().getTime();

            
            const outputContent = `hadoop\t2\nhello\t2\nworld\t2\n`;
            const outPath = `${job.outputPath}/part-r-00000`;
            this.nameNode.createAndWriteFile(outPath, outputContent);

            this.engine.getEventStore().record(
              this.engine.getEventStore().createEvent(
                'JOB_COMPLETED',
                'MAPREDUCE',
                job.id,
                { durationMs: job.finishTime - job.startTime! },
                this.engine.getClock().getTime()
              )
            );
          }
        });
      }
    });
  }

  public getJobs(): MapReduceJob[] {
    return Array.from(this.activeJobs.values());
  }

  public getJob(jobId: string): MapReduceJob | undefined {
    return this.activeJobs.get(jobId);
  }
}
