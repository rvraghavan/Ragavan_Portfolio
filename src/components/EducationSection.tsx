import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA, PROFESSIONAL_COURSES } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic Foundation & Upskilling</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Continuous Learning</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Formal engineering degree complemented by targeted cloud, microservices, and generative AI upskilling courses.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Academic Degree Card */}
        <div className="lg:col-span-1 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4" />
            <span>Formal Academic Degree</span>
          </div>

          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 space-y-4">
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Bachelor of Technology
              </span>

              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  {edu.degree}
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {edu.institution}
                </p>
                <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono mt-2">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Academic Standing:</span>
                <span className="text-emerald-400 font-semibold">{edu.grade}</span>
              </div>
            </div>
          ))}

          {/* Internal Certifications */}
          <div className="pt-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-purple-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Corporate Internal Certifications</span>
            </div>

            <div className="p-5 rounded-xl bg-navy-900/50 border border-slate-800 space-y-3">
              <div className="text-xs text-slate-200">
                <strong className="text-purple-300 block">AI White Belt</strong>
                <span className="text-slate-400 text-[11px]">Google Cloud / Generative AI • Tech Mahindra</span>
              </div>
              <div className="text-xs text-slate-200 pt-2 border-t border-slate-800">
                <strong className="text-purple-300 block">Manufacturing Process Training</strong>
                <span className="text-slate-400 text-[11px]">Automotive manufacturing lifecycle • Tech Mahindra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Udemy Courses & Professional Upskilling */}
        <div className="lg:col-span-2 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Professional Technical Courses (Udemy)</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">Completed Professional Courses</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROFESSIONAL_COURSES.filter(c => c.type === 'course').map((course, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-navy-900/50 border border-slate-800 hover:border-slate-700 hover:bg-navy-850/60 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>{course.platform}</span>
                    <span className="text-slate-500">{course.date}</span>
                  </div>

                  <h4 className="text-sm font-semibold text-white">
                    {course.title}
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {course.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Course Completion</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-800/80 text-[11px] text-slate-400">
            <strong>Note on Qualifications:</strong> Completed courses and corporate internal training modules are strictly categorized to distinguish them from formal degree programs and multi-tier public certification exams.
          </div>
        </div>
      </div>
    </section>
  );
};
