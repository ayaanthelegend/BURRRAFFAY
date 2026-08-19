import React, { useState, useEffect } from 'react';
import { Menu, X, Award, Shield, Flame, BookOpen, Briefcase } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'BURRR', href: '#hero', icon: Shield },
    { name: 'The Legacy', href: '#legacy', icon: Flame },
    { name: 'Awards', href: '#awards', icon: Award },
    { name: 'Late Nights', href: '#late-nights', icon: BookOpen },
    { name: 'Entrepreneur', href: '#entrepreneur', icon: Briefcase },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-burgundy-darker/90 backdrop-blur-md border-b border-gold/30 shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      {/* Scroll progress bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold via-bright to-rose transition-all duration-150 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Title Seal */}
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold/60 bg-burgundy/80 flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-gold group-hover:text-gold-bright" />
            </div>
            <div>
              <div className="font-serif font-bold text-sm tracking-wider text-gold group-hover:text-gold-light transition-colors">
                BURRRAFFAY
              </div>
              <div className="text-[10px] font-mono tracking-widest text-rose/80 uppercase">
                Robotics Society • ISL
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 border border-gold/20 rounded-full px-4 py-1.5 bg-burgundy-dark/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-gold/20 text-gold-light border border-gold/40 shadow-gold-glow'
                      : 'text-cream/80 hover:text-gold hover:bg-burgundy-light/40'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-gold' : 'text-cream/60'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools: Audio Player */}
          <div className="hidden sm:flex items-center gap-3">
            <AudioPlayer />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <AudioPlayer />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-gold/30 text-gold hover:bg-burgundy-light focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-gold/30 bg-burgundy-darker/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-cream hover:text-gold hover:bg-burgundy/60 border border-transparent hover:border-gold/20 transition-all"
              >
                <Icon className="w-4 h-4 text-gold" />
                <span className="font-serif tracking-wide">{link.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
