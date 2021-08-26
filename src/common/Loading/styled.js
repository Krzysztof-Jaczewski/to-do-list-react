import styled from "styled-components";

export const Loader = styled.p`
  display: inline-block;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.4em;
  font-weight: 700;
  transform: scale(0.5);
  color: ${({ theme }) => theme.colors.mainColor};

  &:nth-child(1) {
    animation: hover 1s linear infinite;
  }

  &:nth-child(2) {
    animation: hover 1s linear infinite 0.125s;
  }

  &:nth-child(3) {
    animation: hover 1s linear infinite 0.25s;
  }

  &:nth-child(4) {
    animation: hover 1s linear infinite 0.375s;
  }

  &:nth-child(5) {
    animation: hover 1s linear infinite 0.5s;
  }

  &:nth-child(6) {
    animation: hover 1s linear infinite 0.675s;
  }

  &:nth-child(7) {
    animation: hover 1s linear infinite 0.75s;
  }

  @keyframes hover {
    0% {
      transform: scale(0.5);
      -webkit-text-stroke: 1px ${({ theme }) => theme.colors.mainColor};
    }
    20% {
      transform: scale(1);
      -webkit-text-stroke: 4px ${({ theme }) => theme.colors.mainColor};
    }
    50% {
      transform: scale(0.5);
    }
  }
`;
