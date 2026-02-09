import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-enn-paper text-enn-black">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        
        {/* Header */}
        <div className="mb-24">
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block text-[10px] font-bold tracking-widest uppercase text-enn-gray mb-4"
            >
                Legal
            </motion.span>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-serif italic text-enn-black mb-6"
            >
                {t.privacyPolicyPage.title}
            </motion.h1>
            <p className="text-xs text-enn-gray tracking-widest uppercase">
                {t.privacyPolicyPage.updated}
            </p>
        </div>

        {/* Content */}
        <div className="space-y-16">
            {t.privacyPolicyPage.sections.map((section, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-xl font-serif border-b border-enn-black/5 pb-4">
                        {section.title}
                    </h2>
                    <p className="text-sm font-light leading-loose text-enn-black/80">
                        {section.content}
                    </p>
                </motion.div>
            ))}
        </div>

        {/* Footer Contact */}
        <div className="mt-32 pt-16 border-t border-enn-black/10 text-center">
            <p className="text-xs font-light text-enn-gray mb-8 italic">
                Questions about our policy?
            </p>
            <a href="mailto:concierge@enn.tokyo" className="text-sm tracking-[0.3em] uppercase border-b border-enn-black pb-1 hover:opacity-50 transition-opacity">
                Contact Legal
            </a>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;