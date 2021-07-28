import { StyledSection, Header, SectionBody, Title } from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <SectionBody>{body}</SectionBody>
  </StyledSection>
);
