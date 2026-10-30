import React, { useState } from 'react';
import { Search, Star, GitFork, ArrowUpRight, Zap, Layers, Play, Check } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsScreenProps {
  onOpenInLab: (projectId: string) => void;
}

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onOpenInLab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [simulatingProject, setSimulatingProject] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'storage', label: 'Distributed Storage' },
    { id: 'kernel', label: 'Kernel & eBPF' },
    { id: 'distributed', label: 'Consensus & Raft' },
    { id: 'runtime', label: 'DevTools & Runtimes' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleQuickSimulation = (projectId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSimulatingProject(projectId);
    setTimeout(() => {
      setSimulatingProject(null);
    }, 1800);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 space-y-10">
      {/* Header & Section Intro */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
          <span>Production Systems · Open Source Infrastructure</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
          Engineered Infrastructure & Core Runtimes
        </h1>
        <p className="font-mono text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          Production-grade distributed storage engines, low-overhead eBPF packet sidecars, and formally verified consensus protocols engineered for sub-millisecond tail latency.
        </p>
      </div>

      {/* Filter Bar & Search: Interactive Filter Controls */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-[#0D111D] border border-white/[0.08] rounded-lg">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#3B82F6] text-white shadow-sm shadow-[#3B82F6]/30'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.03]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#64748B]" />
          <input
            type="text"
            placeholder="Search systems, protocols, tech..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg bg-[#0D111D] border border-white/[0.1] pl-9 pr-3 py-1.5 font-mono text-xs text-[#F8FAFC] placeholder-[#64748B] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/20 transition-all"
          />
        </div>
      </div>

      {/* Projects Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => {
          const isFeaturedFlagship = project.featured && idx === 0;
          const isSimulating = simulatingProject === project.id;

          return (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className={`glass-card rounded-xl p-6 flex flex-col justify-between cursor-pointer group relative overflow-hidden ${
                isFeaturedFlagship ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Top ambient highlight line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent group-hover:via-[#3B82F6]/80 transition-all" />

              <div className="space-y-4">
                {/* Clean unboxed metadata per zero-pill rules */}
                <div className="flex items-center justify-between font-mono text-xs text-[#64748B]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#3B82F6] font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.version}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.license}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-[#94A3B8]">
                      <Star className="h-3 w-3 text-amber-400" />
                      <span>{project.stars.toLocaleString()}</span>
                    </span>
                    <span className="flex items-center gap-1 text-[#94A3B8]">
                      <GitFork className="h-3 w-3" />
                      <span>{project.forks.toLocaleString()}</span>
                    </span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                      {project.name}
                    </h2>
                    <ArrowUpRight className="h-4 w-4 text-[#64748B] group-hover:text-[#3B82F6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <p className="font-mono text-xs text-[#94A3B8] font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Summary */}
                <p className="font-mono text-xs leading-relaxed text-[#94A3B8]/90">
                  {project.summary}
                </p>

                {/* Key Metrics Highlight Block */}
                <div className="rounded-lg border border-white/[0.08] bg-[#090D16]/80 p-3">
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div>
                      <div className="text-[11px] text-[#64748B]">p99 Tail Latency</div>
                      <div className="text-sm font-bold text-[#3B82F6] tabular-nums mt-0.5">
                        {project.metrics.p99Latency}
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#64748B]">{project.keyMetric.label}</div>
                      <div className="text-sm font-bold text-[#F8FAFC] tabular-nums mt-0.5">
                        {project.keyMetric.value}
                      </div>
                    </div>
                  </div>

                  {isSimulating && (
                    <div className="mt-2 pt-2 border-t border-white/[0.06] text-[11px] font-mono text-emerald-400 animate-fadeIn">
                      [sim] io_uring load gen: 1,840,290 ops/sec | 0 lock waits | verified
                    </div>
                  )}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 font-mono text-[10px] text-[#94A3B8]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                  className="flex items-center gap-1.5 text-[#3B82F6] hover:text-[#adc6ff] transition-colors"
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Inspect Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleQuickSimulation(project.id, e)}
                    disabled={isSimulating}
                    className="flex items-center gap-1 rounded bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-[11px] text-[#F8FAFC] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 transition-colors"
                  >
                    {isSimulating ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Benchmarked</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-3 w-3 text-[#3B82F6]" />
                        <span>Run Test</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenInLab(project.id);
                    }}
                    className="flex items-center gap-1 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-2.5 py-1 text-[11px] text-[#3B82F6] hover:bg-[#3B82F6]/20 transition-colors"
                  >
                    <Zap className="h-3 w-3" />
                    <span>Lab View</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-xl border border-white/[0.08] bg-[#0D111D] p-12 text-center font-mono text-xs text-[#94A3B8]">
          No systems match your search query "{searchQuery}". Try searching for 'Raft', 'Rust', or 'eBPF'.
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenInLab={onOpenInLab}
      />
    </div>
  );
};
