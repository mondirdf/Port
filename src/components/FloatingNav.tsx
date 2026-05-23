export default function FloatingNav() {
  const items = ['about', 'projects', 'systems', 'contact'];

  return (
    <nav className="fixed left-1/2 top-5 z-40 -translate-x-1/2 rounded-full border border-white/15 bg-black/35 px-2 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="flex items-center gap-1 md:gap-2">
        {items.map((item) => (
          <a key={item} href={`#${item}`} className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/10 hover:text-white md:text-xs">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
