import { toAuthor, toTasks } from '../routes';
import { Item, List, StyledNavLink } from './styled';

export const Navigation = () => (
    <nav>
        <List>
            <Item>
                <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
            </Item>
            <Item>
                <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
            </Item>
        </List>
    </nav>
);
