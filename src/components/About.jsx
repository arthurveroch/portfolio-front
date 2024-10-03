import styled from 'styled-components';
import AboutPlus from './AboutPlus';
import Technos from './Technos';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.to(aboutRef.current, {
      transform: 'translate(0)',
      duration: 1,
    });
  }, []);

  return (
    <AboutStyled ref={aboutRef} id='about'>
      <div className='container'>
        <h1>À propos de l'agence</h1>
        <AboutPlus />
        <Technos />
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  transform: translateX(200%);

  .container {
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
    flex-direction: column;
    gap: 60px;
  }
`;
