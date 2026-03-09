import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Music as MusicIcon, ExternalLink, Filter, Pause } from 'lucide-react';
import { RELEASES } from '../constants';
import { usePlayerStore } from '../store';

export const Music: React.FC = () => {
  const { currentTrack, isPlaying, setTrack, togglePlay } = usePlayerStore();
  const [filter, setFilter] = useState<'All' | 'Album' | 'Single' | 'EP'>('All');

  const filteredReleases = filter === 'All'
    ? RELEASES
    : RELEASES.filter(r => r.type === filter);

  const filterOptions: ('All' | 'Album' | 'Single' | 'EP')[] = ['All', 'Album', 'Single', 'EP'];

  return (
    <div className="pt-32 pb-48 bg-bg-dark min-h-screen">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-24 text-center"
        >
          <span className="text-primary text-sm font-bold tracking-[0.8em] mb-6 block uppercase">The Soundscape</span>
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-8 gold-glow text-gradient-gold uppercase tracking-tighter">DISCOGRAPHY</h1>
          <p className="text-white/40 max-w-2xl mx-auto leading-relaxed text-lg font-light">
            Explore the complete collection of Solechart's musical journey. From early experimental singles to the latest chart-topping albums.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-10 py-4 rounded-full text-[10px] font-bold tracking-[0.2em] transition-all uppercase ${filter === option ? 'bg-primary text-bg-dark shadow-lg shadow-primary/20' : 'bg-white/5 text-white/40 hover:bg-white/10 hover:text-white border border-white/5'}`}
            >
              {option}S
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-8 bg-white/5 border border-white/5 shadow-2xl">
                <img
                  src={release.coverUrl}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm flex items-center justify-center">
                  <button
                    onClick={() => {
                      if (release.audioUrl) {
                        if (currentTrack?.id === release.id) {
                          togglePlay();
                        } else {
                          setTrack(release);
                        }
                      }
                    }}
                    disabled={!release.audioUrl}
                    className={`w-20 h-20 bg-primary text-bg-dark rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-2xl ${!release.audioUrl ? 'opacity-20 cursor-not-allowed' : ''}`}
                  >
                    {currentTrack?.id === release.id && isPlaying ? (
                      <Pause size={32} fill="currentColor" />
                    ) : (
                      <Play size={32} fill="currentColor" className="ml-1" />
                    )}
                  </button>
                </div>
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-bg-dark/60 backdrop-blur-md rounded-full text-[9px] font-bold tracking-[0.2em] border border-white/10 uppercase">
                  {release.type}
                </div>
              </div>
              <div className="flex justify-between items-center px-4">
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-1 group-hover:text-primary transition-colors">{release.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-white/30 font-bold tracking-widest uppercase">{release.year}</span>
                    <div className="w-1 h-1 bg-white/10 rounded-full" />
                    <span className="text-xs text-white/30 font-bold tracking-widest uppercase">{release.type}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a href={release.spotifyUrl} className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:text-primary hover:border-primary/50 transition-all" title="Spotify">
                    <MusicIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-48 p-20 glass-card rounded-[3rem] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          <h2 className="text-sm font-bold tracking-[0.5em] mb-12 uppercase text-white/40">Available Everywhere</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="text-2xl font-bold tracking-tighter">SPOTIFY</span>
            <span className="text-2xl font-bold tracking-tighter">APPLE</span>
            <span className="text-2xl font-bold tracking-tighter">TIDAL</span>
            <span className="text-2xl font-bold tracking-tighter">DEEZER</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
