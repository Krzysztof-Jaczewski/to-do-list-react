import styled, { css } from "styled-components";

export const ListButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: hsl(120, 100%, 25%);
  cursor: pointer;
  color: white;
  border: none;
  transition: background 0.5s linear;

  &:hover {
    filter: ${({ theme }) => theme.filter.hover};
  }

  &:active {
    filter: ${({ theme }) => theme.filter.active};
    outline: 2px solid black;
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(357, 95%, 40%);

      &:hover {
        filter: ${({ theme }) => theme.filter.hover};
      }

      &:active {
        filter: ${({ theme }) => theme.filter.active};
        outline: 2px solid black;
      }
    `}

  ${({ rename }) =>
    rename &&
    css`
      background-color: hsl(200, 95%, 40%);

      &:hover {
        filter: ${({ theme }) => theme.filter.hover};
      }

      &:active {
        filter: ${({ theme }) => theme.filter.active};
        outline: 2px solid black;
      }
    `}
`;
