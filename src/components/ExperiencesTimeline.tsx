import React from 'react';
import { EXPERIENCE } from '../data';
import { Briefcase, Calendar, MapPin, Milestone } from 'lucide-react';

export default function ExperiencesTimeline() {
  return (
    <div className="font-sans relative">
      {/* Structural Vertical timeline guide line */}
      <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-slate-200" />

      <div className="space-y-6 sm:space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div key={exp.id} className="relative pl-10 sm:pl-14 group">
            
            {/* Pulsing indicator marker */}
            <span className="absolute left-2.5 sm:left-4.5 top-1.5 w-3.5 h-3.5 rounded-full border border-slate-300 bg-white group-hover:bg-slate-900 group-hover:border-slate-900 flex items-center justify-center transition-all duration-300 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-white transition" />
            </span>

            {/* Inner Content Card layout */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-black/5 hover:border-slate-300 shadow-premium-sm hover:shadow-premium-md transition-all duration-300 relative">
              
              {/* Card Ribbon Details Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                <div>
                  <h4 className="font-display font-black text-slate-900 text-sm sm:text-base tracking-tight">
                    {exp.role}
                  </h4>
                  <div className="text-[11.5px] text-blue-600 font-bold flex items-center gap-1.5 mt-0.5">
                    <span>{exp.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" /> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-200/40 px-3 py-1 rounded-full text-[10px] font-mono text-slate-600 font-bold self-start sm:self-auto">
                  <Calendar className="w-3 h-3 text-slate-400" /> {exp.period}
                </div>
              </div>

              {/* Achievement Bullets details */}
              <ul className="space-y-2.5 mb-5">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-slate-500 text-[11px] sm:text-[11.5px] leading-relaxed flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-500 shrink-0 transition" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skill markers indicators */}
              <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                <span className="text-[9px] text-slate-400 font-mono uppercase tracking-wider mr-1">
                  Tools deployed:
                </span>
                {exp.skills.map(skill => (
                  <span 
                    key={skill}
                    className="bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-600 font-mono transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
