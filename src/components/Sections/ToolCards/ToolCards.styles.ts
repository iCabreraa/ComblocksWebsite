// ToolCards.styles.ts
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const StyledToolCardsSection = styled.section`
  padding: 10rem 2rem 8rem;
  background-color: var(--color-grey-0);
  text-align: center;
  position: relative;
  z-index: 3;
  animation: ${fadeInUp} 1s ease forwards;
`;

export const IntroBlock = styled.div`
  max-width: 760px;
  margin: 0 auto 5rem;
`;

export const SectionTitle = styled.h2`
  font-size: 3.6rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  margin-bottom: 1.6rem;
  color: var(--color-grey-900);
`;

export const SectionSubtitle = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-600);
  font-family: "Inter", sans-serif;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Card = styled.div`
  background-color: var(--color-grey-50);
  padding: 2.8rem 2rem;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: default;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 24px rgba(0, 153, 255, 0.25);
  }
`;

export const CardIcon = styled.div`
  font-size: 3.2rem;
  margin-bottom: 1.4rem;
  color: var(--color-brand-500);
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-grey-900);
`;

export const CardDescription = styled.p`
  font-size: 1.5rem;
  color: var(--color-grey-600);
  font-family: "Inter", sans-serif;
`;
