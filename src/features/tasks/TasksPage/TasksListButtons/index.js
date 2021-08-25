import styled, { css } from "styled-components";

export const ListButton = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.completeTaskButton};
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
      background-color: ${({ theme }) => theme.colors.cancelButton};

      &:hover {
        filter: ${({ theme }) => theme.filter.hover};
      }

      &:active {
        filter: ${({ theme }) => theme.filter.active};
        outline: 2px solid black;
      }
    `}

  ${({ currentlyRename }) =>
    currentlyRename &&
    css`
      background-color: ${({ theme }) => theme.colors.renameButton};

      &:hover {
        filter: ${({ theme }) => theme.filter.hover};
      }

      &:active {
        filter: ${({ theme }) => theme.filter.active};
        outline: 2px solid black;
      }
    `}
`;
