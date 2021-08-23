import { Item, List, StyledNavlink } from "./styled";

export const Navigation = () => (
  <nav>
    <List>
      <Item>
        <StyledNavlink to="/zadania">Zadania</StyledNavlink>
      </Item>
      <Item>
        <StyledNavlink to="/autor">O autorze</StyledNavlink>
      </Item>
    </List>
  </nav>
);
