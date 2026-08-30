import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealText from '../components/RevealText';
import ParallaxImage from '../components/ParallaxImage';
import showroomImage from '../assets/office/showroom.png';

gsap.registerPlugin(ScrollTrigger);

const BrandPhilosophyScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.fromTo('.philosophy-text',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power2.out' }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="about"
      className="min-h-screen relative flex items-center py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="philosophy-text">
          <RevealText>
            <h2 className="font-playfair text-heading text-accent mb-6">
              Our Philosophy
            </h2>
          </RevealText>
          <p className="text-primary-text/80 text-lg leading-relaxed mb-6">
            At Suraj Timber & Plywood Co., we believe that every space deserves the finest materials. 
            As authorized dealers of India's leading brands, we bring you premium architectural materials 
            that transform ordinary spaces into extraordinary experiences.
          </p>
          <p className="text-muted-text text-base leading-relaxed">
            Located in Kota, Rajasthan, we have been serving architects, interior designers, and homeowners 
            with curated collections of plywood, laminates, veneers, and more. Our commitment to quality 
            and customer satisfaction has made us a trusted name in the industry.
          </p>
        </div>

        <div className="relative h-[600px]">
          <ParallaxImage
            src={showroomImage}
            alt="Our showroom"
            className="w-full h-full rounded-luxury-xl"
            speed={0.4}
            scale={1.05}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophyScene;
