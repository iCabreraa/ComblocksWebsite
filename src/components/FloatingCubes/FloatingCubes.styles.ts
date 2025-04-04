import styled, { css } from "styled-components";

// FloatingCubes.styles.ts
export const FloatingCube = styled.div<{ $category: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 58px;
  height: 58px;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  font-size: 2rem;
  pointer-events: none;
  z-index: 10;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

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
      box-shadow: 0 0 18px ${color}66;
      text-shadow: 0 0 4px ${color};
    `;
  }}
`;
