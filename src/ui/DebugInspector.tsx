import React, { useState } from 'react';
import { Activity, HelpCircle } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface DebugInspectorProps {
  backend: HadoopBackend;
}

export const DebugInspector: React.FC<DebugInspectorProps> = ({ backend }) => {
  const [topic, setTopic] = useState<string>('BLOCK_PLACEMENT');
  const [entityId, setEntityId] = useState<string>('blk_sample');
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleExplain = () => {
    const text = backend.getObservability().explainDecision(topic, entityId);
    setExplanation(text);
  };

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto space-y-6">
      {}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
            <Activity className="w-5 h-5 text-sky-400" />
            Decision Explainer & Simulation Debug Inspector
          </h2>
          <p className="text-xs text-slate-400">
            Inspect the underlying simulation state, event queues, and ask "Why did HDFS/YARN make this decision?"
          </p>
        </div>
      </div>

      {}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-400" /> Ask "Explain Decision"
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="space-y-1">
            <label className="text-slate-400">Decision Topic:</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded p-2 focus:outline-none"
            >
              <option value="BLOCK_PLACEMENT">HDFS Block Placement Policy</option>
              <option value="DATA_LOCALITY">MapReduce Data Locality Preference</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-slate-400">Target Entity ID:</label>
            <input
              type="text"
              value={entityId}
              onChange={(e) => setEntityId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 text-slate-200 rounded p-2 focus:outline-none font-mono"
            />
          </div>
        </div>

        <button
          onClick={handleExplain}
          className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition"
        >
          Explain Decision
        </button>

        {explanation && (
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 whitespace-pre-wrap">
            {explanation}
          </div>
        )}
      </div>
    </div>
  );
};
