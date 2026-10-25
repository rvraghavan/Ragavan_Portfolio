import React from 'react';
import { ArrowUp, Heart, ShieldCheck, Mail, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-navy-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2 font-display text-sm font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>V. Raghavan • Technical Lead & Cloud Solutions</span>
          </div>
          <p className="text-slate-500 max-w-md">
            Engineered with modern React, TypeScript & Tailwind CSS. Information architecture grounded in 12+ years of verified enterprise engineering.
          </p>
          <div className="flex items-center justify-center md:justify-start space-x-1.5 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Strict privacy adherence: candidate passport and residential data protected.</span>
          </div>
        </div>

        {/* Center / Right Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#career" className="hover:text-cyan-400 transition-colors">Career</a>
          <a href="#connect" className="hover:text-cyan-400 transition-colors">Connect</a>
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline flex items-center gap-1.5"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 hover:bg-navy-850 transition-all flex items-center gap-2 group"
          title="Scroll to top"
        >
          <span className="text-[11px] font-mono">Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 font-mono">
        <div>© {new Date().getFullYear()} V. Raghavan. All professional rights reserved.</div>
        <div>Crafted with precision • </div>
      </div>
    </footer>
  );
};
