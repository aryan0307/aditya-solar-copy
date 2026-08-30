import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RevealText = ({ children, className = '', delay = 0, duration = 1, stagger = 0.05 }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const text = textRef.current;
    const chars = text.textContent.split('');
    
    text.innerHTML = chars.map(char => 
      `<span class="inline-block" style="opacity: 0; transform: translateY(100%);">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    const spans = text.querySelectorAll('span');

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [delay, duration, stagger]);

  return (
    <div ref={containerRef} className={className}>
      <span ref={textRef} className="block">
        {children}
      </span>
    </div>
  );
};

export default RevealText;
