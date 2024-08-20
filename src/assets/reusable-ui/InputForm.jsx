import styled from 'styled-components';

export default function InputForm({
  icon,
  type,
  placeholder,
  onChange,
  value,
  name,
}) {
  return (
    <InputFormStyled>
      {icon}
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputFormStyled>
  );
}

const InputFormStyled = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #f7f7f7;
  border: 1px solid grey;
  border-radius: 5px;
  gap: 10px;

  input {
    flex: 1;
    all: unset;
    font-size: 15px;
  }
`;
