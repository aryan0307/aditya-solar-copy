import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const useScrollTrigger = (config) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    if (!triggerRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: triggerRef.current,
      ...config
    });

    return () => {
      trigger.kill();
    };
  }, [config]);

  return triggerRef;
};
