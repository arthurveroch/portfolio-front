import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const projectsRef = useRef(null);

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

  useEffect(() => {
    if (projects.length > 0) {
      gsap.to(projectsRef.current, {
        transform: 'translate(0)',
        duration: 1,

        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 50%',
          end: 'top 30%',
        },
      });
    }
  }, [response]);
  return (
    <ProjectsStyled ref={projectsRef} id='projets'>
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
  transform: translateX(200%);

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
