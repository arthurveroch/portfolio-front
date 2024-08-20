import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const response = async (e) => {
    await axios
      .get(
        'https://strapi-server-portfolio.onrender.com/api/projects?populate=*'
      )
      .then((res) => setProjects(res.data.data));
  };

  useEffect(() => {
    response();
  }, []);
  return (
    <ProjectsStyled id='projets'>
      <div className='container'>
        <h1>Mes projets</h1>
        <div className='projects-container'>
          <h2>Mes réalisations antérieures</h2>
          <div className='projects'>
            {projects.map((project) => {
              return <ProjectCard key={project.id} project={project} />;
            })}
          </div>
        </div>
      </div>
    </ProjectsStyled>
  );
}

const ProjectsStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  .container {
    width: 75%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5% 0;
    gap: 60px;
  }

  .projects-container {
    width: 100%;
  }

  .projects {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 60px;
  }
`;
