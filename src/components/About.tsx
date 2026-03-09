import React from 'react';
import { motion } from 'motion/react';
import { MILESTONES, SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-48 bg-bg-dark relative">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-32">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/artist_garden.jpg"
            alt="About Hero"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-bold tracking-[0.8em] mb-8 block uppercase">The Architect of Sound</span>
            <h1 className="text-7xl md:text-[10rem] font-serif font-bold tracking-tighter mb-8 gold-glow text-gradient-gold">
              BIOGRAPHY
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif font-bold mb-16 text-gradient-gold">THE JOURNEY</h2>
              <div className="space-y-10 text-white/50 leading-relaxed text-lg md:text-xl font-light">
                <p className="first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-4 first-letter:float-left">
                  Solechart is a multi-instrumentalist, producer, and visual artist based in London. With a background in classical composition and a passion for electronic soundscapes, they have carved a unique niche in the contemporary music scene.
                </p>
                <p>
                  Their work is characterized by intricate layering, cinematic atmosphere, and deeply personal storytelling. Each project is approached as a complete sensory experience, blending sound and vision into a cohesive narrative.
                </p>
                <p>
                  Since their debut in 2018, Solechart has collaborated with world-renowned artists and brands, pushing the boundaries of what it means to be a modern musician.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/5 flex items-end justify-center bg-gradient-to-b from-primary/10 to-transparent relative shadow-2xl shadow-primary/5">
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent z-10" />
                <img
                  src="/artist_sitting.png"
                  alt="Solechart Sitting"
                  className="max-w-[120%] h-[110%] object-contain group-hover:scale-105 transition-transform duration-1000 z-20 translate-y-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[120px] -z-10 animate-pulse-slow" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-40 bg-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <span className="text-primary text-xs font-bold tracking-[0.5em] mb-6 block uppercase">Career Highlights</span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-gradient-gold">MILESTONES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-12 glass-card rounded-[2.5rem] hover-lift group"
              >
                <span className="text-4xl md:text-6xl font-serif font-bold text-primary/20 group-hover:text-primary transition-colors block mb-8">{milestone.year}</span>
                <p className="text-white/60 text-lg leading-relaxed group-hover:text-white transition-colors">{milestone.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-gradient-gold">EXPERTISE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-10 glass-card rounded-3xl text-center group hover-lift"
              >
                <div className="relative w-40 h-40 mx-auto mb-10">
                  <svg className="w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                    <circle className="text-white/5 stroke-current" strokeWidth="4" fill="transparent" r="45" cx="50" cy="50" />
                    <motion.circle
                      initial={{ strokeDasharray: "0 283" }}
                      whileInView={{ strokeDasharray: `${(skill.level / 100) * 283} 283` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="text-primary stroke-current"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="transparent"
                      r="45" cx="50" cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold tracking-tighter">{skill.level}%</span>
                  </div>
                </div>
                <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-white/40 group-hover:text-primary transition-colors">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
