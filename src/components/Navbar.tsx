import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Check } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler to target section IDs
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: id === 'hero' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-black/5 z-50 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Side: Pulse Status Badge */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-2 bg-[#eaeaea] hover:bg-zinc-200/90 px-4 py-2 rounded-full transition cursor-pointer select-none"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[12px] font-semibold tracking-tight text-[#111111]">
            Available for New Project
          </span>
        </div>

        {/* Center: Main Navigation Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-semibold text-slate-800">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-black transition flex items-center gap-0.5 cursor-pointer"
          >
            Projects <span className="text-slate-400 font-mono text-[12px] ml-1">[3]</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('tech-stack')} 
            className="hover:text-black transition flex items-center gap-0.5 cursor-pointer"
          >
            Stack <span className="text-slate-400 font-mono text-[12px] ml-1">[10]</span>
          </button>

          <button 
            onClick={() => scrollToSection('experience')} 
            className="hover:text-black transition cursor-pointer"
          >
            Experience
          </button>

          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-black transition cursor-pointer"
          >
            About
          </button>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-black transition cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right Side: Let's Talk button */}
        <div className="hidden md:block">
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#111111] text-white hover:bg-black/90 px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-tight transition flex items-center gap-1.5 cursor-pointer"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1 rounded-full hover:bg-slate-200/50 transition cursor-pointer text-slate-800"
            aria-label="Toggle Navigation Side Menu"
          >
            {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-out overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f6f6f6] border-b border-black/10 px-6 py-5 shadow-premium-md flex flex-col gap-4 animate-fade-in">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="w-full text-left py-2 font-display text-base font-bold flex items-center justify-between border-b border-slate-200"
          >
            <span>Projects</span> <span className="font-mono text-[10px] text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">3</span>
          </button>

          <button 
            onClick={() => scrollToSection('tech-stack')} 
            className="w-full text-left py-2 font-display text-base font-bold flex items-center justify-between border-b border-slate-200"
          >
            <span>Stack Overview</span> <span className="font-mono text-[10px] text-slate-400 bg-slate-200/60 px-1.5 py-0.5 rounded">8</span>
          </button>

          <button 
            onClick={() => scrollToSection('experience')} 
            className="w-full text-left py-2 font-display text-base font-bold border-b border-slate-200"
          >
            Experience Timeline
          </button>

          <button 
            onClick={() => scrollToSection('about')} 
            className="w-full text-left py-2 font-display text-base font-bold border-b border-slate-200"
          >
            About Developer
          </button>

          <button 
            onClick={() => scrollToSection('contact')} 
            className="w-full text-left py-2 font-display text-base font-bold border-b border-slate-200"
          >
            Contact
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="w-full bg-slate-950 hover:bg-slate-800 text-white py-3 rounded-full text-sm font-bold tracking-wide transition flex items-center justify-center gap-1 shadow-md"
          >
            Let's Talk <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      )}
    </header>
  );
}
