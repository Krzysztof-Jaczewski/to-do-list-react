import { StyledSection, StyledHeader, SectionBody, Title } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledHeader>
      <Title>{title}</Title>
      {extraHeaderContent}
    </StyledHeader>
    <SectionBody>{body}</SectionBody>
  </StyledSection>
);
