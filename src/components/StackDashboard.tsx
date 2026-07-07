import React, { useState } from 'react';
import { TECH_STACK, TechItem } from '../data';
import { Cpu, Terminal, Sparkles, Check } from 'lucide-react';

export default function StackDashboard() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'database'>('all');

  const filteredStack = TECH_STACK.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const getTechDetail = (name: string) => {
    switch (name) {
      case 'React':
        return 'High-performance components, virtual state tracking, lazy rendering corridors, React 19 hooks, and custom concurrent loop models.';
      case 'TypeScript':
        return 'Strictly typed schema validation layers, type guards, custom generic operators, safe type assertions, and clean type-safety interfaces.';
      case 'Node.js':
        return 'Asynchronous file systems routing, secure multi-threaded proxying, express payloads, and custom server-side routing modules.';
      case 'MongoDB':
        return 'Document-based data storage for proposals, votes, users, and activity logs, with a JSON fallback layer for offline development.';
      case 'Mongoose':
        return 'Schema modeling and validation for MongoDB collections, keeping data structure consistent across the governance dashboard backend.';
      case 'Tailwind CSS':
        return 'Pixel-perfect UI design execution, screen fluidities, responsive design breakpoints, custom theme bindings, and elegant styles variables.';
      case 'Socket.IO':
        return 'Low-latency duplex client-server messaging, real-time ticket sockets tracking, room isolation channels, and heartbeat monitors.';
      case 'Express':
        return 'Middleware validation filters, high-throughput REST routers, security controls (Helmet, CORS tokens), and robust API pipelines.';
      case 'Web3 / DeFi Integrations':
        return 'RPC connection routers, multi-sig escrow handlers, token-staking trackers, and decentralized state synchronization feeds.';
      default:
        return 'Professional enterprise implementation and continuous system performance engineering.';
    }
  };

  return (
    <div className="font-sans">
      {/* Upper Category Selector Filter */}
      <div className="flex items-center gap-1.5 mb-6 overflow-x-auto pb-1">
        {(['all', 'frontend', 'backend', 'database'] as const).map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition ${
              selectedCategory === cat 
                ? 'bg-slate-950 text-white shadow-premium-sm' 
                : 'bg-white hover:bg-slate-100 text-slate-500 border border-slate-200/60'
            }`}
          >
            {cat === 'all' ? 'All Stack [10]' : `${cat} tools`}
          </button>
        ))}
      </div>

      {/* Grid of Stack items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredStack.map((tech, idx) => (
          <div 
            key={tech.name}
            className="bg-white p-5 rounded-xl border border-black/5 hover:border-slate-400 shadow-premium-sm hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 uppercase font-mono font-bold text-[9px] text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-slate-400 group-hover:text-black transition" /> {tech.category}
                </div>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-semibold">
                  {tech.experienceYears}Y Exp
                </span>
              </div>

              <h4 className="font-display font-black text-slate-900 group-hover:text-blue-600 transition text-[13px] tracking-tight mb-2 flex items-center gap-1">
                {tech.name}
              </h4>
              
              <p className="text-slate-500 text-[10.5px] leading-relaxed mb-4">
                {getTechDetail(tech.name)}
              </p>
            </div>

            {/* Micro progress line track */}
            <div className="space-y-1 mt-auto">
              <div className="flex items-center justify-between font-mono text-[9px] text-slate-450 font-bold">
                <span>Core Fluency</span>
                <span className="text-slate-905">{tech.proficiency}%</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-slate-900 h-full rounded-full transition-all duration-700 ease-out group-hover:bg-blue-600" 
                  style={{ width: `${tech.proficiency}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
