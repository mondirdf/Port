import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';
import GlassCard from '../components/GlassCard';
import TechPill from '../components/TechPill';
import { ProjectVisual } from '../assets/visuals';
export default function Projects(){return <section id="projects" className="px-6 py-24"><div className="mx-auto max-w-6xl"><SectionTitle title="Projects" sub="Flagship builds"/><div className="grid gap-6 md:grid-cols-2">{projects.map(p=><GlassCard key={p.name}><ProjectVisual accent={p.accent}/><div className="mt-4"><h3 className="font-display text-2xl">{p.name}</h3><p className="text-sm text-white/60">{p.subtitle}</p><div className="mt-2 text-xs text-white/50">{p.status} • {p.metrics}</div><div className="mt-3 flex flex-wrap gap-2">{p.stack.map(s=><TechPill key={s} label={s}/>)}</div></div></GlassCard>)}</div></div></section>}
