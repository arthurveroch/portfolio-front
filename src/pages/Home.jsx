import React, { useContext } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ReactGA from 'react-ga';

ReactGA.initialize('G-4D8BDQ0GDG');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
