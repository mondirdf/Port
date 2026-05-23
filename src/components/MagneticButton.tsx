import { useMagnetic } from '../hooks/useMagnetic';
export default function MagneticButton({label}:{label:string}){const r=useMagnetic();return <button ref={r} className="rounded-full border border-white/20 px-6 py-3 text-sm">{label}</button>}
