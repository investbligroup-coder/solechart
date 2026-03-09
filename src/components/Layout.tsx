import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Music, Play, Pause, SkipBack, SkipForward, Volume2, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'MUSIC', path: '/music' },
    { name: 'VIDEOS', path: '/videos' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-serif font-bold tracking-widest text-primary gold-glow">
          SOLECHART
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium tracking-widest hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-white/70'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-bg-dark border-t border-white/10 py-8 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium tracking-widest ${location.pathname === link.path ? 'text-primary' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark border-t border-white/10 pt-20 pb-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 gold-glow">SOLECHART</h2>
            <p className="text-white/60 max-w-md leading-relaxed">
              Crafting immersive sonic landscapes and cinematic visuals. Join the journey through sound and vision.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6">QUICK LINKS</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><Link to="/music" className="hover:text-primary transition-colors">Discography</Link></li>
              <li><Link to="/videos" className="hover:text-primary transition-colors">Visuals</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">The Artist</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-widest mb-6">FOLLOW</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors"><Youtube size={20} /></a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/40 tracking-widest">
          <p>© 2024 SOLECHART. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const MiniPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 bg-bg-dark/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Track Info */}
        <div className="flex items-center gap-4 w-1/3">
          <div className="w-12 h-12 bg-white/5 rounded-md overflow-hidden flex-shrink-0">
            <img src="/la_torten_cover.jpg" alt="Current Track" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="hidden sm:block overflow-hidden">
            <h4 className="text-sm font-bold truncate">La Torten</h4>
            <p className="text-xs text-white/50 truncate">Solechart</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-2 w-1/3">
          <div className="flex items-center gap-6">
            <button className="text-white/60 hover:text-white transition-colors"><SkipBack size={20} /></button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 bg-primary text-bg-dark rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button className="text-white/60 hover:text-white transition-colors"><SkipForward size={20} /></button>
          </div>
          <div className="w-full max-w-md flex items-center gap-3">
            <span className="text-[10px] text-white/40 font-mono">1:24</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden cursor-pointer group">
              <div
                className="h-full bg-primary relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg" />
              </div>
            </div>
            <span className="text-[10px] text-white/40 font-mono">3:45</span>
          </div>
        </div>

        {/* Volume & Extra */}
        <div className="flex items-center justify-end gap-6 w-1/3">
          <div className="hidden md:flex items-center gap-3 w-32">
            <Volume2 size={18} className="text-white/60" />
            <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white/60 w-3/4" />
            </div>
          </div>
          <button className="text-white/60 hover:text-primary transition-colors">
            <Music size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
