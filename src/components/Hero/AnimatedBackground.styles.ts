import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-12px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

export const BackgroundWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
`;

export const FloatingCube = styled.div<{
  $top: number;
  $left: number;
  $size: number;
  $delay: number;
}>`
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
  box-shadow: 0 0 10px rgba(0, 153, 255, 0.25);
  opacity: 0.65;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => `${$delay}s`};
`;
