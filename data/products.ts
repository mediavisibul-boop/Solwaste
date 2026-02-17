export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  comingSoon?: boolean;
  images: string[];
  features: string[];
  specs: {label: string, value: string}[];
  reversed?: boolean;
  seoData: {
    name: string;
    description: string;
    image: string;
    sku: string;
    brand: string;
  };
}

export const products: ProductData[] = [
  {
    id: "cybersoil",
    name: "CyberSoil",
    tagline: "Residential & VP Cabins",
    description: "CyberSoil redefines office and luxury apartment composting with advanced solar dehydration technology in a sleek, under-counter design. Effortless installation, ultra-quiet operation, and a premium finish make it ideal for executive spaces.",
    comingSoon: true,
    images: ["/cybersoil.webp", "/cybersoil2.webp"],
    features: [
      "Advanced Solar Dehydration Technology",
      "Compact Under-Counter Dimensions",
      "Plug & Play Installation",
      "Dry Sterile Biomass Output"
    ],
    specs: [
      { label: "Capacity", value: "2 kg - 10 kg" },
      { label: "Power", value: "0.5 kWh/day" },
      { label: "Dimensions", value: "Standard Dishwasher Size" },
      { label: "Noise", value: "Silent" }
    ],
    reversed: false,
    seoData: {
      name: 'CyberSoil - Smart Office Composter',
      description: 'Compact IoT-enabled composter for offices handling 2-10kg/day. Ultra-quiet operation, cloud monitoring, and sleek design perfect for corporate environments.',
      image: 'https://solwaste.co/cybersoil.webp',
      sku: 'CYBERSOIL-2-10',
      brand: 'Solwaste'
    }
  },
  {
    id: "ecoloop",
    name: "EcoLoop",
    tagline: "Societies & Hotels",
    description: "A zero-maintenance workhorse designed for residential societies, hotels, and resorts. The EcoLoop ensures that waste management doesn't impact the aesthetics or air quality of your premises.",
    images: ["/ecoloop.webp", "/ecoloop2.png", "/ecoloop3.webp"],
    features: [
      "Zero Odor & Pest Free Operation",
      "Medical Grade SS 304 Construction",
      "Silent Operation (< 60dB)"
    ],
    specs: [
      { label: "Capacity", value: "50 kg - 1000 kg" },
      { label: "Cycle Time", value: "24 Hours" },
      { label: "Reduction", value: "85-90% Volume" },
      { label: "Output", value: "Soil Enricher" }
    ],
    reversed: true,
    seoData: {
      name: 'EcoLoop - Organic Waste Composter for Hotels & Societies',
      description: 'On-site composting solution handling 50-1000kg/day with HEPA filtration, zero odor, and German engineering. Perfect for hotels, gated communities, and bulk waste generators.',
      image: 'https://solwaste.co/ecoloop.webp',
      sku: 'ECOLOOP-50-1000',
      brand: 'Solwaste'
    }
  },
  {
    id: "compogen",
    name: "CompoGen",
    tagline: "Industrial & Municipal",
    description: "The CompoGen series is built for the heavy lifting. Designed for municipal corporations and large industrial parks, it uses high-torque German geared motors to crush and compost massive volumes of organic waste.",
    images: ["/compogen.webp", "/compogen2.webp"],
    features: [
      "Fully PLC Controlled with Cloud BMS Integration",
      "High-Torque German Geared Motors",
      "Emergency Stop & Overload Protection Systems",
      "5-Year Chassis Warranty"
    ],
    specs: [
      { label: "Capacity", value: "1.5 Ton - 50 Ton" },
      { label: "Power", value: "3 Phase / 415V" },
      { label: "Body", value: "Heavy Duty MS/SS" },
      { label: "Process", value: "Aerobic Digestion" }
    ],
    reversed: false,
    seoData: {
      name: 'CompoGen - Industrial Composting System',
      description: 'Enterprise-grade composting solution processing 1.5-50 tons/day for industrial and municipal sectors. PLC-controlled with cloud monitoring and 24/7 operation capability.',
      image: 'https://solwaste.co/compogen.webp',
      sku: 'COMPOGEN-1.5-50T',
      brand: 'Solwaste'
    }
  },
];
