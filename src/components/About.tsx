import React from 'react';
import { motion } from 'motion/react';
import { MILESTONES, SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-48 bg-bg-dark">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-32">
        <div className="absolute inset-0 z-0">
          <img
            src="/artist_garden.jpg"
            alt="About Hero"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm font-bold tracking-widest mb-6 block uppercase">The Architect of Sound</span>
            <h1 className="text-6xl md:text-9xl font-serif font-bold tracking-tighter mb-8 gold-glow">
              SOLECHART
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-serif font-bold mb-12">THE JOURNEY</h2>
              <div className="space-y-8 text-white/70 leading-relaxed text-lg">
                <p>
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-b from-primary/5 to-transparent">
                <img src="/artist_sitting.png" alt="Solechart Sitting" className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif font-bold mb-6">CRAFT & EXPERTISE</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {SKILLS.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-bg-dark rounded-3xl border border-white/10 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle className="text-white/5 stroke-current" strokeWidth="8" fill="transparent" r="40" cx="50" cy="50" />
                    <circle
                      className="text-primary stroke-current"
                      strokeWidth="8"
                      strokeDasharray={`${skill.level * 2.51} 251`}
                      strokeLinecap="round"
                      fill="transparent"
                      r="40" cx="50" cy="50"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
                    {skill.level}%
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold tracking-widest uppercase">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-serif font-bold mb-6">MILESTONES</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto space-y-16 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="flex-1 text-center md:text-right">
                  {index % 2 === 0 ? (
                    <>
                      <span className="text-4xl font-serif font-bold text-primary mb-4 block">{milestone.year}</span>
                      <p className="text-white/60 text-lg">{milestone.event}</p>
                    </>
                  ) : (
                    <div className="md:text-left">
                      <span className="text-4xl font-serif font-bold text-primary mb-4 block">{milestone.year}</span>
                      <p className="text-white/60 text-lg">{milestone.event}</p>
                    </div>
                  )}
                </div>
                <div className="w-4 h-4 bg-primary rounded-full relative z-10 shadow-[0_0_15px_rgba(223,187,42,0.8)] hidden md:block" />
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
