import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
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
              We curate the intangible. A collection of moments, scents, and conversations that define the soul of Tokyo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">IG</a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">LI</a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Sitemap</h4>
            <ul className="space-y-4">
              <li><Link to="/concept" className="hover:text-white transition-colors">Concept</Link></li>
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/plans" className="hover:text-white transition-colors">The Collection</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
             <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Information</h4>
             <ul className="space-y-4">
               <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
               <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
             </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-8">Contact</h4>
            <address className="not-italic space-y-4">
              <p>Kojimachi, Chiyoda-ku<br/>Tokyo, Japan</p>
              <a href="mailto:hello@enn.tokyo" className="block text-white hover:underline">hello@enn.tokyo</a>
            </address>
          </div>

        </div>

        <div className="mt-32 pt-8 border-t border-white/10 flex justify-between items-end text-[10px] uppercase tracking-widest opacity-40">
           <span>&copy; 2026 ENN Inc.</span>
           <span>Designed by AI</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;