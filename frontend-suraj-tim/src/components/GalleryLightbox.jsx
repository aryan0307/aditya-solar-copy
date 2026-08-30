import { useEffect } from 'react';
import gsap from 'gsap';

const GalleryLightbox = ({ image, onClose }) => {
  useEffect(() => {
    const lightbox = document.querySelector('.lightbox');
    
    gsap.fromTo(lightbox, 
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' }
    );

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      gsap.to(lightbox, {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.in'
      });
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-primary-text hover:text-accent transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="max-w-7xl max-h-[90vh] w-full flex items-center justify-center rounded-luxury-xl overflow-hidden">
        <img
          src={image}
          alt="Gallery image"
          className="max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </div>
  );
};

export default GalleryLightbox;
