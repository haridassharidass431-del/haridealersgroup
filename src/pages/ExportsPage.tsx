import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EXPORT_DIVISIONS, 
  ExportCategory, 
  BUSINESS_CONFIG, 
  getWhatsAppLink 
} from '../data/businessData';
import { 
  Globe2, 
  Ship, 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  ArrowRight, 
  Send, 
  Building2, 
  Boxes, 
  ShieldCheck,
  FileCheck2
} from 'lucide-react';

export const ExportsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buyer' | 'supplier'>('buyer');
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  
  // Buyer form fields
  const [buyerName, setBuyerName] = useState('');
  const [buyerCompany, setBuyerCompany] = useState('');
  const [buyerCountry, setBuyerCountry] = useState('');
  const [buyerCategory, setBuyerCategory] = useState('Textiles & Apparel');
  const [buyerRequirement, setBuyerRequirement] = useState('');

  const handleBuyerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerRequirement) return;

    // Build prefilled message and direct to WhatsApp or mail
    const text = `*INTERNATIONAL TRADE INQUIRY - HARIDEALERS EXPORTS*\n\n` +
      `• Type: Buyer Inquiry\n` +
      `• Name: ${buyerName}\n` +
      `• Company: ${buyerCompany || 'Individual / Firm'}\n` +
      `• Destination Country: ${buyerCountry || 'Not Specified'}\n` +
      `• Target Category: ${buyerCategory}\n` +
      `• Specific Requirement: ${buyerRequirement}\n\n` +
      `Please contact me regarding procurement specs and sample evaluation.`;

    const url = getWhatsAppLink(text);
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* Background Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Cross-Border Sourcing &middot; Emerging Trade Vertical</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-editorial">
            EXPORTS &amp; <span className="text-gold-gradient">INTERNATIONAL TRADE</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            Bridging regional Indian manufacturing and agricultural production with international commercial demand. 
            Focused on textiles, agro-commodities, and industrial merchandise.
          </p>

          {/* Honest Transparent Venture Status Notice */}
          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-blue-200 text-xs max-w-2xl mx-auto flex items-start gap-3 text-left">
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-blue-300 block">Emerging Venture Disclosure</strong>
              <p className="text-[#9da0ab]">
                This division is actively onboarding verified textile mills, agricultural producer collectives, and freight brokers. 
                We do not claim phantom export records or non-existent overseas offices. Inquiries are addressed directly by the founding team.
              </p>
            </div>
          </div>
        </div>

        {/* --- DIVISIONS GRID --- */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Sourcing Verticals</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-white mt-1">
              Focus Commodity &amp; Product Sectors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EXPORT_DIVISIONS.map((division: ExportCategory) => (
              <div
                key={division.id}
                className="rounded-2xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between hover:border-blue-500/40 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={division.image}
                    alt={division.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f15] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-blue-300">
                    {division.status}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-editorial text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-xs text-[#9da0ab] leading-relaxed mb-4">
                      {division.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#D4AF37] block">
                        Catalog Inclusions:
                      </span>
                      {division.products.map((prod, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-[#9da0ab]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span>{prod}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-[#656874]">
                    <span className="font-semibold text-white block mb-0.5">Quality Protocol:</span>
                    <p className="text-[11px] leading-relaxed">{division.specifications}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- TRADE INQUIRY FORM (BUYER & SUPPLIER TABS) --- */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h2 className="text-2xl font-bold font-editorial text-white">
              Direct Trade Desk Inquiry
            </h2>
            <p className="text-xs text-[#9da0ab]">
              Connect directly with our merchant sourcing desk. Submissions generate an instant prefilled WhatsApp dispatch or direct email record.
            </p>
          </div>

          <form onSubmit={handleBuyerSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#9da0ab] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={buyerName}
                  onChange={(e) => setBuyerName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#9da0ab] mb-1">Company / Organization</label>
                <input
                  type="text"
                  placeholder="e.g. Global Apparel Imports LLC"
                  value={buyerCompany}
                  onChange={(e) => setBuyerCompany(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#9da0ab] mb-1">Destination Country / Port</label>
                <input
                  type="text"
                  placeholder="e.g. UAE / UK / USA"
                  value={buyerCountry}
                  onChange={(e) => setBuyerCountry(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#9da0ab] mb-1">Commodity / Sector</label>
                <select
                  value={buyerCategory}
                  onChange={(e) => setBuyerCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#13141e] border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
                >
                  <option value="Textiles & Apparel">Textiles, Yarns &amp; Apparel</option>
                  <option value="Agricultural Commodities">Agricultural Commodities &amp; Spices</option>
                  <option value="General Merchandise">General Merchandise &amp; Industrial</option>
                  <option value="Supplier Partnership">Supplier / Producer Onboarding</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#9da0ab] mb-1">Procurement Requirement / Specifications *</label>
              <textarea
                required
                rows={3}
                placeholder="Mention required volumes (e.g. 1 container, 5,000 units), target specifications, packing preferences, and timeline..."
                value={buyerRequirement}
                onChange={(e) => setBuyerRequirement(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-blue-400"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-950/60"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Submit Trade Inquiry via WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-[#656874]">
              Forms transmit directly to our trade desk without saving unencrypted data in public databases.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};
