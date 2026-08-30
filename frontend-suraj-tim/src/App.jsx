import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroScene from './scenes/HeroScene';
import BrandPhilosophyScene from './scenes/BrandPhilosophyScene';
import WoodStoryScene from './scenes/WoodStoryScene';
import MaterialsExperienceScene from './scenes/MaterialsExperienceScene';
import TrustedBrandsScene from './scenes/TrustedBrandsScene';
import ArchitecturalLifestyleScene from './scenes/ArchitecturalLifestyleScene';
import LuxuryWindowsScene from './scenes/LuxuryWindowsScene';
import PremiumKitchensScene from './scenes/PremiumKitchensScene';
import GalleryScene from './scenes/GalleryScene';
import ShowroomScene from './scenes/ShowroomScene';
import ContactScene from './scenes/ContactScene';
import { initLenis } from './utils/lenis';
import { BASENAME, SITE_URL } from './config';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = initLenis();

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Suraj Timber & Plywood Co. | Premium Architectural Materials</title>
        <meta name="description" content="Authorized dealer of premium plywood, laminates, veneers, and architectural materials in Kota, Rajasthan. Transform your space with excellence." />
        <meta name="keywords" content="plywood, laminates, veneers, architectural materials, Kota, Rajasthan, CenturyPly, Merino, premium interiors" />
        <meta name="author" content="Suraj Timber & Plywood Co." />
        <meta name="theme-color" content="#B68D40" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="en" />
        <link rel="canonical" href={SITE_URL + BASENAME} />

        <meta property="og:title" content="Suraj Timber & Plywood Co. | Premium Architectural Materials" />
        <meta property="og:description" content="Transform your space with premium architectural materials" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL + BASENAME} />
        <meta property="og:image" content={`${SITE_URL}${BASENAME}/og-image.png`} />
        <meta property="og:site_name" content="Suraj Timber & Plywood Co." />
        <meta property="og:locale" content="en_IN" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Suraj Timber & Plywood Co. | Premium Architectural Materials" />
        <meta name="twitter:description" content="Transform your space with premium architectural materials" />
        <meta name="twitter:image" content={`${SITE_URL}${BASENAME}/og-image.png`} />
      </Helmet>

      {isLoading && <Loader onComplete={handleLoaderComplete} />}

      {!isLoading && (
        <>
          <Navbar />
          
          <main>
            <HeroScene />
            <BrandPhilosophyScene />
            <WoodStoryScene />
            <MaterialsExperienceScene />
            <TrustedBrandsScene />
            <ArchitecturalLifestyleScene />
            <LuxuryWindowsScene />
            <PremiumKitchensScene />
            <GalleryScene />
            <ShowroomScene />
            <ContactScene />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
