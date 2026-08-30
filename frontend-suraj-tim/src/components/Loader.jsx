import { useEffect, useState } from 'react';
import gsap from 'gsap';
import logo from '../assets/logo.png';
import { companyInfo } from '../data/content';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({
      onComplete
    });

    // Logo reveal
    timeline.fromTo('.loader-logo',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Text reveal
    timeline.fromTo('.loader-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // Curtain lift
    timeline.to('.loader-curtain',
      { yPercent: -100, duration: 1.2, ease: 'power3.inOut' },
      '+=0.5'
    );

    return () => {
      clearInterval(progressInterval);
      timeline.kill();
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-background">
      <div className="loader-curtain absolute inset-0 bg-background flex flex-col items-center justify-center">
        <div className="loader-logo text-center mb-8">
          <img src={logo} alt="Suraj Timber" className="h-20 md:h-28 object-contain mx-auto mb-4" />
          <p className="font-space text-sm md:text-base text-primary-text/60 tracking-[0.3em] uppercase">
            {companyInfo.tagline}
          </p>
        </div>

        <div className="loader-text w-full max-w-md px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary-text/60 text-sm font-space">Loading</span>
            <span className="text-accent text-sm font-space">{progress}%</span>
          </div>
          <div className="h-px bg-primary-text/20 overflow-hidden">
            <div 
              className="h-full bg-accent transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
