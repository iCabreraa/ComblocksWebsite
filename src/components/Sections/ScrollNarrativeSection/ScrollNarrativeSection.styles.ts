import styled from "styled-components";

export const NarrativeSection = styled.section`
  position: relative;
  padding: 18rem 2rem 20rem;
  background: radial-gradient(ellipse at center, #0a0f1c 0%, #05070f 100%);
  overflow: hidden;
  min-height: 100vh;
`;

export const NarrativeWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

export const NarrativeTitle = styled.h2`
  font-size: 3.4rem;
  color: var(--color-glow);
  margin-bottom: 8rem;
  font-weight: 700;
`;
