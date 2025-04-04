import styled, { keyframes } from "styled-components";

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
  50% { box-shadow: 0 0 14px rgba(0, 153, 255, 0.6); }
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

const typing = keyframes`
  0% { width: 0 }
  70% { width: 100% }
  85% { width: 100% }
  100% { width: 0 }
`;

const blinkCaret = keyframes`
  0%, 100% { border-color: transparent }
  50% { border-color: var(--color-glow); }
`;

const getHeroBackground = ($isDarkMode: boolean) =>
  $isDarkMode
    ? "/images/hero-background.png"
    : "/images/hero-background-light.png";

export const HeroWrapper = styled.div<{ $isDarkMode: boolean }>`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5.5rem;
  padding-top: 5.5rem;
  padding-bottom: 2rem;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15),
      rgba(0, 0, 0, 0.4)
    ),
    url(${(props) => getHeroBackground(props.$isDarkMode)});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 6rem 1.5rem 4rem;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.3),
    rgba(15, 23, 42, 0.8)
  );
  z-index: 1;
`;

export const CubeGrid = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;

export const Cube = styled.div<{
  $top: number;
  $left: number;
  $size: number;
  $isDarkMode: boolean;
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
  box-shadow: 0 0 20px
    ${({ $isDarkMode }) =>
      $isDarkMode ? "rgba(0, 153, 255, 0.6)" : "rgba(0, 153, 255, 0.3)"};
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 0.85 : 0.7)};
  mix-blend-mode: ${({ $isDarkMode }) => ($isDarkMode ? "screen" : "overlay")};
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

export const LogoImage = styled.img<{ $isDarkMode: boolean }>`
  width: 160px;
  height: auto;
  margin-bottom: 2.8rem;
  filter: ${({ $isDarkMode }) =>
    $isDarkMode ? "drop-shadow(0 0 20px rgba(0, 153, 255, 0.4))" : "none"};
`;

export const TitleWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const Line1 = styled.h1`
  font-size: 5.2rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1.2;

  .highlight-isms {
    background: linear-gradient(to right, #f0abfc, #a5f3fc, #c084fc);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 10s ease infinite;
  }
`;

export const Line2 = styled.h1`
  font-size: 5.2rem;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 800;
  line-height: 1.2;
  color: var(--text-primary);

  .highlight-secure {
    background: linear-gradient(to right, #7dd3fc, #f0abfc, #38bdf8);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientShift} 8s ease-in-out infinite;
  }
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.8rem;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  max-width: 90%;
  color: var(--text-secondary);
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid var(--color-glow);
  animation: ${typing} 9s steps(60, end) infinite,
    ${blinkCaret} 0.75s step-end infinite;
  margin-bottom: 2.8rem;
`;

export const HeroButton = styled.button`
  background: linear-gradient(135deg, #3af0ff, #60a5fa);
  color: white;
  font-weight: 600;
  padding: 1.2rem 2.6rem;
  font-size: 1.6rem;
  border: none;
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  animation: ${bounce} 3.2s ease-in-out infinite,
    ${glow} 3s infinite ease-in-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.27);
    box-shadow: 0 0 22px rgba(58, 240, 255, 0.7),
      0 0 50px rgba(58, 240, 255, 0.3);
    background: linear-gradient(135deg, #5eead4, #c084fc);
  }

  &:focus {
    outline: 2px solid var(--color-brand-300);
    outline-offset: 2px;
  }
`;
