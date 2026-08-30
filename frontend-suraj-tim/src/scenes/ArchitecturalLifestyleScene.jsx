import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxImage from '../components/ParallaxImage';
import RevealText from '../components/RevealText';
import officeImage from '../assets/office/office.png';

gsap.registerPlugin(ScrollTrigger);

const ArchitecturalLifestyleScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.lifestyle-overlay',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      <div className="absolute inset-0">
        <ParallaxImage
          src={officeImage}
          alt="Architectural lifestyle"
          className="w-full h-full"
          speed={0.2}
          scale={1.15}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="lifestyle-overlay relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <RevealText>
            <h2 className="font-playfair text-display text-primary-text mb-6">
              Where Luxury Meets Functionality
            </h2>
          </RevealText>
          <p className="text-primary-text/80 text-xl md:text-2xl font-light leading-relaxed">
            Premium materials that transform spaces into experiences of elegance and comfort
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalLifestyleScene;
