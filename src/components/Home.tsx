import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Calendar, MapPin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SHOWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="/hero_stage.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-[12rem] font-serif font-bold tracking-tighter mb-4 leading-none gold-glow text-gradient-gold">
              SOLECHART
            </h1>
            <p className="text-sm md:text-xl text-white/60 tracking-[0.5em] font-light mb-16 uppercase">
              The Architect of Sound & Vision
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/music" className="w-full sm:w-auto px-12 py-5 bg-primary text-bg-dark font-bold tracking-widest rounded-full hover:scale-105 transition-transform flex items-center justify-center gap-2 group shadow-xl shadow-primary/20">
                LATEST RELEASE <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-bold tracking-widest rounded-full hover:bg-white/10 glass-card transition-all flex items-center justify-center gap-2">
                WATCH VIDEO <Play size={18} fill="currentColor" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden py-6 border-t border-white/5 bg-bg-dark/50 backdrop-blur-md">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-bold tracking-[1em] text-white/20 mx-16 uppercase italic">
                NEW SINGLE "LA TORTEN" OUT NOW • WORLD TOUR 2024 TICKETS ON SALE •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Vibes Section */}
      <section className="py-32 bg-bg-dark relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="md:col-span-8 h-[400px] md:h-[600px] rounded-3xl overflow-hidden relative group hover-lift"
            >
              <img src="/artist_garden.jpg" alt="Vibe 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                <p className="text-xl md:text-3xl font-serif italic text-white/90">"Sound is the only architecture that doesn't need walls."</p>
              </div>
            </motion.div>
            <div className="md:col-span-4 grid grid-rows-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl overflow-hidden relative group hover-lift"
              >
                <img src="/portrait_sunglasses.jpg" alt="Vibe 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-3xl overflow-hidden relative group hover-lift"
              >
                <img src="/la_torten_cover.jpg" alt="Vibe 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Artist Quote */}
      <section className="py-48 bg-white/5 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <span className="text-primary text-sm font-bold tracking-[0.5em] mb-12 block uppercase">THE VISION</span>
            <h2 className="text-3xl md:text-7xl font-serif leading-tight mb-16 text-white/90">
              "I don't just write songs; I build worlds where every frequency tells a story you've forgotten but always knew."
            </h2>
            <Link to="/about" className="group text-white/40 hover:text-primary transition-all flex items-center justify-center gap-3 tracking-[0.3em] text-xs font-bold uppercase">
              READ THE FULL STORY <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-40 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="text-left w-full">
              <span className="text-primary text-sm font-bold tracking-[0.5em] mb-6 block uppercase">On the Road</span>
              <h2 className="text-5xl md:text-8xl font-serif font-bold text-gradient-gold">UPCOMING SHOWS</h2>
            </div>
          </div>

          <div className="space-y-6">
            {SHOWS.map((show, index) => (
              <motion.div
                key={show.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col md:flex-row items-center justify-between p-10 glass-card rounded-[2rem] hover:bg-white/10 transition-all duration-500 hover-lift"
              >
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-8 md:mb-0 w-full md:w-auto">
                  <div className="text-center md:text-left">
                    <p className="text-primary font-bold tracking-[0.2em] text-2xl mb-1">{show.date.split(' ')[0]}</p>
                    <p className="text-white/40 text-xs font-bold tracking-widest uppercase">{show.date.split(' ')[1]}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{show.venue}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/40 text-sm tracking-widest uppercase font-medium">
                      <MapPin size={14} className="text-primary" /> {show.location}
                    </div>
                  </div>
                </div>
                <a
                  href={show.ticketsUrl}
                  className="w-full md:w-auto px-12 py-5 bg-white text-bg-dark font-bold tracking-widest rounded-full hover:bg-primary hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-lg group"
                >
                  TICKETS <Ticket size={18} className="group-hover:rotate-12 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
