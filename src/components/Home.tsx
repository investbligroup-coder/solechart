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
          <img
            src="/src/assets/hero_stage.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-40 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter mb-6 gold-glow">
              SOLECHART
            </h1>
            <p className="text-lg md:text-xl text-white/70 tracking-[0.3em] font-light mb-12 uppercase">
              The Architect of Sound & Vision
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/music" className="px-10 py-4 bg-primary text-bg-dark font-bold tracking-widest rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                LATEST RELEASE <ArrowRight size={18} />
              </Link>
              <button className="px-10 py-4 border border-white/20 text-white font-bold tracking-widest rounded-full hover:bg-white/5 transition-colors flex items-center gap-2">
                WATCH VIDEO <Play size={18} fill="currentColor" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="absolute bottom-10 left-0 w-full overflow-hidden py-4 border-y border-white/5 bg-white/5 backdrop-blur-sm">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-sm font-bold tracking-[0.5em] text-white/30 mx-10 uppercase">
                NEW SINGLE "LA TORTEN" OUT NOW • WORLD TOUR 2024 TICKETS ON SALE •
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Vibes Section */}
      <section className="py-24 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 h-[500px] rounded-2xl overflow-hidden relative group">
              <img src="/src/assets/artist_garden.jpg" alt="Vibe 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-10">
                <p className="text-2xl font-serif italic">"Sound is the only architecture that doesn't need walls."</p>
              </div>
            </div>
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="rounded-2xl overflow-hidden">
                <img src="/src/assets/portrait_sunglasses.jpg" alt="Vibe 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src="/src/assets/la_torten_cover.jpg" alt="Vibe 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Artist Quote */}
      <section className="py-32 bg-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary text-sm font-bold tracking-widest mb-8 block">THE VISION</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-12">
              "I don't just write songs; I build worlds where every frequency tells a story you've forgotten but always knew."
            </h2>
            <Link to="/about" className="text-white/60 hover:text-primary transition-colors flex items-center justify-center gap-2 tracking-widest text-sm font-bold">
              READ THE FULL STORY <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-32 bg-bg-dark">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary text-sm font-bold tracking-widest mb-4 block uppercase">On the Road</span>
              <h2 className="text-5xl font-serif font-bold">UPCOMING SHOWS</h2>
            </div>
            <button className="px-8 py-3 border border-white/20 rounded-full text-sm font-bold tracking-widest hover:bg-white/5 transition-colors">
              VIEW ALL DATES
            </button>
          </div>

          <div className="space-y-4">
            {SHOWS.map((show) => (
              <motion.div
                key={show.id}
                whileHover={{ x: 10 }}
                className="group flex flex-col md:flex-row items-center justify-between p-8 border border-white/5 rounded-2xl hover:bg-white/5 transition-all"
              >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-6 md:mb-0">
                  <div className="text-center md:text-left">
                    <p className="text-primary font-bold tracking-widest text-lg">{show.date}</p>
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-serif font-bold mb-1">{show.venue}</h3>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-sm">
                      <MapPin size={14} /> {show.location}
                    </div>
                  </div>
                </div>
                <a
                  href={show.ticketsUrl}
                  className="px-8 py-3 bg-white text-bg-dark font-bold tracking-widest rounded-full hover:bg-primary transition-colors flex items-center gap-2"
                >
                  TICKETS <Ticket size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
