import React from 'react';
import { Server, Database, HardDrive, Cpu } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface ClusterVisualizerProps {
  backend: HadoopBackend;
}

export const ClusterVisualizer: React.FC<ClusterVisualizerProps> = ({ backend }) => {
  const nn = backend.getNameNode();
  const dataNodes = nn.getDataNodes();

  
  const rackMap = new Map<string, typeof dataNodes>();
  dataNodes.forEach((dn) => {
    if (!rackMap.has(dn.rackId)) rackMap.set(dn.rackId, []);
    rackMap.get(dn.rackId)!.push(dn);
  });

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      {}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-sky-400" />
            HDFS Cluster & Block Topology
          </h2>
          <p className="text-xs text-slate-400">
            Visualizing NameNode namespace, Rack-Aware block placement, and DataNode storage.
          </p>
        </div>
        <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300">
          Safemode Status: <span className="text-emerald-400 font-bold">{nn.getState()}</span>
        </div>
      </div>

      {}
      <div className="bg-slate-900 border-2 border-sky-500/40 rounded-xl p-5 shadow-lg relative">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="bg-sky-600/20 p-2.5 rounded-lg text-sky-400">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100">NameNode (Master Node)</div>
              <div className="text-xs text-slate-400">Filesystem Namespace & Metadata Manager</div>
            </div>
          </div>
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/20">
            State: ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono bg-slate-950/60 p-3 rounded-lg border border-slate-800">
          <div>
            <span className="text-slate-400">Total DataNodes:</span>{' '}
            <span className="text-slate-100 font-bold">{dataNodes.length}</span>
          </div>
          <div>
            <span className="text-slate-400">Replication Factor:</span>{' '}
            <span className="text-sky-400 font-bold">3 (Default)</span>
          </div>
          <div>
            <span className="text-slate-400">Rack Count:</span>{' '}
            <span className="text-purple-400 font-bold">{rackMap.size} Racks</span>
          </div>
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from(rackMap.entries()).map(([rackId, nodes]) => (
          <div key={rackId} className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-sm font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-4 h-4" /> {rackId}
              </span>
              <span className="text-xs text-slate-500">{nodes.length} Node(s)</span>
            </div>

            <div className="space-y-3">
              {nodes.map((dn) => {
                const usedMb = (dn.storageUsedBytes / (1024 * 1024)).toFixed(1);
                const capMb = (dn.storageCapacityBytes / (1024 * 1024)).toFixed(0);
                const pct = Math.min(100, Math.round((dn.storageUsedBytes / dn.storageCapacityBytes) * 100));

                return (
                  <div
                    key={dn.id}
                    className={`bg-slate-950 p-4 rounded-lg border ${
                      dn.state === 'DEAD'
                        ? 'border-red-500/50 bg-red-950/10'
                        : 'border-slate-800 hover:border-sky-500/40'
                    } transition`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Cpu className="w-4 h-4 text-sky-400" />
                        <span className="font-bold text-slate-200">{dn.hostname}</span>
                        <span className="text-xs font-mono text-slate-500">({dn.id})</span>
                      </div>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded ${
                          dn.state === 'RUNNING'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {dn.state}
                      </span>
                    </div>

                    {}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Storage Used: {usedMb} MB / {capMb} MB</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${dn.state === 'DEAD' ? 'bg-red-500' : 'bg-sky-500'} transition-all duration-500`}
                          style={{ width: `${Math.max(5, pct)}%` }}
                        />
                      </div>
                    </div>

                    {}
                    <div className="mt-3 pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                      <span className="text-[10px] text-slate-500 mr-1">Stored Replicas:</span>
                      {dn.blocks.length === 0 ? (
                        <span className="text-[10px] text-slate-600 italic">No blocks</span>
                      ) : (
                        dn.blocks.map((blkId) => (
                          <span
                            key={blkId}
                            className="bg-sky-500/10 text-sky-300 border border-sky-500/30 text-[10px] font-mono px-2 py-0.5 rounded"
                          >
                            {blkId.slice(0, 12)}
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
