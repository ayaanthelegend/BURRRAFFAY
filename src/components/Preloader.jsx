import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES_TO_PRELOAD = [
  '/images/raffay_portrait.webp',
  '/images/psifi_team.webp',
  '/images/rizz_course.webp',
  '/images/burr_burgers.webp'
];

const AUDIO_TO_PRELOAD = '/sound.mp3';

const MIN_DISPLAY_TIME = 1400; // 1.4s minimum for smooth cinematic experience
const MAX_LOADING_TIMEOUT = 10000; // 10s maximum timeout safeguard

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [statusText, setStatusText] = useState('INITIALIZING ARCHIVES...');

  useEffect(() => {
    let mounted = true;
    const startTime = Date.now();

    let completedCount = 0;
    const totalAssets = IMAGES_TO_PRELOAD.length + 2; // +1 for font API, +1 for audio
    let realLoaded = false;
    let currentDisplayedProgress = 0;

    const updateCompletedCount = () => {
      completedCount++;
    };

    // 1. Preload image file with decode API for zero-lag mobile rendering
    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        const onFinish = () => {
          if ('decode' in img && typeof img.decode === 'function') {
            img.decode()
              .then(() => resolve(true))
              .catch(() => resolve(true));
          } else {
            resolve(true);
          }
        };

        if (img.complete && img.naturalWidth !== 0) {
          onFinish();
        } else {
          img.onload = onFinish;
          img.onerror = () => resolve(false);
        }
      });
    };

    // 2. Preload web fonts via Font Loading API
    const preloadFonts = () => {
      return new Promise((resolve) => {
        if (document.fonts && typeof document.fonts.ready !== 'undefined') {
          document.fonts.ready
            .then(() => resolve(true))
            .catch(() => resolve(false));
        } else {
          resolve(true);
        }
      });
    };

    // 3. Preload audio asset
    const preloadAudio = (src) => {
      return new Promise((resolve) => {
        const audio = new Audio();
        audio.preload = 'auto';
        audio.src = src;

        let doneCalled = false;
        const onDone = () => {
          if (!doneCalled) {
            doneCalled = true;
            resolve(true);
          }
        };

        audio.oncanplaythrough = onDone;
        audio.onload = onDone;
        audio.onerror = onDone;

        // Fallback for audio on restricted mobile networks
        setTimeout(onDone, 2000);
      });
    };

    // Execute asset preloading concurrently
    const imagePromises = IMAGES_TO_PRELOAD.map((src) =>
      preloadImage(src).then((res) => {
        updateCompletedCount();
        return res;
      })
    );

    const fontPromise = preloadFonts().then((res) => {
      updateCompletedCount();
      return res;
    });

    const audioPromise = preloadAudio(AUDIO_TO_PRELOAD).then((res) => {
      updateCompletedCount();
      return res;
    });

    // Real completion promise: Wait for all real assets to resolve
    Promise.all([...imagePromises, fontPromise, audioPromise]).then(() => {
      realLoaded = true;
    });

    // Maximum timeout safety catch (so user is never stuck if offline/throttled)
    const safetyTimeout = setTimeout(() => {
      realLoaded = true;
    }, MAX_LOADING_TIMEOUT);

    // Smooth progress tick (runs every ~25ms)
    const tickInterval = setInterval(() => {
      if (!mounted) return;

      const elapsedTime = Date.now() - startTime;
      const realPercent = Math.round((completedCount / totalAssets) * 100);

      let targetPercent = 0;
      if (!realLoaded) {
        // Hold progress below 90% while real loading is still underway
        targetPercent = Math.min(90, Math.max(5, realPercent));
      } else {
        // Real loading is finished. Now respect the minDisplayTime threshold
        if (elapsedTime >= MIN_DISPLAY_TIME) {
          targetPercent = 100;
        } else {
          targetPercent = 95;
        }
      }

      if (currentDisplayedProgress < targetPercent) {
        const diff = targetPercent - currentDisplayedProgress;
        const step = Math.max(1, Math.ceil(diff * 0.18));
        currentDisplayedProgress = Math.min(targetPercent, currentDisplayedProgress + step);
        setProgress(currentDisplayedProgress);
      }

      // Update dynamic status label based on current progress
      if (currentDisplayedProgress < 25) {
        setStatusText('INITIALIZING ARCHIVES...');
      } else if (currentDisplayedProgress < 60) {
        setStatusText('PRELOADING HIGH-RES MEDIA...');
      } else if (currentDisplayedProgress < 85) {
        setStatusText('DECODING GRAPHICS & FONTS...');
      } else if (currentDisplayedProgress < 100) {
        setStatusText('FINALIZING CINEMATIC EXPERIENCE...');
      } else {
        setStatusText('SYSTEM READY • REVEALING ARCHIVES');
      }

      // Complete preloader once real load is complete, min time elapsed, and 100% displayed
      if (realLoaded && elapsedTime >= MIN_DISPLAY_TIME && currentDisplayedProgress >= 100) {
        clearInterval(tickInterval);
        clearTimeout(safetyTimeout);

        setTimeout(() => {
          if (!mounted) return;
          setIsFinished(true);
          setTimeout(() => {
            if (onComplete && mounted) onComplete();
          }, 600); // fade out duration
        }, 200);
      }
    }, 25);

    return () => {
      mounted = false;
      clearInterval(tickInterval);
      clearTimeout(safetyTimeout);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-burgundy-darker text-cream overflow-hidden select-none"
        >
          {/* Ambient Bokeh Glow Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-glow/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-rose-glow/20 rounded-full blur-[100px] pointer-events-none" />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 hero-vignette pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6 space-y-8 text-center">
            
            {/* Dynamic Status Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-mono tracking-[0.3em] text-gold uppercase transition-all"
            >
              {statusText}
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
              <div className="relative w-full h-[4px] bg-burgundy-light/60 rounded-full overflow-hidden border border-gold/30 shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-gold via-bright to-gold shadow-gold-strong transition-all duration-75 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Counter percentage */}
              <div className="flex items-center justify-between text-xs font-mono text-cream/70">
                <span className="tracking-widest uppercase text-[10px]">LOADING EXPERIENCE</span>
                <span className="font-bold text-gold text-sm">{progress}%</span>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
