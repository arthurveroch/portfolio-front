import styled from 'styled-components';
import Logo from '../assets/reusable-ui/Logo';
import Burger from '../assets/reusable-ui/Burger';
import { useContext } from 'react';
import DropdownMenu from '../context/DropdownMenu';
import Cross from '../assets/reusable-ui/Cross';

export default function Navbar() {
  const { isOpen, setIsOpen, handleOpen } = useContext(DropdownMenu);
  return (
    <NavbarStyled>
      <Logo />
      {isOpen ? (
        <Cross onClick={handleOpen} />
      ) : (
        <Burger onClick={handleOpen} />
      )}
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

  background: #1d1d1d;

  @media screen and (max-width: 1024px) {
    padding: 50px;
  }
`;
