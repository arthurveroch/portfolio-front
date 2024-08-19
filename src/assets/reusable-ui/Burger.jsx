import { RxHamburgerMenu } from 'react-icons/rx';
import styled from 'styled-components';

export default function Burger({ onClick }) {
  return (
    <BurgerStyled onClick={onClick}>
      <RxHamburgerMenu />
    </BurgerStyled>
  );
}

const BurgerStyled = styled.div`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
