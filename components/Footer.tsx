import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-enn-black text-enn-paper py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Giant Text */}
        <div className="border-b border-white/10 pb-20 mb-20">
            <h2 className="text-[15vw] leading-[0.8] font-serif tracking-tighter opacity-90">
              ENN<span className="block text-[4vw] tracking-normal font-sans font-light opacity-50 ml-2 mt-4">TOKYO / EST. 2026</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-sm font-light text-white/70">
          
          <div className="md:col-span-4 space-y-8">
            <p className="max-w-xs leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">IG</a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">LI</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">{t.footer.sitemap}</h4>
            <ul className="space-y-4">
              <li><Link to="/destinations" className="hover:text-white transition-colors">{t.nav.destinations}</Link></li>
              <li><Link to="/plans" className="hover:text-white transition-colors">{t.nav.plans}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t.nav.contact}</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">{t.footer.privacyPolicy}</Link></li>
            </ul>
          </div>

          <div className="md:col-span-5">
             <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">{t.footer.company.title}</h4>
             <div className="space-y-4 text-xs leading-relaxed">
               <p>{t.footer.company.rep}</p>
               <p>{t.footer.company.industry} | {t.footer.company.established}</p>
               <p>{t.footer.company.address}</p>
               <p>{t.footer.company.medical}</p>
               <div className="pt-4">
                 <a href="mailto:hello@enn.tokyo" className="block text-white hover:underline">hello@enn.tokyo</a>
               </div>
             </div>
          </div>

        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center md:items-end text-[10px] uppercase tracking-widest opacity-40 gap-4">
           <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:items-end text-center md:text-left">
             <span>&copy; 2026 ENN Inc. {t.footer.rights}</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;