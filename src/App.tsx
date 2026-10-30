import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketplaceDemoScreen } from './components/MarketplaceDemoScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { ArchitectureLabScreen } from './components/ArchitectureLabScreen';
import { TerminalScreen } from './components/TerminalScreen';
import { DesignSystemScreen } from './components/DesignSystemScreen';
import { ExperienceScreen } from './components/ExperienceScreen';
import { ContactScreen } from './components/ContactScreen';
import { Footer } from './components/Footer';
import { PROJECTS, DEVELOPER_PROFILE } from './data/portfolioData';
import { ArrowRight, Layers, Star, Zap, Terminal, ShoppingBag, Code2, GraduationCap } from 'lucide-react';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types/portfolio';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>('overview');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const handleOpenInLab = (projectId?: string) => {
    setActiveScreen('architecture');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenTerminalQuick = () => {
    setActiveScreen('terminal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-[#dfe2ef] flex flex-col selection:bg-[#3B82F6]/30 selection:text-[#ADC6FF]">
      {/* Top Bar with 3-Zone Contract */}
      <Navbar
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onOpenTerminalQuick={handleOpenTerminalQuick}
      />

      {/* Screen Routing */}
      <main className="flex-1">
        {activeScreen === 'overview' && (
          <div>
            {/* Split Hero with Code Runner & KPI Strip */}
            <Hero
              onNavigateToProjects={() => {
                setActiveScreen('projects');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToStore={() => {
                setActiveScreen('store');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateToTerminal={() => {
                setActiveScreen('terminal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Featured Project Callout: CampusMart Online Platform */}
            <section className="py-20 border-b border-white/[0.08] relative">
              <div className="mx-auto max-w-[1200px] px-6 space-y-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-2">
                    <div className="font-mono text-xs uppercase tracking-widest text-[#3B82F6] flex items-center gap-1.5">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Featured Project · Student E-Commerce Platform</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
                      CampusMart: Affordable Goods Platform
                    </h2>
                    <p className="font-mono text-xs text-[#94A3B8] max-w-xl">
                      An online website built by Monish for REVA University students and all buyers to purchase electronics, clothes, and essential supplies at subsidized, lesser rates.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveScreen('store');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-primary text-xs"
                  >
                    <span>Launch Live Storefront</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {/* 2 Flagship Showcase Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {PROJECTS.slice(0, 2).map((project) => (
                    <div
                      key={project.id}
                      onClick={() => setActiveModalProject(project)}
                      className="glass-card rounded-xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent group-hover:via-[#3B82F6]/90 transition-all" />

                      <div className="space-y-5">
                        {/* Unboxed Metadata */}
                        <div className="flex items-center justify-between font-mono text-xs text-[#64748B]">
                          <div className="flex items-center gap-2">
                            <span className="text-[#3B82F6] font-medium">{project.categoryLabel}</span>
                            <span>·</span>
                            <span>{project.version}</span>
                            <span>·</span>
                            <span>{project.license}</span>
                          </div>
                          <span className="flex items-center gap-1 text-[#94A3B8]">
                            <Star className="h-3.5 w-3.5 text-amber-400" />
                            <span>{project.stars.toLocaleString()}</span>
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                            {project.name}
                          </h3>
                          <p className="font-mono text-xs text-[#94A3B8] font-medium">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="font-mono text-xs leading-relaxed text-[#94A3B8]">
                          {project.summary}
                        </p>

                        {/* Metrics Block */}
                        <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-4">
                          <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                            <div>
                              <div className="text-[11px] text-[#64748B]">Student Impact</div>
                              <div className="text-base font-bold text-[#3B82F6] tabular-nums mt-0.5">
                                {project.keyMetric.value}
                              </div>
                            </div>
                            <div>
                              <div className="text-[11px] text-[#64748B]">Execution Speed</div>
                              <div className="text-base font-bold text-[#F8FAFC] tabular-nums mt-0.5">
                                {project.metrics.p99Latency}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Tech tags strictly highlighting HTML, C, C++, Python, JavaScript */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="tag-tech"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card Action */}
                      <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
                        <span className="text-[#3B82F6] flex items-center gap-1 group-hover:underline">
                          <Layers className="h-3.5 w-3.5" />
                          <span>Inspect Project Code & Architecture</span>
                        </span>
                        <span className="text-[#64748B] text-[11px]">Click to inspect</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Platform Demo Callout Section */}
            <section className="py-20 border-b border-white/[0.08] bg-[#0D111D]/50 relative">
              <div className="mx-auto max-w-[1200px] px-6">
                <div className="glass-panel-elevated rounded-2xl p-8 sm:p-12 relative overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
                        <ShoppingBag className="h-3.5 w-3.5" />
                        <span>Online Storefront Demo</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
                        Try the Interactive Campus Store & Student Cart
                      </h2>
                      <p className="font-mono text-xs leading-relaxed text-[#94A3B8]">
                        Browse discounted scientific calculators, study headphones, chargers, and REVA University hoodies. Test the dynamic student discount calculator and simulated checkout experience.
                      </p>
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            setActiveScreen('store');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="btn-primary text-xs"
                        >
                          <span>Open Platform Demo</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>

                    <div className="lg:col-span-5 rounded-xl border border-white/[0.08] bg-[#090D16] p-4 font-mono text-xs space-y-3">
                      <div className="flex items-center justify-between text-[#64748B] text-[11px] border-b border-white/[0.06] pb-2">
                        <span>CAMPUSMART SAMPLE ITEMS</span>
                        <span className="text-emerald-400">● 45% SUBSIDY ACTIVE</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 rounded bg-white/[0.03]">
                          <span className="text-[#DFE2EF]">Engineering Calculator</span>
                          <span className="text-emerald-400 font-bold">₹650 (was ₹1200)</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-white/[0.03]">
                          <span className="text-[#DFE2EF]">Noise-Cancelling Headphones</span>
                          <span className="text-emerald-400 font-bold">₹1,799 (was ₹3499)</span>
                        </div>
                        <div className="flex justify-between items-center p-2 rounded bg-white/[0.03]">
                          <span className="text-[#DFE2EF]">REVA University Hoodie</span>
                          <span className="text-emerald-400 font-bold">₹799 (was ₹1599)</span>
                        </div>
                      </div>
                      <div className="pt-2 text-[11px] text-[#3B82F6] text-center">
                        Full catalog with cart & checkout in Platform Demo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Contact Callout Banner */}
            <section className="py-20">
              <div className="mx-auto max-w-[1200px] px-6 text-center space-y-6">
                <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#8B5CF6]">
                  <span>REVA University Student Developer</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
                  Interested in collaborating with Monish?
                </h2>
                <p className="font-mono text-xs text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
                  Open for software development internships, project discussions, and collaborations in HTML, C, C++, Python, and JavaScript.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => {
                      setActiveScreen('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-primary text-xs"
                  >
                    <span>Contact Monish</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      setActiveScreen('terminal');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-secondary text-xs"
                  >
                    <Terminal className="h-4 w-4 text-[#3B82F6]" />
                    <span>Launch Terminal REPL</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeScreen === 'store' && <MarketplaceDemoScreen />}

        {activeScreen === 'projects' && (
          <ProjectsScreen onOpenInLab={handleOpenInLab} />
        )}

        {activeScreen === 'architecture' && <ArchitectureLabScreen />}

        {activeScreen === 'terminal' && <TerminalScreen />}

        {activeScreen === 'spec' && <DesignSystemScreen />}

        {activeScreen === 'experience' && <ExperienceScreen />}

        {activeScreen === 'contact' && <ContactScreen />}
      </main>

      {/* Global Project Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenInLab={handleOpenInLab}
      />

      {/* Quiet Footer adhering to anti-slop rules */}
      <Footer onNavigate={(screen) => {
        setActiveScreen(screen);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />
    </div>
  );
}
