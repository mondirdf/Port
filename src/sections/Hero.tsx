import { useParallax } from '../hooks/useParallax';
import MagneticButton from '../components/MagneticButton';
import AnimatedGrid from '../components/AnimatedGrid';
export default function Hero(){const p=useParallax(120);return <section className="relative min-h-screen px-6 pt-32"><AnimatedGrid/><div ref={p} className="mx-auto max-w-6xl"><p className="mb-3 font-mono text-sm text-emerald-300">DF / SYSTEMS BUILDER</p><h1 className="font-display text-6xl leading-[0.95] md:text-8xl">I Build<br/>Intelligent Systems</h1><p className="mt-6 max-w-xl text-white/70">Automation-first products across AI tooling, dashboards, crypto intelligence, and behavioral architectures.</p><div className="mt-10"><MagneticButton label="Enter Projects"/></div></div></section>}
