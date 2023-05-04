import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: rgb(230, 230, 230);
  padding: 10px;
  border: none;
  transition: background 0.5s linear, transform 0.5s linear;
  border-radius: 30px;
  box-shadow: 2px 2px 3px rgba(30, 30, 30, 0.5),
    -2px -2px 3px rgba(230, 230, 230, 0.7), inset 2px 2px 3px rgba(0, 0, 0, 0.5),
    inset -2px -2px 3px rgba(230, 230, 230, 0.7);

  &:hover {
    filter: ${({ theme }) => theme.filter.hover};
  }

  &:active {
    filter: ${({ theme }) => theme.filter.active};
    outline: 2px solid black;
  }
`;
