import React, { useState } from 'react';
import { MessageSquare, Sparkles, X, ChevronRight, Search, ShieldCheck, CheckCircle } from 'lucide-react';
import { CAREER_ASSISTANT_QA } from '../data/portfolioData';
import { AssistantQA } from '../types';

interface CareerAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CareerAssistantModal: React.FC<CareerAssistantModalProps> = ({ isOpen, onClose }) => {
  const [selectedQA, setSelectedQA] = useState<AssistantQA>(CAREER_ASSISTANT_QA[0]);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchFilter, setSearchFilter] = useState<string>('');

  if (!isOpen) return null;

  const categories = ['All', 'Modernization', 'Leadership', 'Cloud', 'AI & Innovation', 'Security & Quality', 'Metrics'];

  const filteredQuestions = CAREER_ASSISTANT_QA.filter((item) => {
    const matchesCat = filterCategory === 'All' || item.category === filterCategory;
    const matchesQuery = 
      item.question.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchFilter.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Ask About My Experience
              </h3>
              <p className="text-xs text-slate-400">
                Deterministic Recruiter Exploration Assistant • Strictly Resume-Grounded
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 py-3 border-b border-slate-800 bg-navy-950/60 flex items-center space-x-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                filterCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white hover:bg-navy-850'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Content Split: Left Questions List, Right Detailed Answer */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          {/* Left: Questions column (5 cols) */}
          <div className="md:col-span-5 border-r border-slate-800/80 overflow-y-auto p-4 space-y-2 max-h-[500px]">
            <div className="relative mb-3">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search topics..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-navy-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>

            {filteredQuestions.map((qa, i) => (
              <button
                key={i}
                onClick={() => setSelectedQA(qa)}
                className={`w-full text-left p-3 rounded-xl border transition-all flex items-start justify-between gap-2 text-xs ${
                  selectedQA.question === qa.question
                    ? 'bg-cyan-950/40 border-cyan-400/50 text-white font-medium shadow-md shadow-cyan-500/5'
                    : 'bg-navy-950/40 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-navy-850/60'
                }`}
              >
                <span>{qa.question}</span>
                <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              </button>
            ))}
          </div>

          {/* Right: Detailed Answer (7 cols) */}
          <div className="md:col-span-7 p-6 overflow-y-auto space-y-5 bg-navy-900/60 flex flex-col justify-between max-h-[500px]">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {selectedQA.category}
                </span>
                {selectedQA.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    #{tag}
                  </span>
                ))}
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white font-display">
                {selectedQA.question}
              </h4>

              <div className="p-4 rounded-xl bg-navy-950/70 border border-slate-800 text-sm text-slate-200 leading-relaxed space-y-3">
                <p>{selectedQA.answer}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-navy-950/40 border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Deterministic verified content from resume</span>
              </span>
              <span className="font-mono text-cyan-400">Zero Hallucinations</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-navy-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Explore recruiter questions on technical leadership & architecture</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
