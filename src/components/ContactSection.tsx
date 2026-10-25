import React, { useState } from 'react';
import { Mail, MapPin, Phone, Copy, Check, Send, Sparkles, Download, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { LinkedInIcon } from './TechIcon';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 6000);
    }, 900);
  };

  return (
    <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-800/80">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>Professional Engagement</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
          Let's Discuss <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Next Initiative</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
          Whether you need a Technical Lead for enterprise application modernization, cloud architecture design, or Agile team leadership — I look forward to connecting.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Mail className="w-5 h-5" />
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-navy-950 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
                title="Copy email address"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase">Direct Email</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="block text-base sm:text-lg font-semibold text-white hover:text-cyan-300 transition-colors font-mono mt-1"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400">
                <LinkedInIcon className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">Professional Network</span>
            </div>
            <div>
              <span className="text-xs font-mono text-slate-500 uppercase">LinkedIn Profile</span>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base sm:text-lg font-semibold text-cyan-400 hover:underline font-mono mt-1"
              >
                linkedin.com/in/raghavanvijayan
              </a>
            </div>
          </div>

          {/* Location & Phone Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-navy-900/50 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Location</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {PERSONAL_INFO.location}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-900/50 border border-slate-800">
              <div className="flex items-center space-x-2 text-slate-400 text-xs mb-1">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Contact Phone</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {PERSONAL_INFO.phone}
              </div>
            </div>
          </div>

          {/* Resume Download Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-navy-900 to-navy-950 border border-cyan-500/30 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-white block">Download Full Resume</span>
              <span className="text-[11px] text-slate-400">Complete 4-page verified enterprise PDF</span>
            </div>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="V_Raghavan_Technical_Lead_Resume.pdf"
              className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-semibold text-xs flex items-center gap-1.5 transition-all shadow-md shadow-cyan-500/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-2xl bg-navy-900/80 border border-slate-800 space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Send an Inquiry or Invitation
              </span>
              <span className="text-[11px] font-mono text-cyan-400">Direct Delivery</span>
            </div>

            {formStatus === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                <div>
                  <strong className="block font-semibold">Message simulated successfully!</strong>
                  <span>Thank you for your message. You can also reach out directly to <strong>{PERSONAL_INFO.email}</strong>.</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.name ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  placeholder="e.g. sjenkins@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors ${
                    errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                  }`}
                />
                {errors.email && <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                placeholder="e.g. Technical Leadership Opportunity / Architecture Project"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-slate-800 text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1.5">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Share project details, role specifications, or introductory notes..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border text-xs sm:text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-colors ${
                  errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                }`}
              />
              {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={formStatus === 'submitting'}
              className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-60"
            >
              {formStatus === 'submitting' ? (
                <span>Transmitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
