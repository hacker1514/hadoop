import React from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface MapReduceVisualizerProps {
  backend: HadoopBackend;
}

export const MapReduceVisualizer: React.FC<MapReduceVisualizerProps> = ({ backend }) => {
  const jobs = backend.getMapReduceEngine().getJobs();
  const activeJob = jobs.length > 0 ? jobs[jobs.length - 1] : undefined;

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      {}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            MapReduce Job Pipeline Execution Visualizer
          </h2>
          <p className="text-xs text-slate-400">
            Real-time visualization of InputSplits, Mapper execution, Sort/Spill, Network Shuffle, and Reducer output.
          </p>
        </div>
        <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300">
          Active Jobs: <span className="text-amber-400 font-bold">{jobs.length}</span>
        </div>
      </div>

      {!activeJob ? (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-12 text-center space-y-3">
          <Layers className="w-12 h-12 text-slate-600 mx-auto" />
          <div className="text-slate-300 font-bold">No Active MapReduce Jobs</div>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Submit a job using the terminal command:
            <br />
            <code className="text-sky-400 font-mono">hadoop jar wordcount.jar /input/sample.txt /output/wc</code>
            <br />
            or start Lab 5 in the Practice Labs section.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {}
          <div className="bg-slate-900 border border-amber-500/30 rounded-xl p-5 shadow-lg space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-amber-400">{activeJob.id}</span>
                <h3 className="text-lg font-bold text-slate-100">{activeJob.name}</h3>
              </div>
              <span className="bg-amber-500/10 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20">
                {activeJob.state}
              </span>
            </div>

            {}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Map Phase Progress</span>
                  <span>{activeJob.mapProgressPercent}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-sky-500 h-2 rounded-full transition-all duration-300" style={{ width: `${activeJob.mapProgressPercent}%` }} />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-slate-400">
                  <span>Reduce Phase Progress</span>
                  <span>{activeJob.reduceProgressPercent}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full transition-all duration-300" style={{ width: `${activeJob.reduceProgressPercent}%` }} />
                </div>
              </div>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-stretch text-xs">
            {}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-bold text-sky-400 mb-2 border-b border-slate-800 pb-1">1. HDFS Input</div>
              <div className="text-slate-300 font-mono bg-slate-950 p-2 rounded border border-slate-800">
                {activeJob.inputPath}
              </div>
              <div className="text-[10px] text-slate-500 mt-2">{activeJob.numMapTasks} InputSplit(s)</div>
            </div>

            {}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-bold text-sky-400 mb-2 border-b border-slate-800 pb-1">2. Map Tasks ({activeJob.mapTasks.length})</div>
              <div className="space-y-2">
                {activeJob.mapTasks.map((task) => (
                  <div key={task.id} className="bg-slate-950 p-2 rounded border border-slate-800 flex justify-between items-center">
                    <span className="font-mono text-slate-300">{task.id.slice(-6)}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${task.state === 'SUCCEEDED' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-sky-500/10 text-sky-400'}`}>
                      {task.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-bold text-purple-400 mb-2 border-b border-slate-800 pb-1">3. Shuffle & Sort</div>
              <div className="text-center py-4 bg-slate-950 rounded border border-slate-800 text-slate-400 font-mono text-[11px]">
                Network Transfer
                <br />
                Partition & Merge
              </div>
              <div className="text-[10px] text-slate-500 text-center">Data Locality Aware</div>
            </div>

            {}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-bold text-amber-400 mb-2 border-b border-slate-800 pb-1">4. Reduce Tasks ({activeJob.reduceTasks.length})</div>
              <div className="space-y-2">
                {activeJob.reduceTasks.map((task) => (
                  <div key={task.id} className="bg-slate-950 p-2 rounded border border-slate-800 flex justify-between items-center">
                    <span className="font-mono text-slate-300">{task.id.slice(-6)}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${task.state === 'SUCCEEDED' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                      {task.state}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div className="font-bold text-emerald-400 mb-2 border-b border-slate-800 pb-1">5. HDFS Output</div>
              <div className="text-slate-300 font-mono bg-slate-950 p-2 rounded border border-slate-800">
                {activeJob.outputPath}/part-r-00000
              </div>
              <div className="text-[10px] text-emerald-400 mt-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Output Saved
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
