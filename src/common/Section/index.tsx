import { ReactNode } from 'react';
import { StyledSection, StyledHeader, SectionBody, Title } from './styled';

interface Props {
    title: String;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

export const Section = ({
    title,
    body,
    extraHeaderContent,
    ...rest
}: Props) => (
    <StyledSection {...rest}>
        <StyledHeader>
            <Title>{title}</Title>
            {extraHeaderContent}
        </StyledHeader>
        <SectionBody>{body}</SectionBody>
    </StyledSection>
);
