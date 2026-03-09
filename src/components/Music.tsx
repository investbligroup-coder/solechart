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
    <div className="pt-32 pb-48 bg-bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block uppercase">The Soundscape</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 gold-glow">DISCOGRAPHY</h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            Explore the complete collection of Solechart's musical journey. From early experimental singles to the latest chart-topping albums.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="flex items-center gap-3 mr-4 text-white/40 text-sm font-bold tracking-widest uppercase">
            <Filter size={16} /> Filter by:
          </div>
          {filterOptions.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest transition-all ${filter === option ? 'bg-primary text-bg-dark' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
            >
              {option.toUpperCase()}S
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredReleases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img
                  src={release.coverUrl}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
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
                    className={`w-14 h-14 bg-primary text-bg-dark rounded-full flex items-center justify-center hover:scale-110 transition-transform ${!release.audioUrl ? 'opacity-20 cursor-not-allowed' : ''}`}
                  >
                    {currentTrack?.id === release.id && isPlaying ? (
                      <Pause size={24} fill="currentColor" />
                    ) : (
                      <Play size={24} fill="currentColor" className="ml-1" />
                    )}
                  </button>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-bg-dark/80 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest border border-white/10">
                  {release.type.toUpperCase()}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-serif font-bold mb-1 group-hover:text-primary transition-colors">{release.title}</h3>
                  <p className="text-sm text-white/40 font-medium tracking-widest uppercase">{release.year} • {release.type}</p>
                </div>
                <div className="flex gap-3">
                  <a href={release.spotifyUrl} className="text-white/40 hover:text-white transition-colors" title="Spotify">
                    <MusicIcon size={18} />
                  </a>
                  <a href={release.appleMusicUrl} className="text-white/40 hover:text-white transition-colors" title="Apple Music">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Streaming Platforms Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-white/5 rounded-3xl border border-white/10 text-center"
        >
          <h2 className="text-2xl font-serif font-bold mb-8">LISTEN ON YOUR PREFERRED PLATFORM</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-xl font-bold tracking-tighter">SPOTIFY</span>
            <span className="text-xl font-bold tracking-tighter">APPLE MUSIC</span>
            <span className="text-xl font-bold tracking-tighter">YOUTUBE MUSIC</span>
            <span className="text-xl font-bold tracking-tighter">TIDAL</span>
            <span className="text-xl font-bold tracking-tighter">DEEZER</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
