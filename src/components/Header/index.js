import styled from "styled-components";

const StyledHeader = styled.h1`
  margin: 20px auto;
`
export const Header = ({ title }) => (
    <header>
        <StyledHeader>{title}</StyledHeader>
    </header>
);