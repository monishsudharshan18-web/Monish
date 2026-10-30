import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Copy, Check, CornerDownLeft, GraduationCap } from 'lucide-react';
import { DEVELOPER_PROFILE, PROJECTS, MARKETPLACE_PRODUCTS } from '../data/portfolioData';

interface CommandOutput {
  id: string;
  command: string;
  timestamp: string;
  output: React.ReactNode;
}

export const TerminalScreen: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [copiedSsh, setCopiedSsh] = useState(false);

  const [outputs, setOutputs] = useState<CommandOutput[]>([
    {
      id: 'init-1',
      command: 'neofetch',
      timestamp: '23:25:10',
      output: (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs font-mono leading-relaxed">
          <div className="sm:col-span-5 text-[#3B82F6] font-bold select-none">
            <pre className="text-[10px] leading-tight">
{`       .---.
      /     \\
     | () () |     monish@reva-devbox
      \\  _  /      ------------------
       /   \\       Institution: REVA University, Bengaluru
      /|   |\\      Degree: B.Tech Computer Science & Engg
     / |   | \\     Platform: CampusMart E-Commerce
    (  |   |  )    Mission: Affordable Student Goods
    \`--'   '--'    Skills: HTML, C, C++, Python, JavaScript
                   Uptime: 2 years academic development
                   Target Category: Electronics & Apparel`}
            </pre>
          </div>
          <div className="sm:col-span-7 space-y-1.5 text-[#DFE2EF]">
            <div className="text-emerald-400 font-bold">Session authenticated: Monish (REVA University)</div>
            <p className="text-[#94A3B8]">
              Welcome to Monish's Developer Shell. Type <span className="text-[#3B82F6] font-bold">help</span> to list commands, or type <span className="text-[#8B5CF6] font-bold">store</span> to view student subsidized products.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[#64748B]">Quick commands:</span>
              {['help', 'bio', 'skills', 'store', 'projects', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="rounded bg-white/[0.04] border border-white/[0.08] px-2 py-0.5 text-[11px] text-[#3B82F6] hover:bg-[#3B82F6]/15 hover:border-[#3B82F6]/40 cursor-pointer transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [outputs]);

  const runCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    const timestamp = new Date().toLocaleTimeString();

    let resultNode: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        resultNode = (
          <div className="space-y-2 text-xs font-mono">
            <div className="text-[#3B82F6] font-bold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-[#94A3B8]">
              <div><span className="text-[#F8FAFC] font-semibold">help</span> — Display this command index</div>
              <div><span className="text-[#F8FAFC] font-semibold">bio</span> — About Monish and REVA University</div>
              <div><span className="text-[#F8FAFC] font-semibold">skills</span> — Monish's 5 core languages (HTML, C, C++, Python, JS)</div>
              <div><span className="text-[#F8FAFC] font-semibold">store</span> — View sample electronics & clothes in CampusMart</div>
              <div><span className="text-[#F8FAFC] font-semibold">projects</span> — List all projects & code repositories</div>
              <div><span className="text-[#F8FAFC] font-semibold">neofetch</span> — Print university student terminal badge</div>
              <div><span className="text-[#F8FAFC] font-semibold">contact</span> — Get Monish's email and contact coordinates</div>
              <div><span className="text-[#F8FAFC] font-semibold">clear</span> — Purge console history</div>
            </div>
          </div>
        );
        break;

      case 'bio':
        resultNode = (
          <div className="space-y-2 text-xs font-mono text-[#DFE2EF] bg-[#090D16] p-4 rounded-lg border border-white/[0.08] leading-relaxed">
            <div className="text-[#3B82F6] font-bold">About Monish:</div>
            <p className="text-[#94A3B8]">
              "I am Monish, a student studying at REVA University. I have created this website so people can get all the goods they need—such as electronics, clothes, and supplies—for a lesser rate. This is majorly for students and is also available to others."
            </p>
            <div className="text-[#64748B] pt-2 border-t border-white/[0.06]">
              Institution: REVA University, Bengaluru · Status: Open for Software Internships & Project Collabs
            </div>
          </div>
        );
        break;

      case 'skills':
        resultNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#3B82F6] font-bold">Monish's Technical Skills:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { name: 'HTML (HTML5)', desc: 'Semantic web structure, forms, accessible e-commerce layouts' },
                { name: 'JavaScript', desc: 'DOM manipulation, dynamic product filtering, cart calculations' },
                { name: 'C', desc: 'Pointers, low-level memory allocation, POSIX socket servers' },
                { name: 'C++', desc: 'Object-Oriented Programming (OOP), STL, AVL search trees' },
                { name: 'Python', desc: 'Backend APIs, deal scraping, price automation with BeautifulSoup' },
              ].map((s) => (
                <div key={s.name} className="p-2.5 rounded bg-[#090D16] border border-white/[0.08]">
                  <div className="text-[#F8FAFC] font-bold">{s.name}</div>
                  <div className="text-[11px] text-[#94A3B8]">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'store':
        resultNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#3B82F6] font-bold">CampusMart: Subsidized Student Goods Sample</div>
            <div className="border border-white/[0.08] rounded-lg overflow-x-auto bg-[#090D16]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-[#0D111D] text-[#64748B]">
                    <th className="p-2.5">Item Name</th>
                    <th className="p-2.5">Category</th>
                    <th className="p-2.5">Student Rate</th>
                    <th className="p-2.5">Retail Price</th>
                    <th className="p-2.5">Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {MARKETPLACE_PRODUCTS.slice(0, 4).map((p) => (
                    <tr key={p.id} className="hover:bg-white/[0.02]">
                      <td className="p-2.5 text-[#F8FAFC] font-bold">{p.name}</td>
                      <td className="p-2.5 text-[#94A3B8] capitalize">{p.category}</td>
                      <td className="p-2.5 text-emerald-400 font-bold tabular-nums">₹{p.discountedPrice}</td>
                      <td className="p-2.5 text-[#64748B] line-through tabular-nums">₹{p.originalPrice}</td>
                      <td className="p-2.5 text-[#8B5CF6] font-bold">{p.discountPct}% OFF</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
        break;

      case 'projects':
        resultNode = (
          <div className="space-y-3 text-xs font-mono">
            <div className="text-[#3B82F6] font-bold">Monish's Software Projects:</div>
            <div className="space-y-2">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-3 rounded-lg border border-white/[0.08] bg-[#090D16]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#F8FAFC] font-bold">{p.name}</span>
                    <span className="text-[#3B82F6]">{p.categoryLabel}</span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] mt-1">{p.summary}</p>
                  <div className="flex gap-1.5 mt-2">
                    {p.techStack.map((t) => (
                      <span key={t} className="tag-tech text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'contact':
        resultNode = (
          <div className="space-y-2 text-xs font-mono bg-[#090D16] p-4 rounded-lg border border-white/[0.08]">
            <div className="text-[#3B82F6] font-bold">Get in Touch with Monish:</div>
            <div className="text-[#94A3B8]">Email: <span className="text-[#F8FAFC]">{DEVELOPER_PROFILE.email}</span></div>
            <div className="text-[#94A3B8]">Institution: <span className="text-[#F8FAFC]">REVA University, Bengaluru, India</span></div>
            <div className="text-[#94A3B8]">Focus: <span className="text-[#F8FAFC]">Student E-Commerce & Web Platforms</span></div>
          </div>
        );
        break;

      case 'neofetch':
        resultNode = (
          <div className="text-xs font-mono text-[#94A3B8]">
            Monish · REVA University · CampusMart Online Platform · Skills: HTML, C, C++, Python, JavaScript
          </div>
        );
        break;

      case 'clear':
        setOutputs([]);
        return;

      default:
        resultNode = (
          <div className="text-rose-400 text-xs font-mono">
            command not found: {trimmed}. Type <span className="text-[#3B82F6] font-bold">help</span> to list valid commands.
          </div>
        );
        break;
    }

    setOutputs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: trimmed,
        timestamp,
        output: resultNode,
      },
    ]);

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      runCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
      setHistoryIndex(nextIdx);
      setInputVal(history[history.length - 1 - nextIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex <= 0) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    }
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
          <TerminalIcon className="h-3.5 w-3.5" />
          <span>Interactive Developer Console · Monish @ REVA University</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
          Monish's Developer Shell & REPL
        </h1>
        <p className="font-mono text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          Interactive command line connected to Monish's student portfolio. Query project information, view skills, and inspect CampusMart product discounts.
        </p>
      </div>

      {/* Terminal Main Container */}
      <div className="terminal-window shadow-2xl shadow-black font-mono">
        {/* Terminal Chrome Bar per spec */}
        <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#0D111D] px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#EF4444]/80 border border-[#DC2626]" />
            <div className="h-3 w-3 rounded-full bg-[#F59E0B]/80 border border-[#D97706]" />
            <div className="h-3 w-3 rounded-full bg-[#10B981]/80 border border-[#059669]" />
            <span className="ml-3 text-xs text-[#94A3B8]">
              monish@reva-devbox: ~ (zsh)
            </span>
          </div>

          <div className="text-[11px] text-[#3B82F6]">
            REVA University Student Terminal
          </div>
        </div>

        {/* Terminal Body */}
        <div
          className="p-5 space-y-5 min-h-[440px] max-h-[600px] overflow-y-auto cursor-text text-xs"
          onClick={() => inputRef.current?.focus()}
        >
          {outputs.map((item) => (
            <div key={item.id} className="space-y-2">
              <div className="flex items-center gap-2 text-[#94A3B8]">
                <span className="text-[#3B82F6] font-bold">monish@reva:~$</span>
                <span className="text-[#F8FAFC] font-semibold">{item.command}</span>
                <span className="text-[#64748B] text-[10px] ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          {/* Interactive Input Prompt */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[#3B82F6] font-bold shrink-0">monish@reva:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              className="flex-1 bg-transparent text-[#F8FAFC] outline-none border-none p-0 font-mono text-xs focus:ring-0 placeholder-[#64748B]"
              placeholder="Type 'help', 'bio', 'skills', 'store', 'projects'..."
            />
            <button
              onClick={() => runCommand(inputVal)}
              className="text-[#64748B] hover:text-[#3B82F6] transition-colors p-1"
            >
              <CornerDownLeft className="h-3.5 w-3.5" />
            </button>
          </div>
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Bottom Command Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] bg-[#0D111D] px-4 py-2.5 text-xs text-[#94A3B8]">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[#64748B] mr-1">Suggested:</span>
            {['help', 'bio', 'skills', 'store', 'projects', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                className="rounded bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 text-[11px] text-[#ADC6FF] hover:bg-[#3B82F6]/15 hover:border-[#3B82F6]/30 transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-[#64748B]">
            Press <kbd className="rounded bg-white/[0.08] px-1 py-0.5 text-[#F8FAFC]">↑</kbd>{' '}
            <kbd className="rounded bg-white/[0.08] px-1 py-0.5 text-[#F8FAFC]">↓</kbd> for history
          </div>
        </div>
      </div>
    </div>
  );
};
