import styled from "styled-components";

export const AdditionalButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: white;
  color: ${({ theme }) => theme.colors.mainColor};
  transition: color 0.5s linear;
  margin: 0 0 0 10px;

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
  @media (max-width: ${({ theme }) => theme.size.mobile}) {
    margin: 15px 0 0 0;
  }
`;
