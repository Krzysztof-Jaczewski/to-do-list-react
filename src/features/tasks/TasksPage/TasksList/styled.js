import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const List = styled.ul`
  background-color: white;
  list-style: none;
  padding: 0;
`;

export const Item = styled.span`
  display: grid;
  grid-template-columns: auto 1fr repeat(2, auto);
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid rgb(218, 218, 218);

  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
`;

export const ListText = styled.span`
  word-break: break-word;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
