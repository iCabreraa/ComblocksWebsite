import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-12px) rotate(5deg); }
  100% { transform: translateY(0) rotate(0); }
`;

export const BackgroundContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`;

export const Cube = styled.div<{
  $top: number;
  $left: number;
  $size: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: linear-gradient(
    135deg,
    var(--color-brand-100),
    var(--color-brand-600)
  );
  border-radius: var(--border-radius-md);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.35); /* Efecto neón azulado */
  animation: ${float} ${({ $size }) => 4 + $size / 30}s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.15;
`;

export const IconWrapper = styled.div<{ $size: number }>`
  font-size: ${({ $size }) => `${$size * 0.45}px`};
  color: #00ffff; /* Neón azul eléctrico */
  opacity: 0.6;
  filter: drop-shadow(0 0 4px #00ffff);
`;
