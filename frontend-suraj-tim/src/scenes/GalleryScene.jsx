import { useState } from 'react';
import { products } from '../data/products';
import ParallaxImage from '../components/ParallaxImage';
import GalleryLightbox from '../components/GalleryLightbox';
import RevealText from '../components/RevealText';

const GalleryScene = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = products.slice(0, 12);

  return (
    <section
      id="gallery"
      className="min-h-screen py-24 px-6 bg-background"
    >
      <div className="max-w-7xl mx-auto mb-16">
        <RevealText>
          <h2 className="font-playfair text-heading text-accent mb-4 text-center">
            Gallery
          </h2>
        </RevealText>
        <p className="text-muted-text font-space text-sm tracking-widest uppercase text-center">
          Our Collection
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((product, index) => (
            <div
              key={product.id}
              className={`group relative overflow-hidden rounded-luxury cursor-pointer ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(product.image)}
              style={{ minHeight: index === 0 ? '400px' : '200px' }}
            >
              <ParallaxImage
                src={product.image}
                alt={product.name}
                className="w-full h-full"
                speed={0.2}
                scale={1.1}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-12 h-12 text-primary-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <GalleryLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </section>
  );
};

export default GalleryScene;
