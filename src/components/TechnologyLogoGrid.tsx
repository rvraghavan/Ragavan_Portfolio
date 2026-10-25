
import React, { useState } from 'react';
import {
  Cpu,
  Search,
  Layers,
  Server,
  Layout,
  Cloud,
  Database,
  Terminal,
  Shield,
} from 'lucide-react';

import { TECH_SKILLS } from '../data/portfolioData';
import { TechCategory } from '../types';
import { TechIcon } from './TechIcon';

export const TechnologyLogoGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<TechCategory>('all');

  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs: {
    id: TechCategory;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: 'all', label: 'All Technologies', icon: Layers },
    { id: 'backend', label: 'Backend & Java', icon: Server },
    { id: 'frontend', label: 'Frontend & UI', icon: Layout },
    { id: 'cloud', label: 'AWS & Cloud', icon: Cloud },
    { id: 'data', label: 'Data & Queues', icon: Database },
    { id: 'devops', label: 'DevOps & Tools', icon: Terminal },
    { id: 'architecture', label: 'Architecture', icon: Shield },
  ];

  const filteredSkills = TECH_SKILLS.filter((item) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesCategory =
      activeCategory === 'all' ||
      item.category === activeCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(query) ||
      (item.experience?.toLowerCase().includes(query) ?? false);

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Technology Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Engineering Tools &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Technology Stack
            </span>
          </h2>

          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Authentic toolchains, languages, cloud platforms, and
            architectures leveraged across 12+ years of enterprise
            production delivery.
          </p>
        </div>

        {/* Search */}
        <div className="mt-6 md:mt-0 relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />

          <input
            type="text"
            placeholder="Search technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search technologies"
            className="w-full pl-10 pr-4 py-2 bg-navy-900 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-800/80">
        {filterTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeCategory === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              aria-pressed={isActive}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20'
                  : 'bg-navy-900/60 text-slate-400 hover:text-white hover:bg-navy-850 border border-slate-800/80'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Technology Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 sm:gap-x-5 sm:gap-y-12">
        {filteredSkills.map((tech) => (
          <div
            key={tech.name}
            tabIndex={0}
            aria-label={`${tech.name}: ${tech.experience || tech.category}`}
            className="
              group relative z-0
              hover:z-50 focus-within:z-50
              p-4 rounded-xl
              bg-navy-900/50 hover:bg-navy-850/80
              border border-slate-800
              hover:border-cyan-500/40
              transition-all duration-200
              flex flex-col items-center text-center
              hover:-translate-y-1
              hover:shadow-xl hover:shadow-cyan-500/5
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-cyan-400
              cursor-default
            "
          >
            {/* Technology Logo */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center p-2 mb-3 bg-navy-950 border border-slate-800 group-hover:border-slate-700 transition-colors group-hover:scale-110 duration-200"
              style={{
                boxShadow: `0 0 20px -8px ${tech.brandColor}30`,
              }}
            >
              <TechIcon name={tech.name} size={28} />
            </div>

            {/* Technology Name */}
            <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
              {tech.name}
            </span>

            {/* Short Description */}
            <span className="text-[11px] text-slate-500 mt-1 line-clamp-1 group-hover:text-slate-400">
              {tech.experience || tech.category}
            </span>

            {/* Description Tooltip */}
            <div
              role="tooltip"
              className="
                absolute inset-x-2 top-full mt-2
                z-50
                invisible opacity-0
                pointer-events-none
                group-hover:visible group-hover:opacity-100
                group-focus:visible group-focus:opacity-100
                transition-opacity duration-200
              "
            >
              <div
                className="
                  relative p-3 rounded-lg
                  bg-[#060913]
                  border border-cyan-500/40
                  text-[11px] text-slate-300
                  text-left leading-relaxed
                  shadow-2xl shadow-black/40
                  whitespace-normal break-words
                "
              >
                {/* Tooltip pointer */}
                <span
                  aria-hidden="true"
                  className="
                    absolute -top-1.5 left-1/2
                    -translate-x-1/2
                    w-3 h-3 rotate-45
                    bg-[#060913]
                    border-l border-t border-cyan-500/40
                  "
                />

                <div className="relative font-semibold text-cyan-400 mb-1">
                  {tech.name}
                </div>

                <div className="relative">
                  {tech.experience || `${tech.name} · ${tech.category}`}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty Search State */}
      {filteredSkills.length === 0 && (
        <div className="py-12 text-center">
          <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />

          <p className="text-slate-300 font-medium">
            No technologies found
          </p>

          <p className="text-sm text-slate-500 mt-1">
            Try another search term or category.
          </p>

          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="mt-4 px-4 py-2 rounded-lg text-sm text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 p-4 rounded-xl bg-navy-900/40 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <span>
          Authentic SVG brand assets · Filterable by architectural domain
        </span>

        <span className="font-mono text-cyan-400">
          {filteredSkills.length} Technologies Filtered
        </span>
      </div>
    </section>
  );
};
