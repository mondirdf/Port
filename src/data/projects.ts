export type Project = { name: string; subtitle: string; status: string; metrics: string; stack: string[]; accent: string; };
export const projects: Project[] = [
  { name: 'Check Bac', subtitle: 'BAC progress intelligence platform', status: 'Live', metrics: '+42% plan completion', stack: ['React', 'TS', 'Analytics'], accent: '#6C63FF' },
  { name: 'Dasho', subtitle: 'AI crypto decision intelligence dashboard', status: 'Beta', metrics: '1.2M market signals/day', stack: ['AI', 'Python', 'WebSockets'], accent: '#00F5A0' },
  { name: 'Mada', subtitle: 'Adaptive study planning system', status: 'Live', metrics: '8.6h saved / week', stack: ['Systems', 'Data', 'UX'], accent: '#FF6B35' },
  { name: 'Khotwa', subtitle: 'Habit-based fitness platform', status: 'Scale', metrics: '74% retention @ 90d', stack: ['Mobile', 'Habits', 'Realtime'], accent: '#7c8bff' },
  { name: 'Inklink', subtitle: 'Smart educational linking system', status: 'R&D', metrics: '31k semantic links', stack: ['Graph', 'NLP', 'Vector DB'], accent: '#4cffc7' },
  { name: 'Khadmty', subtitle: 'Modern Algerian service marketplace', status: 'Live', metrics: '3.8x service conversion', stack: ['Marketplace', 'Payments', 'Ops'], accent: '#ff8f63' }
];
