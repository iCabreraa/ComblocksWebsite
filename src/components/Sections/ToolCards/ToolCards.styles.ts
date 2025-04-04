import styled, { css } from "styled-components";

export const ToolSection = styled.section`
  padding: 8rem 2rem 10rem;
  background-color: var(--color-surface);
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-bottom: 4rem;
`;

export const FilterButton = styled.button<{
  $active: boolean;
  $category: string;
}>`
  font-size: 1.5rem;
  padding: 0.8rem 1.8rem;
  font-weight: 500;
  border: 2px solid transparent;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  background-color: transparent;
  transition: all 0.3s ease;

  ${({ $active, $category }) => {
    const colors: any = {
      proyectos: "#3af0ff",
      riesgos: "#ff4d4d",
      soporte: "#2ef6a3",
      recursos: "#ffd600",
      todos: "#8884ff",
    };
    const color = colors[$category] || "#3af0ff";

    return css`
      color: ${color};
      border-color: ${$active ? color : "transparent"};
      box-shadow: ${$active
        ? `0 0 14px ${color}44, 0 0 24px ${color}33`
        : "none"};

      &:hover {
        border-color: ${color};
        box-shadow: 0 0 14px ${color}33;
      }
    `;
  }}
`;

export const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3.6rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ToolCard = styled.div<{ $category: string }>`
  background-color: var(--color-background);
  padding: 2.6rem 2rem;
  border-radius: var(--border-radius-lg);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  ${({ $category }) => {
    const glowColorMap: Record<string, string> = {
      proyectos: "#3af0ff",
      riesgos: "#ff4d4d",
      soporte: "#2ef6a3",
      recursos: "#ffd600",
    };
    const glowColor = glowColorMap[$category] || "#3af0ff";

    return css`
      box-shadow: 0 0 12px ${glowColor}40;

      &:hover {
        box-shadow: 0 0 28px ${glowColor}, 0 0 48px ${glowColor};
        transform: translateY(-10px);

        // Glow sobre el ícono
        div {
          filter: drop-shadow(0 0 6px ${glowColor})
            drop-shadow(0 0 12px ${glowColor});
        }
      }
    `;
  }}
`;

export const ToolIcon = styled.div<{ $category: string }>`
  margin-bottom: 1.8rem;
  font-size: 2.8rem;
  transition: filter 0.3s ease;

  ${({ $category }) => {
    const colors: Record<string, string> = {
      proyectos: "#3af0ff",
      riesgos: "#ff4d4d",
      soporte: "#2ef6a3",
      recursos: "#ffd600",
    };
    return css`
      color: ${colors[$category] || "#3af0ff"};
    `;
  }}
`;
export const ToolTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const ToolDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--text-secondary);
  line-height: 1.6;
`;
