import React, { useEffect, useRef } from "react";
import {
  NarrativeSection,
  NarrativeWrapper,
  NarrativeCube,
  NarrativeTitle,
} from "./ScrollNarrativeSection.styles";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FiAlertTriangle,
  FiFolder,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const cubes = [
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiBarChart2 />, category: "recursos" },
];

const ScrollNarrativeSection = () => {
  const cubesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const elements = cubesRef.current;

    gsap.set(elements, {
      x: () => gsap.utils.random(-600, 600),
      y: () => gsap.utils.random(-300, 300),
      opacity: 0.4,
      scale: 0.9,
    });

    elements.forEach((el, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const spacing = 90;

      gsap.to(el, {
        x: col * spacing - spacing * 1.5,
        y: row * spacing - spacing,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#narrative",
          start: "top bottom",
          end: "bottom center",
          scrub: 1, // <- Sincroniza con el scroll
        },
      });
    });
  }, []);

  return (
    <NarrativeSection id="narrative">
      <NarrativeWrapper>
        <NarrativeTitle>¿Te suena este caos?</NarrativeTitle>
        {cubes.map((cube, index) => (
          <NarrativeCube
            key={index}
            $category={cube.category}
            ref={(el) => {
              if (el) cubesRef.current[index] = el;
            }}
          >
            {cube.icon}
          </NarrativeCube>
        ))}
      </NarrativeWrapper>
    </NarrativeSection>
  );
};

export default ScrollNarrativeSection;
