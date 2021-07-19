import styled from "styled-components";

const StyledMain = styled.main`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;
`;

export const Main = ({ children }) => <StyledMain>{children}</StyledMain>;
