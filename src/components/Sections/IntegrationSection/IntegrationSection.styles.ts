import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 8rem 2rem 6rem;
  background-color: var(--color-grey-50);
  color: var(--color-grey-900);
  text-align: center;
  position: relative;
  z-index: 3;
  animation: ${fadeInUp} 1s ease both;
`;

export const Heading = styled.h2`
  font-size: 3.6rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  color: var(--color-grey-900);
  margin-bottom: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    font-size: 2.6rem;
  }
`;

export const Text = styled.p`
  font-size: 1.8rem;
  font-family: "Inter", sans-serif;
  color: var(--color-grey-600);
  max-width: 760px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
