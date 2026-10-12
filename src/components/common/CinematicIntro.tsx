import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG } from '../../data/businessData';
import { Sparkles, ArrowRight } from 'lucide-react';

interface CinematicIntroProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState(() => {
    if (forceShow) return true;
    try {
      const seen = sessionStorage.getItem('hd_intro_seen');
      return !seen;
    } catch {
      return false;
    }
  });

  const handleDismiss = () => {
    try {
      sessionStorage.setItem('hd_intro_seen', 'true');
    } catch {
      // storage unavailable
    }
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  useEffect(() => {
    if (!isVisible) return;

    // Automatically transition into the site after 3.8 seconds
    const timer = setTimeout(() => {
      handleDismiss();
    }, 3800);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#08080a] text-[#f5f5f7] overflow-hidden select-none"
        >
          {/* Ambient Lighting Cones */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] animate-pulse" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#8B5CF6]/15 rounded-full blur-[100px]" />
          </div>

          {/* Skip Intro Button */}
          <button
            onClick={handleDismiss}
            className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest text-[#9da0ab] hover:text-[#f5f5f7] bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 backdrop-blur-md group"
            aria-label="Skip cinematic introduction"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Central Logo & Typography Reveal */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
            {/* Emblem Reveal */}
            <motion.div
              initial={{ scale: 0.75, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-tr from-[#D4AF37]/40 via-[#F5D77F]/80 to-[#8B5CF6]/40 shadow-2xl shadow-[#D4AF37]/20">
                <img
                  src={BUSINESS_CONFIG.logos.group}
                  alt="Haridealers Group Official Emblem"
                  className="w-full h-full object-cover rounded-full shadow-inner"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 rounded-full border border-[#D4AF37]/30 pointer-events-none"
              />
            </motion.div>

            {/* Editorial Title */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.35em] uppercase text-[#D4AF37]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>EXCELLENCE &middot; COMMERCE &middot; ARTIGENCE AI</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-editorial">
                HARIDEALERS GROUP
              </h1>

              <p className="text-sm md:text-base text-[#9da0ab] tracking-widest uppercase font-light">
                {BUSINESS_CONFIG.tagline}
              </p>
            </motion.div>

            {/* Progress / Loading Indicator */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-10 max-w-xs w-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
