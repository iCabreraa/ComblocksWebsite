import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/hero-background.png");
  background-size: cover;
  background-position: center;
  z-index: 0;
  animation: ${float} 8s ease-in-out infinite;
  opacity: 0.9;
`;
