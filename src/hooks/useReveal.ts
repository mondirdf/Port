import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!ref.current) return;

      gsap.from(ref.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      });
    }, ref);

    return () => {
      ctx.revert();
    };
  }, []);

  return ref;
};
