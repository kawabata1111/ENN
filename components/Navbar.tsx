import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  // Only auto-hide navbar on the home page for a cleaner look, keep it visible on subpages usually
  // But let's keep consistent behavior: hide on scroll down
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  // Determine text color based on page/scroll
  // Home page starts with dark background (white text), others usually light (black text)
  // This is a simplification; for a complex site we might check route
  const isHome = location.pathname === '/';
  const textColor = (isHome && !scrolled && !menuOpen) ? 'text-white' : 'text-enn-black';
  const logoColor = (isHome && !scrolled && !menuOpen) ? 'text-white' : 'text-enn-black';
  const burgerColor = (isHome && !scrolled && !menuOpen) ? 'bg-white' : 'bg-enn-black';

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
          <Link to="/" className={`font-serif text-3xl md:text-4xl tracking-tighter font-medium z-50 relative transition-colors duration-300 hover:opacity-70 ${menuOpen ? 'text-enn-paper' : logoColor}`}>
            ENN
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden md:flex space-x-12 text-[10px] tracking-widest-xl uppercase font-medium transition-colors duration-300 ${textColor}`}>
            <Link to="/concept" className="hover:opacity-50 transition-opacity">Concept</Link>
            <Link to="/destinations" className="hover:opacity-50 transition-opacity">Destinations</Link>
            <Link to="/plans" className="hover:opacity-50 transition-opacity">Collection</Link>
            <Link to="/contact" className="hover:opacity-50 transition-opacity">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 focus:outline-none"
          >
             <div className="space-y-2 w-8">
                <span className={`block h-[1px] w-full transform transition duration-500 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2.5 bg-enn-paper' : burgerColor}`}></span>
                <span className={`block h-[1px] w-full transition duration-500 ease-in-out ${menuOpen ? 'opacity-0' : burgerColor}`}></span>
                <span className={`block h-[1px] w-full transform transition duration-500 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2.5 bg-enn-paper' : burgerColor}`}></span>
             </div>
          </button>
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
                { label: 'Concept', path: '/concept' },
                { label: 'Destinations', path: '/destinations' },
                { label: 'Collection', path: '/plans' },
                { label: 'Contact', path: '/contact' }
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
                    className="block text-5xl md:text-7xl font-serif text-enn-paper hover:text-gray-400 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="absolute bottom-12 text-enn-gray text-xs tracking-widest-xl uppercase"
            >
              Tokyo, Japan
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;