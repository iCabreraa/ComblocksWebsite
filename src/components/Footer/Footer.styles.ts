// components/Footer/Footer.styles.ts

import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(to right, #0a0f1c, #05070f);
  color: #ffffffcc;
  padding: 6rem 2rem 2rem;
  font-size: 0.95rem;
`;

export const FooterTop = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid #ffffff22;
  padding-bottom: 2rem;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h4`
  font-weight: 600;
  color: var(--color-glow);
  margin-bottom: 1rem;
`;

export const FooterLink = styled.a`
  margin-bottom: 0.6rem;
  text-decoration: none;
  color: #ffffffcc;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

export const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  font-size: 0.85rem;
`;

export const Copyright = styled.p`
  opacity: 0.7;
`;

export const LanguageSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  select {
    background: #111;
    border: none;
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    outline: none;
    font-size: 0.85rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;

  a {
    color: #ffffffcc;
    transition: color 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }
`;
