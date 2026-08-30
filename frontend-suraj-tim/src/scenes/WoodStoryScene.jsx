import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealText from '../components/RevealText';

gsap.registerPlugin(ScrollTrigger);

const WoodStoryScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wood-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="font-playfair text-heading text-accent mb-4">
              Nature's Finest
            </h2>
          </RevealText>
          <p className="text-muted-text font-space text-sm tracking-widest uppercase">
            Curated for Excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Premium Plywood', desc: 'Durability meets elegance' },
            { title: 'Decorative Veneers', desc: 'Natural wood beauty' },
            { title: 'Solid Timber', desc: 'Timeless craftsmanship' }
          ].map((item, index) => (
            <div
              key={index}
              className="wood-card p-8 border border-primary-text/10 hover:border-accent/50 transition-colors duration-500 rounded-luxury bg-surface"
            >
              <h3 className="font-playfair text-2xl text-primary-text mb-3">{item.title}</h3>
              <p className="text-muted-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodStoryScene;
