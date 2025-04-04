import styled from "styled-components";

const SectionWrapper = styled.section<{ $dark?: boolean }>`
  width: 100%;
  background-color: ${({ $dark }) =>
    $dark ? "var(--color-bg)" : "transparent"};
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

export default SectionWrapper;
