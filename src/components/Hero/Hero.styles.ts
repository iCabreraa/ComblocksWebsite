import styled, { keyframes } from "styled-components";

// === Animaciones ===
const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-12px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 8px rgba(0, 153, 255, 0.2); }
  50% { box-shadow: 0 0 14px rgba(0, 153, 255, 0.5); }
  100% { box-shadow: 0 0 8px rgba(0, 153, 255, 0.2); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// === Wrapper general ===
export const HeroWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5.5rem;
  padding-top: 5.5rem;
  padding-bottom: 6rem;
  background-image: url("/images/hero-background.png");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 5rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.55),
    rgba(15, 23, 42, 0.85)
  );
  z-index: 1;
`;

export const CubeGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;

export const Cube = styled.div<{ $top: number; $left: number; $size: number }>`
  position: absolute;
  top: ${({ $top }) => `${$top}%`};
  left: ${({ $left }) => `${$left}%`};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  background: linear-gradient(
    145deg,
    var(--color-brand-100),
    var(--color-brand-600)
  );
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  opacity: 0.7;
  animation: ${float} 6s ease-in-out infinite;
`;

export const HeroContainer = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  animation: ${fadeInUp} 1s ease forwards;
`;

export const HeroTitle = styled.h1`
  font-size: 4.2rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  color: var(--color-brand-100);
  margin-bottom: 1.4rem;
  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);

  .highlight {
    color: var(--color-brand-300);
    text-shadow: 0 0 8px rgba(0, 153, 255, 0.5);
  }

  @media (max-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  margin-bottom: 2.6rem;
  max-width: 90%;
  line-height: 1.7;
  background: linear-gradient(270deg, #a5f3fc, #c084fc, #f0abfc, #7dd3fc);
  background-size: 600% 600%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 8s ease infinite;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;

export const HeroButton = styled.button`
  background-color: var(--color-brand-500);
  color: white;
  font-weight: 600;
  padding: 1.1rem 2.4rem;
  font-size: 1.6rem;
  border: none;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  animation: ${bounce} 3.2s ease-in-out infinite,
    ${glow} 3s infinite ease-in-out;
  transition: transform 0.3s ease, background-color 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.07);
    background-color: var(--color-brand-600);
  }

  &:focus {
    outline: 2px solid var(--color-brand-300);
    outline-offset: 2px;
  }
`;
