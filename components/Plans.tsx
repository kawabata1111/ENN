import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLANS } from '../constants';

const planImages: Record<string, string> = {
  'plan-a': 'https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=2000&auto=format&fit=crop', // Tea ceremony / calm
  'plan-b': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop', // Street contrast
  'plan-c': 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2000&auto=format&fit=crop', // Sushi
  'plan-f': 'https://images.unsplash.com/photo-1562675743-3467f539f400?q=80&w=2000&auto=format&fit=crop', // Luxury car/night
};

const Plans: React.FC = () => {
  const [activePlan, setActivePlan] = useState<string | null>(null);

  return (
    <section id="plans" className="relative py-32 bg-enn-paper overflow-hidden">
      
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
        <div className="mb-24 md:flex justify-between items-end">
          <div>
            <h2 className="text-xs font-bold tracking-widest-xl text-enn-gray uppercase mb-4">
              The Collection
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif text-enn-black">Select Your Journey</h3>
          </div>
          <p className="mt-8 md:mt-0 text-sm font-light max-w-xs text-enn-black/60">
            Each plan is a starting point. We customize every detail to your pace and curiosity.
          </p>
        </div>

        <div className="flex flex-col border-t border-enn-black">
          {PLANS.map((plan, index) => (
            <motion.div 
              key={plan.id}
              onMouseEnter={() => setActivePlan(plan.id)}
              onMouseLeave={() => setActivePlan(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group border-b border-enn-black py-16 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors duration-300 hover:bg-white/50 px-4 -mx-4"
            >
              
              {/* Plan Code & Name */}
              <div className="md:w-1/3 mb-6 md:mb-0">
                <span className="block text-[10px] font-bold tracking-widest text-enn-gray mb-2 group-hover:text-enn-black transition-colors">{plan.code}</span>
                <h4 className="text-3xl md:text-5xl font-serif text-enn-black group-hover:translate-x-2 transition-transform duration-500">{plan.name}</h4>
              </div>
              
              {/* Features */}
              <div className="md:w-1/3 mb-8 md:mb-0">
                <p className="text-sm md:text-base text-enn-black/70 font-sans font-light mb-4 max-w-sm">{plan.description}</p>
                <div className="flex flex-wrap gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  {plan.features.map((feature, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider border border-enn-black/20 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="md:w-1/3 flex flex-row md:flex-col justify-between items-end w-full md:w-auto">
                <span className="text-2xl md:text-3xl font-serif text-enn-black italic">
                  {plan.price}
                </span>
                <div className="mt-4 overflow-hidden">
                   <span className="block text-xs uppercase tracking-widest border-b border-black pb-1 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     Request Booking
                   </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;