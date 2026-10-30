import React, { useState } from 'react';
import { Terminal, ArrowRight, Play, Copy, Check, ShoppingBag, ShieldCheck, Zap, Code2, GraduationCap } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface HeroProps {
  onNavigateToProjects: () => void;
  onNavigateToStore: () => void;
  onNavigateToTerminal: () => void;
}

const HERO_CODE_SNIPPETS = {
  javascript: {
    title: 'student_pricing.js',
    language: 'javascript',
    badge: 'JavaScript / E-Commerce Logic',
    code: `// CampusMart: Dynamic Student Discount & Cart Evaluation Engine
function calculateStudentCartTotal(cartItems, studentId) {
  let subtotal = 0;
  let totalStudentSavings = 0;
  
  // Verify student credentials (e.g. REVA University ID)
  const isVerifiedStudent = studentId && studentId.toUpperCase().includes('REVA');
  const studentDiscountRate = isVerifiedStudent ? 0.45 : 0.20; // 45% student subsidy

  const evaluatedItems = cartItems.map(item => {
    const discountedPrice = Math.round(item.originalPrice * (1 - studentDiscountRate));
    const savings = item.originalPrice - discountedPrice;
    
    subtotal += discountedPrice * item.quantity;
    totalStudentSavings += savings * item.quantity;
    return { ...item, discountedPrice, savings };
  });

  return {
    evaluatedItems,
    subtotal,
    deliveryFee: subtotal > 500 ? 0 : 40,
    totalStudentSavings
  };
}`,
  },
  cpp: {
    title: 'inventory_tree.cpp',
    language: 'cpp',
    badge: 'C++ / High-Speed Inventory BST',
    code: `// C++ Binary Search Tree for Student Goods Catalog
#include <iostream>
#include <string>

struct ProductNode {
    int productId;
    std::string name;
    double subsidizedPrice;
    int stockCount;
    ProductNode *left, *right;

    ProductNode(int id, std::string n, double p, int s)
        : productId(id), name(n), subsidizedPrice(p), stockCount(s),
          left(nullptr), right(nullptr) {}
};

ProductNode* searchProduct(ProductNode* root, int targetId) {
    if (root == nullptr || root->productId == targetId)
        return root;
    if (targetId < root->productId)
        return searchProduct(root->left, targetId);
    return searchProduct(root->right, targetId);
}`,
  },
  python: {
    title: 'deal_watcher.py',
    language: 'python',
    badge: 'Python / Price Scraper & Notifier',
    code: `# Python automated student gear price watcher
import requests
from bs4 import BeautifulSoup

def poll_campus_deals(item_name, target_budget):
    print(f"[*] Scanning discounted electronics for REVA University students...")
    # Scrapes e-commerce prices to notify students of budget drops
    current_market_price = 1200.0  # Commercial retail
    subsidized_price = 650.0       # CampusMart student rate
    
    savings_pct = ((current_market_price - subsidized_price) / current_market_price) * 100
    print(f"[✓] Found: {item_name} at ₹{subsidized_price} ({savings_pct:.0f}% cheaper)")
    return {"item": item_name, "price": subsidized_price, "savings": savings_pct}`,
  },
};

export const Hero: React.FC<HeroProps> = ({
  onNavigateToProjects,
  onNavigateToStore,
  onNavigateToTerminal,
}) => {
  const [activeTab, setActiveTab] = useState<'javascript' | 'cpp' | 'python'>('javascript');
  const [copied, setCopied] = useState(false);
  const [sshCopied, setSshCopied] = useState(false);
  const [isRunningBenchmark, setIsRunningBenchmark] = useState(false);
  const [benchmarkLogs, setBenchmarkLogs] = useState<string[]>([]);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(HERO_CODE_SNIPPETS[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopySsh = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.sshKeyCommand);
    setSshCopied(true);
    setTimeout(() => setSshCopied(false), 2000);
  };

  const handleRunBenchmark = () => {
    if (isRunningBenchmark) return;
    setIsRunningBenchmark(true);
    setBenchmarkLogs(['[+] Initializing CampusMart discount calculation engine...']);

    const steps = [
      '[+] Verifying student credentials against REVA University database...',
      '[+] Evaluating 45% subsidized pricing on electronics & apparel catalog...',
      '[+] Dynamic cart re-index: 100% accurate price deduction in 1.4ms',
      '[*] Result: Student saved ₹1,750 on study gear | Delivery Fee: ₹0 (Waived)',
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setBenchmarkLogs((prev) => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsRunningBenchmark(false);
        }
      }, (idx + 1) * 350);
    });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-white/[0.08]">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#3B82F6]/15 via-[#6366F1]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 -z-10 h-[350px] w-[450px] rounded-full bg-[#8B5CF6]/10 blur-3xl" />

      <div className="mx-auto max-w-[1200px] px-6">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic & Positioning Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            {/* Status Pill per spec */}
            <div className="badge-status">
              <span className="relative flex h-[6px] w-[6px]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3B82F6] opacity-75"></span>
                <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]"></span>
              </span>
              <span className="font-medium tracking-wide">
                REVA University Student · Open for Internships & Projects
              </span>
            </div>

            {/* Main Headline with Accent Gradient */}
            <div className="space-y-2">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#8B5CF6] flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4" />
                <span>Monish · Computer Science & Engineering @ REVA University</span>
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-[#F8FAFC] leading-[1.15]">
                Building an online platform for{' '}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8083ff] to-[#8B5CF6] bg-clip-text text-transparent">
                  affordable student goods
                </span>{' '}
                and accessible software.
              </h1>
            </div>

            {/* Lead Narrative */}
            <p className="font-mono text-sm leading-relaxed text-[#94A3B8]">
              "I am Monish, a student studying at REVA University. I created this website so people can get all the goods they need—such as electronics, clothes, and supplies—for a lesser rate. This is majorly for students and is also available to others."
            </p>

            {/* Skills Tags Highlight */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              <span className="text-[#64748B]">Core Stack:</span>
              {['HTML', 'C', 'C++', 'Python', 'JavaScript'].map((skill) => (
                <span key={skill} className="tag-tech text-[#3B82F6] font-semibold border-[#3B82F6]/20 bg-[#3B82F6]/5">
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Buttons strictly adhering to attached spec */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onNavigateToStore}
                className="btn-primary text-xs"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Explore Platform Demo</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={onNavigateToProjects}
                className="btn-secondary text-xs"
              >
                <Code2 className="h-3.5 w-3.5 text-[#3B82F6]" />
                <span>View All Projects</span>
              </button>

              <button
                onClick={onNavigateToTerminal}
                className="btn-secondary text-xs text-[#94A3B8] hover:text-[#F8FAFC]"
              >
                <Terminal className="h-3.5 w-3.5 text-[#8B5CF6]" />
                <span>Terminal REPL</span>
              </button>
            </div>

            {/* Quick Contact badge */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#64748B]">
              <span className="text-[#94A3B8]">Contact:</span>
              <span className="text-[#3B82F6]">{DEVELOPER_PROFILE.email}</span>
              <span className="text-[#64748B]">·</span>
              <span>Bengaluru, India</span>
            </div>
          </div>

          {/* Right Column: Prominent Mock Terminal & Interactive Code Window */}
          <div className="lg:col-span-6">
            <div className="terminal-window shadow-2xl shadow-black/80">
              {/* Terminal Chrome Bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0D111D] px-4 py-2.5">
                {/* Traffic Light Dots per spec */}
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#EF4444]/80 border border-[#DC2626]" />
                  <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80 border border-[#D97706]" />
                  <div className="h-3 w-3 rounded-full bg-[#10B981]/80 border border-[#059669]" />
                  <span className="ml-2 font-mono text-[11px] text-[#64748B]">
                    monish@reva-devbox: ~/campusmart-platform
                  </span>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 font-mono text-[11px] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                  title="Copy code"
                >
                  {copied ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* File Tabs */}
              <div className="flex items-center border-b border-white/[0.08] bg-[#0D111D]/60 px-2 font-mono text-xs">
                {(['javascript', 'cpp', 'python'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setBenchmarkLogs([]);
                    }}
                    className={`flex items-center gap-1.5 px-3 py-2 border-b-2 transition-all ${
                      activeTab === tab
                        ? 'border-[#3B82F6] text-[#F8FAFC] bg-[#090D16]'
                        : 'border-transparent text-[#64748B] hover:text-[#94A3B8]'
                    }`}
                  >
                    <span>{HERO_CODE_SNIPPETS[tab].title}</span>
                  </button>
                ))}
              </div>

              {/* Code Editor Body with Syntax Colors */}
              <div className="p-4 overflow-x-auto font-mono text-xs leading-relaxed max-h-[300px]">
                <pre className="text-[#dfe2ef]">
                  <code>{HERO_CODE_SNIPPETS[activeTab].code}</code>
                </pre>
              </div>

              {/* Interactive Calculation & Test Panel */}
              <div className="border-t border-white/[0.08] bg-[#0D111D] p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[11px] text-[#94A3B8]">
                      Platform Status: <span className="text-[#3B82F6]">45% Student Subsidy READY</span>
                    </span>
                  </div>

                  <button
                    onClick={handleRunBenchmark}
                    disabled={isRunningBenchmark}
                    className="flex items-center gap-1.5 rounded bg-[#3B82F6]/15 border border-[#3B82F6]/40 px-2.5 py-1 font-mono text-[11px] font-medium text-[#3B82F6] hover:bg-[#3B82F6]/25 transition-colors disabled:opacity-50 cursor-pointer"
                  >
                    <Play className={`h-3 w-3 ${isRunningBenchmark ? 'animate-spin' : ''}`} />
                    <span>{isRunningBenchmark ? 'Calculating Savings...' : 'Run Pricing Test'}</span>
                  </button>
                </div>

                {benchmarkLogs.length > 0 && (
                  <div className="rounded bg-[#090D16] p-2.5 border border-white/[0.06] font-mono text-[11px] space-y-1 text-emerald-400/90 animate-fadeIn">
                    {benchmarkLogs.map((log, i) => (
                      <div key={i} className="leading-snug">
                        {log}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric KPI Ribbon beneath hero split */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {DEVELOPER_PROFILE.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-lg p-4 sm:p-5 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
              <div className="font-mono text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="mt-1 font-mono text-xs text-[#94A3B8]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
