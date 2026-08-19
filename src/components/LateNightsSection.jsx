import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Wrench, Moon, Quote, Heart } from 'lucide-react';

export default function LateNightsSection() {
  const [activeStoryTab, setActiveStoryTab] = useState(0);

  const storyHighlights = [
    {
      title: "Late Night Workshops",
      badge: "THE SACRIFICES",
      content: "While the school went quiet, the lab stayed open for late night workshops. Burr wasn't sitting back giving orders. He was right on the floor covered in wire scraps, helping three different teams re-solder their power rails before competition check-in.",
      quote: "Nobody's bot leaves this lab half-broken. If it takes all night, we stay till it runs."
    },
    {
      title: "Fixing Everyone Else's Bots",
      badge: "TEAM-FIRST DEDICATION",
      content: "When a junior team had a fried H-bridge or a broken autonomous script right before competitions, Burr didn't tell them 'good luck.' He'd pull out his multimeter, debug their board, and stay up fixing it even when his own bot had a match in five hours.",
      quote: "He cared more about ISL taking home the delegation trophy than just winning his own bracket."
    },
    {
      title: "The Sacrifices Behind PSIFI",
      badge: "THE WINNING EDGE",
      content: "The PSIFI Best Delegation trophy didn't happen by accident. It was built during endless late night workshops, emergency chassis redesigns, and making sure every single ISL team was ready to compete.",
      quote: "The delegation trophy exists because of the sacrifices made in those late night workshops."
    }
  ];

  return (
    <section id="late-nights" className="relative py-28 bg-burgundy-darker overflow-hidden">
      {/* Late night aesthetic atmosphere glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-burgundy-light/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold/40 bg-burgundy/90 text-gold text-xs font-mono tracking-widest uppercase shadow-gold-glow">
            <Heart className="w-3.5 h-3.5 text-rose" />
            <span>THE SACRIFICES BEHIND THE VICTORY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            THE LATE NIGHT WORKSHOPS
          </h2>

          <p className="font-sans text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            The main reason ISL won PSIFI — endless late night workshops, fixing other teams' bots, and putting the society first.
          </p>
        </div>

        {/* Storytelling Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl glass-card border-2 border-gold/50 shadow-2xl p-6 sm:p-12 relative overflow-hidden"
        >
          {/* Background Clock Graphic */}
          <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none text-gold">
            <Clock className="w-96 h-96" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Interactive Nav Column */}
            <div className="lg:col-span-4 space-y-3">
              <div className="p-4 rounded-2xl bg-burgundy-dark/80 border border-gold/30 mb-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-mono font-bold text-sm text-center">
                  LAB
                </div>
                <div>
                  <div className="text-xs font-mono text-rose uppercase tracking-wider">Workshop Mode</div>
                  <div className="text-sm font-serif font-bold text-cream">Late Night Sessions</div>
                </div>
              </div>

              <div className="space-y-2">
                {storyHighlights.map((tab, index) => (
                  <button
                    key={tab.title}
                    onClick={() => setActiveStoryTab(index)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 border flex items-center justify-between ${
                      activeStoryTab === index
                        ? 'bg-gold/20 border-gold text-gold-bright shadow-gold-glow'
                        : 'bg-burgundy/40 border-gold/20 text-cream/70 hover:bg-burgundy/80 hover:text-cream'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono tracking-widest text-rose uppercase">{tab.badge}</div>
                      <div className="font-serif font-semibold text-sm">{tab.title}</div>
                    </div>
                    <Wrench className={`w-4 h-4 ${activeStoryTab === index ? 'text-gold' : 'text-cream/40'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Story Detail Column */}
            <div className="lg:col-span-8 space-y-6 bg-burgundy-dark/60 p-6 sm:p-8 rounded-2xl border border-gold/30">
              
              <div className="flex items-center gap-3">
                <Quote className="w-8 h-8 text-gold flex-shrink-0" />
                <span className="px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-mono tracking-wider font-bold">
                  {storyHighlights[activeStoryTab].badge}
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-gold-bright">
                {storyHighlights[activeStoryTab].title}
              </h3>

              <p className="font-sans text-cream/90 text-base sm:text-lg leading-relaxed font-light">
                {storyHighlights[activeStoryTab].content}
              </p>

              {/* Quote Block */}
              <div className="p-5 rounded-xl bg-burgundy/80 border-l-4 border-gold shadow-md">
                <p className="font-serif italic text-cream text-sm sm:text-base font-semibold">
                  "{storyHighlights[activeStoryTab].quote}"
                </p>
                <div className="mt-2 text-xs font-mono text-rose text-right">— BURRRAFFAY</div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
