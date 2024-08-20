import styled from 'styled-components';
import MenuItem from './MenuItem';
import { useContext } from 'react';
import DropdownMenu from '../context/DropdownMenu';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Menu() {
  const { isOpen, setIsOpen, handleOpen } = useContext(DropdownMenu);
  return (
    <MenuStyled style={isOpen ? { transform: 'translateX(0)' } : {}}>
      <MenuItem link={'#accueil'} content={'Accueil'} />
      <MenuItem link={'#about'} content={'A propos'} />
      <MenuItem link={'#services'} content={'Services'} />
      <MenuItem link={'#projets'} content={'Mes projets'} />
      <MenuItem link={'#contact'} content={'Contact'} />

      <div className='contact'>
        <p>
          <a href='mailto:agencemiragemedia@gmail.com'>
            <IoMdMail /> agencemiragemedia@gmail.com
          </a>
        </p>
        <p>
          <a href='tel:+33783053272'>
            <BsFillTelephoneFill /> 07 83 05 32 72
          </a>
        </p>
        <p id='social'>
          <a href='https://github.com/arthurveroch' target='_blank'>
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/arthur-verhofstadt-%E2%9A%9B%EF%B8%8F-4993812a6/'
            target='_blank'
          >
            <FaLinkedin />
          </a>
        </p>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100svh;
  background: #1d1d1d;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  transform: translateX(100%);
  transition: transform 0.6s ease-in-out;

  .contact {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
    gap: 15px;
    width: 100%;
  }

  .contact a {
    text-decoration: none;
    color: #fff;
    letter-spacing: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    transition: color 0.2s ease-in-out;
  }

  .contact a:hover {
    color: #ff5a5a;
  }

  #social {
    display: flex;
    gap: 15px;
  }
`;
