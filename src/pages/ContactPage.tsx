import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_CONFIG, getWhatsAppLink } from '../data/businessData';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Check,
  Copy,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Globe,
  Share2,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  // Form fields
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [division, setDivision] = useState('Xerox & Printing');
  const [message, setMessage] = useState('');
  
  // Validation & Modal state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showDispatchModal, setShowDispatchModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Please provide your full name.';
    if (!contactInfo.trim()) errs.contactInfo = 'Please provide your phone number or email address.';
    if (!message.trim()) errs.message = 'Please enter your message or inquiry details.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowDispatchModal(true);
  };

  const getFullMessageBody = () => {
    return `*INQUIRY - HARIDEALERS GROUP*\n\n` +
      `• From: ${name}\n` +
      `• Contact: ${contactInfo}\n` +
      `• Division: ${division}\n` +
      `• Message: ${message}\n\n` +
      `Submitted via haridealers.com contact page.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(getFullMessageBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openWhatsApp = () => {
    const url = getWhatsAppLink(getFullMessageBody());
    window.open(url, '_blank');
  };

  const openEmailClient = () => {
    const subject = encodeURIComponent(`Inquiry for ${division} - ${name}`);
    const body = encodeURIComponent(getFullMessageBody());
    window.location.href = `mailto:${BUSINESS_CONFIG.contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D4AF37]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F5D77F] text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect &middot; Visit &middot; Inquire</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-editorial">
            LET&apos;S <span className="text-gold-gradient">COLLABORATE</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            Reach our administrative team, drop files for Xerox printing, discuss custom apparel production, 
            or explore Artigence AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* --- LEFT: DIRECT CONTACT CHANNELS --- */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h2 className="text-xl font-bold font-editorial text-white">Direct Communication Desk</h2>
              
              <div className="space-y-4 text-xs">
                
                {/* WhatsApp */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-[#9da0ab] block">Instant Messaging (Fastest)</span>
                    <strong className="text-white text-sm block">{BUSINESS_CONFIG.contact.formattedPhone}</strong>
                    <a
                      href={getWhatsAppLink("Hello Haridealers team, I am reaching out from your website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-300 font-medium hover:underline mt-1"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9da0ab] block">Voice Desk</span>
                    <strong className="text-white text-sm block">{BUSINESS_CONFIG.contact.phone}</strong>
                    <span className="text-[11px] text-[#656874]">Mon - Sat: 8:30 AM - 9:30 PM</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9da0ab] block">Electronic Mail</span>
                    <strong className="text-white text-sm block">{BUSINESS_CONFIG.contact.email}</strong>
                    <span className="text-[11px] text-[#656874]">Support: {BUSINESS_CONFIG.contact.supportEmail}</span>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#9da0ab] block">Physical Shop &amp; Office</span>
                    <p className="text-white text-xs mt-0.5 leading-relaxed">
                      {BUSINESS_CONFIG.contact.shopAddress.line1},<br />
                      {BUSINESS_CONFIG.contact.shopAddress.line2},<br />
                      {BUSINESS_CONFIG.contact.shopAddress.city}, {BUSINESS_CONFIG.contact.shopAddress.state}
                    </p>
                    <a
                      href={BUSINESS_CONFIG.contact.shopAddress.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-[#F5D77F] hover:underline mt-2 font-medium"
                    >
                      <span>Locate on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-white block">Digital Footprint</span>
                <span className="text-[11px] text-[#9da0ab]">Follow group announcements</span>
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href={BUSINESS_CONFIG.contact.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#9da0ab] hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a 
                  href={BUSINESS_CONFIG.contact.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-[#9da0ab] hover:text-white transition-colors"
                  aria-label="Twitter / X Profile"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* --- RIGHT: CONTACT FORM (HONEST & VALIDATED) --- */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel-gold border border-[#D4AF37]/30 shadow-2xl relative">
              
              <div className="mb-6 space-y-1">
                <h2 className="text-xl sm:text-2xl font-bold font-editorial text-white">
                  Send an Inquiry
                </h2>
                <p className="text-xs text-[#9da0ab]">
                  Fill out the parameters below. Upon submission, you can immediately dispatch your message directly to our WhatsApp or email.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-1">
                    Your Name or Organization *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (errors.name) setErrors({ ...errors, name: '' }); }}
                    placeholder="e.g. Anand Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.name && <span className="text-[11px] text-rose-400 mt-1 block">{errors.name}</span>}
                </div>

                {/* Contact Coordinates */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-1">
                    Your Phone Number or Email *
                  </label>
                  <input
                    type="text"
                    value={contactInfo}
                    onChange={(e) => { setContactInfo(e.target.value); if (errors.contactInfo) setErrors({ ...errors, contactInfo: '' }); }}
                    placeholder="e.g. +91 98765 43210 or yourname@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.contactInfo && <span className="text-[11px] text-rose-400 mt-1 block">{errors.contactInfo}</span>}
                </div>

                {/* Division Target */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-1">
                    Relevant Division / Subject
                  </label>
                  <select
                    value={division}
                    onChange={(e) => setDivision(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#14151e] border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option value="Xerox & Printing">Haridealers Xerox &amp; Printing (Orders &amp; Bulk Printing)</option>
                    <option value="Clothing & E-Commerce">Clothing &amp; Custom Apparel Orders</option>
                    <option value="Artigence AI Hub">Artigence AI Hub &amp; Prototype Inquiries</option>
                    <option value="Digital Services">Digital Web &amp; Software Development</option>
                    <option value="General Leadership">General Management / Collaboration</option>
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-medium text-[#9da0ab] mb-1">
                    Message / Specifications *
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors({ ...errors, message: '' }); }}
                    placeholder="Share specific details, number of pages, custom apparel quantity, or project requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#D4AF37]"
                  />
                  {errors.message && <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs bg-gradient-to-r from-[#D4AF37] to-[#F5D77F] text-black hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Review &amp; Dispatch Inquiry</span>
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#656874] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Transparent routing: Zero third-party spam tracking.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* --- HONEST DISPATCH MODAL (NO FAKE SUCCESS!) --- */}
      <AnimatePresence>
        {showDispatchModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDispatchModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              aria-hidden="true"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-lg bg-[#0e0f15] border border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-5 text-white"
            >
              {/* Honest Notice Banner */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block">Transparent Disclosure:</strong>
                  <p className="text-[#9da0ab] mt-0.5">
                    As this is a pure static frontend deployment, your message is <strong>not stored in a remote database</strong>. 
                    Please send it directly via WhatsApp or your email client below so our team receives it immediately!
                  </p>
                </div>
              </div>

              {/* Message Summary Box */}
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] block mb-1">
                  Prepared Message Payload:
                </span>
                <div className="p-3 bg-black/50 border border-white/10 rounded-xl font-mono text-[11px] text-[#9da0ab] whitespace-pre-wrap max-h-40 overflow-y-auto">
                  {getFullMessageBody()}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="w-full py-3 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp Direct (Recommended)</span>
                </button>

                <button
                  onClick={openEmailClient}
                  className="w-full py-2.5 rounded-xl font-semibold text-xs bg-white/10 hover:bg-white/15 text-white border border-white/20 flex items-center justify-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Open in Default Email Client</span>
                </button>

                <button
                  onClick={copyToClipboard}
                  className="w-full py-2 rounded-xl text-xs text-[#9da0ab] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Message Text</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 border-t border-white/10 text-center">
                <button
                  onClick={() => setShowDispatchModal(false)}
                  className="text-xs text-[#656874] hover:text-[#9da0ab]"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
