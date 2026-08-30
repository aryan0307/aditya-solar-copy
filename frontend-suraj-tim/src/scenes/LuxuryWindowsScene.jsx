import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxImage from '../components/ParallaxImage';
import RevealText from '../components/RevealText';
import windowsImage from '../assets/products/image_002_cropped.png';

gsap.registerPlugin(ScrollTrigger);

const LuxuryWindowsScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.window-feature',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%'
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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <RevealText>
              <h2 className="font-playfair text-heading text-accent mb-6">
                Eternia Windows
              </h2>
            </RevealText>
            <p className="text-primary-text/80 text-lg mb-8 leading-relaxed">
              Premium aluminium windows that combine durability with elegant design. 
              Engineered for performance and crafted for aesthetics.
            </p>

            <div className="space-y-4">
              {[
                'Weather-resistant construction',
                'Superior thermal insulation',
                'Sleek modern designs',
                'Custom sizing available'
              ].map((feature, index) => (
                <div key={index} className="window-feature flex items-center gap-4">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-muted-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px]">
            <ParallaxImage
              src={windowsImage}
              alt="Eternia windows"
              className="w-full h-full rounded-luxury-xl"
              speed={0.3}
              scale={1.05}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryWindowsScene;
