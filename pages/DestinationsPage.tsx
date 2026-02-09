import React from 'react';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import { useLanguage } from '../components/LanguageContext';

const DestinationsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 min-h-screen bg-enn-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
            <span className="block text-xs font-bold tracking-widest-xl uppercase text-enn-gray mb-4">{t.destinationsPage.label}</span>
            <h1 className="text-6xl md:text-9xl font-serif text-enn-black">{t.destinationsPage.title}</h1>
        </div>

        <div className="flex flex-col gap-32 mb-32">
            {DESTINATIONS.map((dest, index) => {
                const item = t.destinations.items[dest.id as keyof typeof t.destinations.items];
                return (
                <motion.div 
                    key={dest.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
                >
                    <div className="w-full md:w-1/2">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <img 
                                src={dest.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <span className="absolute top-4 left-4 text-white text-xs tracking-widest uppercase bg-black/50 px-3 py-1 backdrop-blur-sm">
                                Area 0{index + 1}
                            </span>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-6xl font-serif mb-6">{item.name}</h2>
                        <div className="w-12 h-[1px] bg-enn-black mb-8" />
                        <p className="text-lg md:text-xl font-light text-gray-600 leading-relaxed mb-8">
                            {item.description}
                        </p>
                        <p className="text-sm font-light text-gray-500 mb-8 leading-relaxed">
                            {t.destinationsPage.highlightsLabel} {dest.id === 'shibuya' ? 'Hidden cafes, architectural landmarks.' : dest.id === 'ginza' ? 'Architecture, Shopping, Dining.' : dest.id === 'asakusa' ? 'Temple, Street Food, History.' : 'Anime, Tech, Subculture.'}
                        </p>
                    </div>
                </motion.div>
            );
            })}
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;