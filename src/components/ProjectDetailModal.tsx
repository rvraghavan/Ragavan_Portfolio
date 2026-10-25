import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Calendar, Building, User, Award, CheckCircle, ChevronRight, Layers, FileCode2, BarChart3, HelpCircle } from 'lucide-react';
import { Project } from '../types';
import { TechIcon } from './TechIcon';
import { ArchitectureDiagram } from './ArchitectureDiagram';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'implementation' | 'outcomes'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { deepDive } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-navy-950/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-navy-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 flex items-start justify-between">
          <div className="space-y-2 pr-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-slate-500" />
                {project.organization}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {project.duration}
              </span>
            </div>
            
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white font-display">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-cyan-300/90 font-mono">
              Client: {project.client} • Role: {project.role}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center px-6 border-b border-slate-800 bg-navy-950/60 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileCode2 className="w-4 h-4" />
            Overview & Context
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-4 h-4" />
            Architecture & Tech Stack
          </button>
          <button
            onClick={() => setActiveTab('implementation')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'implementation'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            Implementation & Trade-offs
          </button>
          <button
            onClick={() => setActiveTab('outcomes')}
            className={`px-4 py-3 text-xs sm:text-sm font-medium border-b-2 transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'outcomes'
                ? 'border-cyan-400 text-cyan-400 bg-cyan-500/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Documented Outcomes
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2">Business Context</h4>
                <p className="text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
                  {deepDive.businessContext}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-amber-400 mb-2">Engineering Challenge</h4>
                <p className="text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-slate-800/80">
                  {deepDive.engineeringChallenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-2">Technical Leadership Responsibilities</h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {deepDive.roleResponsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300 bg-navy-950/40 p-3 rounded-lg border border-slate-800/60">
                      <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2">System Architecture Overview</h4>
                <p className="text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-slate-800/80 mb-4">
                  {deepDive.architectureOverview}
                </p>

                {deepDive.diagramType && (
                  <ArchitectureDiagram type={deepDive.diagramType} />
                )}
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">Authentic Technology Ecosystem Used</h4>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((techName) => (
                    <div 
                      key={techName} 
                      className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-800 text-xs font-mono text-slate-200"
                    >
                      <TechIcon name={techName} size={16} />
                      <span>{techName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'implementation' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-2">Implementation Highlights</h4>
                <div className="space-y-2.5">
                  {deepDive.implementationHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 bg-navy-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-purple-400 mb-2">Engineering Trade-offs & Decisions</h4>
                <div className="space-y-2.5">
                  {deepDive.technicalTradeoffs.map((tradeoff, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-300 bg-navy-950/40 p-3.5 rounded-xl border border-slate-800/60">
                      <span className="text-purple-400 font-bold mt-0.5">•</span>
                      <span>{tradeoff}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'outcomes' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-3">Documented Achievements & Metrics</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {deepDive.documentedOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 flex items-start space-x-3">
                      <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold text-emerald-300 block mb-1">Documented Impact #{idx + 1}</span>
                        <p className="text-xs text-slate-300">{outcome}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800 text-xs text-slate-400">
                <p>
                  <strong>Verification Note:</strong> All client names, dates, metrics (such as the 10% cost reduction and 7/7 PCSAT rating), and team sizes reflect the candidate's verified resume records.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-navy-950/80 flex items-center justify-between text-xs text-slate-400">
          <span>Press <kbd className="px-1.5 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">ESC</kbd> to exit</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors font-medium text-xs"
          >
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
};
