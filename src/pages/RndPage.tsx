import React from 'react';
import { getWhatsAppLink } from '../data/businessData';
import { FlaskConical, MessageCircle } from 'lucide-react';

export const RndPage: React.FC = () => {
  const explorations = [
    {
      title: "Edge Neural Compute & Micro-Vision",
      status: "Active Bench Testing",
      desc: "Running quantized vision transformer and lightweight YOLO models directly on sub-15W edge devices (Raspberry Pi 5, ESP32-S3, NVIDIA Jetson Nano) without relying on persistent internet access.",
      domains: ["On-Device Inference", "Low-Power Camera Nodes", "Zero Cloud Latency"]
    },
    {
      title: "Public Welfare Dispenser Mechatronics",
      status: "Hardware Prototyping",
      desc: "Stress-testing stepper auger gates, digital load-cell amplifiers, and anti-jam spiral feeds for granular food grains in challenging ambient temperature and dust environments.",
      domains: ["Auger Mechatronics", "Load-Cell Precision", "Physical Anti-Tamper Enclosures"]
    },
    {
      title: "Long-Range Telemetry & LoRa Mesh",
      status: "Field Research",
      desc: "Investigating decentralized low-power wireless sensor networks capable of transmitting agricultural telemetry across 10+ kilometer distances without cellular SIM recurring charges.",
      domains: ["LoRaWAN 868/433MHz", "Solar Power Harvesting", "Decentralized Packet Relays"]
    },
    {
      title: "Autonomous Agent Orchestration",
      status: "Algorithmic Exploration",
      desc: "Experimenting with multi-agent cognitive architectures capable of parsing complex procurement documents, cross-referencing tariff codes, and managing inventory reconciliation autonomously.",
      domains: ["Local LLMs", "Structured Tool Calling", "Document Grounding"]
    }
  ];

  return (
    <div className="relative pt-24 pb-20 overflow-hidden text-white">
      
      {/* Lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-rose-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold tracking-wider uppercase">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Internal Incubator &middot; Hardware &amp; Algorithmic Lab</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-editorial">
            RESEARCH &amp; <span className="text-gold-gradient">DEVELOPMENT</span>
          </h1>

          <p className="text-sm sm:text-base text-[#9da0ab] leading-relaxed">
            Our sandbox for bold technical bets. We deconstruct hardware, stress-test embedded microcontrollers, 
            and evaluate algorithmic frontiers before translating them into commercial divisions.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppLink("Hello Haridealers R&D Team, I would like to discuss technical research / collaboration.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-950/60 transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect with the R&amp;D Team</span>
            </a>
          </div>
        </div>

        {/* Explorations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {explorations.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-rose-500/40 transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-rose-400">
                  {item.status}
                </span>
                <FlaskConical className="w-4 h-4 text-[#D4AF37]" />
              </div>

              <h2 className="text-xl font-bold font-editorial text-white">{item.title}</h2>
              <p className="text-xs text-[#9da0ab] leading-relaxed">{item.desc}</p>
              
              <div className="pt-2 flex flex-wrap gap-2">
                {item.domains.map((dom, dIdx) => (
                  <span key={dIdx} className="text-[11px] px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white font-mono">
                    {dom}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Note */}
        <div className="p-8 rounded-2xl glass-panel border border-white/10 text-center max-w-3xl mx-auto space-y-2">
          <h3 className="text-base font-bold font-editorial text-white">The Haridealers Incubation Thesis</h3>
          <p className="text-xs text-[#9da0ab] leading-relaxed">
            Every breakthrough venture begins as an unglamorous laboratory prototype. By testing assumptions early with physical hardware and working code, we eliminate corporate waste and build technologies that perform reliably in the real world.
          </p>
        </div>

      </div>
    </div>
  );
};
