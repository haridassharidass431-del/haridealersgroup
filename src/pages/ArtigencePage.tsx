import React, { useState } from 'react';
import {
  ARTIGENCE_PROJECTS,
  BUSINESS_CONFIG,
  getWhatsAppLink,
  ArtigenceProject,
} from '../data/businessData';
import {
  Cpu,
  Terminal,
  CheckCircle2,
  Eye,
  Fingerprint,
  Scale,
  ArrowRight,
  MessageCircle,
  Play,
  ShieldCheck,
} from 'lucide-react';

export const ArtigencePage: React.FC = () => {
  // Simulator state for the AI Smart Ration Distribution System
  const [simStep, setSimStep] = useState<number>(0);
  const [simWeight, setSimWeight] = useState<number>(0);

  const startSimulator = () => {
    setSimStep(1); // Verifying biometric
    setTimeout(() => {
      setSimStep(2); // Authenticated, ready to dispense
    }, 1500);
  };

  const triggerDispense = () => {
    setSimStep(3); // Dispensing
    let current = 0;
    const interval = setInterval(() => {
      current += 0.5;
      if (current >= 5.0) {
        setSimWeight(5.0);
        clearInterval(interval);
        setSimStep(4); // Completed & logged to ledger
      } else {
        setSimWeight(parseFloat(current.toFixed(1)));
      }
    }, 150);
  };

  const resetSimulator = () => {
    setSimStep(0);
    setSimWeight(0);
  };

  const featuredRationProject = ARTIGENCE_PROJECTS.find(p => p.id === 'smart-ration-system');
  const otherProjects = ARTIGENCE_PROJECTS.filter(p => p.id !== 'smart-ration-system');

  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* CYBERPUNK AMBIENT LIGHTING */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-purple-600/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-96 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-300 text-xs font-semibold uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Haridealers Technology Division &middot; Artificial Intelligence Lab</span>
          </div>

          {/* Official Artigence Emblem Display */}
          <div className="flex justify-center my-4">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 shadow-2xl shadow-purple-900/60">
              <img
                src={BUSINESS_CONFIG.logos.artigence}
                alt="Artigence AI Hub Official Glowing Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h1 className="text-3xl sm:text-6xl font-black tracking-tight font-editorial leading-tight">
            ARTIGENCE <span className="text-ai-gradient">AI HUB</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm tracking-[0.3em] uppercase text-purple-300/90">
            INNOVATE. AUTOMATE. ELEVATE. &middot; SINCE 2026
          </p>

          <p className="text-sm sm:text-base text-[#9da0ab] max-w-2xl mx-auto leading-relaxed">
            The applied machine learning and automation division of Haridealers Group. 
            We build edge-deployed computer vision systems, anti-pilferage public welfare hardware, and pragmatic automation software.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#ration-system"
              className="px-7 py-3 rounded-full font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/50 transition-all hover:scale-105 flex items-center gap-2"
            >
              <span>Explore Smart Ration System</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#prototypes"
              className="px-7 py-3 rounded-full font-semibold text-xs bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-all"
            >
              <span>Browse All Research Prototypes</span>
            </a>
          </div>

        </div>

        {/* --- FLAGSHIP PROJECT DEEP-DIVE: AI SMART RATION SYSTEM --- */}
        {featuredRationProject && (
          <section id="ration-system" className="mb-24 scroll-mt-24">
            <div className="p-8 sm:p-12 rounded-3xl glass-panel-ai border border-purple-500/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

              {/* Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">
                  Flagship Hardware &middot; Software Initiative
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Status: {featuredRationProject.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Description & Specs */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h2 className="text-2xl sm:text-4xl font-extrabold font-editorial text-white mb-3">
                      {featuredRationProject.title}
                    </h2>
                    <p className="text-sm text-[#9da0ab] leading-relaxed">
                      {featuredRationProject.description}
                    </p>
                  </div>

                  {/* Impact Highlight */}
                  <div className="p-4 rounded-2xl bg-purple-950/60 border border-purple-500/30 text-xs">
                    <span className="font-bold text-purple-300 uppercase font-mono block mb-1">
                      Target Public Impact:
                    </span>
                    <p className="text-[#9da0ab] leading-relaxed">
                      {featuredRationProject.impact}
                    </p>
                  </div>

                  {/* Feature Breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-bold font-editorial text-white uppercase tracking-wider">
                      Core Innovations &amp; Architectural Safeguards:
                    </h3>
                    <div className="space-y-2.5">
                      {featuredRationProject.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#9da0ab]">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <span className="text-[11px] font-mono text-[#656874] uppercase tracking-wider block mb-2">
                      Engineering Stack:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {featuredRationProject.techStack.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-purple-200 font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* --- INTERACTIVE PROTOTYPE SIMULATOR --- */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-black/70 border border-purple-500/40 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                        Terminal Live Simulator
                      </span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Simulator Screen */}
                  <div className="p-4 rounded-xl bg-[#090a10] border border-purple-500/20 font-mono text-xs space-y-3 min-h-[220px] flex flex-col justify-between">
                    
                    {simStep === 0 && (
                      <div className="text-center py-6 space-y-2">
                        <Fingerprint className="w-10 h-10 text-purple-400 mx-auto animate-pulse" />
                        <p className="text-white font-bold">Terminal Standby</p>
                        <p className="text-[11px] text-[#656874]">Simulate beneficiary placing thumbprint or standing before dual camera</p>
                      </div>
                    )}

                    {simStep === 1 && (
                      <div className="text-center py-6 space-y-2">
                        <Eye className="w-10 h-10 text-cyan-400 mx-auto animate-spin" />
                        <p className="text-cyan-300 font-bold">Scanning Biometrics...</p>
                        <p className="text-[11px] text-[#9da0ab]">Querying local encrypted edge database...</p>
                      </div>
                    )}

                    {simStep === 2 && (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-white/10 pb-1">
                          <span>✓ BENEFICIARY VERIFIED</span>
                          <span>CARD: #TN-9821</span>
                        </div>
                        <div className="text-[11px] text-[#9da0ab] space-y-1">
                          <p>Name: <strong className="text-white">Ramesh K. (Head of Household)</strong></p>
                          <p>Entitlement: <strong className="text-[#F5D77F]">5.0 kg Rice &middot; 2.0 kg Wheat</strong></p>
                          <p>Status: <strong className="text-emerald-400">Not Availed for Current Month</strong></p>
                        </div>
                        <p className="text-[10px] text-purple-300 pt-1">Ready to calibrate precision auger gate.</p>
                      </div>
                    )}

                    {simStep === 3 && (
                      <div className="text-center py-4 space-y-3">
                        <Scale className="w-8 h-8 text-[#F5D77F] mx-auto animate-bounce" />
                        <div>
                          <span className="text-3xl font-extrabold text-[#F5D77F] font-mono">
                            {simWeight} kg
                          </span>
                          <span className="text-xs text-[#9da0ab] block">Dispensing Rice to Bag</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-[#F5D77F] h-full transition-all duration-150"
                            style={{ width: `${(simWeight / 5.0) * 100}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {simStep === 4 && (
                      <div className="space-y-2 text-left">
                        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>DISPENSING COMPLETE: 5.000 KG</span>
                        </div>
                        <div className="p-2 bg-emerald-950/40 rounded border border-emerald-500/30 text-[10px] text-emerald-300 space-y-0.5">
                          <p>✓ Mechanical Auger Gate Sealed</p>
                          <p>✓ Digital Load Cell Variance: 0.00%</p>
                          <p>✓ Cryptographic Transaction Signed: 0x9b2f...81a</p>
                          <p>✓ SMS &amp; WhatsApp Receipt Dispatched to Citizen</p>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Simulator Controls */}
                  <div className="pt-1">
                    {simStep === 0 && (
                      <button
                        onClick={startSimulator}
                        className="w-full py-3 rounded-xl font-bold text-xs bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Play className="w-4 h-4" />
                        <span>Simulate Beneficiary Scan</span>
                      </button>
                    )}

                    {simStep === 2 && (
                      <button
                        onClick={triggerDispense}
                        className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 transition-all shadow-md"
                      >
                        <Scale className="w-4 h-4" />
                        <span>Dispense 5.0 kg Entitlement</span>
                      </button>
                    )}

                    {(simStep === 3) && (
                      <button
                        disabled
                        className="w-full py-3 rounded-xl font-bold text-xs bg-white/10 text-[#9da0ab] cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        <Scale className="w-4 h-4 animate-spin" />
                        <span>Dispensing in Progress...</span>
                      </button>
                    )}

                    {simStep === 4 && (
                      <button
                        onClick={resetSimulator}
                        className="w-full py-3 rounded-xl font-semibold text-xs bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 transition-all"
                      >
                        <span>Reset Simulator</span>
                      </button>
                    )}
                  </div>

                  <p className="text-[10px] text-center text-[#656874]">
                    Interactive software simulation demonstrating edge verification and physical dispenser state machine.
                  </p>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* --- ALL RESEARCH PROTOTYPES & SOFTWARE PORTFOLIO --- */}
        <section id="prototypes" className="mb-20 scroll-mt-24">
          <div className="mb-8">
            <span className="text-xs font-mono tracking-widest text-purple-300 uppercase">Applied Research</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-white mt-1">
              Technology Prototypes &amp; Active Explorations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project: ArtigenceProject) => (
              <div
                key={project.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between hover:border-purple-500/40 transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-purple-300">
                    {project.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                      {project.category}
                    </span>
                    <h3 className="text-base font-bold font-editorial text-white mt-0.5 mb-2 group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#9da0ab] leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#9da0ab]">
                          <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-[#9da0ab] font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={getWhatsAppLink(`Hello! I would like to learn more about the Artigence prototype: ${project.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-purple-600/30 text-white hover:text-purple-200 border border-white/10 hover:border-purple-500/30 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire About Prototype</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- ETHICAL AI LAB STATEMENT --- */}
        <div className="p-8 rounded-2xl glass-panel border border-purple-500/30 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base font-bold font-editorial text-white">
              Pragmatic Engineering &middot; Transparent Claims
            </h3>
            <p className="text-xs text-[#9da0ab] leading-relaxed">
              We do not claim non-existent enterprise partnerships, imaginary clients, or exaggerated benchmarks. 
              Our software prototypes and hardware terminals are developed through rigorous local testing, open telemetry, and honest technological iteration.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
