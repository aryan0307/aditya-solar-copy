import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxImage from '../components/ParallaxImage';
import RevealText from '../components/RevealText';
import MagneticButton from '../components/MagneticButton';
import { smoothScrollTo } from '../utils/helpers';
import heroImage from '../assets/products/image_001_cropped.png';

gsap.registerPlugin(ScrollTrigger);

const HeroScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animation
      gsap.fromTo('.hero-title',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo('.hero-cta',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.2 }
      );

      // Scroll indicator animation
      gsap.fromTo('.scroll-indicator',
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: 'power2.out', delay: 2 }
      );

      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleExplore = () => {
    smoothScrollTo('about');
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ParallaxImage
          src={heroImage}
          alt="Premium architectural materials"
          className="w-full h-full"
          speed={0.3}
          scale={1.1}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <RevealText className="hero-title mb-6">
          <h1 className="font-playfair text-display text-primary-text leading-tight">
            Premium Architectural<br />Materials
          </h1>
        </RevealText>

        <RevealText className="hero-subtitle mb-12" delay={0.3}>
          <p className="font-space text-lg md:text-xl text-primary-text/80 tracking-wider uppercase">
            Transform Your Space with Excellence
          </p>
        </RevealText>

        <div className="hero-cta">
          <MagneticButton onClick={handleExplore}>
            Explore Collection
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-primary-text/60 text-xs font-space tracking-widest uppercase">
          Scroll
        </span>
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroScene;
