import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextInput = styled.input`
  padding: 10px;
  background-color: white;
  border: 1px solid rgb(220, 220, 220);
`;

export const StyledFormButton = styled.button`
  background-color: hsl(180, 100%, 25%);
  color: rgb(230, 230, 230);
  padding: 10px;
  border: none;
  transition: background 0.5s linear, transform 0.5s linear;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.1);
  }

  &:active {
    background-color: hsl(180, 100%, 35%);
    outline: 2px solid black;
  }
`;
