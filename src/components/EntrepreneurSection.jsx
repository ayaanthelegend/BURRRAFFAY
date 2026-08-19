import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame, Maximize2 } from 'lucide-react';

export default function EntrepreneurSection({ onOpenImage }) {
  
  const ventures = [
    {
      title: "Rizz Course",
      tagline: "Mastering the Art of Charisma",
      image: "/images/rizz_course.webp",
      alt: "Rizz Course Poster",
      type: "BRAND VENTURE",
      badgeColor: "bg-rose/20 text-rose border-rose/40",
      description: "Beyond building combat robots, Burr launched the legendary Rizz Course. Part inside joke, part actual masterclass on how to walk into a room with confidence and talk to people without sounding like a socially awkward programmer.",
      highlights: [
        "Aura & Confidence",
        "Public Speaking Under Pressure",
        "How Not to Sound Like an Engineer"
      ]
    },
    {
      title: "Burr's Burgers",
      tagline: "Smashed Gourmet Burgers",
      image: "/images/burr_burgers.webp",
      alt: "Burr's Burgers Poster",
      type: "CULINARY VENTURE",
      badgeColor: "bg-gold/20 text-gold border-gold/40",
      description: "When he wasn't in the lab, Burr was turning up the heat on the grill. Burr's Burgers served up double smashed patties that practically fueled half the late-night robotics sessions before PSIFI.",
      highlights: [
        "Double Smashed Beef Patties",
        "Secret Empire Sauce",
        "Primary Fuel for 12 AM Build Marathons"
      ]
    }
  ];

  return (
    <section id="entrepreneur" className="relative py-28 bg-burgundy-darker border-t border-gold/20 overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-glow/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-rose/40 bg-burgundy/90 text-rose text-xs font-mono tracking-widest uppercase shadow-rose-glow">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIDE PROJECTS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gold-gradient tracking-tight">
            BEYOND THE LAB
          </h2>

          <p className="font-sans text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            When he wasn't debugging microcontrollers or yelling about motor drivers, Burr ran a couple of side ventures.
          </p>
        </div>

        {/* Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {ventures.map((venture, idx) => (
            <motion.div
              key={venture.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              className="rounded-3xl glass-card border border-gold/40 overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div 
                className="relative h-[380px] sm:h-[440px] overflow-hidden cursor-pointer bg-burgundy-dark"
                onClick={() => onOpenImage(venture.image, `${venture.title} — ${venture.tagline}`)}
              >
                <img
                  src={venture.image}
                  alt={venture.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-darker via-transparent to-transparent opacity-85" />

                {/* Inspect Button */}
                <div className="absolute top-4 right-4 bg-burgundy-darker/80 border border-gold/50 p-2.5 rounded-full text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${venture.badgeColor}`}>
                    {venture.type}
                  </span>
                </div>

                {/* Image Overlay Caption */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display font-extrabold text-2xl text-gold-bright">
                    {venture.title}
                  </div>
                  <div className="font-serif italic text-sm text-cream/90">
                    "{venture.tagline}"
                  </div>
                </div>
              </div>

              {/* Bottom Content Body */}
              <div className="p-6 sm:p-8 space-y-4 bg-burgundy/60 flex-grow flex flex-col justify-between">
                <p className="font-sans text-cream/80 text-sm leading-relaxed font-light">
                  {venture.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-gold/15">
                  <div className="text-xs font-mono text-gold uppercase tracking-wider font-semibold">
                    Highlights:
                  </div>
                  <ul className="space-y-1 text-xs font-sans text-cream/70">
                    {venture.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Flame className="w-3.5 h-3.5 text-rose flex-shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
