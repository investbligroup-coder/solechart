import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Youtube, Instagram, Twitter, Filter } from 'lucide-react';
import { VIDEOS } from '../constants';

export const Videos: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Music Video' | 'Live Session' | 'Behind the Scenes'>('All');

  const filteredVideos = filter === 'All' 
    ? VIDEOS 
    : VIDEOS.filter(v => v.category === filter);

  const filterOptions: ('All' | 'Music Video' | 'Live Session' | 'Behind the Scenes')[] = ['All', 'Music Video', 'Live Session', 'Behind the Scenes'];

  return (
    <div className="pt-32 pb-48 bg-bg-dark">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <span className="text-primary text-sm font-bold tracking-widest mb-4 block uppercase">Cinematic Visuals</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 gold-glow">VIDEOS</h1>
          <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
            A visual companion to the sound. Experience the stories behind the music through our curated cinematic content.
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
              {option.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img 
                  src={video.thumbnailUrl} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-bg-dark/40 group-hover:bg-bg-dark/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-bg-dark transition-all border border-white/20">
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-bg-dark/80 backdrop-blur-md rounded-full text-xs font-bold tracking-widest border border-white/10">
                  {video.category.toUpperCase()}
                </div>
              </div>
              <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">{video.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Social Integration */}
        <div className="mt-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">MORE CONTENT ON</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <a href="#" className="flex flex-col items-center p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <Youtube size={48} className="text-white/40 group-hover:text-red-500 transition-colors mb-6" />
              <span className="text-lg font-bold tracking-widest">YOUTUBE</span>
              <span className="text-xs text-white/40 mt-2">1.2M SUBSCRIBERS</span>
            </a>
            <a href="#" className="flex flex-col items-center p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <Instagram size={48} className="text-white/40 group-hover:text-pink-500 transition-colors mb-6" />
              <span className="text-lg font-bold tracking-widest">INSTAGRAM</span>
              <span className="text-xs text-white/40 mt-2">850K FOLLOWERS</span>
            </a>
            <a href="#" className="flex flex-col items-center p-12 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
              <Twitter size={48} className="text-white/40 group-hover:text-blue-400 transition-colors mb-6" />
              <span className="text-lg font-bold tracking-widest">TIKTOK</span>
              <span className="text-xs text-white/40 mt-2">2.4M FOLLOWERS</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
