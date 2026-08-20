import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Universal MP3 audio element for cross-device support (iOS Safari, Android, Desktop)
    const audio = new Audio('/sound.mp3');
    audio.loop = false; // MUST PLAY ONLY ONCE PER CLICK
    audio.volume = 1.0;

    audio.onended = () => {
      setIsPlaying(false);
    };

    audio.onerror = () => {
      // Fallback to sound.ogg if MP3 fails on legacy browsers
      if (audioRef.current && audioRef.current.src.endsWith('.mp3')) {
        audioRef.current.src = '/sound.ogg';
      }
    };

    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = (e) => {
    e.preventDefault();
    const audio = audioRef.current;
    if (!audio) return;

    if (!isPlaying) {
      audio.currentTime = 0; // Rewind to start for a fresh play once per click
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn("Audio playback error:", err);
            setIsPlaying(false);
          });
      }
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Stop Music" : "Play Music (Plays Once)"}
      className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-burgundy/80 hover:bg-burgundy-light text-gold text-xs font-medium transition-all shadow-gold-glow backdrop-blur-md group cursor-pointer"
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
