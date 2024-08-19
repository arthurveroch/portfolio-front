import styled from 'styled-components';

export default function HeroButtons() {
  return (
    <HeroButtonsStyled>
      <button>Mes projets</button>
      <button>Contactez moi</button>
    </HeroButtonsStyled>
  );
}

const HeroButtonsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 15px;

  button {
    all: unset;
    border: 1px solid #1d1d1d;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out, border 0.3s ease-in-out;
  }

  button:hover {
    border: 1px solid #ff5a5a;
    background: #f0f0f0;
  }
`;
