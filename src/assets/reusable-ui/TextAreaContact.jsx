import styled from 'styled-components';

export default function TextAreaContact({
  placeholder,
  value,
  onChange,
  name,
}) {
  return (
    <TextAreaContactStyled
      required
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    ></TextAreaContactStyled>
  );
}

const TextAreaContactStyled = styled.textarea`
  width: 100%;
  min-height: 100px;
  border-radius: 5px;
  font-size: 15px;
  border: 1px solid grey;
  resize: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  background: #f7f7f7;
`;
