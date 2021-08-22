import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template-rows: auto minmax(50px, 1fr);
  grid-gap: 5px;
  box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 20px;
  grid-gap: 20px;
  background-color: white;

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h2`
  background-color: white;
`;

export const SectionBody = styled.div`
  padding: 20px;
  background-color: white;
`;

export const AdditionalButtons = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;

  @media (max-width: ${({ theme }) => theme.size.mobile}) {
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
    filter: ${({ theme }) => theme.filter.hover};
  }

  &:active {
    filter: ${({ theme }) => theme.filter.active};
  }
`;
