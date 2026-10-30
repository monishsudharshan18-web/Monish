import React, { useState } from 'react';
import { X, Copy, Check, GitFork, Star, Server, Cpu, ShieldCheck, Zap, Layers, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInLab?: (projectId: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenInLab,
}) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'benchmarks'>('architecture');

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl rounded-xl border border-white/[0.12] bg-[#0D111D] shadow-2xl shadow-black overflow-hidden my-8">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#090D16] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
            <div>
              <h2 className="font-mono text-lg font-bold text-[#F8FAFC]">
                {project.name}
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono text-[#94A3B8]">
                <span>{project.version}</span>
                <span>·</span>
                <span>{project.license}</span>
                <span>·</span>
                <span>{project.categoryLabel}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/[0.05] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center border-b border-white/[0.08] bg-[#13192B]/50 px-6 font-mono text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'architecture'
                ? 'border-[#3B82F6] text-[#3B82F6]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Architecture & Invariants</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'code'
                ? 'border-[#3B82F6] text-[#3B82F6]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Terminal className="h-4 w-4" />
            <span>Implementation ({project.codeSnippet.fileName})</span>
          </button>

          <button
            onClick={() => setActiveTab('benchmarks')}
            className={`flex items-center gap-2 py-3 px-3 border-b-2 font-medium transition-colors ${
              activeTab === 'benchmarks'
                ? 'border-[#3B82F6] text-[#3B82F6]'
                : 'border-transparent text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <Zap className="h-4 w-4" />
            <span>Benchmarking & Telemetry</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 font-mono text-xs">
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">System Overview</h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Architecture Blueprint Card */}
              <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[#3B82F6] font-semibold">Topology & Execution Flow</span>
                  <span className="text-[11px] text-[#64748B]">Zero-Copy Data Path</span>
                </div>
                <p className="text-[#94A3B8] leading-relaxed">
                  {project.architectureDetails}
                </p>

                {/* ASCII System Flow Diagram */}
                <div className="rounded border border-white/[0.05] bg-[#05070D] p-3 text-[11px] text-[#ADC6FF] overflow-x-auto">
                  <pre>
{`[Client Ingress] ──(QUIC / gRPC)──> [eBPF Fastpath / XDP Hook]
                                           │
                        ┌──────────────────┴──────────────────┐
                        ▼                                     ▼
             [SIMD AVX-512 Hash Ring]              [Pipelined Raft Log (io_uring)]
                        │                                     │
                        ▼                                     ▼
             [NUMA-Pinned Slab Heap]               [Quorum Agreement (5 Replicas)]
                        │                                     │
                        └──────────────────┬──────────────────┘
                                           ▼
                                [Sub-Millisecond Ack]`}
                  </pre>
                </div>
              </div>

              {/* Key Implementation Invariants */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">Key Technical Invariants</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="rounded-md border border-white/[0.06] bg-[#13192B]/50 p-3">
                      <div className="flex items-start gap-2">
                        <span className="text-[#3B82F6] font-bold">0{i + 1}.</span>
                        <span className="text-[#94A3B8] leading-normal">{h}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[#F8FAFC]">Engineered With</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-white/[0.03] border border-white/[0.06] px-2.5 py-1 text-[11px] text-[#ADC6FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">
                  Source: <code className="text-[#3B82F6]">{project.codeSnippet.fileName}</code>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 rounded bg-[#3B82F6]/10 border border-[#3B82F6]/30 px-3 py-1 text-xs text-[#3B82F6] hover:bg-[#3B82F6]/20 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Source'}</span>
                </button>
              </div>

              <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-4 overflow-x-auto text-xs leading-relaxed">
                <pre className="text-[#DFE2EF]">
                  <code>{project.codeSnippet.code}</code>
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'benchmarks' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-3 text-center">
                  <div className="text-[11px] text-[#94A3B8]">Peak Throughput</div>
                  <div className="text-lg font-bold text-[#F8FAFC] tabular-nums mt-0.5">
                    {project.metrics.throughput}
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-3 text-center">
                  <div className="text-[11px] text-[#94A3B8]">p99 Latency</div>
                  <div className="text-lg font-bold text-[#3B82F6] tabular-nums mt-0.5">
                    {project.metrics.p99Latency}
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-3 text-center">
                  <div className="text-[11px] text-[#94A3B8]">Memory Efficiency</div>
                  <div className="text-lg font-bold text-[#8B5CF6] tabular-nums mt-0.5">
                    {project.metrics.memoryEfficiency}
                  </div>
                </div>

                <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-3 text-center">
                  <div className="text-[11px] text-[#94A3B8]">Concurrency Model</div>
                  <div className="text-xs font-bold text-[#F8FAFC] mt-1 truncate">
                    {project.metrics.concurrency}
                  </div>
                </div>
              </div>

              {project.benchmarkComparison && (
                <div className="rounded-lg border border-white/[0.08] bg-[#090D16] p-4 space-y-3">
                  <h4 className="text-xs font-semibold text-[#F8FAFC]">
                    Comparative Performance Benchmark vs. {project.benchmarkComparison.competitor}
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Throughput Factor:</span>
                      <span className="text-emerald-400 font-bold">{project.benchmarkComparison.speedup}</span>
                    </div>
                    <div className="flex justify-between text-[#94A3B8]">
                      <span>Memory Footprint Delta:</span>
                      <span className="text-[#3B82F6] font-bold">{project.benchmarkComparison.memoryDelta}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#090D16] px-6 py-4">
          <div className="flex items-center gap-4 text-xs font-mono text-[#64748B]">
            <span className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 text-amber-400" />
              <span>{project.stars.toLocaleString()} stars</span>
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="h-3.5 w-3.5" />
              <span>{project.forks.toLocaleString()} forks</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {onOpenInLab && (
              <button
                onClick={() => {
                  onClose();
                  onOpenInLab(project.id);
                }}
                className="flex items-center gap-1.5 rounded-lg border border-[#3B82F6]/40 bg-[#3B82F6]/10 px-3.5 py-1.5 font-mono text-xs font-medium text-[#3B82F6] hover:bg-[#3B82F6]/20 transition-colors cursor-pointer"
              >
                <Zap className="h-3.5 w-3.5" />
                <span>Simulate in Lab</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-medium text-[#F8FAFC] hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
