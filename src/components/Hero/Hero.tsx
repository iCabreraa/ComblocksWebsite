import React, { useEffect, useState } from "react";
import {
  HeroWrapper,
  HeroContainer,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  HeroOverlay,
  CubeGrid,
  Cube,
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
      <HeroWrapper>
        <HeroOverlay />
        <AnimatedBackground />
        <CubeGrid>
          {cubes.map(({ id, top, left, size }) => (
            <Cube key={id} $top={top} $left={left} $size={size} />
          ))}
        </CubeGrid>

        <Container>
          <HeroContainer>
            <HeroTitle>
              Simplifying your ISMS, <span className="highlight">Securing</span>{" "}
              Your Future.
            </HeroTitle>
            <HeroSubtitle>
              Descubre cómo <strong>Comblocks</strong> optimiza y simplifica tu
              gestión empresarial
            </HeroSubtitle>
            <HeroButton aria-label="Explorar Comblocks" role="button">
              🚀 Explorar Comblocks
            </HeroButton>
          </HeroContainer>
        </Container>
      </HeroWrapper>
    </SectionWrapper>
  );
};

export default Hero;
