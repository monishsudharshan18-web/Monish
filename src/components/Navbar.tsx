import React from 'react';
import { Terminal, ShoppingBag, GraduationCap, Menu, X, Code2 } from 'lucide-react';

interface NavbarProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  onOpenTerminalQuick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenTerminalQuick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'store', label: 'Platform Demo' },
    { id: 'projects', label: 'Projects' },
    { id: 'terminal', label: 'Terminal REPL' },
    { id: 'experience', label: 'About & Skills' },
    { id: 'spec', label: 'Design Tokens' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveScreen(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#090D16]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6">
        {/* Zone 1: Brand title, one line wordmark */}
        <button
          onClick={() => handleNavClick('overview')}
          className="group flex items-center gap-2.5 text-left text-base font-bold tracking-tight text-[#F8FAFC] transition-colors hover:text-[#3B82F6] whitespace-nowrap shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] p-0.5 text-white shadow-sm shadow-[#3B82F6]/30">
            <GraduationCap className="h-4 w-4" />
          </div>
          <span className="font-mono text-sm tracking-tight text-[#F8FAFC]">
            monish<span className="text-[#3B82F6]">.dev</span>
          </span>
        </button>

        {/* Zone 2: 4-5 nav links, 1-2 word labels, single line */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                  isActive
                    ? 'text-[#3B82F6] font-medium'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('store')}
            className="btn-primary text-xs py-1.5 px-3.5"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span>Platform Demo</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-[#94A3B8] hover:text-[#F8FAFC] rounded-md border border-white/[0.08] bg-[#0D111D]"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.08] bg-[#0D111D]/95 px-6 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-2 font-mono text-xs">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 px-3 rounded-md transition-colors ${
                  activeScreen === link.id
                    ? 'bg-[#13192B] text-[#3B82F6] border border-[#3B82F6]/30'
                    : 'text-[#94A3B8] hover:bg-white/[0.03] hover:text-[#F8FAFC]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/[0.08] mt-1">
              <button
                onClick={() => {
                  handleNavClick('store');
                }}
                className="w-full btn-primary py-2 text-xs"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Launch Platform Demo</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
