import { useEffect } from 'react';
import gsap from 'gsap';

const BrandModal = ({ brand, onClose }) => {
  useEffect(() => {
    const modal = document.querySelector('.brand-modal');
    
    gsap.fromTo(modal, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
    );

    return () => {
      gsap.to(modal, {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        ease: 'power2.in'
      });
    };
  }, []);

  if (!brand) return null;

  return (
    <div className="brand-modal fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-background max-w-2xl w-full p-8 md:p-12 relative rounded-luxury-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary-text hover:text-accent transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-playfair text-3xl md:text-4xl text-accent mb-4">{brand.name}</h3>
            <p className="text-primary-text/80 text-lg mb-6">{brand.description}</p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-accent/30 text-accent text-sm uppercase tracking-wider rounded-luxury">
                {brand.category}
              </span>
              {brand.website && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-accent text-background text-sm uppercase tracking-wider hover:bg-primary-text transition-colors rounded-luxury"
                >
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
