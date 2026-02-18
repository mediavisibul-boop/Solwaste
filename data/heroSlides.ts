// Slide type definition
export type Slide = {
  id: string;
  type: 'standard' | 'innovation';
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  images?: string[];
  isDark: boolean;
  badge: string;
  specs?: { label: string; value: string; unit: string }[];
};

// Slide Data
export const slides: Slide[] = [
  {
    id: 'ecoloop',
    type: 'standard',
    title: "EcoLoop™",
    subtitle: "The Workhorse",
    description: "Designed for Gated Communities and Hotels. Handles 50-1000kg/day with Zero-Maintenance HEPA filtration. No smells, no pests.",
    images: ["/ecoloop.webp", "/ecoloop2.webp", "/ecoloop3.webp"],
    isDark: false,
    badge: "Societies & Hotels",
    specs: [
      { label: "Capacity", value: "50-1k", unit: "KG" },
      { label: "Cycle Time", value: "24", unit: "HRS" },
      { label: "Material", value: "SS", unit: "304" },
    ]
  },
  {
    id: 'compogen',
    type: 'standard',
    title: "CompoGen™",
    subtitle: "The Enterprise Standard",
    description: "The 1.5+ Ton/day industrial powerhouse. High-torque German motors designed for 24/7 continuous operation in municipal and commercial sectors.",
    images: ["/compogen.webp", "/compogen4.jpeg"],
    isDark: true,
    badge: "Industrial & Municipal",
    specs: [
      { label: "Capacity", value: "1.5-50", unit: "TON" },
      { label: "Automation", value: "PLC", unit: "CLOUD" },
      { label: "Warranty", value: "5", unit: "YEARS" },
      { label: "Safety", value: "100", unit: "%" }
    ]
  },
  {
    id: 'cybersoil',
    type: 'standard',
    title: "CyberSoil™",
    subtitle: "Residential Luxury",
    description: "The sleek solution for luxury apartments and executive cabins. Solar Dehydration technology processes waste in total silence.",
    images: ["/cybersoil.webp", "/cybersoil2.webp"],
    isDark: false,
    badge: "Home & Office",
    specs: [
      { label: "Capacity", value: "2-10", unit: "KG" },
      { label: "Power", value: "0.5", unit: "kWh" },
      { label: "Size", value: "STD", unit: "DISH" },
      { label: "Tech", value: "SOLAR", unit: "DRY" }
    ]
  },
  {
    id: 'fahaka',
    type: 'innovation',
    title: "FAHAKA",
    subtitle: "The Universal Decomposer",
    description: "Breaking the barriers of organic waste. Capable of processing Food, Plastic Bottles, and Sanitary Waste into sterile resources.",
    images: ["/fahaka.png", "/fahaka2.webp", "/fahaka3.webp"],
    isDark: true,
    badge: "Innovation Lab"
  }
];
