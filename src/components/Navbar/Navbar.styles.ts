import styled, { css, keyframes } from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--color-surface);
  color: var(--text-primary);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1.5rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-brand-100);
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 52px; /* aumentado de 44px */
  height: 52px;
  transition: filter 0.3s ease;

  body.dark-mode & {
    filter: brightness(1.2);
  }
`;

const gradientMove = keyframes`
  0% { background-position: 0% 50%; opacity: 0.5; }
  50% { background-position: 100% 50%; opacity: 1; }
  100% { background-position: 0% 50%; opacity: 0.5; }
`;

export const BrandName = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  background: linear-gradient(270deg, #38bdf8, #3b82f6, #60a5fa);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientMove} 6s ease-in-out infinite;
`;

export const MenuGroup = styled.div`
  display: flex;
  gap: 2.8rem;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  color: var(--text-primary);

  &:hover {
    color: var(--color-brand);
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const DropdownMenu = styled.ul<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
  margin-top: 0.8rem;
  background-color: var(--color-surface);
  box-shadow: var(--shadow-lg);
  border-radius: var(--border-radius-md);
  list-style: none;
  padding: 1rem 0;
  min-width: 240px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    `}
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  color: var(--text-primary);
  border-radius: var(--border-radius-sm);
  transition: all 0.3s ease;

  svg {
    transition: color 0.3s ease;
  }

  &:hover {
    background-color: var(--hover-strong);
    color: #3af0ff;
    text-shadow: 0 0 6px rgba(58, 240, 255, 0.7);

    svg {
      color: #3af0ff;
      filter: drop-shadow(0 0 6px rgba(58, 240, 255, 0.6));
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 12px rgba(58, 240, 255, 0.3),
                0 0 24px rgba(58, 240, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(58, 240, 255, 0.5),
                0 0 30px rgba(58, 240, 255, 0.4);
  }
`;

export const AppButton = styled.a`
  position: relative;
  background: linear-gradient(135deg, var(--color-brand), var(--color-glow));
  color: white;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 0 16px rgba(58, 240, 255, 0.25);
  animation: ${pulseGlow} 3.5s ease-in-out infinite;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 22px rgba(58, 240, 255, 0.6),
      0 0 40px rgba(58, 240, 255, 0.3);
    color: #ffffff;
    text-shadow: 0 0 6px black;
    background: linear-gradient(135deg, #3af0ff, #60a5fa);
  }
`;

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: var(--color-brand-300);
  font-size: 2.4rem;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 50%;
  animation: ${pulseGlow} 3s ease-in-out infinite;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: var(--hover-strong);
  }
`;

export const NavCenter = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const FlagIcon = styled.img`
  width: 24px;
  height: 16px;
  cursor: pointer;
  border-radius: 3px;
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #888;
    transform: scale(1.05);
  }
`;
export const LanguageToggleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LanguageButton = styled.button`
  background: transparent;
  border: none;
  padding: 0.4rem;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 5;

  &:hover {
    transform: scale(1.05);
  }
`;

export const FlagCircle = styled.div<{ neonColors: string[] }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-weight: 700;
  font-size: 1.1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 4px white;
  box-shadow: 0 0 8px ${({ neonColors }) => neonColors[0]},
    0 0 16px ${({ neonColors }) => neonColors[1]};
  background: linear-gradient(
    to bottom,
    ${({ neonColors }) => neonColors[0]} 20%,
    ${({ neonColors }) => neonColors[1]} 60%,
    transparent 100%
  );
`;

// export const FlagButton = styled.button`
//   all: unset;
//   cursor: pointer;
//   border-radius: 50%;
//   width: 36px;
//   height: 36px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background: radial-gradient(circle, #0a0f1c 30%, transparent 70%);
//   box-shadow: 0 0 10px ${({ theme }) => theme.colors.brand},
//     0 0 20px ${({ theme }) => theme.colors.brandAlt};
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: scale(1.08);
//   }
// `;

export const FlagSVG = styled.div<{ neon: string[] }>`
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 0 3px ${({ neon }) => neon[0]})
      drop-shadow(0 0 6px ${({ neon }) => neon[1]});
  }
`;

export const LanguageDropdown = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 48px;
  right: 0;
  background: var(--color-surface);
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  padding: 0.8rem;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  z-index: 100;
`;

export const LanguageOption = styled.li`
  list-style: none;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

// export const FlagImage = styled.img`
//   width: 26px;
//   height: 18px;
//   border-radius: 3px;
//   cursor: pointer;
//   transition: transform 0.2s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.1);
//     box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
//   }
// `;

export const FlagButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-surface);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px var(--color-brand);
  }
`;

export const FlagImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FlagContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const FlagDropdown = styled.div<{ $visible: boolean }>`
  position: absolute;
  top: 110%;
  right: 0;
  background: var(--color-surface);
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  padding: 0.4rem;
  z-index: 99;
`;

export const FlagOption = styled.div`
  margin: 0.3rem 0;
  cursor: pointer;
`;

export const LangButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1.2rem;
`;

export const Separator = styled.div`
  height: 28px;
  width: 1px;
  background-color: var(--color-brand-300);
  opacity: 0.4;
  margin: 0 0.4rem;
  align-self: center;
`;
