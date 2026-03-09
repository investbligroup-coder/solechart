import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-48 bg-bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block uppercase">Get in Touch</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 gold-glow">CONTACT</h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            For bookings, collaborations, or just to say hello. We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/5 p-12 rounded-3xl border border-white/10"
          >
            <h2 className="text-3xl font-serif font-bold mb-8">SEND A MESSAGE</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Subject</label>
                <input 
                  type="text" 
                  placeholder="Booking Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-white/40 uppercase">Message</label>
                <textarea 
                  rows={6}
                  placeholder="Tell us about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <button className="w-full py-5 bg-primary text-bg-dark font-bold tracking-widest rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-3">
                SEND MESSAGE <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">CONTACT INFO</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-1">Email</p>
                      <p className="text-xl font-medium">management@solechart.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-1">Phone</p>
                      <p className="text-xl font-medium">+44 (0) 20 7946 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-white/40 uppercase mb-1">Location</p>
                      <p className="text-xl font-medium">London, United Kingdom</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">FOLLOW US</h2>
                <div className="flex gap-6">
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-bg-dark transition-all">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-bg-dark transition-all">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-bg-dark transition-all">
                    <Youtube size={24} />
                  </a>
                  <a href="#" className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 hover:bg-primary hover:text-bg-dark transition-all">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 aspect-video rounded-3xl overflow-hidden bg-white/5 border border-white/10 relative">
              <img src="https://picsum.photos/seed/london-map/800/450?grayscale" alt="Map" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="px-6 py-3 bg-bg-dark/80 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold tracking-widest">
                  VIEW ON GOOGLE MAPS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
