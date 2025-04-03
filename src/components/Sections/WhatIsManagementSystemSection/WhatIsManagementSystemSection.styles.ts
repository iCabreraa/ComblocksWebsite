import styled from "styled-components";

export const Section = styled.section`
  background-color: var(--color-grey-0);
  padding: 8rem 2rem 6rem;
  color: var(--color-grey-900);
  text-align: center;
  z-index: 3;
  position: relative;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 2.6rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-family: "Inter", sans-serif;
  color: var(--color-grey-600);
  margin-bottom: 3.5rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 560px;
  border-radius: var(--border-radius-md);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
`;
