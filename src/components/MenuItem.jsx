import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownMenu from '../context/DropdownMenu';

export default function MenuItem({ content, link }) {
  const { isOpen, setIsOpen, handleOpen } = useContext(DropdownMenu);
  return (
    <MenuItemStyled>
      <a onClick={handleOpen} href={link}>
        {content && content}
      </a>
    </MenuItemStyled>
  );
}

const MenuItemStyled = styled.li`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  list-style: none;
  font-size: 20px;
  width: 50%;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-radius: 10px;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;

  @media screen and (max-width: 500px) {
    width: 75%;
  }

  &:hover {
    background: #ff5a5a;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;
