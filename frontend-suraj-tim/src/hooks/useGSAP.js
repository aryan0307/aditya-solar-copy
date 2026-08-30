import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGSAP = () => {
  const timelineRef = useRef(gsap.timeline());

  useEffect(() => {
    return () => {
      timelineRef.current.kill();
    };
  }, []);

  return { timeline: timelineRef.current };
};
