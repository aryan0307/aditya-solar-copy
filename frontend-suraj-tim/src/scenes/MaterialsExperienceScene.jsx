import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RevealText from '../components/RevealText';
import { categories } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const MaterialsExperienceScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.material-card',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
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
      id="products"
      className="min-h-screen py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <h2 className="font-playfair text-heading text-accent mb-4">
              Premium Materials
            </h2>
          </RevealText>
          <p className="text-muted-text font-space text-sm tracking-widest uppercase">
            Explore Our Collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(0, 8).map((category) => (
            <div
              key={category.id}
              className="material-card group p-6 border border-primary-text/10 hover:border-accent/50 transition-all duration-500 cursor-pointer rounded-luxury bg-surface"
            >
              <h3 className="font-playfair text-lg text-primary-text mb-2 group-hover:text-accent transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-text text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsExperienceScene;
