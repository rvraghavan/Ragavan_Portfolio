import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, MapPin, Mail, ChevronDown, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';

export const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  const roles = [
    "Technical Lead",
    "Enterprise Modernization Architect",
    "AWS Cloud Specialist",
    "Full Stack Java & Node Engineer"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [roles.length]);

  // Subtle interactive canvas network visualization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes
    const nodeCount = Math.min(Math.floor(width / 22), 42);
    const nodes: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.5 + 1.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains('dark');

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 130) * (isDark ? 0.18 : 0.25);
            ctx.strokeStyle = isDark 
              ? `rgba(14, 165, 233, ${alpha})`
              : `rgba(2, 132, 199, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(2, 132, 199, 0.45)';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-navy-950">
      {/* Background Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
      />

      {/* Ambient Gradient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Availability & Badge Row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Technical Leadership Roles</span>
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                Location Preference: India | UAE | GCC | Singapore | Australia
              </span>
            </div>

            {/* Name & Rotating Subtitle */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Senior Engineering Profile
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
                {PERSONAL_INFO.name}
              </h1>
              <div className="h-8 sm:h-9 flex items-center text-lg sm:text-xl font-medium text-cyan-400 font-mono">
                <span className="mr-2 text-slate-500">▶</span>
                <span className="transition-all duration-300 border-b border-cyan-500/40 pb-0.5">
                  {roles[activeRoleIndex]}
                </span>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 leading-snug font-display">
              &ldquo;{PERSONAL_INFO.headline}&rdquo;
            </h2>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.supportingText}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {PERSONAL_INFO.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300 bg-navy-900/60 p-2.5 rounded-lg border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/25 group"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#career"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-navy-900 hover:bg-navy-850 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all"
              >
                <span>View Career Journey</span>
              </a>

              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get in Touch</span>
              </a>

              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Raghavan_Technical_Lead_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-mono font-medium text-slate-300 bg-navy-900/80 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                title="Download verified resume PDF"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Right Column: Verified Portrait & Interactive Card (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Technical Portrait Card */}
              <div className="relative bg-navy-900 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-xl">
                {/* Technical Header Pill */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-cyan-300 font-medium">V RAGHAVAN</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Chennai, IN</span>
                </div>

                {/* Candidate Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-navy-950 border border-slate-800 mb-5 shadow-inner group">
                  <img
                    src={PERSONAL_INFO.portraitUrl}
                    alt="V. Raghavan - Technical Lead"
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      // Fallback if image load fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-navy-900/90 border border-slate-800/80 backdrop-blur-md">
                    <div className="text-xs font-semibold text-white">V. Raghavan</div>
                    <div className="text-[11px] text-cyan-400 font-mono">Tech Lead • Tech Mahindra</div>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl bg-navy-950/70 border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block uppercase">Experience</span>
                    <span className="text-slate-200 font-semibold">12+ Years Enterprise</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-950/70 border border-slate-800/80">
                    <span className="text-[10px] text-slate-500 block uppercase">Leadership</span>
                    <span className="text-cyan-400 font-semibold">5+ Engineers Squad</span>
                  </div>
                </div>

                {/* Verified Tag */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Single Source: Resume 2026</span>
                  </span>
                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>LinkedIn</span>
                    <LinkedInIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-500 text-xs font-mono">
        <span className="mb-1 text-[10px] tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </div>
    </section>
  );
};
