import React, { useEffect, useState } from "react";
import {
  HeroWrapper,
  HeroContainer,
  HeroOverlay,
  CubeGrid,
  Cube,
  LogoImage,
  TitleWrapper,
  Line1,
  Line2,
  HeroSubtitle,
  HeroButton,
} from "./Hero.styles";
import SectionWrapper from "../Layout/SectionWrapper";
import Container from "../Layout/Container";
import AnimatedBackground from "./AnimatedBackground";

interface CubeProps {
  id: number;
  top: number;
  left: number;
  size: number;
}

const Hero = () => {
  const [cubes, setCubes] = useState<CubeProps[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.body.classList.contains("dark-mode");
    setIsDarkMode(isDark);

    const observer = new MutationObserver(() => {
      const isNowDark = document.body.classList.contains("dark-mode");
      setIsDarkMode(isNowDark);
    });

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const generateCubes = (): CubeProps[] => {
      return Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 30 + Math.random() * 40,
      }));
    };
    setCubes(generateCubes());
  }, []);

  return (
    <SectionWrapper id="hero">
      <HeroWrapper $isDarkMode={isDarkMode}>
        <HeroOverlay />
        <AnimatedBackground isDarkMode={isDarkMode} />
        <CubeGrid>
          {cubes.map(({ id, top, left, size }) => (
            <Cube
              key={id}
              $top={top}
              $left={left}
              $size={size}
              $isDarkMode={isDarkMode}
            />
          ))}
        </CubeGrid>

        <Container>
          <HeroContainer>
            <LogoImage
              src="/iconComblocks.png"
              alt="Comblocks Logo"
              $isDarkMode={isDarkMode}
            />
            <TitleWrapper>
              <Line1>
                Simplifying your <span className="highlight-isms">ISMS</span>,
              </Line1>
              <Line2>
                <span className="highlight-secure">Securing</span> Your Future.
              </Line2>
            </TitleWrapper>
            <HeroSubtitle className="typed-text">
              Descubre cómo Comblocks optimiza y simplifica tu gestión
              empresarial
            </HeroSubtitle>
            <HeroButton
              aria-label="Explorar Comblocks"
              role="button"
              onClick={() =>
                document
                  .getElementById("tools")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              🚀 Explorar Comblocks
            </HeroButton>
          </HeroContainer>
        </Container>
      </HeroWrapper>
    </SectionWrapper>
  );
};

export default Hero;
