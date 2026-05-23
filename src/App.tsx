import { useEffect, useState } from 'react';
import { createLenis } from './lib/lenis';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import NoiseOverlay from './components/NoiseOverlay';
import FloatingNav from './components/FloatingNav';
import AmbientLights from './components/AmbientLights';
import Hero from './sections/Hero';
import About from './sections/About';
import Philosophy from './sections/Philosophy';
import Projects from './sections/Projects';
import Stack from './sections/Stack';
import Experience from './sections/Experience';
import Systems from './sections/Systems';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App(){const [ready,setReady]=useState(false);useEffect(()=>{const l=createLenis();const t=window.setTimeout(()=>setReady(true),1200);return()=>{window.clearTimeout(t);l.destroy();};},[]);return <div className="bg-[var(--bg)] text-[var(--text)]"><LoadingScreen done={ready}/><ScrollProgress/><CustomCursor/><AmbientLights/><NoiseOverlay/><FloatingNav/><Hero/><About/><Philosophy/><Projects/><Stack/><Experience/><Systems/><Contact/><Footer/></div>}
