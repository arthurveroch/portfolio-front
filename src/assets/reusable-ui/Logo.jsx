import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <LogoStyled>
      <a href='#accueil'>Agence Mirage Média</a>
    </LogoStyled>
  );
}

const LogoStyled = styled.h1`
  color: #fff;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 30px;

  @media screen and (max-width: 450px) {
    font-size: 25px;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }
`;
