import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
    </div>
  );
}
