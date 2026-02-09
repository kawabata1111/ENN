import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { PLANS } from '../constants';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../components/LanguageContext';

const PlansPage: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-48 min-h-screen bg-enn-paper text-enn-black selection:bg-enn-black selection:text-enn-paper overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Typographic Hero */}
        <div className="mb-24 md:mb-64 border-b border-enn-black/10 pb-12 md:pb-24">
            <div className="max-w-4xl">
                <motion.span 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="block text-[10px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-enn-gray mb-6 md:mb-8"
                >
                    Experience Architecture
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-6xl sm:text-7xl md:text-[10vw] font-serif leading-[0.9] italic tracking-tighter mb-8 md:mb-12"
                >
                    {t.plans.title}
                </motion.h1>
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-end justify-between">
                    <p className="text-lg md:text-2xl font-serif text-enn-black/60 max-w-xl leading-relaxed">
                        {t.plansPage.subtitle}
                    </p>
                </div>
            </div>
        </div>

        {/* The Detailed List */}
        <div className="space-y-24 md:space-y-48">
          {PLANS.map((plan, index) => {
            const item = t.plans.items[plan.id as keyof typeof t.plans.items];
            
            return (
              <motion.div 
                key={plan.id}
                id={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1 }}
                className="group relative border-b border-enn-black/10 pb-16 md:pb-32"
              >
                {/* Large Background Identifier (Hidden on small screens to avoid clutter) */}
                <div className="absolute top-0 right-0 opacity-[0.02] text-[40vw] md:text-[25vw] font-serif italic select-none pointer-events-none leading-none -z-10 overflow-hidden">
                    {plan.code.split('-')[1]}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
                    
                    {/* Header: Name & Description */}
                    <div className="md:col-span-12 space-y-4 md:space-y-6">
                        <div className="flex items-center gap-3 md:gap-4">
                            <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase opacity-40">{plan.code}</span>
                            <div className="h-[1px] w-8 md:w-12 bg-enn-black/10" />
                            <span className="text-[10px] md:text-xs font-serif italic opacity-40">Option 0{index + 1}</span>
                        </div>
                        <h2 className="text-4xl md:text-8xl font-serif leading-tight md:leading-none tracking-tight">
                            {item.name}
                        </h2>
                        <p className="text-lg md:text-2xl font-serif italic text-enn-black/40 max-w-2xl">
                            {item.description}
                        </p>
                    </div>

                    {/* Left: Pricing Table */}
                    <div className="md:col-span-5 pt-4 md:pt-8">
                        <span className="block text-[9px] md:text-[10px] tracking-widest uppercase opacity-30 mb-6 md:mb-8 font-bold">Pricing Guide</span>
                        <div className="space-y-3 md:space-y-4">
                            {item.prices ? (
                                item.prices.map((p, i) => (
                                    <div key={i} className="flex justify-between items-baseline border-b border-enn-black/5 pb-2">
                                        <span className="text-xs md:text-sm font-light opacity-60">{p.label}</span>
                                        <span className="text-xl md:text-2xl font-serif italic">{p.value}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="flex justify-between items-baseline border-b border-enn-black/5 pb-2">
                                    <span className="text-xs md:text-sm font-light opacity-60">Standard Rate</span>
                                    <span className="text-xl md:text-2xl font-serif italic">{item.price}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right: Details & Features */}
                    <div className="md:col-span-6 md:col-start-7 pt-4 md:pt-8 space-y-8 md:space-y-12">
                        <div className="space-y-4 md:space-y-6">
                            <span className="block text-[9px] md:text-[10px] tracking-widest uppercase opacity-30 font-bold">Inclusions & Details</span>
                            <p className="text-base md:text-lg font-light leading-relaxed opacity-80">
                                {item.details}
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {item.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-2 md:gap-3">
                                    <div className="w-[3px] h-[3px] md:w-1 md:h-1 bg-enn-black/20 rounded-full" />
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-50">{f}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 md:pt-8">
                            <Link to="/contact" className="group flex items-center gap-4 text-xs uppercase tracking-[0.3em]">
                                <span>Inquire Now</span>
                                <div className="h-[1px] w-8 md:w-12 bg-enn-black transition-all duration-500 group-hover:w-24" />
                            </Link>
                        </div>
                    </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bespoke & Information Section */}
        <div className="mt-32 md:mt-64">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-enn-black/5 border border-enn-black/5">
                
                {/* Bespoke Arrangement */}
                <div className="bg-enn-white p-8 md:p-24 space-y-8 md:space-y-12">
                    <span className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-40">Extraordinary Requests</span>
                    <h3 className="text-4xl md:text-7xl font-serif italic leading-[1] md:leading-[0.9]">{t.plansPage.bespokeTitle}</h3>
                    <p className="text-lg md:text-xl font-light leading-relaxed opacity-60 max-w-md">
                        {t.plansPage.bespokeText}
                    </p>
                    <Link to="/contact" className="inline-block border-b border-enn-black pb-1 text-xs tracking-widest uppercase hover:opacity-50 transition-opacity">
                        {t.plansPage.bespokeCta}
                    </Link>
                </div>

                {/* Common Information List */}
                <div className="bg-enn-black text-enn-paper p-8 md:p-24 space-y-12 md:space-y-16">
                    <span className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-40 font-bold">Standard Conditions</span>
                    
                    <div className="space-y-10 md:space-y-12">
                        <div className="grid grid-cols-1 gap-8 md:gap-12">
                            <div className="space-y-4">
                                <h5 className="font-serif italic text-lg md:text-xl opacity-100">Included</h5>
                                <div className="h-[1px] w-full bg-white/10" />
                                <p className="text-xs md:text-sm font-light opacity-50 leading-loose max-w-sm">
                                    {t.plans.common.included.split(/[:：]/)[1] || t.plans.common.included}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h5 className="font-serif italic text-lg md:text-xl opacity-100">Not Included</h5>
                                <div className="h-[1px] w-full bg-white/10" />
                                <p className="text-xs md:text-sm font-light opacity-50 leading-loose max-w-sm">
                                    {t.plans.common.notIncluded.split(/[:：]/)[1] || t.plans.common.notIncluded}
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 gap-2 md:gap-4">
                            <span className="text-[9px] md:text-[10px] tracking-widest uppercase opacity-30 italic">Option</span>
                            <span className="text-lg md:text-2xl font-serif italic leading-tight text-left md:text-right">
                              {t.plans.common.options}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </div>
  );
};

export default PlansPage;