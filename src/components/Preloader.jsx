import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Assets to preload
    const imagesToPreload = [
      '/images/raffay_portrait.webp',
      '/images/psifi_team.webp',
      '/images/rizz_course.webp',
      '/images/burr_burgers.webp'
    ];

    let loadedCount = 0;
    const totalAssets = imagesToPreload.length + 1; // +1 for font/sound ready check

    const startTime = Date.now();
    const minDisplayTime = 1200; // 1.2s minimum for smooth cinematic experience

    const updateProgress = () => {
      loadedCount++;
      const targetPercent = Math.round((loadedCount / totalAssets) * 100);
      setProgress(prev => Math.max(prev, targetPercent));
    };

    // Preload image files
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = updateProgress;
      img.onerror = updateProgress;
    });

    // Check document font loading
    if (document.fonts) {
      document.fonts.ready.then(updateProgress).catch(updateProgress);
    } else {
      updateProgress();
    }

    // Smooth interval timer to tick progress smoothly from 0 to target
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          const next = prev + Math.floor(Math.random() * 8) + 2;
          return next > 100 ? 100 : next;
        }
        return 100;
      });
    }, 40);

    // Completion timeout checking minDisplayTime and 100% progress
    const checkCompletion = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= minDisplayTime) {
        setProgress(100);
        clearInterval(interval);
        clearInterval(checkCompletion);
        
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // fade duration
        }, 300);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(checkCompletion);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-burgundy-darker text-cream overflow-hidden select-none"
        >
          {/* Ambient Bokeh Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-glow/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-rose-glow/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 hero-vignette pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 space-y-8 text-center">
            
            {/* Top Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono tracking-[0.3em] text-gold uppercase"
            >
              PREPARING THE ARCHIVES...
            </motion.div>

            {/* Glowing Name Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-1"
            >
              <h1 className="font-display text-4xl sm:text-5xl font-black tracking-wider text-gold-gradient gold-glow-text uppercase animate-pulse-slow">
                BURRRAFFAY
              </h1>
              <div className="text-[11px] font-mono tracking-widest text-rose/80 uppercase">
                The Robotics Society • ISL
              </div>
            </motion.div>

            {/* Percentage Display & Progress Bar */}
            <div className="w-full space-y-4 pt-4">
              
              {/* Progress Bar Container */}
              <div className="relative w-full h-[3px] bg-burgundy-light/60 rounded-full overflow-hidden border border-gold/20 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold via-bright to-gold shadow-gold-strong"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>

              {/* Counter percentage */}
              <div className="flex items-center justify-between text-xs font-mono text-cream/70">
                <span className="tracking-widest uppercase">LOADING EXPERIENCE</span>
                <span className="font-bold text-gold text-sm">{progress}%</span>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
