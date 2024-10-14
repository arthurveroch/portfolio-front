import styled from 'styled-components';
import Logo from '../assets/reusable-ui/Logo';
import Burger from '../assets/reusable-ui/Burger';
import { useContext, useEffect, useRef } from 'react';
import DropdownMenu from '../context/DropdownMenu';
import { gsap } from 'gsap';

export default function Navbar() {
  const { isOpen, setIsOpen, handleOpen } = useContext(DropdownMenu);
  const navbarRef = useRef(null);

  useEffect(() => {
    gsap.to(navbarRef.current, { transform: 'translate(0)', duration: 1 });
  }, []);
  return (
    <NavbarStyled ref={navbarRef}>
      <Logo />
      <Burger onClick={handleOpen} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 70px;
  padding: 50px 15%;
  display: flex;
  position: fixed;
  justify-content: space-between;
  align-items: center;
  transform: translateY(-200%);
  z-index: 150;
  background: #1d1d1d;

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
`;
