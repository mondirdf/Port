import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
export const useParallax=(amt=80)=>{const ref=useRef<HTMLDivElement>(null);useLayoutEffect(()=>{const el=ref.current;if(!el)return;const ctx=gsap.context(()=>{gsap.to(el,{y:amt,scrollTrigger:{trigger:el,scrub:true,start:'top bottom',end:'bottom top'}})},el);return()=>ctx.revert()},[amt]);return ref};
