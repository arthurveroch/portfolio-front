import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export default function ServiceCard({ service }) {
  return (
    <ServicesCardStyled>
      <div className='img-container'>
        <img src={service.attributes.servicelogo.data.attributes.url} />
      </div>
      <div className='title-container'>
        <h3>{service.attributes.title}</h3>
      </div>
      <div className='description'>
        <ReactMarkdown>{service.attributes.description}</ReactMarkdown>
      </div>
    </ServicesCardStyled>
  );
}

const ServicesCardStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5% 5%;
  border: 1px solid #bcbcbc;
  border-radius: 10px;
  gap: 20px;
  transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
    border: 1px solid #1d1d1d;
  }

  .img-container {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .img-container img {
    width: 100%;
  }

  .title-container {
    padding: 10px;
    background: #1d1d1d;
    border-radius: 10px;
    text-align: center;
  }

  strong {
    color: #ff5a5a;
  }

  h3 {
    color: #61dbfb;
  }
`;
