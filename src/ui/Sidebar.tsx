import React from 'react';
import { LayoutDashboard, HardDrive, Cpu, Terminal, AlertTriangle, BookOpen, Layers, Network, Activity } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onSelectTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Cluster Dashboard', icon: LayoutDashboard },
    { id: 'hdfs', label: 'HDFS Visualizer', icon: HardDrive },
    { id: 'mapreduce', label: 'MapReduce Pipeline', icon: Layers },
    { id: 'yarn', label: 'YARN Scheduler', icon: Cpu },
    { id: 'network', label: 'Network Topology', icon: Network },
    { id: 'terminal', label: 'Hadoop Terminal', icon: Terminal },
    { id: 'labs', label: 'Practice Labs (15)', icon: BookOpen },
    { id: 'failures', label: 'Failure Laboratory', icon: AlertTriangle },
    { id: 'inspector', label: 'Observability & Debug', icon: Activity },
  ];

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-3 select-none shrink-0">
      <div className="space-y-1">
        <div className="px-3 py-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Simulation Laboratory
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-sky-600/20 text-sky-400 border border-sky-500/30 shadow-sm'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-sky-400' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-3 bg-slate-950/60 rounded-lg border border-slate-800 text-xs text-slate-400 space-y-1">
        <div className="font-semibold text-slate-300">Cluster Status</div>
        <div>DataNodes: 3 / 3 Live</div>
        <div>Rack Topology: 2 Racks</div>
        <div>Safemode: OFF</div>
      </div>
    </aside>
  );
};
