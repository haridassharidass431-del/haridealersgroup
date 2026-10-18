import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XEROX_SERVICES, BUSINESS_CONFIG, getWhatsAppLink, ServiceItem } from '../data/businessData';
import {
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Calculator,
  ExternalLink,
  FileCheck,
  Layers,
  Copy,
  HelpCircle,
} from 'lucide-react';

export const XeroxPage: React.FC = () => {
  // Filter only enabled services (configurable by owner)
  const activeServices = useMemo(() => {
    return XEROX_SERVICES.filter((s) => s.enabled);
  }, []);

  // --- INTERACTIVE PRICE CALCULATOR STATE ---
  const [calcPages, setCalcPages] = useState<number>(25);
  const [calcPrintType, setCalcPrintType] = useState<'bw' | 'color'>('bw');
  const [calcRateType, setCalcRateType] = useState<'single' | 'wholesale'>('single');
  const [calcSides, setCalcSides] = useState<'single' | 'double'>('double');
  const [calcBinding, setCalcBinding] = useState<'none' | 'spiral' | 'lamination' | 'thesis'>('spiral');
  const [calcCopies, setCalcCopies] = useState<number>(1);

  // Price calculations based on editable rates
  const calculatedEstimate = useMemo(() => {
    const ratePerPage = calcPrintType === 'bw' ? (calcRateType === 'wholesale' ? 0.9 : 2) : 5;

    const printCostPerCopy = calcPages * ratePerPage;
    
    let bindingCost = 0;
    if (calcBinding === 'spiral') bindingCost = calcRateType === 'wholesale' ? 30 : 40;
    else if (calcBinding === 'lamination') bindingCost = 20;
    else if (calcBinding === 'thesis') bindingCost = 250;

    const subtotal = (printCostPerCopy + bindingCost) * calcCopies;
    return {
      ratePerPage,
      printCostPerCopy,
      bindingCost,
      total: Math.max(subtotal, 10), // minimum nominal charge
    };
  }, [calcPages, calcPrintType, calcRateType, calcBinding, calcCopies]);

  // Generate prefilled WhatsApp message for this calculator estimate
  const calculatorWhatsAppUrl = useMemo(() => {
    const msg = `*PRINTING ORDER INQUIRY - HARIDEALERS XEROX*\n\n` +
      `Hello! I calculated an estimate on your website and would like to proceed:\n\n` +
      `• Pages: *${calcPages} pages*\n` +
      `• Print Type: *${calcPrintType === 'bw' ? 'Black & White' : 'Full Colour'}*\n` +
      `• Sides: *${calcSides === 'double' ? 'Double Sided (Back-to-Back)' : 'Single Sided'}*\n` +
      `• Finishing/Binding: *${calcBinding.toUpperCase()}*\n` +
      `• Copies: *${calcCopies} set(s)*\n` +
      `• Estimated Total: *₹${calculatedEstimate.total}*\n\n` +
      `I am ready to send my PDF/document file. Please confirm turnaround time!`;
    return getWhatsAppLink(msg);
  }, [calcPages, calcPrintType, calcSides, calcBinding, calcCopies, calculatedEstimate]);

  const [isShopOpen, setIsShopOpen] = useState(true);

  useEffect(() => {
    const updateIsShopOpen = () => {
      try {
        const hour = new Date().getHours();
        setIsShopOpen(hour >= 8 && hour < 22);
      } catch {
        setIsShopOpen(true);
      }
    };

    updateIsShopOpen();
    const interval = window.setInterval(updateIsShopOpen, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#D4AF37]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER HERO --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Active Flagship Hub &middot; Walk-Ins &amp; Online Orders</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-editorial">
            HARIDEALERS <span className="text-gold-gradient">XEROX &amp; PRINTING</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9da0ab] leading-relaxed">
            Ultra-fast reprographics, heavy-duty lamination, thesis binding, and instant digital printing from WhatsApp, Email, and Cloud.
          </p>

          {/* Quick CTA Actions */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppLink("Hello Haridealers Xerox! I have a document I need printed/photocopied.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Document on WhatsApp</span>
            </a>

            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all"
            >
              <Calculator className="w-4 h-4 text-[#D4AF37]" />
              <span>Calculate Print Cost</span>
            </a>
          </div>
        </div>

        {/* --- STATUS & SHOP VITAL BAR --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {/* Status & Hours */}
          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className={`p-3 rounded-xl shrink-0 ${isShopOpen ? 'bg-emerald-500/15 text-emerald-400' : 'bg-amber-500/15 text-amber-400'}`}>
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold text-white font-editorial">Business Hours</h2>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isShopOpen ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                  {isShopOpen ? 'OPEN NOW' : 'CALL FIRST'}
                </span>
              </div>
              <p className="text-xs text-[#9da0ab] mt-1">{BUSINESS_CONFIG.contact.businessHours.weekdays}</p>
              <p className="text-[11px] text-[#656874] mt-0.5">{BUSINESS_CONFIG.contact.businessHours.sunday}</p>
            </div>
          </div>

          {/* Location & Map */}
          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#D4AF37]/15 text-[#F5D77F] shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white font-editorial">Shop Address</h2>
              <p className="text-xs text-[#9da0ab] mt-1 leading-relaxed">
                {BUSINESS_CONFIG.contact.shopAddress.line1}, {BUSINESS_CONFIG.contact.shopAddress.city}
              </p>
              <a
                href={BUSINESS_CONFIG.contact.shopAddress.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] text-[#F5D77F] hover:underline mt-1.5 font-medium"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Instant Contact */}
          <div className="p-5 rounded-2xl glass-panel border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white font-editorial">Direct Desk Contact</h2>
              <p className="text-xs text-[#9da0ab] mt-1 font-mono">{BUSINESS_CONFIG.contact.phone}</p>
              <p className="text-[11px] text-[#656874] mt-0.5">WhatsApp: {BUSINESS_CONFIG.contact.formattedPhone}</p>
              <div className="mt-1.5">
                <span className="text-[10px] text-emerald-400 font-medium">Same-Day Pickup Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SERVICE CARDS GRID --- */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Our Capabilities</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
                Printing &amp; Document Finishing Services
              </h2>
            </div>
            <p className="text-xs text-[#9da0ab] max-w-sm">
              *All listed rates are editable baseline estimates. Final price may adjust for heavy coverage, bulk orders, or custom paper thickness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {activeServices.map((service: ServiceItem) => (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl glass-panel border transition-all relative flex flex-col justify-between ${
                  service.popular 
                    ? 'border-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/5 bg-gradient-to-b from-[#D4AF37]/5 to-transparent' 
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#D4AF37] text-black uppercase">
                    Popular
                  </span>
                )}

                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9da0ab]">
                    {service.category}
                  </span>
                  <h3 className="text-base font-bold text-white font-editorial mt-1 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#9da0ab] leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="text-xs text-[#656874]">Starting from</span>
                    <div className="text-right">
                      <span className="text-lg font-extrabold text-[#F5D77F] font-mono">
                        {service.startingPrice}
                      </span>
                      <span className="text-[10px] text-[#9da0ab] ml-1">/ {service.unit}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#656874] mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4AF37]" />
                      <span>{service.turnaround}</span>
                    </span>
                    <span className="text-emerald-400 font-medium">Ready in shop</span>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello! I want to order "${service.name}". Please let me know how to send files.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-emerald-600/30 text-white hover:text-emerald-300 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire Service</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- INTERACTIVE COST ESTIMATOR / PRINT CALCULATOR --- */}
        <div id="calculator" className="mb-20 scroll-mt-24">
          <div className="p-8 md:p-10 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#F5D77F] mb-2">
                <Calculator className="w-4 h-4" />
                <span>Instant Estimator Tool</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-editorial">
                Document Print Cost Calculator
              </h2>
              <p className="text-sm text-[#9da0ab] mt-1">
                Configure your document specifications below to get an instant cost calculation, then transmit your job details directly to WhatsApp in one tap!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form Controls */}
              <div className="lg:col-span-7 space-y-6">
                
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-2 uppercase tracking-wider">Order Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {(['single', 'wholesale'] as const).map((type) => (
                      <button key={type} type="button" onClick={() => setCalcRateType(type)} className={`p-3 rounded-xl border text-xs font-semibold capitalize ${calcRateType === type ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white' : 'bg-white/5 border-white/10 text-[#9da0ab]'}`}>{type} order</button>
                    ))}
                  </div>
                </div>

                {/* Print Type: B&W vs Color */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-2 uppercase tracking-wider">
                    1. Print Color Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcPrintType('bw')}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        calcPrintType === 'bw'
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-[#9da0ab] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold font-editorial">Black &amp; White</div>
                        <div className="text-[11px] text-[#9da0ab]">Laser 1200 DPI</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#F5D77F]">₹0.90 wholesale / ₹2 single</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCalcPrintType('color')}
                      className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                        calcPrintType === 'color'
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white shadow-md'
                          : 'bg-white/5 border-white/10 text-[#9da0ab] hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold font-editorial">Full Colour</div>
                        <div className="text-[11px] text-[#9da0ab]">High Definition</div>
                      </div>
                      <span className="text-xs font-mono font-bold text-[#F5D77F]">₹5 / page</span>
                    </button>
                  </div>
                </div>

                {/* Sidedness */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-2 uppercase tracking-wider">
                    2. Print Sidedness
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcSides('double')}
                      className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                        calcSides === 'double'
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                          : 'bg-white/5 border-white/10 text-[#9da0ab]'
                      }`}
                    >
                      Back-to-Back (Double Sided)
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalcSides('single')}
                      className={`p-3 rounded-xl border text-xs font-medium transition-all ${
                        calcSides === 'single'
                          ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                          : 'bg-white/5 border-white/10 text-[#9da0ab]'
                      }`}
                    >
                      Single Sided Only
                    </button>
                  </div>
                </div>

                {/* Number of Pages Slider + Input */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-medium text-[#9da0ab] uppercase tracking-wider">
                      3. Total Document Pages
                    </label>
                    <span className="text-sm font-bold font-mono text-[#F5D77F]">
                      {calcPages} pages
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={calcPages}
                    onChange={(e) => setCalcPages(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                  />
                  <div className="flex justify-between text-[10px] text-[#656874] mt-1 font-mono">
                    <span>1 page</span>
                    <span>100</span>
                    <span>250</span>
                    <span>500+ pages</span>
                  </div>
                </div>

                {/* Binding & Finishing */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-2 uppercase tracking-wider">
                    4. Binding &amp; Protection
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: 'none', label: 'No Binding', price: '₹0' },
                      { id: 'spiral', label: 'Spiral Binding', price: calcRateType === 'wholesale' ? '+₹30 wholesale' : '+₹40 single' },
                      { id: 'lamination', label: 'Lamination', price: '+₹20' },
                      { id: 'thesis', label: 'Hard Bound', price: '+₹250' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCalcBinding(item.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-all ${
                          calcBinding === item.id
                            ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-white'
                            : 'bg-white/5 border-white/10 text-[#9da0ab]'
                        }`}
                      >
                        <div className="text-xs font-semibold">{item.label}</div>
                        <div className="text-[10px] text-[#F5D77F] font-mono mt-0.5">{item.price}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Copies Counter */}
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10">
                  <span className="text-xs text-[#9da0ab]">Number of Copies / Sets:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCalcCopies(Math.max(1, calcCopies - 1))}
                      className="w-8 h-8 rounded-lg bg-black/40 text-white flex items-center justify-center font-bold hover:bg-white/10"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold font-mono text-white">{calcCopies}</span>
                    <button
                      type="button"
                      onClick={() => setCalcCopies(calcCopies + 1)}
                      className="w-8 h-8 rounded-lg bg-black/40 text-white flex items-center justify-center font-bold hover:bg-white/10"
                    >
                      +
                    </button>
                  </div>
                </div>

              </div>

              {/* Calculator Summary Card */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-[#D4AF37]/40 shadow-xl space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#9da0ab]">
                    Estimated Total Breakdown
                  </span>
                  <div className="flex items-baseline justify-between mt-2">
                    <span className="text-3xl font-extrabold text-[#F5D77F] font-mono">
                      ₹{calculatedEstimate.total}
                    </span>
                    <span className="text-xs text-[#9da0ab]">approximate total</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#9da0ab]">
                    <span>Printing ({calcPages} pp &times; {calcCopies} sets)</span>
                    <span className="font-mono text-white">₹{calculatedEstimate.printCostPerCopy * calcCopies}</span>
                  </div>
                  <div className="flex justify-between text-[#9da0ab]">
                    <span>Binding / Finishing</span>
                    <span className="font-mono text-white">₹{calculatedEstimate.bindingCost * calcCopies}</span>
                  </div>
                  <div className="flex justify-between text-[#9da0ab]">
                    <span>Est. Processing Time</span>
                    <span className="text-emerald-400 font-medium">Under 15 minutes</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={calculatorWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/60 transition-all hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send this Order to WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-center text-[#656874] mt-2">
                    Transmits the exact specifications above so we can prepare your order instantly!
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* --- HOW TO ORDER / SEND DOCUMENTS --- */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">Zero Hassle</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-editorial mt-1">
              4 Easy Ways to Submit Your Documents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "WhatsApp Drop",
                desc: "Send your PDF, image, or document directly to our shop's WhatsApp number. Pick up when ready.",
                icon: MessageCircle,
                badge: "Fastest"
              },
              {
                step: "02",
                title: "Email Attachment",
                desc: `Email large files, project thesis PDFs, or multiple folders directly to ${BUSINESS_CONFIG.contact.email}.`,
                icon: FileCheck,
                badge: "Bulk / Thesis"
              },
              {
                step: "03",
                title: "Pen Drive / USB",
                desc: "Walk in with your USB drive or memory card. High-speed USB 3.0 file transfer stations available.",
                icon: Layers,
                badge: "Instant In-Shop"
              },
              {
                step: "04",
                title: "Physical Originals",
                desc: "Bring books, notes, legal deeds, certificates, or identity cards for high-speed laser photocopying.",
                icon: Copy,
                badge: "Walk-In"
              }
            ].map((method) => {
              const Icon = method.icon;
              return (
                <div key={method.step} className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#D4AF37]/40">{method.step}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/10 text-white">
                      {method.badge}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#F5D77F] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-editorial mb-1">{method.title}</h3>
                  <p className="text-xs text-[#9da0ab] leading-relaxed">{method.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- FAQ & NOTICE --- */}
        <div className="p-8 rounded-2xl glass-panel border border-white/10 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="text-lg font-bold text-white font-editorial">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div>
              <h3 className="font-semibold text-white mb-1">What paper quality do you use?</h3>
              <p className="text-[#9da0ab] leading-relaxed">
                Standard prints use high-bright 75 GSM copier paper. For certificates, photos, and project covers, we stock 100 GSM bond, 180 GSM matte card, and 250 GSM glossy sheets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Do you offer discounts for bulk printing?</h3>
              <p className="text-[#9da0ab] leading-relaxed">
                Yes! Special institutional and bulk rates apply for coaching notes, university exams, school worksheets, and corporate reports exceeding 200 pages. Contact us on WhatsApp for bulk quotes.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Can I send confidential documents?</h3>
              <p className="text-[#9da0ab] leading-relaxed">
                We respect document privacy strictly. Your files are printed directly and deleted from our temporary queue immediately upon completion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">How soon will my spiral binding be ready?</h3>
              <p className="text-[#9da0ab] leading-relaxed">
                Standard spiral bindings are completed in 5 to 15 minutes. For hard-bound university thesis with golden embossing, turnaround is same-day or 24 hours.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
