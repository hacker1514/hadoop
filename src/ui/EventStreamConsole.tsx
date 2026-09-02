import React, { useState } from 'react';
import { Activity, Filter } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';

interface EventStreamConsoleProps {
  backend: HadoopBackend;
}

export const EventStreamConsole: React.FC<EventStreamConsoleProps> = ({ backend }) => {
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  const events = backend.getEngine().getEventStore().getEvents();

  const filteredEvents =
    filterCategory === 'ALL'
      ? events
      : events.filter((e) => e.category === filterCategory);

  const categories: string[] = ['ALL', 'HDFS', 'YARN', 'MAPREDUCE', 'FAILURE', 'SYSTEM'];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Activity className="w-5 h-5 text-sky-400" />
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">
            Real-Time Event Stream Log
          </h3>
        </div>

        {}
        <div className="flex items-center space-x-1.5 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500 ml-1 mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-0.5 rounded font-semibold transition ${
                filterCategory === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {}
      <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 h-64 overflow-y-auto font-mono text-xs space-y-2">
        {filteredEvents.length === 0 ? (
          <div className="text-slate-600 italic text-center py-10">No event logs recorded for this category yet.</div>
        ) : (
          filteredEvents.slice().reverse().map((evt) => (
            <div key={evt.eventId} className="flex items-start space-x-3 border-b border-slate-900 pb-1.5">
              <span className="text-slate-500 select-none">
                [{new Date(evt.timestamp).toISOString().slice(11, 19)}]
              </span>
              <span
                className={`font-bold px-1.5 py-0.2 rounded text-[10px] ${
                  evt.category === 'HDFS'
                    ? 'bg-sky-500/10 text-sky-400'
                    : evt.category === 'YARN'
                    ? 'bg-purple-500/10 text-purple-400'
                    : evt.category === 'MAPREDUCE'
                    ? 'bg-amber-500/10 text-amber-400'
                    : evt.category === 'FAILURE'
                    ? 'bg-red-500/10 text-red-400'
                    : 'bg-slate-800 text-slate-300'
                }`}
              >
                {evt.category}
              </span>
              <span className="text-slate-300 font-bold">{evt.source}:</span>
              <span className="text-slate-200">{evt.type}</span>
              <span className="text-slate-500 truncate text-[11px]">
                {JSON.stringify(evt.payload)}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
