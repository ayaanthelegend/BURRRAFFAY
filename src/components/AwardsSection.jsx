import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Crown, Sparkles, Plane, Bot, Star, Maximize2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AwardsSection({ onOpenImage }) {
  
  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F7D070', '#E8A0A0', '#FFFFFF']
    });
  };

  const awardsList = [
    {
      title: "PSIFI Robotics",
      result: "Runners-Up & Winners",
      badge: "HEADLINE WIN",
      category: "Robowars & Autonomous",
      description: "Swept through both combat and autonomous categories, bringing in the points needed for the delegation award.",
      icon: Trophy,
      featured: true,
      glow: "shadow-gold-strong border-gold-bright border-2 bg-gradient-to-br from-burgundy-light/60 via-burgundy/90 to-burgundy-dark"
    },
    {
      title: "Triathlon",
      result: "Winner, CS & Research Category",
      badge: "DOUBLE VICTORY",
      category: "Computer Science & Research",
      description: "Took 1st place in both the CS programming division and technical research.",
      icon: Award,
      featured: false,
      glow: "border-gold/40 hover:border-gold shadow-gold-glow"
    },
    {
      title: "REVEL",
      result: "Best Delegation",
      badge: "DELEGATION CHAMPIONS",
      category: "Overall Championship",
      description: "Outscored top national schools across every event to take home Best Delegation.",
      icon: Crown,
      featured: false,
      glow: "border-gold/40 hover:border-gold shadow-gold-glow"
    },
    {
      title: "NERC",
      result: "Robo Races & Ready to Race",
      badge: "MULTIPLE PODIUMS",
      category: "Autonomous Speed Racing",
      description: "Solid podium finishes in both the high-speed Robo Races and Ready-to-Race tracks.",
      icon: Bot,
      featured: false,
      glow: "border-gold/40 hover:border-gold shadow-gold-glow"
    },
    {
      title: "PSIFI RC Planes",
      result: "Runners-Up",
      badge: "AERIAL ENGINEERING",
      category: "Flight Mechanics & Control",
      description: "Grabbed 2nd place in the national aerial engineering and remote flight challenge.",
      icon: Plane,
      featured: false,
      glow: "border-gold/40 hover:border-gold shadow-gold-glow"
    },
    {
      title: "LSS Autonomous System",
      result: "Honorable Mention",
      badge: "AUTONOMOUS LOGIC",
      category: "Custom Hardware & Code",
      description: "Earned recognition for custom algorithmic navigation and chassis stability.",
      icon: Star,
      featured: false,
      glow: "border-gold/40 hover:border-gold shadow-gold-glow"
    }
  ];

  return (
    <section id="awards" className="relative py-28 bg-burgundy-dark/90 border-t border-gold/20 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-glow/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-rose-glow/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-gold/40 bg-burgundy/90 text-gold text-xs font-mono tracking-widest uppercase shadow-gold-glow">
            <Trophy className="w-3.5 h-3.5 text-bright animate-pulse" />
            <span>THE HARDWARE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            AWARDS & ACHIEVEMENTS
          </h2>

          <p className="font-sans text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            What happened when all those late-night workshop hours finally hit the competition floor.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {awardsList.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  if (award.featured) triggerConfetti();
                }}
                className={`rounded-2xl p-6 sm:p-8 transition-all duration-300 relative group cursor-pointer ${
                  award.featured
                    ? 'lg:col-span-2 glass-card ' + award.glow
                    : 'bg-burgundy/60 border glass-card-hover ' + award.glow
                }`}
              >
                {award.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold text-burgundy-dark font-mono text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3 h-3" />
                    <span>FEATURED WIN</span>
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3.5 rounded-2xl border ${
                    award.featured
                      ? 'bg-gold/20 border-gold text-gold-bright shadow-gold-glow'
                      : 'bg-burgundy-dark border-gold/30 text-gold group-hover:text-gold-bright group-hover:border-gold'
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-rose uppercase block">
                      {award.badge}
                    </span>
                    <h3 className="font-serif font-bold text-xl sm:text-2xl text-cream group-hover:text-gold-light transition-colors">
                      {award.title}
                    </h3>
                  </div>
                </div>

                <div className="mb-3">
                  <span className="inline-block font-display font-extrabold text-lg text-gold-bright">
                    {award.result}
                  </span>
                  <div className="text-xs font-mono text-cream/60 mt-0.5">
                    Category: {award.category}
                  </div>
                </div>

                <p className="font-sans text-cream/80 text-xs sm:text-sm leading-relaxed font-light">
                  {award.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Visual: Robowars Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 rounded-3xl glass-card border-2 border-gold/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Image Frame */}
            <div 
              className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-gold shadow-gold-glow"
              onClick={() => onOpenImage('/images/psifi_team.webp', 'ISL RR TEAM B — PSIFI Robowars')}
            >
              <img
                src="/images/psifi_team.webp"
                alt="ISL RR TEAM B — PSIFI Robowars"
                className="w-full h-[320px] sm:h-[400px] object-cover filter brightness-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy-darker via-transparent to-transparent opacity-60" />
              
              {/* Corner Accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold" />
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold" />
              <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold" />

              <div className="absolute top-4 right-4 bg-burgundy-darker/80 border border-gold/50 p-2 rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 bg-burgundy-darker/90 backdrop-blur-md p-3 rounded-xl border border-gold/30">
                <div className="font-serif font-bold text-sm text-gold">ROBOWARS RUNNERS-UP TEAM</div>
              </div>
            </div>

            {/* Right Text Column */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-cream">
                ISL RR TEAM B
              </h3>

              <p className="font-sans text-cream/80 text-sm sm:text-base leading-relaxed font-light">
                Brought back the podium in Robowars after a chaotic bracket. Burr managed match strategy and quick structural fixes between rounds to keep the bot fighting all the way to finals.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Capstone Closing Achievement Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onClick={triggerConfetti}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-burgundy via-burgundy-light to-burgundy border-2 border-gold text-center relative overflow-hidden shadow-gold-strong cursor-pointer group"
        >
          <div className="absolute inset-0 bg-gold-glow/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-gold font-mono text-xs font-bold uppercase tracking-widest">
              <Crown className="w-4 h-4 text-bright animate-bounce" />
              <span>THE BIG PRIZE</span>
              <Crown className="w-4 h-4 text-bright animate-bounce" />
            </div>

            <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-gold-bright gold-glow-text leading-tight uppercase">
              BECAUSE OF THIS, ISL WON PSIFI BEST DELEGATION
            </h3>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gold text-burgundy-dark font-serif font-extrabold text-xs uppercase tracking-wider group-hover:scale-105 transition-transform shadow-md">
                Click for Confetti 🎉
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
