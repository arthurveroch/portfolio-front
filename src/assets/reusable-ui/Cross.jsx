import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';

export default function Cross({ onClick }) {
  return (
    <CrossStyled>
      <RxCross1 id='cross' onClick={onClick} />
    </CrossStyled>
  );
}

const CrossStyled = styled.span`
  font-size: 30px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
