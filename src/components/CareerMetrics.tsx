import React, { useEffect, useState, useRef } from 'react';
import { Clock, Users, TrendingDown, Award, CheckCircle } from 'lucide-react';
import { METRICS_DATA } from '../data/portfolioData';

export const CareerMetrics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={containerRef} className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {METRICS_DATA.map((item) => {
          return (
            <div
              key={item.id}
              className="relative p-6 rounded-2xl bg-navy-900/80 border border-slate-800/90 shadow-xl backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                    {item.icon === 'clock' && <Clock className="w-5 h-5" />}
                    {item.icon === 'users' && <Users className="w-5 h-5" />}
                    {item.icon === 'trending-down' && <TrendingDown className="w-5 h-5" />}
                    {item.icon === 'award' && <Award className="w-5 h-5" />}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>

                {/* Animated counter display */}
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight group-hover:text-cyan-300 transition-colors">
                    {isVisible ? item.value : 0}
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-cyan-400 font-display">
                    {item.suffix}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-slate-200">
                  {item.label}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Resume Source</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Validated
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
