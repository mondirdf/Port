import type { FC } from 'react';

export const ProjectVisual: FC<{ accent: string }> = ({ accent }) => (
  <svg viewBox="0 0 600 320" className="h-48 w-full rounded-2xl">
    <defs>
      <linearGradient id="g" x1="0" x2="1"><stop stopColor={accent} /><stop offset="1" stopColor="#050508"/></linearGradient>
    </defs>
    <rect width="600" height="320" rx="24" fill="#0a0a14" />
    {Array.from({ length: 9 }).map((_, i) => <rect key={i} x={32 + i * 60} y={80 + (i % 3) * 20} width="34" height={150 - i * 8} fill="url(#g)" opacity="0.7" />)}
    <circle cx="500" cy="90" r="56" fill={accent} opacity="0.15" />
  </svg>
);
