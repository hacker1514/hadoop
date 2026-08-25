import React, { useState } from 'react';
import { BookOpen, CheckCircle, XCircle, Lightbulb } from 'lucide-react';
import { HadoopBackend } from '../core/backend/hadoopBackend';
import { PRACTICE_LABS, PracticeLab } from '../education/labs';

interface LabsViewProps {
  backend: HadoopBackend;
}

export const LabsView: React.FC<LabsViewProps> = ({ backend }) => {
  const [selectedLab, setSelectedLab] = useState<PracticeLab>(PRACTICE_LABS[0]);
  const [validationResult, setValidationResult] = useState<{ passed: boolean; feedback: string } | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleValidate = () => {
    const res = selectedLab.validate(backend);
    setValidationResult(res);
  };

  return (
    <div className="flex-1 bg-slate-950 p-6 overflow-y-auto flex flex-col lg:flex-row gap-6">
      {/* Labs List Sidebar */}
      <div className="w-full lg:w-80 bg-slate-900 border border-slate-800 rounded-xl p-4 space-y-3 shrink-0">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-2">
          <BookOpen className="w-5 h-5 text-sky-400" />
          <h3 className="text-sm font-bold text-slate-100 uppercase tracking-wider">Hadoop Practice Labs</h3>
        </div>

        <div className="space-y-2 max-h-[70vh] overflow-y-auto">
          {PRACTICE_LABS.map((lab) => {
            const isSelected = selectedLab.id === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => {
                  setSelectedLab(lab);
                  setValidationResult(null);
                  setShowHint(false);
                }}
                className={`w-full text-left p-3 rounded-lg border transition ${
                  isSelected
                    ? 'bg-sky-600/20 border-sky-500/40 text-slate-100 shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:bg-slate-800/60'
                }`}
              >
                <div className="text-xs font-bold text-sky-400">LAB {lab.id}</div>
                <div className="text-sm font-semibold truncate">{lab.title}</div>
                <span className="text-[10px] font-semibold bg-slate-800 px-2 py-0.5 rounded text-slate-400 inline-block mt-1">
                  {lab.difficulty}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lab Details Panel */}
      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex justify-between items-start border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Lab {selectedLab.id}</span>
              <h2 className="text-xl font-bold text-slate-100">{selectedLab.title}</h2>
              <p className="text-xs text-slate-400 mt-1">{selectedLab.description}</p>
            </div>
            <button
              onClick={handleValidate}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition shadow-lg flex items-center space-x-2"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Validate Solution</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">Instructions:</h4>
            <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
              {selectedLab.instructions.map((inst, i) => (
                <li key={i}>{inst}</li>
              ))}
            </ul>
          </div>

          {/* Validation Feedback Result */}
          {validationResult && (
            <div
              className={`p-4 rounded-lg border text-sm font-semibold flex items-center space-x-3 ${
                validationResult.passed
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
            >
              {validationResult.passed ? <CheckCircle className="w-5 h-5 shrink-0" /> : <XCircle className="w-5 h-5 shrink-0" />}
              <div>{validationResult.feedback}</div>
            </div>
          )}

          {/* Hints Section */}
          <div className="space-y-2">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-xs font-bold text-amber-400 hover:underline flex items-center space-x-1"
            >
              <Lightbulb className="w-4 h-4" />
              <span>{showHint ? 'Hide Lab Hint' : 'Show Lab Hint'}</span>
            </button>
            {showHint && (
              <div className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs p-3 rounded-lg">
                {selectedLab.hints.join(' ')}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
