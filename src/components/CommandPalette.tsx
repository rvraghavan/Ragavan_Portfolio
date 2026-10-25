import React, { useState, useEffect } from 'react';
import { Search, Hash, Briefcase, Cpu, History, Trophy, Mail, Download, ArrowRight, ExternalLink, Sun, Moon } from 'lucide-react';
import { PROJECTS_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAssistant: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onOpenAssistant }) => {
  const { theme, toggleTheme } = useTheme();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open in parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sections = [
    { name: 'About & Introduction', id: '#about', icon: Hash, desc: 'Overview, headline, and core highlights' },
    { name: 'Executive Biography & Domains', id: '#bio', icon: Hash, desc: 'Experience across 8 diverse enterprise domains' },
    { name: 'Before & After Modernization', id: '#modernization', icon: Hash, desc: 'Interactive architecture transformation' },
    { name: 'Featured Projects & Case Studies', id: '#work', icon: Briefcase, desc: 'Monroney, iDoRAN, VDX, and Baker Hughes' },
    { name: 'Technology Ecosystem & Stack', id: '#skills', icon: Cpu, desc: 'Authentic SVG logos across Java, AWS, Angular' },
    { name: 'Career Journey Timeline', id: '#career', icon: History, desc: 'Work experience from Tech Mahindra to Paragon' },
    { name: 'Awards & Accolades', id: '#awards', icon: Trophy, desc: 'ERS Champion, 7/7 PCSAT, Pat on the Back' },
    { name: 'Education & Certifications', id: '#education', icon: Hash, desc: 'B.Tech IT, Udemy courses, AI White Belt' },
    { name: 'Contact & Links', id: '#connect', icon: Mail, desc: 'Email, LinkedIn, and direct messaging' },
  ];

  const filteredSections = sections.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.desc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS_DATA.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.client.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase()))
  ).slice(0, 4);

  const handleNavigate = (id: string) => {
    onClose();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-navy-950/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-navy-950/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a section name, project, or technology..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm sm:text-base text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-slate-800 text-slate-400 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Actions */}
          <div className="space-y-1">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3">
              Quick Actions
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenAssistant();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-navy-850 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="p-1 rounded bg-cyan-500/10 text-cyan-400">✨</span>
                <span>Ask Career Assistant (Q&A)</span>
              </span>
              <span className="text-[11px] font-mono text-cyan-400">Open Panel →</span>
            </button>
            <button
              onClick={() => {
                toggleTheme();
                onClose();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-navy-850 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="p-1 rounded bg-amber-500/10 text-amber-400">
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5 text-cyan-500" />}
                </span>
                <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">Theme</span>
            </button>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="V_Raghavan_Technical_Lead_Resume.pdf"
              onClick={onClose}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-navy-850 text-slate-300 hover:text-cyan-400 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume (PDF)</span>
              </span>
              <span className="text-[11px] font-mono text-slate-500">PDF Download</span>
            </a>
          </div>

          {/* Sections */}
          {filteredSections.length > 0 && (
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3">
                Jump to Portfolio Section
              </div>
              {filteredSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => handleNavigate(sec.id)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-navy-850 text-slate-300 hover:text-white transition-colors group text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <sec.icon className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-200 group-hover:text-cyan-300">
                        {sec.name}
                      </div>
                      <div className="text-[11px] text-slate-500">{sec.desc}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}

          {/* Projects */}
          {filteredProjects.length > 0 && (
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3">
                Featured Case Studies
              </div>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleNavigate('#work')}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-navy-850 text-slate-300 hover:text-white transition-colors group text-left"
                >
                  <div>
                    <div className="font-semibold text-slate-200 group-hover:text-cyan-300">
                      {p.title}
                    </div>
                    <div className="text-[11px] text-slate-500">Client: {p.client} • {p.role}</div>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">View in Work</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 border-t border-slate-800 bg-navy-950/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigate with mouse or arrow keys</span>
          <span>Press ESC to dismiss</span>
        </div>
      </div>
    </div>
  );
};
