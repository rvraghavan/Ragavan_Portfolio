import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRightLeft, ShieldAlert, ShieldCheck, Sparkles, Server, Zap, RefreshCw } from 'lucide-react';

export const ModernizationSlider: React.FC = () => {
  const [activeView, setActiveView] = useState<'split' | 'legacy' | 'modern'>('split');
  const [sliderPos, setSliderPos] = useState<number>(50);

  const legacyAttributes = [
    {
      title: "Monolithic & Mainframe Dependencies",
      detail: "Tight coupling to legacy mainframe databases (IBM Db2) requiring complex synchronization and manual intervention.",
      icon: Server,
      badge: "High Maintenance"
    },
    {
      title: "Outdated Runtimes & Security Backlogs",
      detail: "Legacy Java 11 deployments subject to Veracode CVE vulnerabilities across unpatched third-party dependencies.",
      icon: ShieldAlert,
      badge: "Security Risks"
    },
    {
      title: "High Cognitive Complexity",
      detail: "Monolithic codebases with convoluted cyclomatic logic that slowed down onboarding and elevated defect rates in SonarQube.",
      icon: AlertTriangle,
      badge: "Slow Velocity"
    },
    {
      title: "Rigid Infrastructure & Fixed Compute Costs",
      detail: "On-premise physical servers or oversized VMs operating with high idle overhead and slow recovery cycles.",
      icon: RefreshCw,
      badge: "High Run Cost"
    }
  ];

  const modernAttributes = [
    {
      title: "Containerized & Serverless AWS Cloud",
      detail: "Decoupled microservices on AWS ECS Fargate and Lambda with automated autoscaling and zero server maintenance.",
      icon: Zap,
      badge: "Elastic & Resilient"
    },
    {
      title: "Modern Java 17 & Hardened Security",
      detail: "Upgraded to Java 17 LTS, remediating third-party vulnerabilities and enforcing read-only root filesystems for AWS Security Hub [ECS.5] and Prowler.",
      icon: ShieldCheck,
      badge: "Prowler / ECS.5 Compliant"
    },
    {
      title: "Refactored Clean Architecture",
      detail: "Restructured domain boundaries, reduced SonarQube cognitive complexity, and automated unit test pipelines with Jenkins.",
      icon: Sparkles,
      badge: "Clean Code"
    },
    {
      title: "Documented 10% Operational Cost Savings",
      detail: "Eliminated idle compute waste, right-sized container tasks, and accelerated release velocity under Agile Scrum delivery.",
      icon: CheckCircle2,
      badge: "10% Cost Reduction"
    }
  ];

  return (
    <section id="modernization" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Interactive Architecture Transformation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
            Before & After: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Modernization in Action</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Examining the conceptual progression from legacy enterprise monoliths to secure, cloud-native architectures — drawing from real upgrade and security remediation experience.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="mt-6 md:mt-0 flex items-center bg-navy-900 border border-slate-800 p-1 rounded-lg">
          <button
            onClick={() => setActiveView('legacy')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeView === 'legacy' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Legacy State
          </button>
          <button
            onClick={() => setActiveView('split')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeView === 'split' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Side-by-Side Comparison
          </button>
          <button
            onClick={() => setActiveView('modern')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
              activeView === 'modern' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-white'
            }`}
          >
            Modernized Cloud State
          </button>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Legacy Column */}
        {(activeView === 'split' || activeView === 'legacy') && (
          <div className="bg-navy-900/60 border border-rose-950/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm group hover:border-rose-800/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between pb-6 border-b border-rose-950/50">
              <div className="flex items-center space-x-3">
                <span className="p-2.5 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Legacy Enterprise State</h3>
                  <p className="text-xs text-rose-400/80">Older components & high technical debt</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40">
                Legacy Stack
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {legacyAttributes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-navy-950/60 border border-slate-800/80 flex items-start space-x-3.5">
                    <span className="mt-0.5 p-1.5 rounded-lg bg-rose-500/10 text-rose-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-medium text-slate-200">{item.title}</h4>
                        <span className="text-[10px] font-mono text-rose-400/90 bg-rose-500/10 px-2 py-0.5 rounded">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-500 flex items-center justify-between">
              <span>Mainframe coupling • Java 11 CVEs</span>
              <span className="text-rose-400 font-mono">Pre-Modernization</span>
            </div>
          </div>
        )}

        {/* Modernized Column */}
        {(activeView === 'split' || activeView === 'modern') && (
          <div className="bg-navy-900/60 border border-emerald-950/40 rounded-2xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-sm group hover:border-emerald-800/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between pb-6 border-b border-emerald-950/50">
              <div className="flex items-center space-x-3">
                <span className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Modernized Cloud Architecture</h3>
                  <p className="text-xs text-emerald-400/80">Containerized, compliant & cost-optimized</p>
                </div>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                AWS Cloud Native
              </span>
            </div>

            <div className="mt-6 space-y-4">
              {modernAttributes.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-navy-950/60 border border-slate-800/80 flex items-start space-x-3.5">
                    <span className="mt-0.5 p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-sm font-medium text-slate-100">{item.title}</h4>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-300 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-400 flex items-center justify-between">
              <span>Java 17 LTS • ECS Fargate • 10% Savings</span>
              <span className="text-emerald-400 font-mono">Delivered Outcome</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-navy-900/40 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
        <span className="text-cyan-400 mt-0.5 font-bold">ℹ</span>
        <span>
          <strong>Note on Modernization Architecture:</strong> This section presents the general engineering principles and documented outcomes from V. Raghavan's technical leadership, including the verified Java 11-to-17 migration, SonarQube cognitive complexity refactoring, and AWS Security Hub Control [ECS.5] container enforcement delivered at Tech Mahindra and HCL Technologies.
        </span>
      </div>
    </section>
  );
};
