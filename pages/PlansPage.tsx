import React from 'react';
import { motion } from 'framer-motion';
import { PLANS } from '../constants';
import { Link } from 'react-router-dom';

const PlansPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-enn-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
            <h1 className="text-6xl md:text-8xl font-serif text-enn-black mb-6">The Collection</h1>
            <p className="text-sm tracking-widest-xl uppercase text-enn-gray">Curated experiences for the discerning traveler</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {PLANS.map((plan, index) => (
                <motion.div 
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="bg-white p-8 md:p-12 flex flex-col justify-between min-h-[500px] border border-transparent hover:border-enn-black/10 transition-colors shadow-sm hover:shadow-xl duration-500"
                >
                    <div>
                        <span className="text-xs font-bold text-gray-400 tracking-widest uppercase block mb-4">{plan.code}</span>
                        <h3 className="text-3xl font-serif mb-6">{plan.name}</h3>
                        <div className="h-[1px] w-full bg-gray-100 mb-6" />
                        <p className="text-sm font-light text-gray-600 mb-8 leading-relaxed">
                            {plan.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-xs uppercase tracking-wider text-gray-500 flex items-center gap-3">
                                    <span className="w-1 h-1 bg-black rounded-full" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-3xl font-serif italic mb-6">{plan.price}</p>
                        <Link to="/contact" className="block w-full text-center text-xs uppercase tracking-widest bg-enn-black text-white py-4 hover:bg-gray-800 transition-colors">
                            Request Booking
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className="bg-enn-black text-enn-paper p-12 md:p-24 text-center">
            <h3 className="text-3xl md:text-5xl font-serif mb-6">Bespoke Arrangements</h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                For those seeking the truly extraordinary. Private jet transfers, exclusive restaurant buyouts, or after-hours museum access. 
                Our team is capable of realizing the impossible.
            </p>
            <Link to="/contact" className="inline-block border border-white/30 px-12 py-4 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all">
                Contact Concierge
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;