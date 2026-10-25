import React, { useState, useEffect } from 'react';
import { Menu, X, Command, Sparkles, Download, ArrowRight, ExternalLink, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface SiteNavigationProps {
  onOpenCommandPalette: () => void;
  onOpenAssistant: () => void;
}

export const SiteNavigation: React.FC<SiteNavigationProps> = ({
  onOpenCommandPalette,
  onOpenAssistant,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<string>('about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Modernization', href: '#modernization', id: 'modernization' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Career', href: '#career', id: 'career' },
    { name: 'Awards', href: '#awards', id: 'awards' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Connect', href: '#connect', id: 'connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.querySelector(navLinks[i].href);
        if (section && (section as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-navy-950/40 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#about"
            className="flex items-center space-x-3 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-display font-bold text-slate-950 text-sm shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              VR
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5 font-display">
                <span>V. Raghavan</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
              <div className="text-[10px] font-mono text-cyan-400/90 leading-tight">
                Technical Lead
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 bg-navy-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-850'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Dark/Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-navy-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-all flex items-center justify-center group"
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600 group-hover:-rotate-12 transition-transform" />
              )}
            </button>

            {/* Quick jump command palette trigger */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-navy-900 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
              title="Quick Jump (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="font-mono text-[11px] text-slate-400">Ctrl+K</span>
            </button>

            {/* Career Assistant Trigger */}
            <button
              onClick={onOpenAssistant}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 text-xs font-medium transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ask Experience</span>
            </button>

            {/* Resume Download */}
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="V_Raghavan_Technical_Lead_Resume.pdf"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium transition-all"
            >
              <Download className="w-3.5 h-3.5 text-slate-300" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-navy-900 text-slate-300 hover:text-cyan-400 border border-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-600" />
              )}
            </button>

            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-xl bg-navy-900 text-slate-400 hover:text-cyan-400 border border-slate-800"
              aria-label="Search"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-navy-900 text-slate-300 hover:text-white border border-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-navy-950/95 backdrop-blur-xl pt-24 px-6 pb-8 overflow-y-auto flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Navigation Menu
              </span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-900 border border-slate-800 text-xs text-slate-300"
              >
                {theme === 'dark' ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'text-slate-300 hover:bg-navy-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-600" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssistant();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              <span>Ask Career Assistant</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="V_Raghavan_Technical_Lead_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-slate-950 text-xs font-semibold shadow-lg shadow-cyan-500/20"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
