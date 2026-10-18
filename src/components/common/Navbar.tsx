import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/businessData';
import { useCart } from '../../context/cartStore';
import { Menu, X, ShoppingBag, MessageCircle, Printer, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { totalCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { 
      name: 'Xerox & Print', 
      path: '/xerox', 
      badge: 'Active Hub', 
      badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
    },
    { name: 'Clothing', path: 'https://haridealers.vercel.app/', external: true },
    { 
      name: 'Artigence AI', 
      path: '/artigence', 
      badge: 'AI Lab', 
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
    },
    { name: 'Digital Services', path: '/digital-services' },
    { name: 'R&D', path: '/rnd' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* BRAND LOGO & WORDMARK */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] rounded-lg p-1"
            aria-label="Haridealers Group Home"
          >
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] via-[#F5D77F] to-[#8B5CF6] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#D4AF37]/20">
              <img
                src={BUSINESS_CONFIG.logos.group}
                alt="Haridealers Group Official Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-editorial text-base sm:text-lg font-bold tracking-wider text-white group-hover:text-[#F5D77F] transition-colors leading-tight">
                HARIDEALERS
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#9da0ab] uppercase">
                GROUP &middot; EST 2026
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return link.external ? <a
                  key={link.path}
                  href={link.path}
                  className="relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 text-[#9da0ab] hover:text-white hover:bg-white/5"
                >
                  <span>{link.name}</span>
                </a> : <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm border border-white/15'
                      : 'text-[#9da0ab] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full border ${link.badgeColor}`}>
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full border border-[#D4AF37]/40 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>;
            })}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-2.5">
            {/* Quick Xerox Direct Button for Fast Access */}
            <Link
              to="/xerox"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 text-[#F5D77F] border border-[#D4AF37]/40 transition-all duration-200 group"
              title="Open Xerox & Printing Service Hub"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Xerox Shop</span>
            </Link>

            {/* Shopping Cart Pill */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-full text-[#9da0ab] hover:text-white hover:bg-white/5 border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label={`Open shopping cart with ${totalCount} items`}
            >
              <ShoppingBag className="w-4 h-4" />
              {totalCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-[#D4AF37] text-black text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow-lg"
                >
                  {totalCount}
                </motion.span>
              )}
            </button>

            {/* WhatsApp Quick Connect Button */}
            <a
              href={getWhatsAppLink("Hello Haridealers Group, I would like to inquire about your businesses and services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-900/30"
              aria-label="Contact via WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#9da0ab] hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE EXPANDED MENU DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0a0b10]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
              <div className="p-3 bg-white/[0.03] rounded-xl border border-white/5 mb-3">
                <p className="text-xs text-[#9da0ab] uppercase font-mono tracking-wider">
                  Haridealers Group Divisions
                </p>
              </div>

              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return link.external ? <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-[#9da0ab] hover:text-white hover:bg-white/5"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                  </a> : <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#D4AF37]/15 text-[#F5D77F] border border-[#D4AF37]/30'
                        : 'text-[#9da0ab] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <div className="flex items-center gap-2">
                      {link.badge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border ${link.badgeColor}`}>
                          {link.badge}
                        </span>
                      )}
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    </div>
                  </Link>;
              })}

              {/* Mobile WhatsApp Button */}
              <div className="pt-3">
                <a
                  href={getWhatsAppLink("Hello Haridealers Group, I would like to inquire about your businesses and services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-emerald-600/25 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/35 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
