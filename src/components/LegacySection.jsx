import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function LegacySection() {
  const transformationData = [
    {
      title: "The Scramble Era",
      subtitle: "Before He Took Over",
      description: "Scattered parts on tables, fried microcontrollers at 11 PM, and hoping the bot wouldn't fall apart on stage during the first round.",
      status: "BEFORE",
      highlight: "Last-Minute Panic",
      iconColor: "text-rose/70",
      borderColor: "border-rose/30"
    },
    {
      title: "The Empire Era",
      subtitle: "Under BURRRAFFAY",
      description: "Clean wiring, autonomous code that actually executes, late night workshops, and bringing back first-place hardware every single weekend.",
      status: "THE ERA",
      highlight: "Trophies & Sweep Wins",
      iconColor: "text-gold",
      borderColor: "border-gold/60",
      featured: true
    }
  ];

  const metrics = [
    { value: "#1", label: "BEST DELEGATION" },
    { value: "100+", label: "LATE-NIGHT HOURS" },
    { value: "6+", label: "NATIONAL TITLES" },
    { value: "100%", label: "TEAM DEDICATION" },
  ];

  return (
    <section id="legacy" className="relative py-24 bg-burgundy-dark/70 border-y border-gold/20 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-glow/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-glow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/30 bg-burgundy/80 text-gold text-xs font-mono tracking-widest uppercase">
            <Flame className="w-3.5 h-3.5" />
            <span>HOW IT ALL CHANGED</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            TAKING ISL FROM SCRATCH TO THE TOP
          </h2>

          <p className="font-sans text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            When Burr took over the presidency, the lab had talent, but builds were chaotic and people usually panicked two days before check-in. He changed that fast. Within months, the workshop was running like a real engineering garage, and ISL turned into the team everyone dreaded drawing in the bracket.
          </p>
        </div>

        {/* Narrative Feature Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 p-8 sm:p-10 rounded-3xl glass-card border border-gold/40 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10 text-gold pointer-events-none">
            <Sparkles className="w-48 h-48" />
          </div>

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-gold/20 text-gold border border-gold/40">
                <ShieldCheck className="w-6 h-6" />
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream">
                What Made Burr Different
              </h3>
            </div>

            <p className="font-sans text-cream/90 text-lg sm:text-xl font-light leading-relaxed italic border-l-4 border-gold pl-6 py-1">
              "Before Burr, teams worked in silos. He came in and made sure nobody got left behind. If your bot wasn't ready 12 hours before a comp, he'd pull up a chair next to you and wouldn't leave until your motors were spinning."
            </p>
          </div>
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transformationData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`rounded-2xl p-8 transition-all duration-300 relative ${
                item.featured
                  ? 'glass-card border-2 border-gold shadow-gold-glow bg-burgundy/80'
                  : 'bg-burgundy-darker/60 border border-gold/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-bold ${
                  item.featured ? 'bg-gold text-burgundy-dark' : 'bg-rose/20 text-rose'
                }`}>
                  {item.status}
                </span>
                <Zap className={`w-5 h-5 ${item.iconColor}`} />
              </div>

              <h3 className="font-serif font-bold text-2xl text-cream mb-1">{item.title}</h3>
              <p className="text-xs font-mono text-gold/80 mb-4">{item.subtitle}</p>

              <p className="font-sans text-cream/70 text-sm leading-relaxed mb-6 font-light">
                {item.description}
              </p>

              <div className="pt-4 border-t border-gold/15 flex items-center justify-between text-xs font-mono text-gold-light">
                <span>The Vibe:</span>
                <span className="font-semibold text-rose-light">{item.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-burgundy/60 border border-gold/30 text-center hover:border-gold shadow-gold-glow transition-all group"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-gold-bright group-hover:scale-110 transition-transform">
                {m.value}
              </div>
              <div className="font-serif font-bold text-xs sm:text-sm text-cream tracking-wider uppercase mt-2">
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
