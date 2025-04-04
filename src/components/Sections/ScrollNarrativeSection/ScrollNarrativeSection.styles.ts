import styled, { css } from "styled-components";

export const NarrativeSection = styled.section`
  position: relative;
  padding: 12rem 2rem 20rem;
  background: radial-gradient(ellipse at center, #0a0f1c 0%, #05070f 100%);
  overflow: hidden;
  min-height: 100vh;
`;

export const NarrativeTitle = styled.h2`
  position: relative;
  font-size: 3.2rem;
  color: var(--color-glow);
  text-align: center;
  margin-bottom: 8rem;
  font-weight: 700;
`;

export const NarrativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NarrativeCube = styled.div<{ $category: string }>`
  position: absolute;
  width: 58px;
  height: 58px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 0 14px;
  pointer-events: none;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);

  ${({ $category }) => {
    const map: Record<string, { bg: string; color: string; glow: string }> = {
      proyectos: {
        bg: "#0e2b38",
        color: "#3af0ff",
        glow: "0 0 22px rgba(58, 240, 255, 0.4)",
      },
      riesgos: {
        bg: "#390f0f",
        color: "#ff4d4d",
        glow: "0 0 22px rgba(255, 77, 77, 0.4)",
      },
      soporte: {
        bg: "#093f34",
        color: "#2ef6a3",
        glow: "0 0 22px rgba(46, 246, 163, 0.4)",
      },
      recursos: {
        bg: "#494400",
        color: "#ffd600",
        glow: "0 0 22px rgba(255, 214, 0, 0.4)",
      },
    };

    const { bg, color, glow } = map[$category] || map.proyectos;

    return css`
      background-color: ${bg};
      color: ${color};
      box-shadow: ${glow};
      text-shadow: 0 0 4px ${color};
    `;
  }}
`;
