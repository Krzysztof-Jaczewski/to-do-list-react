import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
  margin: 0;
}

button {
  cursor: pointer;
}

body {
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${({theme})=>theme.colors.backgroundColor};
}

`;
