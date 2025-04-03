import React, { useEffect, useState } from "react";
import { BackgroundWrapper, FloatingCube } from "./AnimatedBackground.styles";
import { useMounted } from "@/hooks/useMounted";

interface CubeProps {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

const AnimatedBackground = () => {
  const [cubes, setCubes] = useState<CubeProps[]>([]);
  const mounted = useMounted();

  useEffect(() => {
    const generateCubes = (): CubeProps[] =>
      Array.from({ length: 35 }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 20 + Math.random() * 50,
        delay: Math.random() * 3,
      }));

    setCubes(generateCubes());
  }, []);

  if (!mounted) return null;

  return (
    <BackgroundWrapper aria-hidden="true">
      {cubes.map((cube) => (
        <FloatingCube
          key={cube.id}
          $top={cube.top}
          $left={cube.left}
          $size={cube.size}
          $delay={cube.delay}
        />
      ))}
    </BackgroundWrapper>
  );
};

export default AnimatedBackground;
