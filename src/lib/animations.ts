import { gsap } from './gsap';
export const floatY = (target: gsap.TweenTarget) => gsap.to(target, { y: -12, repeat: -1, yoyo: true, duration: 3, ease: 'sine.inOut' });
