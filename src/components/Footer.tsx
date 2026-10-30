import React from 'react';
import { GraduationCap } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (screen: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#090D16] py-12 text-xs font-mono text-[#64748B]">
      <div className="mx-auto max-w-[1200px] px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Lockup */}
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-[#13192B] border border-white/[0.08] text-[#3B82F6]">
            <GraduationCap className="h-3.5 w-3.5" />
          </div>
          <div>
            <span className="font-bold text-[#F8FAFC]">{DEVELOPER_PROFILE.name}</span>
            <span className="mx-2">·</span>
            <span>Student @ {DEVELOPER_PROFILE.university}</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#94A3B8]">
          <button onClick={() => onNavigate('overview')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            Overview
          </button>
          <button onClick={() => onNavigate('store')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer text-[#3B82F6]">
            Platform Demo
          </button>
          <button onClick={() => onNavigate('projects')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => onNavigate('terminal')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            Terminal REPL
          </button>
          <button onClick={() => onNavigate('experience')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            About & Skills
          </button>
          <button onClick={() => onNavigate('spec')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            Design Tokens
          </button>
          <button onClick={() => onNavigate('contact')} className="hover:text-[#F8FAFC] transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Status & Copyright */}
        <div className="text-right">
          <div className="text-[#94A3B8]">
            © {new Date().getFullYear()} Monish · REVA University, Bengaluru
          </div>
        </div>
      </div>
    </footer>
  );
};
