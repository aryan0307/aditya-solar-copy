import { useState } from 'react';
import { brands } from '../data/brands';
import BrandModal from '../components/BrandModal';
import RevealText from '../components/RevealText';

const TrustedBrandsScene = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section
      id="brands"
      className="min-h-screen py-24 px-6 bg-background flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto mb-12">
        <RevealText>
          <h2 className="font-playfair text-heading text-accent mb-4 text-center">
            Trusted Brands
          </h2>
        </RevealText>
        <p className="text-muted-text font-space text-sm tracking-widest uppercase text-center">
          Authorized Dealer
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="p-8 bg-surface rounded-luxury-lg border border-accent/30 shadow-[0_0_20px_rgba(182,141,64,0.3)] hover:shadow-[0_0_30px_rgba(182,141,64,0.6)] transition-all duration-500 cursor-pointer flex flex-col items-center justify-center"
            onClick={() => setSelectedBrand(brand)}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-20 md:h-28 w-auto object-contain mb-4"
            />
            <h3 className="font-playfair text-lg text-primary-text">{brand.name}</h3>
            <p className="text-muted-text text-xs font-space tracking-wider uppercase">{brand.category}</p>
          </div>
        ))}
      </div>

      {selectedBrand && (
        <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
      )}
    </section>
  );
};

export default TrustedBrandsScene;
