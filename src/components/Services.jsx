import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import ServiceCard from './ServiceCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const [services, setServices] = useState([]);
  const servicesRef = useRef(null);
  const response = async (e) => {
    await axios
      .get(
        'https://strapi-server-portfolio.onrender.com/api/services?populate=*'
      )
      .then((res) => setServices(res.data.data));
  };

  useEffect(() => {
    response();
  }, []);

  useEffect(() => {
    if (services.length > 0) {
      gsap.to(servicesRef.current, {
        transform: 'translate(0)',
        duration: 1,

        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 50%',
          end: 'top 30%',
          markers: true,
        },
      });
    }
  }, [response]);

  return (
    <ServicesStyled ref={servicesRef} id='services'>
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
  transform: translateX(-200%);

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
