import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';

// Icons
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setLangMenuOpen(false); // Close lang menu on scroll
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const isHome = location.pathname === '/';
  // Determine if we should use light or dark text based on background
  const isLightText = (isHome && !scrolled && !menuOpen);
  const textColor = isLightText ? 'text-white' : 'text-enn-black';
  const burgerColor = isLightText ? 'bg-white' : 'bg-enn-black';

  // Close lang menu when clicking outside (simple implementation)
  useEffect(() => {
    const handleClickOutside = () => setLangMenuOpen(false);
    if (langMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [langMenuOpen]);

  const toggleLanguage = (lang: 'en' | 'ja') => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !menuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
          menuOpen 
            ? 'bg-transparent' 
            : scrolled 
              ? 'bg-enn-paper/90 backdrop-blur-md border-b border-enn-black/5' 
              : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className={`font-serif text-3xl md:text-4xl tracking-tighter font-medium z-50 relative transition-colors duration-300 hover:opacity-70 ${menuOpen ? 'text-enn-paper' : textColor}`}>
            ENN
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-12 text-[10px] tracking-widest-xl uppercase font-medium transition-colors duration-300 ${textColor}`}>
            <Link to="/destinations" className="hover:opacity-50 transition-opacity">{t.nav.destinations}</Link>
            <Link to="/plans" className="hover:opacity-50 transition-opacity">{t.nav.plans}</Link>
            <Link to="/contact" className="hover:opacity-50 transition-opacity">{t.nav.contact}</Link>
            
            {/* Language Dropdown */}
            <div className="relative ml-4" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-2 hover:opacity-70 transition-opacity focus:outline-none py-2 ${textColor}`}
              >
                <GlobeIcon />
                <span className="tracking-widest">{language === 'en' ? 'English' : '日本語'}</span>
                <ChevronDownIcon className={`transition-transform duration-300 ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden z-50 py-2 border border-black/5"
                  >
                    {[
                      { code: 'en', label: 'English' },
                      { code: 'ja', label: '日本語' }
                    ].map((item) => (
                      <button
                        key={item.code}
                        onClick={() => toggleLanguage(item.code as 'en' | 'ja')}
                        className="w-full text-left px-4 py-3 text-xs tracking-widest uppercase hover:bg-gray-50 flex items-center justify-between text-enn-black group transition-colors"
                      >
                        <span>{item.label}</span>
                        {language === item.code && <CheckIcon className="text-enn-black" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 flex items-center gap-4">
             
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
               <div className="space-y-2 w-8">
                  <span className={`block h-[1px] w-full transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5 bg-enn-paper' : burgerColor}`}></span>
                  <span className={`block h-[1px] w-full transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : burgerColor}`}></span>
                  <span className={`block h-[1px] w-full transform transition duration-500 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5 bg-enn-paper' : burgerColor}`}></span>
               </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-enn-black z-40 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col space-y-12 text-center">
              {[
                { label: t.nav.destinations, path: '/destinations' },
                { label: t.nav.plans, path: '/plans' },
                { label: t.nav.contact, path: '/contact' }
              ].map((item, i) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  <motion.span
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.8, ease: "easeOut" }}
                    className="block text-4xl md:text-7xl font-serif text-enn-paper hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
              
               {/* Mobile Menu Lang Toggle */}
               <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center gap-6 justify-center"
               >
                 <button
                  onClick={() => setLanguage('en')}
                  className={`text-enn-paper text-sm tracking-widest uppercase transition-opacity flex items-center gap-2 ${language === 'en' ? 'opacity-100 border-b border-enn-paper' : 'opacity-40'}`}
                 >
                   <GlobeIcon className="w-4 h-4" /> English
                 </button>
                 <button
                  onClick={() => setLanguage('ja')}
                  className={`text-enn-paper text-sm tracking-widest uppercase transition-opacity flex items-center gap-2 ${language === 'ja' ? 'opacity-100 border-b border-enn-paper' : 'opacity-40'}`}
                 >
                   <GlobeIcon className="w-4 h-4" /> 日本語
                 </button>
               </motion.div>
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="absolute bottom-12 text-enn-gray text-xs tracking-widest-xl uppercase"
            >
              {t.hero.subtitle2}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;