import React from 'react';
import { motion } from 'framer-motion';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessData';
import { 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Target, 
  Compass, 
  Clock, 
  Award, 
  MessageCircle, 
  ArrowRight,
  User
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D77F] text-xs font-semibold tracking-wider uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>Enterprise Background &middot; Founded 2026</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-editorial">
            ABOUT <span className="text-gold-gradient">HARIDEALERS GROUP</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            {BUSINESS_CONFIG.supportingText}
          </p>
        </div>

        {/* --- DUAL EMBLEM SHOWCASE --- */}
        <div className="p-8 sm:p-12 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 max-w-4xl mx-auto mb-20 text-center space-y-6">
          <div className="flex items-center justify-center gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] shadow-xl shadow-[#D4AF37]/20">
              <img
                src={BUSINESS_CONFIG.logos.group}
                alt="Haridealers Group Official Gold Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="h-10 w-[1px] bg-white/20" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] shadow-xl shadow-purple-900/30">
              <img
                src={BUSINESS_CONFIG.logos.artigence}
                alt="Artigence AI Hub Official Emblem"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold font-editorial text-white">
            Dual Identity: Grounded Commerce Meets Autonomous Intelligence
          </h2>

          <p className="text-xs sm:text-sm text-[#9da0ab] leading-relaxed max-w-2xl mx-auto">
            Haridealers Group unites two complementary forces: dependable, high-integrity physical services on one hand, and relentless technological exploration through Artigence AI Hub on the other.
          </p>
        </div>

        {/* --- FOUNDER STORY (EDITABLE PLACEHOLDER) --- */}
        <div id="story" className="mb-20 scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl glass-panel border border-white/10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-white/5 border border-[#D4AF37]/40 flex items-center justify-center p-2 mb-4 shadow-xl">
                <User className="w-16 h-16 text-[#F5D77F]" />
              </div>
              <h3 className="text-base font-bold font-editorial text-white">
                {BUSINESS_CONFIG.about.founderName}
              </h3>
              <p className="text-xs text-[#D4AF37] font-mono mt-0.5">
                {BUSINESS_CONFIG.about.founderTitle}
              </p>
              <span className="text-[10px] text-[#656874] mt-2 bg-white/5 px-2 py-0.5 rounded">
                Editable Founder Bio
              </span>
            </div>

            <div className="md:col-span-8 space-y-4 text-xs sm:text-sm text-[#9da0ab] leading-relaxed">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] block">
                Founding Vision
              </span>
              <p>
                {BUSINESS_CONFIG.about.founderStory}
              </p>
              <p>
                &ldquo;We believe that true resilience is not about choosing between everyday local businesses and ambitious frontier technology. It is about excelling at both: honoring our walk-in customers with impeccable service, while dedicating late nights in our laboratory to build systems that automate and elevate the future.&rdquo;
              </p>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Hello! I read about Haridealers Group and would like to connect.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#F5D77F] hover:underline"
                >
                  <span>Connect with the Leadership Team on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* --- MISSION & VISION --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <div className="p-8 rounded-2xl glass-panel border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center text-[#F5D77F]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-editorial text-white">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#9da0ab] leading-relaxed">
              {BUSINESS_CONFIG.about.mission}
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-panel border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-300">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-editorial text-white">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#9da0ab] leading-relaxed">
              {BUSINESS_CONFIG.about.vision}
            </p>
          </div>
        </div>

        {/* --- CORE PHILOSOPHIES --- */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Operating Code</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-white mt-1">
              Guiding Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {BUSINESS_CONFIG.about.coreValues.map((v, i) => (
              <div key={i} className="p-6 rounded-2xl glass-panel border border-white/10 space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] font-bold">0{i + 1}</span>
                <h3 className="text-base font-bold font-editorial text-white">{v.title}</h3>
                <p className="text-xs text-[#9da0ab] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
