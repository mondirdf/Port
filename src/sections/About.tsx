import SectionTitle from '../components/SectionTitle';
import { useReveal } from '../hooks/useReveal';
export default function About(){const r=useReveal();return <section id="about" className="px-6 py-24"><div ref={r} className="mx-auto max-w-6xl"><SectionTitle title="About" sub="03"/><p className="max-w-3xl text-white/70">Df engineers focused execution systems: from compounding study loops to AI decision dashboards, every product is designed as a measurable flywheel.</p></div></section>}
