import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Trophy, ChevronDown, Maximize2 } from 'lucide-react';

export default function HeroSection({ onOpenImage }) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow Orbs background layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-glow/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-gold-glow/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-burgundy-light/40 rounded-full blur-[130px] pointer-events-none" />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 hero-vignette pointer-events-none z-1" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Cinematic Main Title */}
            <div className="space-y-2">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] uppercase">
                <span className="block text-cream opacity-90 drop-shadow-md">THE LEGEND OF</span>
                <span className="block text-gold-gradient gold-glow-text">BURRRAFFAY</span>
              </h1>
            </div>

            {/* Natural Description */}
            <p className="font-sans text-cream/80 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              If you spent five minutes in the ISL lab over the past year, you already know Burr. He took over <strong className="text-gold font-semibold">The Robotics Society</strong>, lost a concerning amount of sleep, fixed everyone's burnt motor controllers, and walked away with every trophy in sight. This is the tribute page for the guy who made ISL Robotics terrifying to compete against.
            </p>

            {/* Hero Key Highlights Row */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="px-4 py-2.5 rounded-xl border border-gold/30 bg-burgundy/60 backdrop-blur-md flex items-center gap-3">
                <Shield className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-rose/80 font-mono">Tenure</div>
                  <div className="text-sm font-serif font-bold text-cream">President (2025-2026)</div>
                </div>
              </div>

              <div className="px-4 py-2.5 rounded-xl border border-gold/30 bg-burgundy/60 backdrop-blur-md flex items-center gap-3">
                <Trophy className="w-5 h-5 text-gold" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-rose/80 font-mono">Top Prize</div>
                  <div className="text-sm font-serif font-bold text-cream">PSIFI Best Delegation</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#legacy"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-gold via-bright to-gold text-burgundy-dark font-serif font-bold text-sm tracking-wider uppercase shadow-gold-strong hover:scale-105 transition-all text-center"
              >
                Read The Story
              </a>
              <a
                href="#late-nights"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gold/40 bg-burgundy/60 hover:bg-burgundy-light/60 text-cream font-serif font-semibold text-sm tracking-wider uppercase hover:border-gold transition-all text-center"
              >
                Late Night Workshops
              </a>
            </div>
          </motion.div>

          {/* Right Column: Stylized Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Outer Glow Ring */}
            <div className="relative group cursor-pointer" onClick={() => onOpenImage('/images/raffay_portrait.webp', 'BURRRAFFAY — President (2025-2026)')}>
              
              {/* Border Frame */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-gold via-rose to-gold opacity-70 blur-md group-hover:opacity-100 transition-opacity animate-pulse-slow" />

              {/* Main Portrait Card */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold bg-burgundy-dark shadow-2xl p-2 max-w-sm sm:max-w-md">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/raffay_portrait.webp"
                    alt="BURRRAFFAY — President, The Robotics Society"
                    className="w-full h-[420px] sm:h-[480px] object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-darker via-transparent to-transparent opacity-80" />

                  {/* Corner Gold Accent Frames */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold" />

                  {/* Hover Inspect Icon */}
                  <div className="absolute top-4 right-4 bg-burgundy-darker/80 border border-gold/40 p-2 rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Portrait Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-center bg-gradient-to-t from-burgundy-darker via-burgundy-darker/80 to-transparent">
                    <div className="font-serif font-extrabold text-xl text-gold-bright tracking-wider">
                      BURRRAFFAY
                    </div>
                    <div className="text-xs font-mono tracking-widest text-cream/90 uppercase mt-0.5">
                      President (2025-2026)
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -left-6 top-1/4 bg-burgundy-dark/90 border border-gold/50 rounded-xl p-3 shadow-gold-glow backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-float">
                <Shield className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-[10px] font-mono text-rose uppercase">Status</div>
                  <div className="text-xs font-bold text-cream font-serif">100% Locked In</div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -right-6 bottom-1/4 bg-burgundy-dark/90 border border-gold/50 rounded-xl p-3 shadow-gold-glow backdrop-blur-md hidden sm:flex items-center gap-2.5 animate-float" style={{ animationDelay: '2s' }}>
                <Trophy className="w-5 h-5 text-gold" />
                <div>
                  <div className="text-[10px] font-mono text-rose uppercase">PSIFI 2026</div>
                  <div className="text-xs font-bold text-cream font-serif">Best Delegation</div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
        <a href="#legacy" className="flex flex-col items-center text-xs font-mono tracking-widest text-gold uppercase">
          <span>SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 text-gold animate-bounce mt-1" />
        </a>
      </div>
    </section>
  );
}
