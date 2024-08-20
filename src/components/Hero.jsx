import styled from 'styled-components';
import Title from './Title';
import LogoHero from './LogoHero';

export default function Hero() {
  return (
    <HeroStyled id='accueil'>
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
