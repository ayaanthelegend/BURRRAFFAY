import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio element with uploaded sound.ogg
    const audio = new Audio('/sound.ogg');
    audio.loop = false; // MUST NOT LOOP - plays only once

    audio.onended = () => {
      setIsPlaying(false);
    };

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.currentTime = 0; // Play from beginning
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Audio playback error:", err);
      });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Pause Sound" : "Play Sound (Plays Once)"}
      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-burgundy/80 hover:bg-burgundy-light text-gold text-xs font-medium transition-all shadow-gold-glow backdrop-blur-md group"
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-gold animate-pulse" />
          <span className="hidden sm:inline text-cream font-mono text-[11px]">Cinematic music</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4 text-rose/80 group-hover:text-gold transition-colors" />
          <span className="hidden sm:inline text-cream/80 group-hover:text-cream font-mono text-[11px]">Cinematic music</span>
        </>
      )}
    </button>
  );
}
