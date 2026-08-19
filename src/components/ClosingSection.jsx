import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Shield } from 'lucide-react';

export default function ClosingSection() {
  return (
    <section id="closing" className="relative py-28 bg-burgundy-darker border-t border-gold/30 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold-glow/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Final Bookend Closing Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 px-6 rounded-3xl glass-card border-2 border-gold relative overflow-hidden shadow-gold-strong space-y-6 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-widest">
            <Crown className="w-5 h-5 text-gold animate-bounce" />
            <span>END OF AN ERA</span>
            <Crown className="w-5 h-5 text-gold animate-bounce" />
          </div>

          <div className="space-y-2">
            <h3 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-gold-gradient gold-glow-text uppercase tracking-tight">
              BURRRAFFAY
            </h3>
            <p className="font-serif text-lg sm:text-2xl text-cream italic font-semibold">
              President (2025-2026) • The Robotics Society • International School Lahore
            </p>
          </div>

          <p className="font-sans text-cream/80 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Thanks for the late nights in the lab, fixing fried circuits at midnight, and turning ISL into a championship team. You raised the bar for everyone who comes next.
          </p>

          <div className="pt-4 flex items-center justify-center gap-2 text-xs font-mono text-gold-light">
            <Shield className="w-4 h-4 text-gold" />
            <span>THE ROBOTICS SOCIETY • ISL</span>
            <Shield className="w-4 h-4 text-gold" />
          </div>
        </motion.div>

        {/* Footer info */}
        <div className="mt-12 text-center text-xs font-mono text-cream/50">
          <div>International School Lahore (ISL)</div>
        </div>

      </div>
    </section>
  );
}
