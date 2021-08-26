import { toAuthor, toTasks } from "../routes";
import { Item, List, StyledNavlink } from "./styled";

export const Navigation = () => (
  <nav>
    <List>
      <Item>
        <StyledNavlink to={toTasks()}>Zadania</StyledNavlink>
      </Item>
      <Item>
        <StyledNavlink to={toAuthor()}>O autorze</StyledNavlink>
      </Item>
    </List>
  </nav>
);
