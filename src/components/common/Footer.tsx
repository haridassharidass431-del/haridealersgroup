import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../../data/businessData';
import {
  Printer,
  ShoppingBag,
  Cpu,
  Code2,
  FlaskConical,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [currentYear] = useState(() => new Date().getFullYear());

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 text-[#9da0ab] pt-16 pb-12 overflow-hidden">
      {/* Decorative ambient gradient backdrop */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Dual Logo Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              {/* Group Logo */}
              <div className="w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-[#D4AF37] to-[#F5D77F] shadow-lg shadow-[#D4AF37]/20">
                <img
                  src={BUSINESS_CONFIG.logos.group}
                  alt="Haridealers Group Official Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Artigence AI Hub Logo */}
              <div className="w-12 h-12 rounded-full p-[1.5px] bg-gradient-to-tr from-[#8B5CF6] to-[#06B6D4] shadow-lg shadow-[#8B5CF6]/20">
                <img
                  src={BUSINESS_CONFIG.logos.artigence}
                  alt="Artigence AI Hub Official Emblem"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div>
                <span className="font-editorial text-lg font-bold text-white tracking-wider block">
                  HARIDEALERS GROUP
                </span>
                <span className="text-[11px] font-mono tracking-widest text-[#D4AF37] uppercase">
                  &amp; ARTIGENCE AI HUB
                </span>
              </div>
            </div>

            <p className="text-sm text-[#9da0ab] leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.supportingText}
            </p>

            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Xerox Shop Active
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1.5">
                <Cpu className="w-3 h-3" />
                Artigence AI Prototypes
              </span>
            </div>
          </div>

          {/* Quick Business Divisions */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-semibold text-white tracking-wider uppercase">
              Divisions
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/xerox" className="hover:text-[#F5D77F] transition-colors flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Xerox &amp; Printing</span>
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
                  <span>Haridealers Textiles</span>
                </Link>
              </li>
              <li>
                <Link to="/artigence" className="hover:text-[#C084FC] transition-colors flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Artigence AI Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/digital-services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Digital Services</span>
                </Link>
              </li>
              <li>
                <Link to="/rnd" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-rose-400" />
                  <span>R&amp;D Laboratory</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-semibold text-white tracking-wider uppercase">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About the Group
                </Link>
              </li>
              <li>
                <Link to="/about#story" className="hover:text-white transition-colors">
                  Founder Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/xerox#calculator" className="hover:text-[#F5D77F] transition-colors">
                  Print Cost Calculator
                </Link>
              </li>
              <li>
                <span className="text-[#656874] cursor-default">Privacy &amp; Terms (Draft)</span>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="space-y-3">
            <h3 className="font-editorial text-sm font-semibold text-white tracking-wider uppercase">
              Contact &amp; Shop
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {BUSINESS_CONFIG.contact.shopAddress.line1}, {BUSINESS_CONFIG.contact.shopAddress.line2}, {BUSINESS_CONFIG.contact.shopAddress.city}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-[11px]">{BUSINESS_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="text-[11px]">{BUSINESS_CONFIG.contact.email}</span>
              </div>
              <div className="flex items-start gap-2 pt-1 border-t border-white/5">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-[11px] text-emerald-300/90 leading-tight">
                  {BUSINESS_CONFIG.contact.businessHours.weekdays}
                </span>
              </div>
              <div className="pt-2">
                <a
                  href={getWhatsAppLink("Hello! I am inquiring via the website footer.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#656874]">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            &copy; {currentYear} {BUSINESS_CONFIG.groupName}. All rights reserved. 
            Official emblems are proprietary marks. Active services, technical prototypes, and planned trade divisions are transparently denoted.
          </p>
          <div className="flex items-center gap-2 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
            <span>Built with React &amp; TypeScript</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
