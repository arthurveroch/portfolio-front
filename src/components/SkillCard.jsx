import styled from 'styled-components';

export default function SkillCard({ skill }) {
  return (
    <SkillCardStyled>
      <div className='skill-img'>
        <img src={skill.attributes.logo.data.attributes.url} />
      </div>

      <span>{skill.attributes.techno}</span>
    </SkillCardStyled>
  );
}

const SkillCardStyled = styled.div`
  width: 300px;
  padding: 10px;
  border: 1px solid #bcbcbc;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  font-weight: 500;
  background: #fff;
  cursor: pointer;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;

  &:hover {
    background: #f5f5f5;
    border: 1px solid #1d1d1d;
  }

  .skill-img {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .skill-img img {
    width: 100%;
  }
`;
