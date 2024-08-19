import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const [services, setServices] = useState([]);
  const response = async (e) => {
    await axios
      .get('http://localhost:1337/api/services?populate=*')
      .then((res) => setServices(res.data.data));
  };

  useEffect(() => {
    response();
  }, []);

  return (
    <ServicesStyled>
      <div className='container'>
        <h1>Services</h1>
        <div className='services-container'>
          <h2>Ce que nous proposons</h2>
          <div className='services'>
            {services.map((service) => {
              return <ServiceCard key={service.id} service={service} />;
            })}
          </div>
        </div>
      </div>
    </ServicesStyled>
  );
}

const ServicesStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  .container {
    width: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5% 0;
    gap: 60px;
  }

  @media screen and (max-width: 1024px) {
    .container {
      width: 75%;
    }
  }

  .services-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .services {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 5% 0;
  }
`;
