import React from 'react';
import { Check, ArrowRight, Download, Sliders, Battery } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const SpecTable: React.FC<{ specs: {label: string, value: string}[] }> = ({ specs }) => (
  <div className="grid grid-cols-2 gap-y-6 gap-x-8 mt-8 text-base">
    {specs.map((s, i) => (
      <div key={i} className="flex justify-between border-b border-gray-200 pb-3">
        <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">{s.label}</span>
        <span className="font-bold text-brand-brown text-lg">{s.value}</span>
      </div>
    ))}
  </div>
);

const ProductDetail: React.FC<{ 
  name: string; 
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: {label: string, value: string}[];
  reversed?: boolean;
}> = ({ name, tagline, description, image, features, specs, reversed }) => (
  <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 py-32 border-b border-gray-200 last:border-0`}>
    <div className="lg:w-1/2 w-full">
      <div className="relative group overflow-hidden bg-gray-100 rounded-sm shadow-xl">
        <img src={image} alt={name} className="w-full object-cover h-[550px] hover:scale-105 transition-transform duration-700" />
      </div>
    </div>
    <div className="lg:w-1/2 w-full">
      <div className="inline-block text-brand-gold font-bold uppercase tracking-widest text-sm mb-4 border-2 border-brand-gold px-3 py-1">
        {tagline}
      </div>
      <h2 className="text-6xl font-heading font-bold text-brand-brown mb-8 uppercase">{name}</h2>
      <p className="text-gray-800 text-xl mb-10 leading-relaxed font-normal">{description}</p>
      
      <div className="mb-10">
        <h4 className="font-heading font-bold uppercase text-brand-brown mb-6 text-base tracking-wide">Key Features</h4>
        <ul className="space-y-4">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-brand-gold mr-4 mt-1 flex-shrink-0" size={20} />
              <span className="text-gray-900 font-semibold text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-50 p-8 border border-gray-200 rounded-sm">
         <h4 className="font-heading font-bold uppercase text-brand-brown mb-4 text-base tracking-wide">Technical Specifications</h4>
         <SpecTable specs={specs} />
      </div>

      <div className="mt-10 flex gap-6">
        <Link to="/contact">
            <Button className="px-10 py-4 text-lg">Get Quote</Button>
        </Link>
        <Button variant="outline" className="px-8 py-4 text-lg flex items-center gap-3">
            <Download size={20} /> Brochure
        </Button>
      </div>
    </div>
  </div>
);

export const Solutions: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="bg-brand-dark text-white py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 uppercase">Product Catalog</h1>
          <p className="text-gray-300 text-xl md:text-2xl font-light">German Engineering. Indian Tenacity. World Class Results.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* CompoGen */}
        <ProductDetail 
          name="CompoGen™"
          tagline="Industrial & Municipal"
          description="The CompoGen series is built for the heavy lifting. Designed for municipal corporations and large industrial parks, it uses high-torque German geared motors to crush and compost massive volumes of organic waste."
          image="/compogen.png"
          features={[
            "Fully PLC Controlled with Cloud BMS Integration",
            "High-Torque German Geared Motors",
            "Emergency Stop & Overload Protection Systems",
            "5-Year Chassis Warranty"
          ]}
          specs={[
            { label: "Capacity", value: "1.5 Ton - 50 Ton" },
            { label: "Power", value: "3 Phase / 415V" },
            { label: "Body", value: "Heavy Duty MS/SS" },
            { label: "Process", value: "Aerobic Digestion" }
          ]}
        />

        {/* EcoLoop */}
        <ProductDetail 
          name="EcoLoop™"
          tagline="Societies & Hotels"
          description="A zero-maintenance workhorse designed for residential societies, hotels, and resorts. The EcoLoop ensures that waste management doesn't impact the aesthetics or air quality of your premises."
          image="/ecoloop.webp"
          reversed
          features={[
            "Zero Odor & Pest Free Operation",
            "HEPA + Activated Carbon Filtration System",
            "Medical Grade SS 304 Construction",
            "Silent Operation (< 60dB)"
          ]}
          specs={[
            { label: "Capacity", value: "50 kg - 1000 kg" },
            { label: "Cycle Time", value: "24 Hours" },
            { label: "Reduction", value: "85-90% Volume" },
            { label: "Output", value: "Soil Enricher" }
          ]}
        />

        {/* CyberSoil */}
        <ProductDetail 
          name="CyberSoil™"
          tagline="Residential & VP Cabins"
          description="Sustainability meets luxury. CyberSoil brings advanced solar dehydration technology into a form factor that fits under a dishwasher. Perfect for luxury apartments and executive offices."
          image="/cybersoil.webp"
          features={[
            "Advanced Solar Dehydration Technology",
            "Compact Under-Counter Dimensions",
            "Plug & Play Installation",
            "Dry Sterile Biomass Output"
          ]}
          specs={[
            { label: "Capacity", value: "2 kg - 10 kg" },
            { label: "Power", value: "0.5 kWh/day" },
            { label: "Dimensions", value: "Standard Dishwasher Size" },
            { label: "Noise", value: "Silent" }
          ]}
        />

        {/* Kafka */}
        <ProductDetail 
          name="Kafka"
          tagline="Universal Decomposer"
          description="A revolutionary step forward in waste management. Kafka doesn't discriminate. It processes food waste, plastics, and sanitary napkins simultaneously, creating a sterile output."
          image="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
          reversed
          features={[
            "Multi-Material Processing (Food + Plastic + Sanitary)",
            "High-Temperature Sterilization",
            "Industrial Shredding Capability",
            "Zero Landfill Contribution"
          ]}
          specs={[
            { label: "Capacity", value: "Custom Config" },
            { label: "Input Types", value: "Mixed Organic/Inorganic" },
            { label: "Temp Range", value: "High Heat" },
            { label: "Application", value: "Specialized Zones" }
          ]}
        />

      </div>
    </div>
  );
};