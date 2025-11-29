import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ChartDataPoint } from '../types';

// --- Risk Matrix Component ---
export const RiskMatrix: React.FC = () => {
  const [activeZone, setActiveZone] = useState<string | null>(null);

  const zones = [
    { id: 'low', color: 'bg-green-500', label: 'Low (Green)', desc: 'Monitor only. No active mitigation needed.', priority: 'Low' },
    { id: 'med', color: 'bg-yellow-400', label: 'Medium (Yellow)', desc: 'Monitor closely. Prepare contingency plans.', priority: 'Medium' },
    { id: 'high', color: 'bg-red-600', label: 'High (Red)', desc: 'Immediate action and mitigation required.', priority: 'High' }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center w-full h-full p-4">
      {/* Matrix Container with left margin to accommodate the label */}
      <div className="relative w-full max-w-md aspect-square grid grid-cols-3 grid-rows-3 gap-1 border-4 border-navy-800 bg-navy-800 rounded-lg shadow-2xl shrink-0 md:ml-12">
        {/* Y-Axis Label - Adjusted position to prevent overlap */}
        <div className="absolute -left-12 md:-left-16 inset-y-0 flex items-center justify-center pointer-events-none">
          <div className="-rotate-90 font-bold text-accent-400 text-sm md:text-base tracking-widest whitespace-nowrap">
            PROBABILITY
          </div>
        </div>
        
        {/* X-Axis Label */}
        <div className="absolute left-0 -bottom-10 md:-bottom-12 w-full text-center font-bold text-accent-400 text-sm md:text-base tracking-widest pointer-events-none">
          IMPACT
        </div>

        {/* Matrix Cells */}
        {/* Row 3 (High Prob) */}
        <div className="bg-yellow-400 hover:bg-yellow-300 transition cursor-pointer flex items-center justify-center text-navy-900 font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('med')}>
           Med
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-red-500 hover:bg-red-400 transition cursor-pointer flex items-center justify-center text-white font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('high')}>
           High
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-red-600 hover:bg-red-500 transition cursor-pointer flex items-center justify-center text-white font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('high')}>
           Crit
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        
        {/* Row 2 (Med Prob) */}
        <div className="bg-green-500 hover:bg-green-400 transition cursor-pointer flex items-center justify-center text-navy-900 font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('low')}>
           Low
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-300 transition cursor-pointer flex items-center justify-center text-navy-900 font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('med')}>
           Med
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-red-500 hover:bg-red-400 transition cursor-pointer flex items-center justify-center text-white font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('high')}>
           High
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>

        {/* Row 1 (Low Prob) */}
        <div className="bg-green-600 hover:bg-green-500 transition cursor-pointer flex items-center justify-center text-white font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('low')}>
           Low
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-green-500 hover:bg-green-400 transition cursor-pointer flex items-center justify-center text-navy-900 font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('low')}>
           Low
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
        <div className="bg-yellow-400 hover:bg-yellow-300 transition cursor-pointer flex items-center justify-center text-navy-900 font-bold text-sm md:text-lg relative group" onClick={() => setActiveZone('med')}>
           Med
           <div className="absolute inset-0 bg-white/20 hidden group-hover:block transition-all"></div>
        </div>
      </div>

      <div className="w-full md:w-1/3 space-y-4">
        <h3 className="text-xl font-bold text-white border-b border-gray-600 pb-2">Legend</h3>
        {zones.map((z) => (
          <div 
            key={z.id} 
            className={`p-4 rounded-lg cursor-pointer transition-all border-l-4 ${activeZone === z.id ? 'bg-navy-700 scale-105 border-white shadow-lg' : 'bg-navy-800 border-transparent hover:bg-navy-700'} `}
            onMouseEnter={() => setActiveZone(z.id)}
            onClick={() => setActiveZone(z.id)}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 rounded-full ${z.color} shadow-sm`}></div>
              <span className="font-bold text-lg">{z.label}</span>
            </div>
            <p className="text-gray-400 mt-1 pl-7 text-sm">{z.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Custom Bar Chart ---
export const StrategyChart: React.FC<{ data: ChartDataPoint[] }> = ({ data }) => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis type="number" stroke="#94a3b8" />
          <YAxis dataKey="name" type="category" width={100} stroke="#94a3b8" tick={{fontSize: 14}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }} 
            cursor={{fill: 'rgba(255,255,255,0.05)'}}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill || '#38bdf8'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};