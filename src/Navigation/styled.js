import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  color: hsl(0deg 0% 80%);
  border: 2px solid hsl(0deg 0% 80%);
  border-radius: 50px 10px;
  cursor: pointer;
  &.active {
    color: white;
    font-weight: bold;
    border: 2px solid white;
  }
  &:hover {
    box-shadow: 0 0 5px white, inset 0 0 5px white;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  width: 100%;
  grid-gap: 15px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
`;

export const Item = styled.li`
  list-style: none;
  padding: 10px;
`;
