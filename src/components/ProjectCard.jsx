import styled from 'styled-components';
import { useEffect } from 'react';

export default function ProjectCard({ project }) {
  return (
    <ProjectCardStyled>
      <div className='img-container'>
        <img
          src={project.attributes.thumbnail.data.attributes.url}
          alt={project.attributes.title}
        />
      </div>
      <div className='infos'>
        <h3>{project.attributes.title}</h3>
        <p>{project.attributes.description}</p>
        <a href={project.attributes.link} target='_blank'>
          <button>Accéder au site</button>
        </a>
      </div>
    </ProjectCardStyled>
  );
}

const ProjectCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid #bcbcbc;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    border: 1px solid #1d1d1d;
    background: #f5f5f5;
  }

  .img-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .infos {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
  }

  button {
    all: unset;
    padding: 15px;
    border-radius: 5px;
    background: #ff5a5a;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
