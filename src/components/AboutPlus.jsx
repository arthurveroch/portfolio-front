import styled from 'styled-components';

export default function AboutPlus() {
  return (
    <AboutPlusStyled>
      <h2>En savoir plus</h2>
      <p>
        <strong style={{ color: '#ff5a5a' }}>L'Agence Mirage Média,</strong>{' '}
        dirigée par un développeur ReactJS autodidacte avec plus de 2 ans
        d'expérience, est passionnée par la création de nouvelles
        fonctionnalités, du concept initial à la production. L'objectif est de
        fournir une expérience utilisateur optimale en écrivant du code
        réutilisable et performant.{' '}
        <strong style={{ color: '#61dbfb' }}>Mirage Média</strong> intègre le
        design, la technologie, et l'innovation dans chaque projet, en assurant
        un suivi rigoureux de la conception à la livraison.
      </p>
    </AboutPlusStyled>
  );
}

const AboutPlusStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
