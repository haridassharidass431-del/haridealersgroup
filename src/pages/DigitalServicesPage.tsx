import React from 'react';
import { getWhatsAppLink } from '../data/businessData';
import { Code2, CheckCircle2, MessageCircle } from 'lucide-react';

export const DigitalServicesPage: React.FC = () => {
  const serviceOfferings = [
    {
      title: "Bespoke Web & Application Engineering",
      desc: "Modern React, Next.js, and TypeScript web platforms with cinematic design, rock-solid responsiveness, and sub-second load times.",
      deliverables: ["Custom Web Applications", "Interactive Portfolios", "E-Commerce Stores", "Admin Dashboards"]
    },
    {
      title: "Workflow Automation & Scripting",
      desc: "Eliminating manual drudgery through Python automation, Google Workspace scripts, invoice parsers, and custom API integrations.",
      deliverables: ["Data Scraping & Extraction", "WhatsApp Bot Notification Systems", "Inventory Telemetry", "Automated Reporting"]
    },
    {
      title: "Cloud Infrastructure & Deployment",
      desc: "Zero-downtime hosting setups across Vercel, Supabase, Cloudflare, and AWS with continuous integration and SSL encryption.",
      deliverables: ["Domain & DNS Setup", "Serverless Architecture", "Database Modeling", "Performance Auditing"]
    },
    {
      title: "Brand Identity & Digital Design",
      desc: "Distinguished luxury visual identities, typography systems, vector emblems, and UI/UX design systems tailored for luxury and technology ventures.",
      deliverables: ["High-Fidelity Figma Systems", "Design Guidelines", "Responsive Prototypes", "Packaging & Print Vectors"]
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase">
            <Code2 className="w-3.5 h-3.5" />
            <span>Digital Engineering &middot; Active Client Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-editorial">
            DIGITAL SERVICES &amp; <span className="text-ai-gradient">SOFTWARE</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            From modern responsive web applications to enterprise workflow automations and cloud deployment. 
            We build digital infrastructure that commands respect.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppLink("Hello! I would like to discuss building a website / software automation project with Haridealers Digital Services.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg shadow-cyan-950/60 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Your Software Project</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {serviceOfferings.map((serv, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all space-y-4">
              <h2 className="text-xl font-bold font-editorial text-white">{serv.title}</h2>
              <p className="text-xs text-[#9da0ab] leading-relaxed">{serv.desc}</p>
              
              <div className="pt-2 space-y-2">
                <span className="text-[11px] font-mono text-cyan-300 uppercase tracking-wider block">Key Deliverables:</span>
                <div className="grid grid-cols-2 gap-2 text-xs text-[#9da0ab]">
                  {serv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stack Strip */}
        <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
            Core Technology Repertoire
          </span>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {["React", "TypeScript", "Vite", "Tailwind CSS", "Next.js", "Python", "FastAPI", "PostgreSQL", "Node.js", "Docker", "Vercel", "GSAP"].map((t) => (
              <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
