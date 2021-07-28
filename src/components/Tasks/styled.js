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

export const TextRenameForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto auto;
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

export const Button = styled.button`
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: hsl(120, 100%, 25%);
  cursor: pointer;
  color: white;
  border: none;
  transition: background 0.5s linear;

  &:hover {
    background-color: hsl(120, 100%, 30%);
  }

  &:active {
    background-color: hsl(120, 100%, 35%);
    outline: 2px solid black;
  }

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(357, 95%, 40%);

      &:hover {
        background-color: hsl(357, 95%, 50%);
      }

      &:active {
        background-color: hsl(357, 95%, 55%);
        outline: 2px solid black;
      }
    `}

  ${({ rename }) =>
    rename &&
    css`
      background-color: hsl(200, 95%, 40%);

      &:hover {
        background-color: hsl(200, 95%, 50%);
      }

      &:active {
        background-color: hsl(200, 95%, 55%);
        outline: 2px solid black;
      }
    `}
`;
