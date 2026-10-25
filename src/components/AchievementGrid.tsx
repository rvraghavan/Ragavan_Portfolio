import React from 'react';
import { Trophy, Award, Star, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';
import { AWARDS_DATA } from '../data/portfolioData';

export const AchievementGrid: React.FC = () => {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <Trophy className="w-3.5 h-3.5" />
          <span>Honors & Professional Accolades</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Executive Recognition</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Formal commendations awarded by corporate leadership, global enterprise clients, and cloud marketplaces for engineering excellence.
        </p>
      </div>

      {/* Recognition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS_DATA.map((item) => (
          <div
            key={item.id}
            className="group p-6 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-navy-850/80 transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                  {item.iconType === 'trophy' && <Trophy className="w-5 h-5" />}
                  {item.iconType === 'star' && <Star className="w-5 h-5" />}
                  {item.iconType === 'award' && <Award className="w-5 h-5" />}
                  {item.iconType === 'badge' && <Sparkles className="w-5 h-5" />}
                </span>

                {item.highlightMetric && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-semibold">
                    {item.highlightMetric}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-slate-400 font-mono mt-1">
                  <span>{item.issuer}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
              <span>Verified Resume Record</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> Authenticated
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
