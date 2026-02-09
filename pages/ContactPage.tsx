import React from 'react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-enn-paper">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            
            {/* Info Side */}
            <div>
                <span className="block text-xs font-bold tracking-widest-xl uppercase text-enn-gray mb-4">Inquiries</span>
                <h1 className="text-5xl md:text-7xl font-serif text-enn-black mb-12">Begin Your Journey</h1>
                
                <div className="space-y-12 text-enn-black/80 font-light">
                    <p className="text-lg leading-relaxed max-w-md">
                        Please fill out the form to request a reservation or consultation. We reply to all inquiries within 24 hours.
                    </p>
                    
                    <div>
                        <h4 className="font-serif text-2xl mb-4">Office</h4>
                        <p>Kojimachi, Chiyoda-ku<br />Tokyo, Japan 102-0083</p>
                    </div>

                    <div>
                        <h4 className="font-serif text-2xl mb-4">Direct</h4>
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
                            <label className="text-[10px] uppercase tracking-widest text-gray-500">First Name</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-gray-500">Last Name</label>
                            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Email Address</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Interested Plan</label>
                        <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent text-gray-700">
                            <option>Select a plan...</option>
                            <option>Plan A - Standard</option>
                            <option>Plan B - Dual Perspective</option>
                            <option>Plan C - Omakase</option>
                            <option>Plan F - VIP</option>
                            <option>Custom Request</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gray-500">Message</label>
                        <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors bg-transparent resize-none"></textarea>
                    </div>

                    <button className="w-full bg-enn-black text-white text-xs uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors mt-8">
                        Send Inquiry
                    </button>
                </form>
            </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;