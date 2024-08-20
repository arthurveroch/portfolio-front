import styled from 'styled-components';
import AboutPlus from './AboutPlus';
import Technos from './Technos';

export default function About() {
  return (
    <AboutStyled id='about'>
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
