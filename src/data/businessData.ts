/**
 * ===================================================================
 * HARIDEALERS GROUP - CENTRALIZED BUSINESS DATA & CONFIGURATION
 * ===================================================================
 * 
 * NOTE FOR OWNER:
 * You can easily update your shop's phone number, WhatsApp number,
 * physical address, business hours, prices, and services right here!
 * Everything across the website updates automatically when changed here.
 */

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  description: string;
  startingPrice: string; // Clearly editable placeholder
  unit: string;
  turnaround: string;
  enabled: boolean; // Set to false to hide this service from the website
  popular?: boolean;
}

export interface ClothingProduct {
  id: string;
  name: string;
  category: 't-shirts' | 'hoodies' | 'ethnic' | 'accessories' | 'workwear';
  price: number;
  originalPrice?: number;
  description: string;
  material: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  isNew?: boolean;
  rating: number;
  image: string;
}

export interface ArtigenceProject {
  id: string;
  title: string;
  category: 'GovTech & Public Welfare' | 'Computer Vision' | 'Automation & Agents' | 'AgriTech';
  badge: 'Working Prototype' | 'In Development' | 'Concept & Architecture' | 'Active Research';
  description: string;
  impact: string;
  techStack: string[];
  features: string[];
  image: string;
  featured?: boolean;
}

export const BUSINESS_CONFIG = {
  // BRAND BASICS
  groupName: "HARIDEALERS GROUP",
  tagline: "BUILDING BUSINESSES. CREATING WHAT'S NEXT.",
  supportingText: "An emerging business and technology group exploring commerce, digital products, artificial intelligence and new opportunities.",
  establishedYear: "2026",
  
  // LOGO PATHS (Uses the official logos uploaded)
  logos: {
    group: "/assets/haridealers-logo.jpg",
    artigence: "/assets/artigence-logo.png",
  },

  // CONTACT INFORMATION (UPDATE THESE EDITABLE PLACEHOLDERS WITH REAL DETAILS)
  contact: {
    // Put your 10-digit or international format phone number here (e.g. "919876543210")
    // NOTE: Keep formattedPhone human readable e.g. "+91 98765 43210"
    phone: "+91 73396 35485 / +91 88702 65485",
    formattedPhone: "+91 73396 35485, +91 88702 65485",
    
    // WhatsApp number in international format WITHOUT '+' or spaces (e.g., "919876543210")
    // If not set yet, leave as editable placeholder:
    whatsappNumber: "917339635485",
    
    email: "haridealers531@gmail.com",
    supportEmail: "haridealers531@gmail.com",
    
    // Shop & Office Address
    shopAddress: {
      line1: "TTP Main Road, Sathangudi",
      line2: "Mangudi",
      city: "Thiruvarur",
      state: "Tamil Nadu",
      postalCode: "",
      country: "India",
      googleMapsUrl: "https://maps.google.com/?q=TTP+Main+Road+Sathangudi+Mangudi+Thiruvarur",
    },
    
    // Business Hours
    businessHours: {
      weekdays: "Monday - Saturday: 8:30 AM - 9:30 PM",
      sunday: "Sunday: 9:00 AM - 2:00 PM (Or by appointment)",
      breakTime: "Lunch Break: 1:30 PM - 2:15 PM",
      holidayNotice: "Open on most public holidays for urgent document requests",
    },

    // Social & Professional Profiles
    socials: {
      linkedin: "https://linkedin.com/company/haridealers-group",
      twitter: "https://twitter.com/haridealers",
      instagram: "https://instagram.com/haridealers",
      github: "https://github.com/haridealers",
    }
  },

  // ABOUT & STORY (EDITABLE PLACEHOLDERS)
  about: {
    founderName: "Hari & Founding Team",
    founderTitle: "Founder & Managing Director",
    founderStory: "Haridealers Group started as a vision to build resilient, multi-disciplinary ventures rooted in foundational community services while aggressively reaching toward modern digital engineering and artificial intelligence. Guided by relentless curiosity and commercial integrity, the group bridges essential local services with ambitious next-generation technology.",
    mission: "To deliver unmatched service reliability in essential commerce while incubating breakthrough software and AI solutions that elevate human potential and local ecosystems.",
    vision: "To evolve into a respected multi-sector enterprise uniting digital automation, smart supply chains, creative commerce, and state-of-the-art technological laboratories.",
    coreValues: [
      {
        title: "Absolute Reliability",
        description: "From a single emergency photocopy to complex enterprise AI pipelines, precision and dependability are non-negotiable."
      },
      {
        title: "Pragmatic Innovation",
        description: "We do not chase technological buzzwords. We build tangible solutions that solve acute real-world challenges."
      },
      {
        title: "Ethical Expansion",
        description: "Transparent dealings with customers, fair supplier partnerships, and transparent disclosure of system capabilities."
      },
      {
        title: "Speed with Grace",
        description: "Quick execution without compromising refinement, aesthetics, or user dignity."
      }
    ]
  },

  // BUSINESS DIVISIONS SUMMARY FOR HOMEPAGE
  divisions: [
    {
      id: "xerox",
      name: "HARIDEALERS XEROX & PRINTING",
      shortTitle: "Xerox & Print Studio",
      slug: "/xerox",
      tagline: "High-Volume Precision Printing, Scanning & Document Finishing",
      status: "ACTIVE SERVICE",
      statusColor: "emerald",
      description: "Our flagship operational service hub providing ultra-fast B&W and high-definition colour photocopying, thesis and project report binding, lamination, and digital document preparation.",
      highlights: ["High-Speed Laser B&W & Color", "Thesis & Spiral Binding", "Instant WhatsApp Order Drop", "Same-Day Document Delivery"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "clothing",
      name: "HARIDEALERS TEXTILES & APPAREL",
      shortTitle: "Apparel & Lifestyle",
      slug: "https://haridealers.vercel.app/",
      tagline: "Curated Everyday Essentials, Modern Streetwear & Textiles",
      status: "CATALOG PREVIEW",
      statusColor: "amber",
      description: "Our emerging apparel and lifestyle line featuring premium cotton essentials, trend-forward graphic wear, customized bulk orders, and ethical garment manufacturing.",
      highlights: ["Pre-Shrunk 100% Combed Cotton", "Custom Merchandise Printing", "Curated Seasonal Capsules", "Direct-to-Consumer Catalog"],
      image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "artigence",
      name: "ARTIGENCE AI HUB",
      shortTitle: "Artigence AI Hub",
      slug: "/artigence",
      tagline: "Autonomous Systems, GovTech & Intelligent Vision Lab",
      status: "R&D DIVISION & PROTOTYPES",
      statusColor: "purple",
      description: "The technological vanguard of Haridealers Group. Researching and prototyping AI applications, automated public welfare dispensers, edge biometric verification, and autonomous agent systems.",
      highlights: ["AI Smart Ration Distribution System", "Edge Biometric Anti-Pilferage", "Document OCR Intelligence", "Autonomous Business Agents"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "digital-services",
      name: "DIGITAL SERVICES & SOFTWARE",
      shortTitle: "Digital Engineering",
      slug: "/digital-services",
      tagline: "Custom Web Applications, Cloud Platforms & Brand Systems",
      status: "ACTIVE CLIENT WORK",
      statusColor: "cyan",
      description: "Engineering modern web interfaces, bespoke business automation, cloud hosting configurations, and high-impact digital experiences for forward-looking brands.",
      highlights: ["Bespoke Web Platforms", "High-Performance Cloud Architecture", "UI/UX & Brand Identity", "Workflow Automation"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "rnd",
      name: "RESEARCH & DEVELOPMENT",
      shortTitle: "Experimental Lab",
      slug: "/rnd",
      tagline: "Exploring Hardware-Software Synergy & Next Frontiers",
      status: "INTERNAL INCUBATOR",
      statusColor: "rose",
      description: "Our dedicated experimental incubator where we stress-test microcontrollers, IoT sensor arrays, local LLM edge devices, and novel business distribution models.",
      highlights: ["Embedded Hardware Prototyping", "On-Device Neural Inference", "Sensory Automation", "Venture Incubation"],
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    }
  ]
};

// ===================================================================
// XEROX & PRINTING SERVICES DATA (CONFIGURABLE & EDITABLE)
// ===================================================================
export const XEROX_SERVICES: ServiceItem[] = [
  {
    id: "bw-xerox",
    name: "Black & White Photocopying",
    category: "Reprographics",
    description: "Crisp, smudge-free 1200 DPI laser photocopying on premium 75 GSM paper. Ideal for notes, legal documents, book excerpts, and bulk study material.",
    startingPrice: "₹0.90 wholesale / ₹2 single",
    unit: "per side",
    turnaround: "Instant / 2-5 mins",
    enabled: true,
    popular: true,
  },
  {
    id: "color-xerox",
    name: "Full Colour Photocopying",
    category: "Reprographics",
    description: "Vibrant true-tone colour reproduction calibrated for certificates, charts, medical records, presentations, and identity cards.",
    startingPrice: "₹5.00",
    unit: "per page",
    turnaround: "Instant / 3-5 mins",
    enabled: true,
    popular: true,
  },
  {
    id: "doc-print",
    name: "Document & Digital Printing",
    category: "Printing",
    description: "Direct high-speed printing from WhatsApp, Email, Pen Drive, or Cloud Drive. Supports PDF, DOCX, PPT, JPG on standard and premium bond sheets.",
    startingPrice: "₹3.00",
    unit: "per page",
    turnaround: "Instant",
    enabled: true,
    popular: true,
  },
  {
    id: "high-res-scan",
    name: "High-Resolution Scanning",
    category: "Digital Imaging",
    description: "300 - 1200 DPI scanning with automated multi-page PDF compilation, OCR text extraction, and direct delivery to your WhatsApp or Email.",
    startingPrice: "₹5.00",
    unit: "per page",
    turnaround: "Instant",
    enabled: true,
  },
  {
    id: "lamination",
    name: "Heavy-Duty Lamination",
    category: "Document Protection",
    description: "Thermal heat-sealed 125 to 250 micron transparent protective coating. Resistant to water, moisture, and tearing. Available for ID cards up to A3 sizes.",
    startingPrice: "₹20.00",
    unit: "per document",
    turnaround: "5 - 10 mins",
    enabled: true,
    popular: true,
  },
  {
    id: "spiral-binding",
    name: "Spiral & Comb Binding",
    category: "Finishing & Binding",
    description: "Professional wire-O and durable PVC spiral binding with frosted protective front cover and rigid black card backing. Holds up to 450 pages.",
    startingPrice: "₹30 wholesale / ₹40 single",
    unit: "per book",
    turnaround: "10 - 15 mins",
    enabled: true,
    popular: true,
  },
  {
    id: "project-thesis",
    name: "Thesis & Project Hard Binding",
    category: "Academic & Corporate",
    description: "Deluxe golden embossed cover lettering, university-compliant formatting, velvet ribbon bookmarks, and permanent library-grade stitching.",
    startingPrice: "₹250.00",
    unit: "per copy",
    turnaround: "Same-Day / 24 hrs",
    enabled: true,
  },
  {
    id: "photo-prints",
    name: "Glossy Photo & ID Card Printing",
    category: "Specialty",
    description: "Instant passport-size photos, stamp-size sets, and high-gloss 4x6 / 8x12 borderless archival photo prints with accurate skin tone reproduction.",
    startingPrice: "₹50.00",
    unit: "per 8-pack set",
    turnaround: "10 mins",
    enabled: true,
  }
];

// ===================================================================
// CLOTHING & E-COMMERCE PRODUCTS (CATALOG & DEMO PREVIEW)
// ===================================================================
export const CLOTHING_PRODUCTS: ClothingProduct[] = [
  {
    id: "hd-tee-01",
    name: "Signature Heavyweight Oversized Tee",
    category: "t-shirts",
    price: 899,
    originalPrice: 1299,
    description: "Constructed from 240 GSM bio-washed combed cotton with drop-shoulder tailoring and reinforced ribbed collar. Designed for effortless daily streetwear.",
    material: "100% Ring-Spun Combed Cotton (240 GSM)",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Jet Black", "Charcoal Gray", "Bone White"],
    inStock: true,
    isNew: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hd-hoodie-01",
    name: "Artigence Cyber-Minimalist Fleece Hoodie",
    category: "hoodies",
    price: 1899,
    originalPrice: 2499,
    description: "Ultra-soft 380 GSM brushed fleece with hidden kangaroo tech pocket, double-lined hood, and subtle metallic silver embroidery.",
    material: "85% Organic Cotton, 15% Recycled Poly Fleece",
    sizes: ["M", "L", "XL"],
    colors: ["Obsidian Black", "Cyber Violet"],
    inStock: true,
    isNew: true,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hd-ethnic-01",
    name: "Artisanal Khadi Textured Short Kurta",
    category: "ethnic",
    price: 1199,
    originalPrice: 1599,
    description: "Hand-spun breathable cotton weave with mandarin collar, mother-of-pearl buttons, and tailored modern silhouette for celebratory and everyday comfort.",
    material: "100% Handloom Breathable Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Natural Ivory", "Indigo Blue", "Sage Green"],
    inStock: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hd-workwear-01",
    name: "Structured Utility Cargo Overshirt",
    category: "workwear",
    price: 1699,
    originalPrice: 2199,
    description: "Durable twill weave with four military-inspired modular utility pockets, storm-flap snap closures, and easy-iron crease resistance.",
    material: "Cotton-Poly Twill Blend",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Desert Khaki", "Stealth Black", "Olive Drab"],
    inStock: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hd-acc-01",
    name: "Haridealers Minimalist Heavy Canvas Tote",
    category: "accessories",
    price: 499,
    originalPrice: 799,
    description: "16oz sturdy unbleached canvas tote featuring inner zippered card pocket, key lanyard, and reinforced load-bearing cross-stitched handles.",
    material: "16oz Heavyweight Natural Cotton Canvas",
    sizes: ["One Size (18L Capacity)"],
    colors: ["Raw Ecru", "Deep Charcoal"],
    inStock: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "hd-tee-02",
    name: "Artigence 'Create What's Next' Graphic Tee",
    category: "t-shirts",
    price: 949,
    originalPrice: 1399,
    description: "Futuristic typography silkscreen print on premium compact combed jersey. Colorfast and crack-resistant plastisol ink curing.",
    material: "100% Combed Cotton (220 GSM)",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pure White", "Pitch Black"],
    inStock: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  }
];

// ===================================================================
// ARTIGENCE AI HUB PROJECTS & RESEARCH
// ===================================================================
export const ARTIGENCE_PROJECTS: ArtigenceProject[] = [
  {
    id: "smart-ration-system",
    title: "AI Smart Ration Distribution System",
    category: "GovTech & Public Welfare",
    badge: "Working Prototype",
    featured: true,
    description: "An automated, tamper-proof grain and essential commodities distribution terminal engineered to eradicate leakage, phantom beneficiaries, and under-weighing in public distribution systems.",
    impact: "Ensures 100% of allocated grains reach genuine entitled citizens through verified computer-vision authentication and precision digital load-cell dispensing.",
    techStack: ["Edge AI (Raspberry Pi / Jetson)", "OpenCV Facial Recognition", "Aadhaar / Biometric Auth", "Load Cell Calibration Firmware", "Offline SQLite + Cloud Ledger", "GSM / WiFi Telemetry"],
    features: [
      "Zero-Pilferage Automated Dispenser: Dispenses rice, wheat, and pulses strictly to the gram via stepper-motor auger gate.",
      "Dual Biometric Verification: Multi-modal face recognition + fingerprint matching prevents fraudulent proxy claims.",
      "Offline Fail-Safe Protocol: Operates in remote villages with zero network; synchronizes encrypted transaction logs when signal resumes.",
      "Real-Time Public Stock Dashboard: Transparent inventory telemetry visible to welfare departments and citizens.",
      "Anti-Tamper Sensor Array: Alerts central servers if dispenser enclosure or load cell chassis is mechanically disturbed."
    ],
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "neural-doc-parser",
    title: "Neural Document & Invoice OCR Engine",
    category: "Computer Vision",
    badge: "In Development",
    description: "An automated multilingual OCR engine trained to read unstructured Indian receipts, legal deeds, and handwritten forms into structured JSON with 98.4% accuracy.",
    impact: "Reduces manual data entry time by over 80% for local businesses and accounting departments.",
    techStack: ["Python", "FastAPI", "Vision Transformers (ViT)", "Tesseract / PaddleOCR", "Next.js"],
    features: [
      "Understands Regional Indian Scripts (Tamil, Telugu, Hindi, Kannada, English)",
      "Automatic table extraction and column realignment",
      "One-click export to Tally, Excel, and ERP databases"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "vision-retail-checker",
    title: "Autonomous Edge Retail Vision Checker",
    category: "Computer Vision",
    badge: "Concept & Architecture",
    description: "Affordable edge camera system detecting shelf stockouts, item misplacement, and queue density in small-to-medium retail outlets.",
    impact: "Brings enterprise-level computerized retail intelligence to grassroots store owners without expensive cloud computing bills.",
    techStack: ["YOLOv10 Edge Inference", "NVIDIA DeepStream", "MQTT Broker", "React Native"],
    features: [
      "Real-time empty-shelf audio alert to staff",
      "Customer footfall heatmap without storing privacy-invasive facial video",
      "Low power consumption (under 15W continuous draw)"
    ],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "agrisense-crops",
    title: "AgriSense Micro-Climate & Crop Health Predictor",
    category: "AgriTech",
    badge: "Active Research",
    description: "Solar-powered loRa sensor node combined with lightweight weather prediction models to notify farmers of pest infestation probability and optimal irrigation cycles.",
    impact: "Prevents pesticide overuse and conserves groundwater in semi-arid agricultural belts.",
    techStack: ["LoRaWAN", "ESP32", "Time-Series Forecasting", "WhatsApp Bot Notification"],
    features: [
      "Soil moisture and ambient leaf temperature monitoring",
      "Instant vernacular WhatsApp voice notes for weather alerts",
      "Modular sensor plug-and-play architecture"
    ],
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80"
  }
];

// Helper to generate a prefilled WhatsApp link
export function getWhatsAppLink(message: string, customPhone?: string): string {
  const phone = customPhone || BUSINESS_CONFIG.contact.whatsappNumber;
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
