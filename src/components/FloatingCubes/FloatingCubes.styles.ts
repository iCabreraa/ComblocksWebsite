import styled, { css } from "styled-components";

export const FloatingCube = styled.div<{ $category: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 1.2rem;
  pointer-events: auto;
  z-index: 10;
  backdrop-filter: blur(6px);
  transition: transform 0.2s ease;

  &:hover {
    transform: translate(-50%, -50%) scale(1.3);
    filter: drop-shadow(0 0 4px white);
    cursor: pointer;
  }

  ${({ $category }) => {
    const map = {
      proyectos: { bg: "#0e2b38", color: "#3af0ff" },
      riesgos: { bg: "#390f0f", color: "#ff4d4d" },
      soporte: { bg: "#093f34", color: "#2ef6a3" },
      recursos: { bg: "#494400", color: "#ffd600" },
    };

    const { bg, color } = map[$category] || map.proyectos;

    return css`
      background-color: ${bg};
      color: ${color};
      box-shadow: 0 0 10px ${color}66;
      text-shadow: 0 0 4px ${color};
    `;
  }}
`;

export const NarrativeMessage = styled.div`
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  font-size: 2.2rem;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
  z-index: 5;
  transition: opacity 0.4s ease;

  background: linear-gradient(
    90deg,
    #ff4d4d,
    #ffd600,
    #2ef6a3,
    #3af0ff,
    #ff4d4d
  );
  background-size: 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: moveGradient 6s linear infinite;

  @keyframes moveGradient {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 400% center;
    }
  }
`;
