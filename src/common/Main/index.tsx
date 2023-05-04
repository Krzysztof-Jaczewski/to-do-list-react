import { ReactNode } from 'react';
import { StyledMain } from './styled';

interface Props {
    children: ReactNode;
}

export const Main = ({ children, ...rest }: Props) => (
    <StyledMain {...rest}>{children}</StyledMain>
);
