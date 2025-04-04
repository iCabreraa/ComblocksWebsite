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
import { useTranslation } from "next-i18next";

interface CubeProps {
  id: number;
  top: number;
  left: number;
  size: number;
}

const Hero = () => {
  const [cubes, setCubes] = useState<CubeProps[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useTranslation("common");

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
              <Line1>{t("hero.title1")}</Line1>
              <Line2>{t("hero.title2")}</Line2>
            </TitleWrapper>
            <HeroSubtitle>{t("hero.subtitle")}</HeroSubtitle>
            <HeroButton
              onClick={() =>
                document
                  .getElementById("tools")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              🚀 {t("hero.cta")}
            </HeroButton>
          </HeroContainer>
        </Container>
      </HeroWrapper>
    </SectionWrapper>
  );
};

export default Hero;
