import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AuraBackground } from './components/AuraBackground';
import { SlideNav } from './components/SlideNav';
import { ImageModal } from './components/ImageModal';
import { Slide1Intro } from './components/slides/Slide1Intro';
import { Slide2About } from './components/slides/Slide2About';
import { Slide3Experience } from './components/slides/Slide3Experience';
import { Slide4Services } from './components/slides/Slide4Services';
import { Slide5Projects } from './components/slides/Slide5Projects';
import { Slide6Brands } from './components/slides/Slide6Brands';
import { Slide7WhyMe } from './components/slides/Slide7WhyMe';
import { Slide8Contact } from './components/slides/Slide8Contact';
import { ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const totalSlides = 8;
  const containerRef = useRef<HTMLDivElement>(null);

  // Modal Lightbox state
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    image: string;
    title: string;
    category?: string;
    client?: string;
    description?: string;
  }>({
    isOpen: false,
    image: '',
    title: '',
  });

  // Smooth slide jump handler with JS snap disable to eliminate scroll stutter
  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const targetY = clampedIndex * window.innerHeight;

    containerRef.current.style.scrollSnapType = 'none';
    containerRef.current.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
    setActiveSlide(clampedIndex);

    setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.style.scrollSnapType = 'y mandatory';
      }
    }, 600);
  }, [totalSlides]);

  const handleNextSlide = () => scrollToSlide(activeSlide + 1);
  const handlePrevSlide = () => scrollToSlide(activeSlide - 1);

  // Monitor scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = container.scrollTop;
          const slideHeight = window.innerHeight;
          const current = Math.round(scrollTop / slideHeight);
          setActiveSlide(Math.max(0, Math.min(current, totalSlides - 1)));
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [totalSlides]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalData.isOpen) {
        if (e.key === 'Escape') {
          setModalData((prev) => ({ ...prev, isOpen: false }));
        }
        return;
      }

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          handleNextSlide();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          handlePrevSlide();
          break;
        case 'Home':
          e.preventDefault();
          scrollToSlide(0);
          break;
        case 'End':
          e.preventDefault();
          scrollToSlide(totalSlides - 1);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, modalData.isOpen, scrollToSlide]);

  // Project item preview
  const handleSelectProject = (project: ProjectItem) => {
    setModalData({
      isOpen: true,
      image: project.image,
      title: project.title,
      category: project.category,
      client: project.client,
      description: project.description,
    });
  };

  return (
    <main
      id="presentation-viewport"
      className="w-screen h-screen bg-[#030305] text-white overflow-hidden relative select-none font-sans"
    >
      {/* Dynamic Animated Glowing Blue Aura Background */}
      <AuraBackground activeSlide={activeSlide} />

      {/* Fullscreen Snap Container */}
      <div
        ref={containerRef}
        id="fullscreen-slides-viewport"
        className="slides-container min-h-[100dvh] h-full w-screen overflow-y-scroll overflow-x-hidden no-scrollbar relative z-10"
      >
        {/* SLIDE 1: INTRO COVER */}
        <Slide1Intro onExplore={handleNextSlide} activeSlide={activeSlide} />

        {/* SLIDE 2: ABOUT & VALUE PROPOSITION */}
        <Slide2About activeSlide={activeSlide} />

        {/* SLIDE 3: CREDENTIALS & EXPERIENCE */}
        <Slide3Experience activeSlide={activeSlide} isActive={activeSlide === 2} />

        {/* SLIDE 4: SERVICES & CAPABILITIES */}
        <Slide4Services activeSlide={activeSlide} />

        {/* SLIDE 5: CAMPAIGN WORK SHOWCASE */}
        <Slide5Projects onSelectProject={handleSelectProject} activeSlide={activeSlide} />

        {/* SLIDE 6: VERIFIED BRANDS & RETAINERS */}
        <Slide6Brands activeSlide={activeSlide} />

        {/* SLIDE 7: THE ADVANTAGE */}
        <Slide7WhyMe activeSlide={activeSlide} />

        {/* SLIDE 8: FINAL CONTACT & INQUIRIES */}
        <Slide8Contact onRestart={() => scrollToSlide(0)} activeSlide={activeSlide} />
      </div>

      {/* Slide Deck Side Controller */}
      <SlideNav
        currentSlide={activeSlide}
        totalSlides={totalSlides}
        onSelectSlide={scrollToSlide}
        onPrev={handlePrevSlide}
        onNext={handleNextSlide}
      />

      {/* Image Detail Lightbox Modal */}
      <ImageModal
        isOpen={modalData.isOpen}
        onClose={() => setModalData((prev) => ({ ...prev, isOpen: false }))}
        image={modalData.image}
        title={modalData.title}
        category={modalData.category}
        client={modalData.client}
        description={modalData.description}
      />
    </main>
  );
}
