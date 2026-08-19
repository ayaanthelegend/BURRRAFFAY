import React, { useEffect } from 'react';
import { X, Sparkles, Shield } from 'lucide-react';

export default function LightboxModal({ isOpen, imageSrc, caption, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-burgundy-darker/95 backdrop-blur-xl animate-fadeIn">
      {/* Background click close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Main Modal Box */}
      <div className="relative z-10 max-w-4xl w-full rounded-3xl glass-card border-2 border-gold p-4 sm:p-6 shadow-gold-strong flex flex-col items-center space-y-4">
        
        {/* Header bar */}
        <div className="w-full flex items-center justify-between border-b border-gold/30 pb-3">
          <div className="flex items-center gap-2 text-gold">
            <Shield className="w-5 h-5 text-gold-bright" />
            <span className="font-serif font-bold text-sm text-cream tracking-wide">
              LEGACY ARCHIVE VISUAL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-gold/40 text-gold hover:bg-gold hover:text-burgundy-dark transition-all"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High Res Image */}
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-burgundy-darker border border-gold/40">
          <img
            src={imageSrc}
            alt={caption || 'Tribute Media'}
            className="max-h-[70vh] w-auto object-contain rounded-xl filter brightness-105"
          />
        </div>

        {/* Caption bar */}
        {caption && (
          <div className="text-center font-serif text-gold-light text-sm sm:text-base font-semibold tracking-wide">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
