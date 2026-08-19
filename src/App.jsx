import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LegacySection from './components/LegacySection';
import AwardsSection from './components/AwardsSection';
import LateNightsSection from './components/LateNightsSection';
import EntrepreneurSection from './components/EntrepreneurSection';
import ClosingSection from './components/ClosingSection';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    caption: ''
  });

  const handleOpenImage = (imageSrc, caption) => {
    setModalState({
      isOpen: true,
      imageSrc,
      caption
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'legacy', 'awards', 'late-nights', 'entrepreneur', 'closing'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-burgundy-darker text-cream selection:bg-gold selection:text-burgundy-dark font-sans overflow-x-hidden">
      {/* Dynamic Floating Particles & Glow Canvas */}
      <ParticleCanvas />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Page Sections */}
      <main className="relative z-10 space-y-0">
        <HeroSection onOpenImage={handleOpenImage} />
        <LegacySection />
        <AwardsSection onOpenImage={handleOpenImage} />
        <LateNightsSection />
        <EntrepreneurSection onOpenImage={handleOpenImage} />
        <ClosingSection />
      </main>

      {/* Image Lightbox Modal */}
      <LightboxModal
        isOpen={modalState.isOpen}
        imageSrc={modalState.imageSrc}
        caption={modalState.caption}
        onClose={handleCloseModal}
      />
    </div>
  );
}
