import styled from 'styled-components';

export default function LogoHero() {
  return (
    <LogoHeroStyled>
      <img src='./images/logo.png' />
    </LogoHeroStyled>
  );
}

const LogoHeroStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  img {
    width: 35%;
    border-radius: 50%;
    transition: transform 0.7s ease-in-out;
  }

  img:hover {
    transform: rotate(360deg);
  }
`;
