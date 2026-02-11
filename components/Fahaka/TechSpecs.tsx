import React, { useState, useEffect } from 'react';
import { Layers, Flame, ShieldCheck, Recycle } from '../Icons';

export const TechSpecs: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading mb-3">Core Specifications</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { icon: <Layers size={32}/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
            { icon: <Flame size={32}/>, label: "Process Temp", value: "150°C - 300°C", sub: "Auto-Regulated" },
            { icon: <ShieldCheck size={32}/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
            { icon: <Recycle size={32}/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
          ].map((spec, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-gray-100 text-black mb-5">
                {spec.icon}
              </div>
              <h3 className="text-gray-500 font-semibold uppercase tracking-wider text-sm mb-2">{spec.label}</h3>
              <div className="text-3xl font-bold text-black mb-1">{spec.value}</div>
              {spec.sub && <div className="text-gray-500 text-sm">{spec.sub}</div>}
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-4xl sm:text-5xl font-heading font-bold text-black mb-6">
            Ready to deploy Fahaka?
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            This technology is currently available for pilot programs in select municipalities and large townships.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
