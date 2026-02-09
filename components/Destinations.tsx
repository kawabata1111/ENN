import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DESTINATIONS } from '../constants';

const Destinations: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll to horizontal movement
  // Adjusted range to ensure smooth completion of scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="destinations" className="relative h-[300vh] bg-enn-black text-enn-paper">
      
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        {/* Section Title (Fixed) */}
        <div className="absolute top-12 left-6 md:left-12 z-20 mix-blend-difference pointer-events-none">
           <span className="text-xs font-bold tracking-widest-xl uppercase text-white/60 block mb-2">Curated Areas</span>
           <h2 className="text-4xl md:text-5xl font-serif text-white">Destinations</h2>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 pl-[10vw] pr-[20vw] items-center">
          {DESTINATIONS.map((dest, index) => (
            <div 
              key={dest.id}
              className="relative w-[80vw] md:w-[600px] flex-shrink-0 group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale"
                />
                
                {/* Overlay Number */}
                <div className="absolute top-4 right-4 z-10">
                   <span className="font-serif text-6xl text-white/20 group-hover:text-white/80 transition-colors">0{index + 1}</span>
                </div>
              </div>

              <div className="mt-8 flex justify-between items-end border-t border-white/20 pt-6">
                <div>
                  <h3 className="text-5xl md:text-7xl font-serif mb-4">{dest.name}</h3>
                  <p className="text-sm md:text-base font-sans font-light text-gray-400 max-w-sm leading-relaxed">
                    {dest.description}
                  </p>
                </div>
                <button className="hidden md:block w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                   <span className="text-lg">↗</span>
                </button>
              </div>
            </div>
          ))}
          
          {/* Final Call to Action Card */}
          <div className="w-[80vw] md:w-[400px] flex-shrink-0 flex items-center justify-center h-[60vh] border-l border-white/10 pl-24">
             <div className="text-center">
                <p className="font-serif text-4xl mb-6">Your custom<br/>journey awaits.</p>
                <a href="#plans" className="text-xs tracking-widest uppercase border border-white px-8 py-4 hover:bg-white hover:text-black transition-all">View Plans</a>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;