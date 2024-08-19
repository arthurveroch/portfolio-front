import styled from 'styled-components';
import HeroButtons from './HeroButtons';

export default function Title() {
  return (
    <TitleStyled>
      <h1>
        Ensemble, concevons <br /> un produit web innovant
      </h1>
      <p>
        Bonjour, je suis
        <strong style={{ color: '#ff5a5a' }}> Arthur Verhofstadt</strong>.{' '}
        <br />
        Développeur fullstack en freelance et fondateur de l'Agence Mirage Média
        <br /> spécialisée en
        <strong style={{ color: '#61dbfb' }}> React</strong>
      </p>
      <HeroButtons />
    </TitleStyled>
  );
}

const TitleStyled = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 5% 0;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  h1 {
    font-size: 45px;
  }
`;
