import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLANS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Link } from 'react-router-dom';

const planImages: Record<string, string> = {
  'plan-a': '/images/shibuya.jpg',
  'plan-b': '/images/ginza.jpg',
  'plan-c': '/images/sushi.jpg',
  'plan-d': '/images/akihabara.jpg',
  'plan-f': '/images/ginza.jpg',
};

const Plans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <section id="plans" className="relative py-16 md:py-32 bg-enn-paper overflow-hidden">
      
      {/* Background Image Changer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          {activePlan && (
            <motion.img
              key={activePlan}
              src={planImages[activePlan]}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.15, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover grayscale"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 md:mb-24 md:flex justify-between items-end">
          <div>
            <h2 className="text-[10px] md:text-xs font-bold tracking-widest-xl text-enn-gray uppercase mb-2 md:mb-4">
              {t.plans.label}
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif text-enn-black">{t.plans.title}</h3>
          </div>
          <p className="mt-4 md:mt-0 text-sm font-light max-w-xs text-enn-black/60">
            {t.plans.intro}
          </p>
        </div>

        <div className="flex flex-col border-t border-enn-black">
          {PLANS.map((plan, index) => {
            const item = t.plans.items[plan.id as keyof typeof t.plans.items];
            return (
            <motion.div 
              key={plan.id}
              onMouseEnter={() => setActivePlan(plan.id)}
              onMouseLeave={() => setActivePlan(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border-b border-enn-black py-8 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors duration-300 hover:bg-white/50 px-4 -mx-4"
            >
              
              <div className="md:w-1/3 mb-6 md:mb-0">
                <span className="block text-[10px] font-bold tracking-widest text-enn-gray mb-2 group-hover:text-enn-black transition-colors">{plan.code}</span>
                <h4 className="text-2xl sm:text-3xl md:text-5xl font-serif text-enn-black group-hover:translate-x-2 transition-transform duration-500">{item.name}</h4>
              </div>
              
              <div className="md:w-1/3 mb-8 md:mb-0">
                <p className="text-sm md:text-base text-enn-black/70 font-sans font-light mb-4 max-w-sm">{item.description}</p>
                <div className="flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {item.features.map((feature, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider border border-enn-black/20 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="md:w-1/3 flex flex-row md:flex-col justify-between items-end w-full md:w-auto">
                <span className="text-xl md:text-2xl font-serif text-enn-black italic whitespace-pre-line text-right md:text-left">
                  {item.price}
                </span>
                <div className="mt-4 overflow-hidden">
                   <Link to={`/plans#${plan.id}`} className="block text-xs uppercase tracking-widest border-b border-black pb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     View Details
                   </Link>
                </div>
              </div>

            </motion.div>
          );
          })}
        </div>

        {/* Common Information */}
        <div className="mt-16 md:mt-32 pt-8 md:pt-16 border-t border-enn-black/5">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-widest text-enn-gray uppercase sticky top-32">
                {t.plans.common.title}
              </h4>
            </div>
            <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <span className="block text-[10px] tracking-widest text-enn-black/40 mb-6 uppercase">Included</span>
                {(() => {
                   const text = t.plans.common.included;
                   const parts = text.split(/[:：]/);
                   const content = parts.length > 1 ? parts.slice(1).join('：') : text;
                   const items = content.split(/[,、]/).map(s => s.trim()).filter(Boolean);
                   return (
                     <ul className="space-y-4">
                       {items.map((item, i) => (
                         <li key={i} className="text-sm font-serif text-enn-black border-b border-enn-black/5 pb-2">
                           {item}
                         </li>
                       ))}
                     </ul>
                   );
                })()}
              </div>
              <div className="space-y-16">
                <div>
                  <span className="block text-[10px] tracking-widest text-enn-black/40 mb-6 uppercase">Not Included</span>
                  {(() => {
                     const text = t.plans.common.notIncluded;
                     const parts = text.split(/[:：]/);
                     const content = parts.length > 1 ? parts.slice(1).join('：') : text;
                     const items = content.split(/[,、]/).map(s => s.trim()).filter(Boolean);
                     return (
                       <p className="text-sm font-serif text-enn-black/90 leading-loose">
                         {items.map((item, i) => (
                           <React.Fragment key={i}>
                             {item}
                             {i < items.length - 1 && <span className="text-enn-black/20 mx-3 font-light">/</span>}
                           </React.Fragment>
                         ))}
                       </p>
                     );
                  })()}
                </div>
                <div>
                  <span className="block text-[10px] tracking-widest text-enn-black/40 mb-6 uppercase">Option</span>
                  {(() => {
                     const text = t.plans.common.options;
                     const parts = text.split(/[:：]/);
                     const content = parts.length > 1 ? parts.slice(1).join('：') : text;
                     return (
                       <p className="text-lg font-serif italic text-enn-black">
                         {content}
                       </p>
                     );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Plans;