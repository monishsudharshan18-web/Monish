export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'distributed' | 'kernel' | 'storage' | 'runtime';
  categoryLabel: string;
  version: string;
  stars: number;
  forks: number;
  license: string;
  status: 'Production' | 'Active OSS' | 'Beta' | 'RFC Draft';
  featured: boolean;
  summary: string;
  architectureDetails: string;
  keyMetric: {
    label: string;
    value: string;
  };
  metrics: {
    throughput: string;
    p99Latency: string;
    memoryEfficiency: string;
    concurrency: string;
  };
  techStack: string[];
  codeSnippet: {
    language: string;
    fileName: string;
    code: string;
  };
  highlights: string[];
  benchmarkComparison?: {
    competitor: string;
    speedup: string;
    memoryDelta: string;
  };
}

export interface CareerRole {
  period: string;
  role: string;
  company: string;
  location: string;
  domain: string;
  impactMetrics: string[];
  systemAchievements: string[];
  technologies: string[];
}

export interface TechnicalRFC {
  id: string;
  title: string;
  date: string;
  status: 'Adopted' | 'Implemented' | 'Published';
  summary: string;
  link: string;
}

export interface ArchitectureNode {
  id: string;
  name: string;
  type: 'client' | 'gateway' | 'consensus' | 'worker' | 'storage' | 'cache';
  status: 'healthy' | 'degraded' | 'isolated' | 'leader';
  qps: number;
  latencyMs: number;
  cpuPct: number;
  memMb: number;
}
