import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const Destinations: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const { t } = useLanguage();

  // Transform vertical scroll to horizontal movement
  // Adjusted range to ensure smooth completion of scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} id="destinations" className="relative h-[250vh] md:h-[300vh] bg-enn-black text-enn-paper">

      <div className="sticky top-0 h-screen flex items-start pt-24 md:pt-40 overflow-hidden">

        {/* Section Title (Fixed) */}
        <div className="absolute top-16 md:top-12 left-6 md:left-12 z-20 mix-blend-difference pointer-events-none">
           <span className="text-[10px] md:text-xs font-bold tracking-widest-xl uppercase text-white/60 block mb-2">{t.destinations.label}</span>
           <h2 className="text-3xl md:text-5xl font-serif text-white">{t.destinations.title}</h2>
        </div>

        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex gap-6 md:gap-24 pl-[5vw] md:pl-[10vw] pr-[10vw] md:pr-[20vw] items-center">
          {DESTINATIONS.map((dest, index) => {
            const item = t.destinations.items[dest.id as keyof typeof t.destinations.items];
            return (
            <div
              key={dest.id}
              className="relative w-[75vw] md:w-[600px] flex-shrink-0 group"
            >
              <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden bg-gray-800">
                <img
                  src={dest.image}
                  alt={item.name}
                  loading="eager"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Overlay Number */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4 z-10">
                   <span className="font-serif text-4xl md:text-6xl text-white/20 group-hover:text-white/80 transition-colors">0{index + 1}</span>
                </div>
              </div>

              <div className="mt-4 md:mt-8 flex justify-between items-end border-t border-white/20 pt-4 md:pt-6">
                <div>
                  <h3 className="text-3xl sm:text-4xl md:text-7xl font-serif mb-2 md:mb-4">{item.name}</h3>
                </div>
                <Link to="/destinations" className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 flex-shrink-0">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="7" y1="17" x2="17" y2="7"></line>
                     <polyline points="7 7 17 7 17 17"></polyline>
                   </svg>
                </Link>
              </div>
            </div>
          );
          })}

          {/* Final Call to Action Card */}
          <div className="w-[75vw] md:w-[400px] flex-shrink-0 flex items-center justify-center h-[50vh] md:h-[60vh] border-l border-white/10 pl-8 md:pl-24">
             <div className="text-center px-4">
                <p className="font-serif text-2xl md:text-4xl mb-4 md:mb-6">{t.destinations.ctaTitle}</p>
                <Link to="/plans" className="text-[10px] md:text-xs tracking-widest uppercase border border-white px-6 py-3 md:px-8 md:py-4 hover:bg-white hover:text-black transition-all inline-block">{t.destinations.ctaButton}</Link>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Destinations;