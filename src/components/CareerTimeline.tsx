import React, { useState } from 'react';
import { History, ChevronDown, ChevronUp, Download, Building2, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { CAREER_JOURNEY, PERSONAL_INFO } from '../data/portfolioData';

export const CareerTimeline: React.FC = () => {
  // Keep first two expanded by default
  const [expandedIds, setExpandedIds] = useState<string[]>(['tech-mahindra', 'hcl-tech']);

  const toggleExpand = (id: string) => {
    setExpandedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedIds(CAREER_JOURNEY.map(j => j.id));
  };

  const collapseAll = () => {
    setExpandedIds([]);
  };

  return (
    <section id="career" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <History className="w-3.5 h-3.5" />
            <span>Progressive Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Career Journey & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience Timeline</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Over a decade of progressive leadership in software engineering, modernizing mission-critical architectures and guiding Agile delivery squads.
          </p>
        </div>

        {/* Action Controls */}
        <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-navy-900 border border-slate-800 p-1 rounded-lg">
            <button
              onClick={expandAll}
              className="px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Expand All
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={collapseAll}
              className="px-3 py-1 text-xs text-slate-400 hover:text-white transition-colors"
            >
              Collapse
            </button>
          </div>

          <a
            href={PERSONAL_INFO.resumePdfUrl}
            download="V_Raghavan_Technical_Lead_Resume.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </a>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {CAREER_JOURNEY.map((item) => {
          const isExpanded = expandedIds.includes(item.id);

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div 
                className={`absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.isCurrent
                    ? 'border-cyan-400 bg-cyan-950 shadow-lg shadow-cyan-500/30'
                    : 'border-slate-700 bg-navy-950 group-hover:border-slate-500'
                }`}
              >
                <div 
                  className={`w-2 h-2 rounded-full ${
                    item.isCurrent ? 'bg-cyan-400 animate-pulse' : 'bg-slate-600'
                  }`} 
                />
              </div>

              {/* Card Container */}
              <div 
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  item.isCurrent
                    ? 'bg-navy-900/90 border-cyan-500/30 shadow-xl shadow-cyan-500/5'
                    : 'bg-navy-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header (Clickable) */}
                <div 
                  onClick={() => toggleExpand(item.id)}
                  className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-navy-850/40 transition-colors"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-slate-800/80 text-cyan-300 border border-slate-700">
                        {item.company}
                      </span>
                      {item.isCurrent && (
                        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Current Role
                        </span>
                      )}
                      {item.client && (
                        <span className="text-xs text-slate-400">
                          Client: <strong className="text-slate-300">{item.client}</strong>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                      {item.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      className="p-2 rounded-lg bg-navy-850 text-slate-400 group-hover:text-white border border-slate-800"
                      aria-label={isExpanded ? "Collapse role" : "Expand role"}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Collapsible Body */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 space-y-6 text-sm">
                    {/* Responsibilities */}
                    <div className="pt-4 space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                        Core Technical Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {item.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements if any */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
                        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 font-semibold uppercase">
                          <Award className="w-3.5 h-3.5" />
                          <span>Documented Milestone Achievements</span>
                        </div>
                        <ul className="space-y-1.5">
                          {item.achievements.map((ach, idx) => (
                            <li key={idx} className="text-xs text-slate-200 flex items-start space-x-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Tag Row */}
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">
                        Technologies Leveraged:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-navy-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
