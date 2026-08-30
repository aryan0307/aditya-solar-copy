import { useRef } from 'react';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const SceneWrapper = ({ children, className = '', id, pin = false, pinDuration = 1 }) => {
  const containerRef = useScrollTrigger({
    pin: pin ? true : false,
    start: 'top top',
    end: pin ? `+=${window.innerHeight * pinDuration}` : 'bottom bottom',
    scrub: 1
  });

  return (
    <section
      ref={containerRef}
      id={id}
      className={`min-h-screen relative ${className}`}
    >
      {children}
    </section>
  );
};

export default SceneWrapper;
