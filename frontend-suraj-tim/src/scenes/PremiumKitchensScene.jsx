import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ParallaxImage from '../components/ParallaxImage';
import RevealText from '../components/RevealText';
import kitchenImage from '../assets/products/image_003_cropped.png';

gsap.registerPlugin(ScrollTrigger);

const PremiumKitchensScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.kitchen-image',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%'
          }
        }
      );

      gsap.fromTo('.kitchen-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
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
          <div className="kitchen-content order-2 md:order-1">
            <RevealText>
              <h2 className="font-playfair text-heading text-accent mb-6">
                Modular Kitchens
              </h2>
            </RevealText>
            <p className="text-primary-text/80 text-lg mb-8 leading-relaxed">
              Complete kitchen solutions that blend functionality with sophisticated design. 
              From contemporary to classic styles, we create kitchens that inspire culinary creativity.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Custom Designs', value: '100%' },
                { label: 'Premium Materials', value: 'A+' },
                { label: 'Expert Installation', value: '✓' },
                { label: 'Warranty', value: '5 Years' }
              ].map((item, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <div className="text-muted-text text-sm font-space uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-primary-text text-xl font-playfair">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="kitchen-image order-1 md:order-2 relative h-[500px]">
            <ParallaxImage
              src={kitchenImage}
              alt="Premium modular kitchen"
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

export default PremiumKitchensScene;
