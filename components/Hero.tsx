import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const { t } = useLanguage();

  return (
    <section className="relative h-[110vh] w-full overflow-hidden bg-enn-black">
      {/* Background Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero-tokyo.jpg" 
          alt="Tokyo Night" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        
        {/* ENN Main Title - Staggered Reveal */}
        <div className="overflow-hidden mb-6">
          <motion.h1 
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-[18vw] md:text-[14rem] lg:text-[22rem] font-serif leading-[0.85] tracking-tighter text-enn-paper"
          >
            ENN
          </motion.h1>
        </div>

        {/* Subtitles */}
        <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-between w-full max-w-4xl px-4 md:px-0 mt-8">
           <div className="overflow-hidden">
             <motion.p 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="text-xs md:text-sm font-sans font-light tracking-widest-xl uppercase text-white/80"
             >
               {t.hero.subtitle1}
             </motion.p>
           </div>
           
           <div className="h-[1px] w-12 bg-white/30 hidden md:block" />

           <div className="overflow-hidden">
             <motion.p 
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 1.0, duration: 1, ease: "easeOut" }}
              className="text-xs md:text-sm font-sans font-light tracking-widest-xl uppercase text-white/80"
             >
               {t.hero.subtitle2}
             </motion.p>
           </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-12 text-white/60 font-serif italic text-lg md:text-xl max-w-lg text-center leading-relaxed"
        >
          {t.hero.quote}
        </motion.p>
      </div>

      {/* Scroll Hint */}
      <motion.div 
        className="absolute bottom-12 left-0 w-full flex justify-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-widest text-white/40">{t.hero.scroll}</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;