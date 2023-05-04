import { theme } from 'src/theme';
import { createGlobalStyle } from 'styled-components';

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
  font-family: 'Montserrat', sans-serif;
  background-color: ${theme.colors.backgroundColor};
}

`;
