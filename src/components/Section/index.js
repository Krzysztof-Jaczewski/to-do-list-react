import {
  StyledSection,
  StyledSectionHeader,
  StyledSectionBody,
  StyledTitle,
} from "./styled";

export const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledSectionHeader>
      <StyledTitle>{title}</StyledTitle>
      {extraHeaderContent}
    </StyledSectionHeader>
    <StyledSectionBody>{body}</StyledSectionBody>
  </StyledSection>
);
