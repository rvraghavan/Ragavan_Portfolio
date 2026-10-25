import React from 'react';
import { UserCheck, Code2, ShieldAlert, Cpu, Award, ArrowUpRight, Compass, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const domains = [
    { name: "Automotive & Manufacturing", detail: "Nissan North America (Monroney labels, plant workflows)" },
    { name: "Energy & Industrial Specs", detail: "Baker Hughes, USA (Spec extraction & Kafka pipelines)" },
    { name: "Global Engineering & EPC", detail: "JGC Corporation, Japan (VDX application, 7/7 PCSAT)" },
    { name: "Telecommunications", detail: "Powered by Verizon (Broadband Gateway & UI modernization)" },
    { name: "Maritime & Shipping", detail: "Simatech Shipping LLC, Dubai (Feedertech container scheduling)" },
    { name: "IP & Legal Enterprise", detail: "De Penning & De Penning (Patent lifecycle management ERP)" },
    { name: "Healthcare & Hospital ERP", detail: "Regional hospital network (HIS ERP clinical billing)" },
    { name: "Financial & Inventory Accounting", detail: "NFA International (Double-entry ledger & Jasper statements)" }
  ];

  return (
    <section id="bio" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Editorial Biography (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Executive Biography & Engineering Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Turning Complex Legacy Systems Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              High-Resilience Cloud Platforms
            </span>
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            {PERSONAL_INFO.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Core Competencies Matrix */}
          <div className="pt-4 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Core Competencies Verified in Resume:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Enterprise Solutions",
                "Agile / Scrum Methodologies",
                "Cloud Computing (AWS)",
                "Security & Remediation",
                "System Integration",
                "Performance Optimization",
                "Quality Assurance",
                "Project & Team Management",
                "Business Analysis"
              ].map((comp, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-navy-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Cross-Domain Industry Track Record (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Multi-Industry Track Record
              </span>
              <span className="text-[10px] font-mono text-slate-500">8 Diverse Domains</span>
            </div>

            <div className="space-y-3">
              {domains.map((dom, i) => (
                <div key={i} className="p-3 rounded-xl bg-navy-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="text-xs font-semibold text-white flex items-center justify-between">
                    <span>{dom.name}</span>
                    <span className="text-cyan-400 text-[10px] font-mono">Industry</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{dom.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <span>Client Diversity: USA • Japan • UAE • India</span>
              <span className="text-cyan-400">12+ Years</span>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Pillars Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PERSONAL_INFO.engineeringPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-navy-900/50 border border-slate-800/80 hover:border-cyan-500/30 hover:bg-navy-850/60 transition-all duration-200 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 inline-block">
                {pillar.tag}
              </span>
              <h3 className="text-base font-bold text-white font-display">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500 font-mono flex items-center gap-1 text-cyan-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Proven In Production</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
