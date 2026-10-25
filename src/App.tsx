import React, { useState } from 'react';
import { SiteNavigation } from './components/SiteNavigation';
import { HeroSection } from './components/HeroSection';
import { CareerMetrics } from './components/CareerMetrics';
import { AboutSection } from './components/AboutSection';
import { ModernizationSlider } from './components/ModernizationSlider';
import { ProjectGrid } from './components/ProjectGrid';
import { TechnologyLogoGrid } from './components/TechnologyLogoGrid';
import { CareerTimeline } from './components/CareerTimeline';
import { AchievementGrid } from './components/AchievementGrid';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { CareerAssistantModal } from './components/CareerAssistantModal';
import { Sparkles } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';

const AppContent: React.FC = () => {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState<boolean>(false);
  const [assistantModalOpen, setAssistantModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation */}
      <SiteNavigation
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenAssistant={() => setAssistantModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <CareerMetrics />
        <AboutSection />
        <ModernizationSlider />
        <ProjectGrid />
        <TechnologyLogoGrid />
        <CareerTimeline />
        <AchievementGrid />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Career Assistant Quick Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setAssistantModalOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200"
          title="Ask About My Experience (Interactive Assistant)"
        >
          <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
          <span className="hidden sm:inline">Ask Career Assistant</span>
          <span className="sm:hidden">Ask AI</span>
        </button>
      </div>

      {/* Command Palette Modal (Ctrl+K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenAssistant={() => setAssistantModalOpen(true)}
      />

      {/* Career Assistant Exploration Modal */}
      <CareerAssistantModal
        isOpen={assistantModalOpen}
        onClose={() => setAssistantModalOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
