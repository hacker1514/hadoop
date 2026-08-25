import React from 'react';
import { Cpu } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface YarnVisualizerProps {
  backend: HadoopBackend;
}

export const YarnVisualizer: React.FC<YarnVisualizerProps> = ({ backend }) => {
  const rm = backend.getResourceManager();
  const queues = rm.getQueues();
  const dns = backend.getNameNode().getDataNodes();

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" />
            YARN ResourceManager & Multi-Queue Capacity Scheduler
          </h2>
          <p className="text-xs text-slate-400">
            Global resource allocation, queue capacity limits, and per-NodeManager container matrix.
          </p>
        </div>
        <span className="bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs px-3 py-1 rounded-full font-bold">
          Scheduler: CapacityScheduler
        </span>
      </div>

      {/* Queues Section */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">YARN Queue Capacity Utilization</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {queues.map((q) => (
            <div key={q.name} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm font-bold text-sky-400">{q.name}</span>
                <span className="text-xs text-slate-400">{q.capacityPercent}% Target Cap</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Used Memory: {q.usedMemoryMb} MB</span>
                  <span>vCores: {q.usedVCores}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.max(5, q.usedCapacityPercent)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NodeManager Containers Matrix */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider">NodeManager Resources & Allocated Containers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dns.map((node) => (
            <div key={node.id} className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-200">{node.hostname}</span>
                <span className="text-xs font-mono text-slate-500">({node.id})</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-900 p-2 rounded">
                <div>
                  <div className="text-slate-500">vCores</div>
                  <div className="text-slate-200 font-bold">{node.vCoresUsed} / {node.vCoresCapacity}</div>
                </div>
                <div>
                  <div className="text-slate-500">Memory</div>
                  <div className="text-slate-200 font-bold">{node.memoryUsedMb} / {node.memoryCapacityMb} MB</div>
                </div>
              </div>

              <div className="text-xs text-slate-400 pt-1">
                Active Containers: <span className="text-purple-400 font-bold">{node.containers.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
