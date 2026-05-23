import type { PropsWithChildren } from 'react';
export default function GlassCard({children}:{children:PropsWithChildren['children']}){return <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">{children}</div>}
