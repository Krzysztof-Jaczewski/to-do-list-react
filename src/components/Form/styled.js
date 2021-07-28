import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TextInput = styled.input`
  padding: 10px;
  background-color: white;
  border: 1px solid rgb(220, 220, 220);
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: rgb(230, 230, 230);
  padding: 10px;
  border: none;
  transition: background 0.5s linear, transform 0.5s linear;

  &:hover {
    filter: ${({ theme }) => theme.filter.hover};
    transform: scale(1.1);
  }

  &:active {
    filter: ${({ theme }) => theme.filter.active};
    outline: 2px solid black;
  }
`;
