import styled from 'styled-components';
import Title from './Title';
import LogoHero from './LogoHero';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.to(heroRef.current, { transform: 'translate(0)', duration: 2 });
  }, []);

  return (
    <HeroStyled ref={heroRef} id='accueil'>
      <div className='container'>
        <Title />
        <LogoHero />
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
  transform: translateX(-200%);

  .container {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    margin-top: 100px;
    padding: 5% 0;
  }

  @media screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
      width: 100%;
    }
  }
`;
