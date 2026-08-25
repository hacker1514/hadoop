import React from 'react';
import { HardDrive, Cpu, Layers, Activity, ShieldCheck } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';
import { EventStreamConsole } from './EventStreamConsole';

interface DashboardViewProps {
  backend: HadoopBackend;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ backend }) => {
  const health = backend.getObservability().calculateHealthScore();
  const nn = backend.getNameNode();
  const dns = nn.getDataNodes();
  const mr = backend.getMapReduceEngine();
  const fsck = nn.runFSCK('/');

  const totalCapMb = (dns.reduce((a, b) => a + b.storageCapacityBytes, 0) / (1024 * 1024)).toFixed(0);
  const totalUsedMb = (dns.reduce((a, b) => a + b.storageUsedBytes, 0) / (1024 * 1024)).toFixed(1);

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Health */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">Cluster Health Score</div>
            <div className={`text-2xl font-black mt-1 ${health.score >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {health.score}%
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">{health.status}</div>
          </div>
          <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Activity className="w-6 h-6" />
          </div>
        </div>

        {/* Storage */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">HDFS Storage Capacity</div>
            <div className="text-2xl font-black text-slate-100 mt-1">{totalUsedMb} MB</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Total: {totalCapMb} MB</div>
          </div>
          <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400">
            <HardDrive className="w-6 h-6" />
          </div>
        </div>

        {/* DataNodes */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">Live DataNodes</div>
            <div className="text-2xl font-black text-slate-100 mt-1">
              {dns.filter((d) => d.state === 'RUNNING').length} / {dns.length}
            </div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">Safemode: {nn.getState()}</div>
          </div>
          <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
            <Cpu className="w-6 h-6" />
          </div>
        </div>

        {/* MapReduce Jobs */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-slate-400 font-medium">MapReduce Jobs</div>
            <div className="text-2xl font-black text-slate-100 mt-1">{mr.getJobs().length}</div>
            <div className="text-[11px] text-slate-500 font-medium mt-0.5">YARN Applications</div>
          </div>
          <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
            <Layers className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Cluster Health Diagnostics Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> HDFS FSCK Diagnostic Summary
          </h3>
          <span className={`text-xs px-2.5 py-0.5 rounded font-bold ${fsck.isHealthy ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
            {fsck.isHealthy ? 'HEALTHY' : 'ATTENTION REQUIRED'}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono bg-slate-950 p-3 rounded-lg border border-slate-800">
          <div>
            <div className="text-slate-500">Total Files</div>
            <div className="text-slate-200 font-bold">{fsck.totalFiles}</div>
          </div>
          <div>
            <div className="text-slate-500">Total Blocks</div>
            <div className="text-slate-200 font-bold">{fsck.totalBlocks}</div>
          </div>
          <div>
            <div className="text-slate-500">Under-replicated</div>
            <div className={`font-bold ${fsck.underReplicatedBlocks > 0 ? 'text-amber-400' : 'text-slate-200'}`}>
              {fsck.underReplicatedBlocks}
            </div>
          </div>
          <div>
            <div className="text-slate-500">Corrupt Blocks</div>
            <div className={`font-bold ${fsck.corruptBlocks > 0 ? 'text-red-400' : 'text-slate-200'}`}>
              {fsck.corruptBlocks}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Event Stream */}
      <EventStreamConsole backend={backend} />
    </div>
  );
};
