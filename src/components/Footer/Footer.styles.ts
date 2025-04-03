import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-grey-900);
  padding: 3rem 2rem;
  color: var(--color-grey-100);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  font-size: 1.4rem;
  color: var(--color-grey-400);
`;

export const FooterRight = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: var(--color-brand-100);
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: var(--color-brand-300);
  }
`;

export const FooterText = styled.p`
  margin: 0;
`;
