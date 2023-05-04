import { StyledHeader } from './styled';
interface Props {
    title: string;
}

export const Header = ({ title, ...rest }: Props) => (
    <header>
        <StyledHeader {...rest}>{title}</StyledHeader>
    </header>
);
