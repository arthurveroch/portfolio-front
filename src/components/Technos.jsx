import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SkillCard from './SkillCard';

export default function Technos() {
  const [skills, setSkills] = useState([]);

  const response = async (e) => {
    await axios
      .get('https://strapi-server-portfolio.onrender.com/api/skills?populate=*')
      .then((res) => setSkills(res.data.data));
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <TechnosStyled>
      <h2>Technologies et outils utilisés</h2>
      <p>
        Grâce à une combinaison de technologies de pointe et de logiciels
        open-source fiables,{' '}
        <strong style={{ color: '#ff5a5a' }}>l'Agence Mirage Média</strong>{' '}
        développe des applications et des sites web performants, centrés sur
        l'utilisateur, et optimisés pour une expérience fluide sur smartphones,
        tablettes, et ordinateurs de bureau.
      </p>

      <div className='skills'>
        {skills.map((skill) => {
          return <SkillCard key={skill.id} skill={skill} />;
        })}
      </div>
    </TechnosStyled>
  );
}

const TechnosStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .skills {
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
