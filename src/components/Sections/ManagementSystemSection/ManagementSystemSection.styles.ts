import styled from "styled-components";

export const Section = styled.section`
  padding: 10rem 2rem 8rem;
  background-color: var(--color-grey-900);
  color: var(--color-grey-100);
  text-align: center;
  position: relative;
  z-index: 3;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3.6rem;
  }
`;

export const Description = styled.p`
  font-size: 1.7rem;
  font-family: "Inter", sans-serif;
  color: var(--color-grey-300);
  margin: 0 auto 4rem;
  max-width: 740px;
`;

export const CubeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding-top: 1rem;
`;

export const Cube = styled.div`
  width: 90px;
  height: 90px;
  background-color: var(--color-grey-800);
  color: var(--color-brand-100);
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 16px rgba(0, 123, 255, 0.6);
    transform: scale(1.1);
    background-color: var(--color-grey-700);
  }
`;
