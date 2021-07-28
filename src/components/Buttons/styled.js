import styled from "styled-components";

export const AdditionalButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: ${({theme})=>theme.size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const StyledButton = styled.button`
  border: none;
  background-color: white;
  color: hsl(180, 100%, 25%);
  transition: color 0.5s linear;

  &:disabled {
    color: #ddd;
    pointer-events: none;
  }

  &:hover {
   filter: ${({theme})=>theme.filter.hover};
  }

  &:active {
   filter: ${({theme})=>theme.filter.active};
  }
`;
