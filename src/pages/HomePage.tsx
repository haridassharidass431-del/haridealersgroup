import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessData';
import { 
  ArrowRight, 
  Sparkles, 
  Printer, 
  ShoppingBag, 
  Cpu, 
  Globe2, 
  Code2, 
  FlaskConical, 
  CheckCircle2, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Layers, 
  MessageCircle,
  ExternalLink
} from 'lucide-react';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* ===================================================================
          1. CINEMATIC HERO SECTION
          =================================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient Dramatic Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[500px] bg-gradient-to-b from-[#D4AF37]/15 via-[#8B5CF6]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Subtle Division Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel-gold border border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/10"
          >
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#F5D77F]">
              COMMERCE &middot; ARTIGENCE AI &middot; GLOBAL TRADE
            </span>
          </motion.div>

          {/* MAIN EDITORIAL HEADLINE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white font-editorial leading-[1.08]">
              BUILDING BUSINESSES. <br className="hidden sm:inline" />
              <span className="text-gold-gradient">CREATING WHAT&apos;S NEXT.</span>
            </h1>
          </motion.div>

          {/* SUPPORTING TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-base sm:text-xl text-[#9da0ab] max-w-3xl mx-auto leading-relaxed font-light"
          >
            {BUSINESS_CONFIG.supportingText}
          </motion.p>

          {/* HERO ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#divisions"
              className="px-8 py-4 rounded-full font-bold text-sm bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] text-black hover:shadow-xl hover:shadow-[#D4AF37]/25 transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-full font-semibold text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <span>Let&apos;s Collaborate</span>
            </Link>
          </motion.div>

          {/* QUICK CREDENTIAL TICKER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-white/10"
          >
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-[#F5D77F]">6</span>
              <span className="text-[11px] text-[#9da0ab] uppercase tracking-wider">Business Pillars</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-emerald-400">Ready</span>
              <span className="text-[11px] text-[#9da0ab] uppercase tracking-wider">Xerox Service Hub</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-purple-400">Active</span>
              <span className="text-[11px] text-[#9da0ab] uppercase tracking-wider">Artigence AI Lab</span>
            </div>
            <div className="text-center">
              <span className="block text-xl font-bold font-mono text-cyan-400">2026</span>
              <span className="text-[11px] text-[#9da0ab] uppercase tracking-wider">Founded</span>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#656874] animate-bounce">
          <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>


      {/* ===================================================================
          2. FIRST PRIORITY SPOTLIGHT: HARIDEALERS XEROX & PRINTING
          =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel-gold border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Immediate Operational Hub &middot; Walk-Ins &amp; Online Orders</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-editorial leading-tight">
                  HARIDEALERS <span className="text-gold-gradient">XEROX &amp; PRINTING</span>
                </h2>

                <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
                  Need photocopies, project prints, high-res scans, or emergency spiral binding right now? 
                  Drop your documents directly via WhatsApp or walk into our shop for immediate processing.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                    <span className="text-[#9da0ab] block">B&amp;W Laser Copy</span>
                    <strong className="text-white font-mono text-sm">₹2.00 / side</strong>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                    <span className="text-[#9da0ab] block">Colour Laser Print</span>
                    <strong className="text-white font-mono text-sm">₹10.00 / page</strong>
                  </div>
                  <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                    <span className="text-[#9da0ab] block">Spiral &amp; Binding</span>
                    <strong className="text-white font-mono text-sm">from ₹35</strong>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap gap-3">
                  <Link
                    to="/xerox"
                    className="px-6 py-3 rounded-full font-bold text-xs bg-[#D4AF37] text-black hover:bg-[#F5D77F] transition-all flex items-center gap-2 shadow-lg shadow-[#D4AF37]/20"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Open Xerox Full Page &amp; Calculator</span>
                  </Link>

                  <a
                    href={getWhatsAppLink("Hello Haridealers Xerox! I have files to print.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full font-semibold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Xerox Visual Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative group">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
                    alt="Haridealers Xerox & Printing Facility"
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[#9da0ab] block text-[10px]">Turnaround Time</span>
                      <strong className="text-emerald-400">Under 15 Mins for Standard Jobs</strong>
                    </div>
                    <span className="px-2 py-1 rounded-md bg-[#D4AF37]/20 text-[#F5D77F] text-[10px] font-mono font-bold">
                      75-250 GSM
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
          3. BUSINESS DIVISIONS SHOWCASE (ALL 6 PILLARS)
          =================================================================== */}
      <section id="divisions" className="py-20 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Strategic Pillars</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-editorial">
              Our Business Divisions
            </h2>
            <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
              Every vertical is purpose-engineered to bridge foundational physical commerce with next-generation digital technology and algorithmic capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_CONFIG.divisions.map((division) => (
              <motion.div
                key={division.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl glass-panel border border-white/10 hover:border-[#D4AF37]/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image Cover */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-[#0e0f15]/40 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white uppercase">
                      {division.status}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white font-editorial group-hover:text-[#F5D77F] transition-colors">
                      {division.name}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium mt-0.5 mb-3">
                      {division.tagline}
                    </p>
                    <p className="text-xs text-[#9da0ab] leading-relaxed mb-4">
                      {division.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-1.5 mb-6">
                      {division.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-[#9da0ab]">
                          <CheckCircle2 className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-4 border-t border-white/10">
                    <Link
                      to={division.slug}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black border border-white/10 hover:border-[#D4AF37] flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Explore {division.shortTitle}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          4. ARTIGENCE AI HUB SPOTLIGHT (WITH UPLOADED EMBLEM)
          =================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Futuristic Purple Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl glass-panel-ai border border-purple-500/30 relative overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  <span>Artigence AI Hub &middot; Technology Division</span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-editorial leading-tight">
                  INNOVATE. AUTOMATE. <br />
                  <span className="text-ai-gradient">ELEVATE.</span>
                </h2>

                <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
                  Artigence AI Hub is Haridealers Group&apos;s technological laboratory, dedicated to creating tangible AI applications. 
                  Our flagship research endeavor is the <strong>AI Smart Ration Distribution System</strong> — an automated, tamper-proof grain dispensing terminal designed to eradicate leakage and ensure fair delivery in public welfare.
                </p>

                <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-xs space-y-2">
                  <span className="font-mono text-purple-300 font-bold uppercase tracking-wider block">
                    Featured Prototype: AI Smart Ration Terminal
                  </span>
                  <p className="text-[#9da0ab]">
                    Combines biometric verification, computer-vision fraud prevention, and calibrated precision auger dispensers to guarantee that entitled beneficiaries receive their exact allocation.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Link
                    to="/artigence"
                    className="px-7 py-3.5 rounded-full font-bold text-xs bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-900/50 transition-all flex items-center gap-2 hover:scale-105"
                  >
                    <Cpu className="w-4 h-4" />
                    <span>Explore Artigence AI Lab &amp; Prototypes</span>
                  </Link>

                  <Link
                    to="/rnd"
                    className="px-7 py-3.5 rounded-full font-semibold text-xs bg-white/5 hover:bg-white/10 text-white border border-white/20 transition-all flex items-center gap-2"
                  >
                    <span>View R&amp;D Experiments</span>
                  </Link>
                </div>

              </div>

              {/* Official Artigence AI Hub Emblem Card */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-2 bg-gradient-to-tr from-purple-600/30 via-indigo-500/20 to-cyan-500/30 border border-purple-500/40 shadow-2xl shadow-purple-950/60 group">
                  <img
                    src={BUSINESS_CONFIG.logos.artigence}
                    alt="Artigence AI Hub Official Glowing Emblem"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-purple-400/20 pointer-events-none" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-purple-300/80 mt-4 uppercase">
                  Official Artigence AI Emblem &middot; Established 2026
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ===================================================================
          5. GROUP PHILOSOPHY & PILLARS
          =================================================================== */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Our Ethos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-editorial">
              How We Build &amp; Operate
            </h2>
            <p className="text-xs sm:text-sm text-[#9da0ab]">
              A disciplined commitment to commercial integrity, transparent capability disclosure, and tangible value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS_CONFIG.about.coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#F5D77F]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-editorial">{val.title}</h3>
                <p className="text-xs text-[#9da0ab] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ===================================================================
          6. COLLABORATION INVITATION STRIP
          =================================================================== */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto p-10 rounded-3xl glass-panel border border-white/15 text-center space-y-6 relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-editorial">
              Ready to Collaborate or Place an Order?
            </h2>
            <p className="text-xs sm:text-sm text-[#9da0ab]">
              Whether you need instant printing, custom apparel manufacturing, AI consultation, or trade procurement discussions, our direct lines are open.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hello Haridealers Group, I would like to discuss a project / order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect via WhatsApp</span>
            </a>

            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full font-semibold text-xs bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all flex items-center gap-2"
            >
              <span>View Contact Channels</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
