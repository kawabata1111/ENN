import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

const ConceptPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-enn-paper">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-6xl md:text-9xl font-serif text-enn-black mb-6"
            >
                {t.conceptPage.title}
            </motion.h1>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="w-[1px] h-24 bg-enn-black/20 mx-auto"
            />
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-32">
            <p className="text-2xl md:text-4xl font-serif leading-tight text-center text-enn-black/90">
                {t.conceptPage.intro}
            </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32 items-center">
             <div className="relative aspect-[3/4] overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=2070&auto=format&fit=crop" 
                    alt="Guide"
                    className="w-full h-full object-cover grayscale"
                />
             </div>
             <div className="space-y-8 p-4 md:p-12">
                 <h3 className="text-xl font-bold tracking-widest-xl uppercase">{t.conceptPage.connectionTitle}</h3>
                 <p className="font-sans font-light text-lg leading-relaxed text-gray-600">
                    {t.conceptPage.connectionText1}
                 </p>
                 <p className="font-sans font-light text-lg leading-relaxed text-gray-600">
                    {t.conceptPage.connectionText2}
                 </p>
             </div>
        </div>

        {/* The Rules */}
        <div className="bg-enn-white py-24 px-6 md:px-24 border-y border-enn-black/5">
            <h3 className="text-center text-xs font-bold tracking-widest-xl uppercase mb-16">{t.conceptPage.valuesTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                {t.conceptPage.values.map((item, i) => (
                    <div key={i}>
                        <div className="w-2 h-2 bg-enn-black mx-auto mb-6 rounded-full" />
                        <h4 className="text-2xl font-serif mb-4">{item.title}</h4>
                        <p className="text-sm font-light text-gray-500 max-w-xs mx-auto">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ConceptPage;