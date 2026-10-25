import React, { useState } from 'react';
import { Layers, ShieldCheck, Database, Cloud, Terminal, Cpu, Info } from 'lucide-react';

interface ArchitectureDiagramProps {
  type?: 'monroney' | 'idoran' | 'vdx' | 'generic';
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ type = 'monroney' }) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  if (type === 'monroney') {
    return (
      <div className="w-full bg-navy-900/90 border border-slate-800 rounded-xl p-5 my-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Layers className="w-4 h-4" />
            </span>
            <div>
              <h4 className="text-sm font-semibold text-white">Monroney Modernization Architecture</h4>
              <p className="text-xs text-slate-400">AWS ECS Fargate Containerized Flow & Mainframe Bridge</p>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
            <Info className="w-3.5 h-3.5" />
            <span>Illustrative conceptual diagram based on project specifications</span>
          </div>
        </div>

        {/* Interactive Diagram Canvas */}
        <div className="mt-5 relative overflow-x-auto py-3">
          <div className="min-w-[680px] grid grid-cols-5 gap-3 text-center">
            {/* Step 1: Client Layer */}
            <div 
              onMouseEnter={() => setActiveNode('client')}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                activeNode === 'client' 
                  ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10 scale-[1.02]' 
                  : 'border-slate-800 bg-navy-850/80 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 mb-1">Client Tier</div>
              <div className="font-semibold text-xs text-white">Angular 14 SPA</div>
              <div className="text-[11px] text-slate-400 mt-1">S3 + CloudFront CDN</div>
              <div className="mt-2 text-[10px] text-slate-500">Sub-second UI Rendering</div>
            </div>

            {/* Step 2: Gateway Layer */}
            <div 
              onMouseEnter={() => setActiveNode('gateway')}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                activeNode === 'gateway' 
                  ? 'border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-500/10 scale-[1.02]' 
                  : 'border-slate-800 bg-navy-850/80 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-wider text-sky-400 mb-1">Ingress</div>
              <div className="font-semibold text-xs text-white">AWS API Gateway</div>
              <div className="text-[11px] text-slate-400 mt-1">Route & Rate Limit</div>
              <div className="mt-2 text-[10px] text-slate-500">IAM Auth & VPC Link</div>
            </div>

            {/* Step 3: Compute & Services */}
            <div 
              onMouseEnter={() => setActiveNode('compute')}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                activeNode === 'compute' 
                  ? 'border-emerald-400 bg-emerald-950/30 shadow-lg shadow-emerald-500/10 scale-[1.02]' 
                  : 'border-slate-800 bg-navy-850/80 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-wider text-emerald-400 mb-1">Compute Tier</div>
              <div className="font-semibold text-xs text-white">AWS ECS Fargate</div>
              <div className="text-[11px] text-slate-400 mt-1">Node.js 20 & Java 17</div>
              <div className="mt-2 text-[10px] text-emerald-400/90 font-mono">ECS.5 Read-Only Root</div>
            </div>

            {/* Step 4: Modern Data Tier */}
            <div 
              onMouseEnter={() => setActiveNode('data')}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                activeNode === 'data' 
                  ? 'border-indigo-400 bg-indigo-950/30 shadow-lg shadow-indigo-500/10 scale-[1.02]' 
                  : 'border-slate-800 bg-navy-850/80 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-wider text-indigo-400 mb-1">Modern Storage</div>
              <div className="font-semibold text-xs text-white">PostgreSQL & S3</div>
              <div className="text-[11px] text-slate-400 mt-1">Labels & Metadata</div>
              <div className="mt-2 text-[10px] text-slate-500">CloudWatch Logs</div>
            </div>

            {/* Step 5: Legacy Mainframe Integration */}
            <div 
              onMouseEnter={() => setActiveNode('legacy')}
              onMouseLeave={() => setActiveNode(null)}
              className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                activeNode === 'legacy' 
                  ? 'border-amber-400 bg-amber-950/30 shadow-lg shadow-amber-500/10 scale-[1.02]' 
                  : 'border-slate-800 bg-navy-850/80 hover:border-slate-700'
              }`}
            >
              <div className="text-[10px] uppercase font-mono tracking-wider text-amber-400 mb-1">Legacy Bridge</div>
              <div className="font-semibold text-xs text-white">IBM Db2 & Mainframe</div>
              <div className="text-[11px] text-slate-400 mt-1">Vehicle Master DB</div>
              <div className="mt-2 text-[10px] text-slate-500">Secure Sync Gateway</div>
            </div>
          </div>

          {/* Connection Line SVG */}
          <svg className="w-full h-8 my-2 min-w-[680px]" viewBox="0 0 680 32" fill="none">
            <path d="M 68 16 L 612 16" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="68" cy="16" r="4" fill="#06B6D4" />
            <circle cx="204" cy="16" r="4" fill="#38BDF8" />
            <circle cx="340" cy="16" r="4" fill="#10B981" />
            <circle cx="476" cy="16" r="4" fill="#6366F1" />
            <circle cx="612" cy="16" r="4" fill="#F59E0B" />
          </svg>
        </div>

        {/* Dynamic Node Detail Box */}
        <div className="bg-navy-950/70 border border-slate-800/80 rounded-lg p-3 text-xs text-slate-300 min-h-[52px] flex items-center">
          {activeNode === 'client' && (
            <span><strong>Client Tier:</strong> Single-page application built on Angular 14 and TypeScript, deployed with edge caching on AWS CloudFront for low-latency label authoring across Nissan North America dealerships.</span>
          )}
          {activeNode === 'gateway' && (
            <span><strong>API Ingress:</strong> AWS API Gateway enforcing SSL termination, throttling, and IAM authentication before routing traffic to private container subnets.</span>
          )}
          {activeNode === 'compute' && (
            <span><strong>Containerized Compute:</strong> Serverless AWS ECS Fargate tasks running hardened Node.js 20 and Java 17 runtimes with read-only root filesystems compliant with AWS Security Hub Control [ECS.5] and Prowler.</span>
          )}
          {activeNode === 'data' && (
            <span><strong>Persistence & Observability:</strong> High-speed PostgreSQL for caching calculated Monroney label specs and Amazon S3 for PDF asset archival, with Amazon CloudWatch logging for operational telemetry.</span>
          )}
          {activeNode === 'legacy' && (
            <span><strong>Mainframe Interoperability:</strong> Bidirectional connector layer to IBM Db2 and legacy mainframe databases, ensuring gradual decoupling without impacting existing vehicle manufacturing lines.</span>
          )}
          {!activeNode && (
            <span className="text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Hover over any architecture component above to view technical integration details.
            </span>
          )}
        </div>
      </div>
    );
  }

  // iDoRAN Architecture
  return (
    <div className="w-full bg-navy-900/90 border border-slate-800 rounded-xl p-5 my-4">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-2">
          <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
            <Cpu className="w-4 h-4" />
          </span>
          <div>
            <h4 className="text-sm font-semibold text-white">iDoRAN Intelligent Document Automation</h4>
            <p className="text-xs text-slate-400">Hybrid Spring Boot & Python AI Document Extraction Engine</p>
          </div>
        </div>
        <div className="flex items-center space-x-1.5 text-[11px] text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
          <Info className="w-3.5 h-3.5" />
          <span>Illustrative conceptual diagram based on project specifications</span>
        </div>
      </div>

      <div className="mt-5 relative overflow-x-auto py-3">
        <div className="min-w-[680px] grid grid-cols-4 gap-3 text-center">
          <div className="p-3.5 rounded-lg border border-slate-800 bg-navy-850/80">
            <div className="text-[10px] uppercase font-mono text-purple-400 mb-1">Input Layer</div>
            <div className="font-semibold text-xs text-white">Document Ingestion</div>
            <div className="text-[11px] text-slate-400 mt-1">Angular 12 Portal</div>
            <div className="text-[10px] text-slate-500 mt-2">Invoices, PDFs & Images</div>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-800 bg-navy-850/80">
            <div className="text-[10px] uppercase font-mono text-cyan-400 mb-1">Backend Core</div>
            <div className="font-semibold text-xs text-white">Spring Boot & REST</div>
            <div className="text-[11px] text-slate-400 mt-1">Workflow Orchestrator</div>
            <div className="text-[10px] text-slate-500 mt-2">JPA / PostgreSQL Store</div>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-800 bg-navy-850/80">
            <div className="text-[10px] uppercase font-mono text-emerald-400 mb-1">AI Pipeline</div>
            <div className="font-semibold text-xs text-white">Python Extraction Engine</div>
            <div className="text-[11px] text-slate-400 mt-1">OCR & Entity Parsing</div>
            <div className="text-[10px] text-slate-500 mt-2">Automated Field Mapping</div>
          </div>

          <div className="p-3.5 rounded-lg border border-slate-800 bg-navy-850/80">
            <div className="text-[10px] uppercase font-mono text-blue-400 mb-1">Marketplace Ready</div>
            <div className="font-semibold text-xs text-white">Cloud Deployment</div>
            <div className="text-[11px] text-slate-400 mt-1">AWS & Azure Showcased</div>
            <div className="text-[10px] text-slate-500 mt-2">ERS Champion Award</div>
          </div>
        </div>
      </div>
    </div>
  );
};
