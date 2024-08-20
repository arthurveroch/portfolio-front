import moment from 'moment';
import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterStyled>
      <p>
        Agence Mirage Média © {moment().format('YYYY')} Tous droits réservés{' '}
      </p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 100%;
  padding: 30px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1d1d1d;
  color: #fff;
  font-size: 13px;
`;
