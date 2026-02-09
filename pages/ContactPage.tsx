import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../components/LanguageContext';
import { PLANS } from '../constants';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-enn-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            
            {/* Info Side */}
            <div>
                <span className="block text-xs font-bold tracking-widest-xl uppercase text-enn-gray mb-4">{t.contactPage.label}</span>
                <h1 className="text-5xl md:text-7xl font-serif text-enn-black mb-12">{t.contactPage.title}</h1>
                
                <div className="space-y-12 text-enn-black/80 font-light">
                    <p className="text-lg leading-relaxed max-w-md">
                        {t.contactPage.intro}
                    </p>
                    
                    <div>
                        <h4 className="font-serif text-2xl mb-4">{t.contactPage.officeTitle}</h4>
                        <p className="whitespace-pre-line">{t.footer.company.address}</p>
                    </div>

                    <div>
                        <h4 className="font-serif text-2xl mb-4">{t.contactPage.directTitle}</h4>
                        <p>concierge@enn.tokyo<br />+81 3 1234 5678</p>
                    </div>
                </div>
            </div>

            {/* Form Side */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="bg-white p-8 md:p-12 shadow-sm border border-gray-100"
            >
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500">{t.contactPage.form.firstName}</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500">{t.contactPage.form.lastName}</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">{t.contactPage.form.email}</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">{t.contactPage.form.plan}</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent text-gray-700">
                            <option>{t.contactPage.form.planPlaceholder}</option>
                            {PLANS.map(plan => (
                                <option key={plan.id}>
                                    {plan.code} - {t.plans.items[plan.id as keyof typeof t.plans.items].name}
                                </option>
                            ))}
                            <option>Custom Request</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">{t.contactPage.form.message}</label>
                        <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"></textarea>
                    </div>

                    <button className="w-full bg-enn-black text-white text-xs uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors mt-8">
                        {t.contactPage.form.submit}
                    </button>
                </form>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;