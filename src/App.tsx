import React, { useState } from 'react';
import { ArrowUpRight, Download, Github, Smartphone, Code, Activity, ShieldCheck, Mail, ArrowDown, ChevronDown, Check, Sparkles, AlertCircle, Printer, X, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import ShowcaseDesktop from './components/ShowcaseDesktop';
import ShowcaseMobile from './components/ShowcaseMobile';
import StackDashboard from './components/StackDashboard';
import ExperiencesTimeline from './components/ExperiencesTimeline';
import ContactForm from './components/ContactForm';
import { PROJECTS } from './data';

export default function App() {
  const [activeProjectDetail, setActiveProjectDetail] = useState<string | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [simulatingDemo, setSimulatingDemo] = useState<string | null>(null);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] relative overflow-hidden bg-grid-lines">
      <Navbar />

      {/* Hero Section */}
      <section 
        id="hero" 
        style={{ marginTop: '-50px', height: '1020px' }}
        className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col justify-between"
      >
        
        {/* Massive Name Typography Header in Flow to Prevent Coverage/Overlap */}
        <div className="w-full hidden md:flex justify-between items-center pointer-events-none select-none z-0 pb-6">
          <span className="font-display font-[900] text-[13.5vw] leading-none tracking-tighter text-outline-alex selection:bg-transparent">ALEX</span>
          <span className="font-display font-[900] text-[13.5vw] leading-none tracking-tighter text-[#111111] selection:bg-transparent">VALMYR</span>
        </div>

        {/* Content split grid (Left text stats, Right decorative layered windows) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start relative z-10">
          
          {/* LEFT CONTENT AREA */}
          <div 
            style={{ marginTop: '-50px' }}
            className="md:col-span-5 flex flex-col justify-center text-left space-y-6 pt-2 md:pt-4"
          >
            
            {/* Small Pill Tech Specialty badge */}
            <div className="self-start flex items-center gap-2 bg-[#eaeaea] px-4 py-2 rounded-full shadow-premium-sm border border-black/5 select-none text-[11px] font-bold tracking-wider text-[#111111]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
              <span>FRONTEND & FULL-STACK DEVELOPER</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-display font-black text-[#111111] text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] tracking-tight max-w-md">
              Building Modern Fintech <br className="hidden lg:inline" />
              & Web3 Experiences
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-[13.5px] sm:text-[14px] leading-relaxed max-w-md font-medium">
              Frontend & Full-Stack Developer focused on building fintech, trading, and Web3 applications. I enjoy creating responsive dashboards, real-time systems, and modern user experiences using JavaScript, TypeScript, React, Node.js, MongoDB, HTML, CSS, and Java.
            </p>

            {/* Specialization line tag */}
            <div className="text-[11.5px] sm:text-[12px] text-slate-800 font-mono font-bold flex flex-wrap items-center gap-x-2.5 gap-y-1.5 py-2.5 border-t border-b border-black/5 max-w-sm select-none">
              <span>React</span>
              <span className="text-emerald-500 font-bold">•</span>
              <span>TypeScript</span>
              <span className="text-emerald-500 font-bold">•</span>
              <span>Node.js</span>
              <span className="text-emerald-500 font-bold">•</span>
              <span>MongoDB</span>
              <span className="text-emerald-500 font-bold">•</span>
              <span>Web3</span>
              <span className="text-emerald-500 font-bold">•</span>
              <span>Fintech</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button 
                onClick={() => scrollTo('projects')}
                className="bg-[#111111] text-white hover:bg-black/90 px-8 py-4 rounded-full text-[13px] font-semibold tracking-tight transition shadow-premium-sm flex items-center gap-2 cursor-pointer border border-transparent"
              >
                View My Projects <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </button>
              
              <button 
                onClick={() => setShowResumeModal(true)}
                className="bg-white text-[#111111] hover:bg-slate-50 border border-slate-300 px-8 py-4 rounded-full text-[13px] font-semibold tracking-tight transition flex items-center gap-2 cursor-pointer shadow-premium-sm"
              >
                Download Resume <Download className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            {/* SOCIAL SECTION (ONLY GITHUB REQUIRED, NO OTHER CHANNELS) */}
            <div className="pt-2 max-w-sm space-y-4">
              <div>
                <a 
                  href="https://github.com/11alexandro" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ paddingLeft: '24px', marginLeft: '105px', paddingRight: '24px', width: '190px' }}
                  className="bg-white hover:bg-slate-50 border border-slate-300 py-3.5 rounded-full text-[13px] font-semibold tracking-tight transition flex items-center justify-between shadow-premium-sm cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-4.5 h-4.5 fill-currentColor text-[#111111]" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>
              </div>

              {/* Tech Stack Badges block as required */}
              <div className="pt-1 select-none space-y-2">
                <div className="flex flex-wrap gap-2 text-[12px] font-mono font-semibold">
                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00D8FF] fill-none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(0 12 12)" />
                      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)" />
                      <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)" />
                      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    </svg>
                    <span>React</span>
                  </div>

                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#3178C6] text-white flex items-center justify-center font-bold text-[8.5px] rounded-sm font-sans select-none shrink-0 leading-none">
                      TS
                    </div>
                    <span>TypeScript</span>
                  </div>

                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#339933] fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L4.27 6.42v8.83L12 19.67l7.73-4.42V6.42L12 2zm-1.12 15h-1.6V8.16h1.6V17zm4.24-2.88c0 1.25-.66 1.88-1.92 1.88-1.17 0-1.83-.55-1.92-1.42h1.4c.05.34.23.51.52.51.3 0 .42-.15.42-.45 0-.25-.13-.38-.56-.47-.85-.18-1.78-.42-1.78-1.45 0-1 .61-1.63 1.74-1.63 1.15 0 1.74.52 1.8 1.4h-1.37c-.05-.3-.21-.44-.43-.44-.24 0-.34.11-.34.33 0 .23.11.35.53.44.88.19 1.84.4 1.84 1.45v-.06z"/>
                    </svg>
                    <span>Node.js</span>
                  </div>

                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#47A248] fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 1.5C12 1.5 6 7.5 6 13.5C6 17.5 8.5 21 12 22.5C15.5 21 18 17.5 18 13.5C18 7.5 12 1.5 12 1.5ZM12 19.5C10 18.5 8.5 16 8.5 13.5C8.5 10.5 11 6.5 12 4.5C13 6.5 15.5 10.5 15.5 13.5C15.5 16 14 18.5 12 19.5Z"/>
                    </svg>
                    <span>MongoDB</span>
                  </div>
                </div>

                <div 
                  style={{ width: '280px', marginTop: '-45px', marginRight: '0px', marginLeft: '113px' }}
                  className="flex flex-wrap gap-2 text-[12px] font-mono font-semibold"
                >
                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#06B6D4] fill-currentColor" viewBox="0 0 24 24">
                      <path d="M12 6.09c-2.67 0-4.14 1.33-4.4 4 1.33-1.8 2.87-2.33 4.63-1.6 1 .41 1.72 1.13 2.51 1.95C16.03 11.75 17.65 13.4 21 13.4c2.67 0 4.14-1.33 4.4-4-1.33 1.8-2.87 2.33-4.63 1.6-1-.41-1.72-1.13-2.51-1.95-1.29-1.31-2.91-2.96-6.26-2.96zm-6.26 6.26c-2.67 0-4.14 1.33-4.4 4 1.33-1.8 2.87-2.33 4.63-1.6 1 .41 1.72 1.13 2.51 1.95 1.29 1.31-2.91 2.96 6.26 2.96 2.67 0 4.14-1.33 4.4-4-1.33 1.8-2.87 2.33-4.63 1.6-1-.41-1.72-1.13-2.51-1.95-1.29-1.31-2.91-2.96-6.26-2.96z"/>
                    </svg>
                    <span>Tailwind CSS</span>
                  </div>

                  <div className="bg-white border border-slate-200/85 hover:border-slate-300 shadow-premium-sm rounded-full px-3.5 py-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#010101] fill-currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" fill="currentColor"/>
                      <path d="M11.5 6L7 13.5h4L10 18l5.5-7.5h-4L11.5 6z" fill="white"/>
                    </svg>
                    <span>Socket.IO</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT OVERLAPPING PROJECT SHOWCASE */}
          <div className="md:col-span-7 select-none relative h-full md:-mt-[1.5vw] lg:-mt-[2vw] z-10">
            <ShowcaseDesktop />
            <ShowcaseMobile />
          </div>

        </div>

        {/* Scroll Explorer Indicator Footer */}
        <div 
          style={{ marginTop: '-50px' }}
          className="flex flex-col items-center justify-center pt-10 cursor-pointer text-slate-400 hover:text-black transition select-none" 
          onClick={() => scrollTo('projects')}
        >
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Scroll To Explore</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce" />
        </div>

      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/5" />

      {/* PROJECTS DETAIL SECTION */}
      <section 
        id="projects" 
        style={{ marginTop: '0px', minHeight: '600px' }}
        className="py-20 sm:py-24 px-6 max-w-7xl mx-auto scroll-mt-10 font-sans"
      >
        <div style={{ marginTop: '-40px' }} className="mb-12 text-left">
          <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block mb-1">
            PROJECT SHOWCASE [3]
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#111111]">
            Recent High-Performance Deployments
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 max-w-lg leading-relaxed">
            Click on any project mockup below to explore full capabilities, specific architectural features, and structural metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROJECTS.map(proj => (
            <div 
              key={proj.id}
              onClick={() => setActiveProjectDetail(activeProjectDetail === proj.id ? null : proj.id)}
              className="bg-white rounded-xl overflow-hidden border border-black/5 hover:border-slate-400 hover:shadow-premium-md transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              <div>
                {/* Visual Header depending on product theme */}
                <div className={`p-5 flex items-center justify-between border-b ${proj.theme === 'dark' ? 'bg-[#0B0F17] text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'}`}>
                  <div className="flex items-center gap-2">
                    {proj.id === 'alcaptrade' && <Activity className="w-5 h-5 text-emerald-400" />}
                    {proj.id === 'algovernance' && <ShieldCheck className="w-5 h-5 text-purple-400" />}
                    {proj.id === 'alcryptoplay' && <Code className="w-5 h-5 text-blue-500" />}
                    <h4 className="font-display font-bold tracking-tight text-sm sm:text-base">
                      {proj.title}
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-mono bg-slate-900/10 px-2 py-0.5 rounded font-black text-slate-500">
                    {proj.theme}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <p className="font-display font-black text-[#111111] text-xs leading-snug tracking-tight">
                    {proj.tagline}
                  </p>
                  
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Technical Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map(t => (
                      <span key={t} className="bg-slate-100 px-2 py-0.5 rounded text-[10px] text-slate-600 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expand details footer */}
              <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/50 group-hover:bg-slate-50 transition">
                <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">
                  {activeProjectDetail === proj.id ? 'Hide Specifications' : 'Technical Specifications View'}
                </span>
                <span className="text-[11px] text-slate-400 group-hover:text-black transition">
                  {activeProjectDetail === proj.id ? '↑' : '↓'}
                </span>
              </div>

              {/* Dynamic Expandable Tech details drawer */}
              {activeProjectDetail === proj.id && (
                <div className="bg-slate-50 border-t border-slate-100 p-6 space-y-5 text-xs animate-fade-in cursor-default" onClick={e => e.stopPropagation()}>
                  
                  {/* Architecture Section */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm" />
                      <span className="text-slate-400 uppercase font-mono text-[9px] block tracking-wider font-bold">Architecture Overview</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-[11px] font-sans pl-3 border-l border-slate-200">
                      {proj.longDescription}
                    </p>
                  </div>

                  {/* Target Deliverables Section */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-sm" />
                      <span className="text-slate-400 uppercase font-mono text-[9px] block tracking-wider font-bold">Core Deliverables & Features</span>
                    </div>
                    <ul className="space-y-1.5 pl-3 border-l border-slate-200">
                      {proj.features.map((feat, fI) => (
                        <li key={fI} className="text-slate-600 text-[11px] bg-white border border-slate-100/80 rounded-lg p-2.5 shadow-sm hover:shadow-subtle hover:border-slate-200 transition duration-200 flex items-start gap-2.5">
                          <span className="w-4 h-4 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-[10px] shrink-0">✓</span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Metrics Ledger */}
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-sm" />
                      <span className="text-slate-400 uppercase font-mono text-[9px] block tracking-wider font-bold">System Metrics Ledger</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3 bg-white border border-slate-200/50 rounded-xl p-3 shadow-sm pl-3">
                      {proj.metrics.map(met => (
                        <div key={met.label} className="text-center py-2 px-1 rounded-lg bg-slate-50/50 border border-slate-100 hover:border-slate-200 transition duration-200">
                          <span className="text-slate-400 block text-[8px] uppercase tracking-wider font-mono mb-0.5">{met.label}</span>
                          <span className="font-mono text-slate-800 font-bold text-[12px] tracking-tight">{met.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Demo Indicator */}
                  {simulatingDemo === proj.id && (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 flex items-center gap-2 text-[10px] text-emerald-800 animate-pulse font-mono justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Routing to simulated dev node... view dynamic local sandbox logs.
                    </div>
                  )}

                  {/* External triggers */}
                  <div className="flex gap-2.5 pt-2">
                    <a 
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-slate-900 hover:bg-slate-850 text-white py-2 rounded-lg text-center text-[10px] font-bold tracking-tight transition flex items-center justify-center gap-1 cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <Github className="w-3.5 h-3.5" /> Source Code ↗
                    </a>
                    <a 
                      href={`${proj.demoUrl}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 py-2 rounded-lg text-center text-[10px] font-bold tracking-tight transition flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md"
                    >
                      Instant Demo Live
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/5" />

      {/* TECH STACK PANEL SECTION */}
      <section 
        id="tech-stack" 
        style={{ marginTop: '0px', height: '740.2px' }}
        className="py-20 sm:py-24 px-6 max-w-7xl mx-auto scroll-mt-20 font-sans"
      >
        <div style={{ marginTop: '-20px' }} className="mb-10 text-left">
          <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block mb-1">
            TECHNICAL CAPABILITIES [8]
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#111111]">
            Engineering Stack & Core Competencies
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 max-w-lg leading-relaxed">
            I specialize in structuring clean database paradigms, streaming sockets duplexes, typed interfaces validation maps, and high-contrast fluid user designs.
          </p>
        </div>

        <StackDashboard />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/5" />

      {/* TIMELINE EXPERIENCE SECTION */}
      <section 
        id="experience" 
        style={{ width: '1266px', height: '571px' }}
        className="py-20 sm:py-24 px-6 max-w-7xl mx-auto scroll-mt-20 font-sans"
      >
        <div style={{ marginTop: '-20px' }} className="mb-10 text-left">
          <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block mb-1">
            PROFESSIONAL HISTORY
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#111111]">
            Experience & Milestone Contributions
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 max-w-lg leading-relaxed">
            Leading high-performance Web3 operations, launching financial platforms, and designing robust secure SaaS architectures.
          </p>
        </div>

        <ExperiencesTimeline />
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/5" />

      {/* ABOUT ME SECTION */}
      <section 
        id="about" 
        style={{ height: '520.833px' }}
        className="py-20 sm:py-24 px-6 max-w-7xl mx-auto scroll-mt-20 font-sans"
      >
        <div style={{ marginTop: '-20px' }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Block text pitch with specific target impression requirement */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block mb-1">
                BACKGROUND PHILOSOPHY
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#111111] mb-5">
                Integrating Speed, Security, and Pixel-Perfect Visuals
              </h3>
              
              <div className="space-y-4 text-slate-500 text-[11.5px] sm:text-xs leading-relaxed">
                <p>
                  As an independent software engineer specialized in Fintech, Trading, and Web3 applications, I operate at the intersection of rigorous full-stack implementation and pristine visual alignment. I believe financial platforms deserve the same tier of interactive grace, micro-movements, and aesthetic pairings as top-tier consumer software.
                </p>
                <p>
                  Whether composing low-latency data adapters for streaming candlestick updates, coding robust escrow multi-signatures routers, or structuring reusable Tailwind token environments, my goal is always absolute, pixel-perfect execution. I approach layout parameters with mathematical precision.
                </p>
              </div>
            </div>

            {/* Quote Block banner */}
            <div className="mt-8 bg-white border border-black/5 p-5 rounded-xl shadow-premium-sm relative">
              <span className="font-display font-black text-slate-900 text-xs italic tracking-tight">
                "An independent developer specialized in Fintech, Trading, and Web3 applications."
              </span>
              <div className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold mt-2.5">
                Alex Valmyr Developer Mission
              </div>
            </div>
          </div>

          {/* Right Bento Cards layout containing target capabilities */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl border border-black/5 shadow-premium-sm flex flex-col justify-between">
              <span className="text-[10px] font-bold font-mono tracking-wide text-slate-400">01</span>
              <div>
                <h5 className="font-display font-bold text-slate-950 text-xs mb-1">Fintech Specialized</h5>
                <p className="text-slate-500 text-[10.5px] leading-relaxed">
                  Deeply understood trading pipelines, leverage calculators, transaction ledger schemas, and tick rendering streams.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/5 shadow-premium-sm flex flex-col justify-between">
              <span className="text-[10px] font-bold font-mono tracking-wide text-slate-400">02</span>
              <div>
                <h5 className="font-display font-bold text-slate-950 text-xs mb-1">Web3 Protocols</h5>
                <p className="text-slate-500 text-[10.5px] leading-relaxed">
                  Cryptographic balance synchronization, decentralized multi-sig escrows networks, and wallet integrations.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/5 shadow-premium-sm flex flex-col justify-between">
              <span className="text-[10px] font-bold font-mono tracking-wide text-slate-400">03</span>
              <div>
                <h5 className="font-display font-bold text-slate-950 text-xs mb-1">Full-Stack Sovereignty</h5>
                <p className="text-slate-500 text-[10.5px] leading-relaxed">
                  Asymmetric API routes, express pipeline validators, MongoDB aggregate routers, and low-latency socket servers.
                </p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-black/5 shadow-premium-sm flex flex-col justify-between">
              <span className="text-[10px] font-bold font-mono tracking-wide text-slate-400">04</span>
              <div>
                <h5 className="font-display font-bold text-slate-950 text-xs mb-1">Pragmatic Design</h5>
                <p className="text-slate-500 text-[10.5px] leading-relaxed">
                  Admitted follower of Apple-grade, Space Grotesk elegant typography settings, micro-hover, and layout balance controls.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-black/5" />

      {/* DISPATCH CONTACT SECTION */}
      <section 
        id="contact" 
        style={{ height: '700px' }}
        className="py-20 sm:py-24 px-6 max-w-7xl mx-auto scroll-mt-20"
      >
        <div style={{ marginTop: '-15px' }} className="mb-10 text-left">
          <span className="text-[10px] text-blue-600 font-mono font-bold tracking-widest uppercase block mb-1">
            ESTABLISH COMMUNICATION
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight text-[#111111]">
            Initialize Your Project Router
          </h3>
          <p className="text-slate-500 text-xs mt-1.5 max-w-lg leading-relaxed">
            Provide your specifications and parameters in the layout below, or connect directly through official inbox routes or GitHub networks.
          </p>
        </div>

        <ContactForm />
      </section>

      {/* Visual background grid lines footer */}
      <footer 
        style={{ height: '190px' }}
        className="bg-slate-950 text-white pt-12 pb-8 px-6 font-sans relative overflow-hidden border-t border-slate-900"
      >
        <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-800 pb-8 mb-6">
            <div>
              <div className="flex items-center gap-1.5 font-display font-black text-lg tracking-tight select-none">
                <span className="text-white/40">ALEX</span>
                <span>VALMYR</span>
              </div>
              <p className="text-slate-500 text-[10px] font-mono mt-1 uppercase tracking-wider">
                Frontend & Full-Stack Fintech Architect
              </p>
            </div>

            <div className="flex gap-4 text-[10px] text-slate-400 font-mono">
              <a href="mailto:alexvalmyr15@gmail.com" className="hover:text-emerald-400 hover:underline">alexvalmyr15@gmail.com</a>
              <span className="text-slate-800">/</span>
              <a href="https://github.com/11alexandro" target="_blank" rel="noreferrer" className="hover:text-white hover:underline">GitHub Portal</a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[10px] font-mono gap-4">
            <span>&copy; {new Date().getFullYear()} Alex Valmyr. All rights secured.</span>
            <span className="flex items-center gap-1">
              Engineered with <span className="text-rose-500">❤️</span> using React, TypeScript & Tailwind CSS v4.0.
            </span>
          </div>
        </div>
      </footer>


      {/* ────────────────────────────────────────────────────────
          SUMMER RESUME OVERLAY DRAWER MODAL
      ──────────────────────────────────────────────────────── */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 cursor-default">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-premium-lg border border-slate-200/50 flex flex-col justify-between animate-fade-in relative">
            
            {/* Modal Floating Toolbar */}
            <div className="sticky top-0 bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-slate-800 rounded-t-2xl z-20 font-sans shadow-md">
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1 font-bold">
                <FileText className="w-4 h-4 text-emerald-400" /> Valmyr_Alexandro_Resume.pdf
              </span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrintResume}
                  className="bg-emerald-500 text-slate-950 hover:bg-emerald-400 px-3 py-1.5 rounded text-[10px] font-bold tracking-tight transition flex items-center gap-1 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" /> Direct Print / PDF Save
                </button>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 hover:bg-slate-800 rounded-full transition text-slate-400 hover:text-white cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Printable Frame Content */}
            <div className="p-8 font-sans text-slate-800 text-[11px] leading-relaxed select-text space-y-6 bg-white" id="cv-capture-area">
              
              {/* Header */}
              <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="font-display font-black text-2xl tracking-tighter text-slate-950">Valmyr Alexandro</h1>
                  <p className="text-[10px] font-mono text-blue-600 font-bold uppercase mt-0.5">Frontend & Full-Stack Developer | Fintech • Trading • Web3</p>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-500 space-y-0.5 self-center sm:self-auto">
                  <p>Morne Rouge, Cap-Haitian, Haiti</p>
                  <p>Email: alexvalmyr15@gmail.com</p>
                  <p>GitHub: github.com/11alexandro</p>
                </div>
              </div>

              {/* Profile Summary */}
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-250 pb-1 mb-2">SUMMARY</h3>
                <p className="text-slate-650 text-justify">
                  Frontend & Full-Stack Developer focused on fintech, trading, and Web3 platforms using React, Node.js, JavaScript, HTML, and CSS. Experienced in building responsive dashboards, crypto interfaces, and modern startup-style web applications with clean UI/UX and scalable frontend architecture. Built independent projects including trading dashboards, governance platforms, and crypto payment systems with a focus on responsive design, usability, APIs, and modern frontend workflows.
                </p>
              </div>

              {/* Skills and Languages Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
                <div className="sm:col-span-8 space-y-4">
                  <h3 className="font-mono text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1 mb-2">SKILLS</h3>
                  <div className="grid grid-cols-2 gap-3 text-[10px]">
                    <div>
                      <span className="font-bold text-slate-950 block">Frontend</span>
                      <span className="text-slate-500">HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-950 block">Backend</span>
                      <span className="text-slate-500">Node.js, Express.js, REST APIs, Java</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-950 block">Tools & Technologies</span>
                      <span className="text-slate-500">Git, GitHub, AI Development Tools, Vercel</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-950 block">Specializations</span>
                      <span className="text-slate-500">Fintech UI, Trading Dashboards, Web3 Interfaces, Landing Pages, SaaS Design Systems</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <h3 className="font-mono text-[9px] uppercase tracking-widest font-bold text-slate-400 border-b border-slate-200 pb-1 mb-2">LANGUAGE</h3>
                  <ul className="text-[10px] space-y-1 text-slate-600 font-medium">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> English
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> French
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Haitian Creole
                    </li>
                  </ul>
                </div>
              </div>

              {/* Career Ledger */}
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#111111] border-b border-slate-200 pb-1 mb-2">EXPERIENCE</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between font-bold text-slate-950 text-[11px]">
                      <span>Independent Developer & Designer — Self-Directed Projects</span>
                      <span className="font-mono font-normal text-slate-500">2022 - Present | Remote</span>
                    </div>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-slate-600 text-[10.5px]">
                      <li>Designed and developed multiple startup-style fintech and Web3 projects independently.</li>
                      <li>Created responsive interfaces and dashboard systems using React, JavaScript, HTML, and CSS.</li>
                      <li>Applied modern UI/UX principles to improve usability and visual consistency.</li>
                      <li>Used AI-assisted development workflows to accelerate prototyping and iteration.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects Ledger */}
              <div>
                <h3 className="font-mono text-[9px] uppercase tracking-widest font-bold text-[#111111] border-b border-slate-200 pb-1 mb-2">FEATURED PROJECTS</h3>
                <div className="space-y-4 text-[10.5px]">
                  <div>
                    <span className="font-bold text-slate-950">ALCapTrade - Trading Dashboard Platform</span>
                    <ul className="list-disc pl-4 mt-1 text-slate-600 space-y-0.5">
                      <li>Built a mobile-responsive trading dashboard with live price charts, order panels, and portfolio analytics.</li>
                      <li>Designed reusable React components to keep dense financial data readable across screen sizes.</li>
                      <li>Focused on fast load times and smooth chart interactions for a real-time trading experience.</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950">ALCrypto-Pay — Crypto Payment Platform</span>
                    <span className="font-mono text-slate-500 text-[9.5px] ml-2">(React.js • Node.js • JavaScript)</span>
                    <ul className="list-disc pl-4 mt-1 text-slate-600 space-y-0.5">
                      <li>Built a full-stack crypto escrow platform with React and Node.js, including a milestone-based payment flow.</li>
                      <li>Implemented status tracking for each payment stage, from funded to released to disputed.</li>
                      <li>Designed reusable, mobile-responsive components with Tailwind CSS for a consistent UI across devices.</li>
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-slate-950">ALCapital-Governance — Governance & Investment Platform</span>
                    <span className="font-mono text-slate-500 text-[9.5px] ml-2">(React.js • Frontend Development • UI/UX)</span>
                    <ul className="list-disc pl-4 mt-1 text-slate-600 space-y-0.5">
                      <li>Built a DAO governance dashboard with live proposal tracking and voting charts.</li>
                      <li>Used Socket.io to sync vote results in real time across all open browser tabs without a page refresh.</li>
                      <li>Designed clean, data-heavy interface screens that stay readable even with multiple live charts on screen.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="border-t border-slate-200 pt-4 flex justify-between text-[10px] text-slate-400 font-mono">
                <span>Resume Reference URL: github.com/11alexandro</span>
                <span>Location: Morne Rouge, Haiti</span>
              </div>

            </div>

            {/* Footer triggers */}
            <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 rounded-b-2xl flex justify-between items-center text-[10.5px] font-medium text-slate-500">
              <span>Press CTRL+P (Cmd+P) inside print preview to print directly to PDF.</span>
              <button 
                onClick={() => setShowResumeModal(false)}
                className="text-slate-900 font-bold hover:underline"
              >
                Close CV Viewer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
