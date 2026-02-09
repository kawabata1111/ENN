import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Concept: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="concept" className="py-40 md:py-64 bg-enn-paper relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row gap-20 md:gap-32 items-start">
          
          {/* Left Column: Image with parallax effect */}
          <div className="w-full md:w-5/12 relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative aspect-[3/4] overflow-hidden"
             >
                <img 
                  src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop" 
                  alt="Guide silhouette" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110"
                />
             </motion.div>
             <div className="absolute -bottom-10 -right-10 hidden md:block">
                <span className="font-serif text-9xl text-enn-black/5 opacity-50 select-none">01</span>
             </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full md:w-6/12 pt-0 md:pt-20">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
            >
                <span className="block text-xs font-bold tracking-widest-xl uppercase text-enn-gray mb-8">{t.concept.label}</span>
                
                <h2 className="text-5xl md:text-7xl font-serif text-enn-black leading-[1.1] mb-12">
                  {t.concept.title}<br />
                  <span className="italic text-enn-black/60">{t.concept.subtitle}</span>
                </h2>

                <div className="space-y-8 text-enn-black/80 font-sans font-light leading-relaxed text-lg md:text-xl max-w-md">
                  <p>
                    {t.concept.text1}
                  </p>
                  <p>
                    {t.concept.text2}
                  </p>
                </div>

                <div className="mt-16">
                   <a href="#plans" className="group inline-flex items-center gap-4 text-xs tracking-widest uppercase border-b border-enn-black pb-1 hover:text-enn-gray transition-colors">
                      {t.concept.cta}
                      <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                   </a>
                </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Concept;