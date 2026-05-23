import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const layersRoot = root.querySelector<HTMLElement>('[data-parallax-layers]');

    const ctx = gsap.context(() => {
      if (layersRoot) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: '+=220%',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        const layers = [
          { layer: '1', yPercent: -36, opacity: 0.72 },
          { layer: '2', yPercent: -58, opacity: 0.88 },
          { layer: '3', yPercent: -86, opacity: 0.96 },
        ];

        tl.to('.hero-sky', { scale: 1.03, ease: 'none' }, 0)
          .to('.hero-fog', { yPercent: -30, opacity: 0.55, ease: 'none' }, 0.05);

        layers.forEach((layerObj, idx) => {
          tl.to(
            layersRoot.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
            {
              yPercent: layerObj.yPercent,
              opacity: layerObj.opacity,
              ease: 'none',
            },
            idx === 0 ? 0 : '<',
          );
        });
      }

      gsap.to('.hero-stars', {
        backgroundPosition: '0 320px',
        duration: 30,
        ease: 'none',
        repeat: -1,
      });

      gsap.to('.hero-fog', {
        xPercent: 2,
        yPercent: -2,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });

      gsap.fromTo(
        '.hero-title-line',
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.1, duration: 1.4, ease: 'power4.out', delay: 0.25 },
      );

      gsap.fromTo('.hero-support', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="hero-section relative isolate overflow-hidden">
      <div className="hero-sky absolute inset-0 -z-30" />
      <div className="hero-stars absolute inset-0 -z-20" />
      <div className="hero-fog absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-40 pt-28 md:pt-32">
        <div className="hero-title-wrap">
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">I BUILD</h1></div>
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">INTELLIGENT</h1></div>
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">SYSTEMS</h1></div>
          <p className="hero-support mt-6 max-w-2xl font-mono text-sm text-white/70 md:text-base">Automation-first products across AI tooling, dashboards, crypto intelligence, and behavioral architectures.</p>
        </div>
      </div>

      <div data-parallax-layers className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-20 h-[42vh] min-h-[260px]">
        <div data-parallax-layer="1" className="hero-cloud-layer hero-cloud-layer-back" aria-hidden="true" />
        <div data-parallax-layer="2" className="hero-cloud-layer hero-cloud-layer-mid" aria-hidden="true" />
        <div data-parallax-layer="3" className="hero-cloud-layer hero-cloud-layer-front" aria-hidden="true" />
      </div>
    </section>
  );
}
