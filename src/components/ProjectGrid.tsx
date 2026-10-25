import React, { useState } from 'react';
import { Briefcase, ArrowUpRight, Sparkles, Search, Layers, Calendar, ChevronRight } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { ProjectDetailModal } from './ProjectDetailModal';

export const ProjectGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Enterprise Modernization',
    'AI & Document Automation',
    'Cloud Solutions',
    'Full Stack Web'
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Curated Engineering Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects & Case Studies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Real enterprise deliveries spanning automotive modernization, AI invoice automation, Japanese engineering platforms, and cloud-native systems.
          </p>
        </div>

        {/* Search input */}
        <div className="mt-6 md:mt-0 relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search projects or tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                : 'bg-navy-900/60 text-slate-400 hover:text-white hover:bg-navy-850 border border-slate-800/80'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
              project.featured
                ? 'bg-navy-900/80 border-slate-700/80 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10'
                : 'bg-navy-900/50 border-slate-800/80 hover:border-slate-700 hover:bg-navy-900/80'
            }`}
          >
            {/* Top Bar */}
            <div className="p-6 sm:p-7 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Featured Case Study
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                    {project.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2.5 rounded-xl bg-navy-850 text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 border border-slate-800 transition-all shrink-0"
                  title="Explore Project Details"
                  aria-label={`Explore details for ${project.title}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>

              {/* Client & Role row */}
              <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 font-mono">
                <span>Client: <strong className="text-slate-200">{project.client}</strong></span>
                <span>•</span>
                <span>Role: <strong className="text-cyan-400">{project.role}</strong></span>
                <span>•</span>
                <span>{project.duration}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {project.summary}
              </p>

              {/* Documented Highlights */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                  Key Accomplishments:
                </div>
                <ul className="space-y-1.5">
                  {project.highlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="text-xs text-slate-300 flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">✓</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Bar: Tech Logos & CTA */}
            <div className="p-6 pt-4 border-t border-slate-800/80 bg-navy-950/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-navy-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    title={tech}
                  >
                    <TechIcon name={tech} size={14} />
                    <span>{tech}</span>
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="text-[11px] font-mono text-slate-500 px-1">
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 transition-all shrink-0"
              >
                <span>Explore Deep Dive</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal Component */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
