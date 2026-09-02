import React, { useState } from 'react';
import { AlertTriangle, Power, RefreshCw, Zap, Network, ShieldCheck } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface FailuresViewProps {
  backend: HadoopBackend;
}

export const FailuresView: React.FC<FailuresViewProps> = ({ backend }) => {
  const fi = backend.getFailureInjector();
  const dns = backend.getNameNode().getDataNodes();
  const [selectedNodeId, setSelectedNodeId] = useState<string>(dns[0]?.id || 'dn-01');
  const [logMessage, setLogMessage] = useState<string | null>(null);

  const handleKillNode = () => {
    fi.killNode(selectedNodeId);
    setLogMessage(`Injected failure: DataNode ${selectedNodeId} crashed.`);
  };

  const handleRestartNode = () => {
    fi.restartNode(selectedNodeId);
    setLogMessage(`Recovered: DataNode ${selectedNodeId} restarted.`);
  };

  const handleCorruptBlock = () => {
    const node = backend.getNameNode().getNamespace().resolvePath('/input/sample.txt');
    if (node && node.type === 'FILE' && node.blocks.length > 0) {
      fi.corruptBlock(node.blocks[0]);
      setLogMessage(`Injected corruption on block ${node.blocks[0]}. Run 'hdfs fsck /' to diagnose.`);
    } else {
      setLogMessage('No sample file available to corrupt.');
    }
  };

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Distributed Systems Failure Injection Laboratory
          </h2>
          <p className="text-xs text-slate-400">
            Deliberately simulate DataNode crashes, block corruption, and network rack disconnections to observe automated HDFS re-replication.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Power className="w-4 h-4 text-red-400" /> DataNode Crash & Recovery
          </h3>
          <div className="space-y-2 text-xs">
            <label className="text-slate-400">Target DataNode:</label>
            <select
              value={selectedNodeId}
              onChange={(e) => setSelectedNodeId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded p-2 focus:outline-none"
            >
              {dns.map((dn) => (
                <option key={dn.id} value={dn.id}>
                  {dn.hostname} ({dn.id}) — {dn.state}
                </option>
              ))}
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleKillNode}
              className="flex-1 bg-red-600/20 hover:bg-red-600/30 text-red-400 border border-red-500/40 font-bold py-2 rounded-lg text-xs transition"
            >
              Kill DataNode
            </button>
            <button
              onClick={handleRestartNode}
              className="flex-1 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold py-2 rounded-lg text-xs transition flex items-center justify-center space-x-1"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Restart</span>
            </button>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" /> Block Corruption Injection
          </h3>
          <p className="text-xs text-slate-400">
            Deliberately corrupt checksum data for HDFS block replicas to test `hdfs fsck` detection.
          </p>
          <button
            onClick={handleCorruptBlock}
            className="w-full bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 border border-amber-500/40 font-bold py-2 rounded-lg text-xs transition"
          >
            Corrupt Block Checksum
          </button>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
            <Network className="w-4 h-4 text-purple-400" /> Network Rack Isolation
          </h3>
          <p className="text-xs text-slate-400">
            Disconnect `/rack-01` to simulate rack switch failure and observe cross-rack failover.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                fi.disconnectRack('/rack-01');
                setLogMessage('Rack /rack-01 disconnected.');
              }}
              className="flex-1 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 border border-purple-500/40 font-bold py-2 rounded-lg text-xs transition"
            >
              Isolate Rack 1
            </button>
            <button
              onClick={() => {
                fi.restoreRack('/rack-01');
                setLogMessage('Rack /rack-01 reconnected.');
              }}
              className="flex-1 bg-sky-600/20 hover:bg-sky-600/30 text-sky-400 border border-sky-500/40 font-bold py-2 rounded-lg text-xs transition"
            >
              Restore Rack
            </button>
          </div>
        </div>
      </div>

      {logMessage && (
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs font-mono text-slate-300 flex items-center space-x-2">
          <ShieldCheck className="w-4 h-4 text-sky-400" />
          <span>{logMessage}</span>
        </div>
      )}
    </div>
  );
};
