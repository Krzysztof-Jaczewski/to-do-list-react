import styled from "styled-components";

export const AdditionalButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
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
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }
`;
