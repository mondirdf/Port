import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';

const cloudPaths = [
  'M0,110 C120,60 230,140 350,90 C480,38 590,132 730,88 C860,46 990,130 1110,76 C1240,24 1355,120 1440,92 L1440,320 L0,320 Z',
  'M0,130 C110,84 220,166 355,122 C510,74 640,176 790,128 C950,78 1070,170 1220,120 C1315,88 1385,138 1440,128 L1440,320 L0,320 Z',
  'M0,158 C130,126 248,198 392,168 C540,138 650,222 822,172 C986,126 1146,198 1298,154 C1366,134 1412,154 1440,162 L1440,320 L0,320 Z',
];

export default function Hero() {
  const rootRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: '+=170%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to('.hero-sky', { yPercent: -8, scale: 1.08, ease: 'none' }, 0)
        .to('.hero-fog', { yPercent: -20, opacity: 0.9, ease: 'none' }, 0)
        .to('.hero-title-wrap', { yPercent: -14, opacity: 0.4, ease: 'none' }, 0)
        .to('.hero-cloud-layer-back', { yPercent: -28, opacity: 0.75, ease: 'none' }, 0)
        .to('.hero-cloud-layer-mid', { yPercent: -40, opacity: 0.95, ease: 'none' }, 0)
        .to('.hero-cloud-layer-front', { yPercent: -58, ease: 'none' }, 0);

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
          <p className="hero-support mb-5 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/80 md:text-xs">DF / SYSTEMS BUILDER</p>
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">I BUILD</h1></div>
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">INTELLIGENT</h1></div>
          <div className="overflow-hidden"><h1 className="hero-title-line hero-title">SYSTEMS</h1></div>
          <p className="hero-support mt-6 max-w-xl font-mono text-xs text-white/55 md:text-sm">Automation-first products across AI tooling, dashboards, crypto intelligence, and behavioral architectures.</p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-[-2px] z-20 h-[36vh] min-h-[220px]">
        <svg className="hero-cloud-layer hero-cloud-layer-back" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cloud-back" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(187, 208, 255, 0.44)" />
              <stop offset="100%" stopColor="rgba(14, 16, 24, 0.85)" />
            </linearGradient>
          </defs>
          <path d={cloudPaths[0]} fill="url(#cloud-back)" />
        </svg>
        <svg className="hero-cloud-layer hero-cloud-layer-mid" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cloud-mid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(230, 237, 255, 0.45)" />
              <stop offset="100%" stopColor="rgba(15, 17, 25, 0.9)" />
            </linearGradient>
          </defs>
          <path d={cloudPaths[1]} fill="url(#cloud-mid)" />
        </svg>
        <svg className="hero-cloud-layer hero-cloud-layer-front" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="cloud-front" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(245, 248, 255, 0.7)" />
              <stop offset="100%" stopColor="rgba(10, 11, 18, 0.96)" />
            </linearGradient>
          </defs>
          <path d={cloudPaths[2]} fill="url(#cloud-front)" />
        </svg>
      </div>
    </section>
  );
}
