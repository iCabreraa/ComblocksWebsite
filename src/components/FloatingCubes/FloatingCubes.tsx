// components/FloatingCubes/FloatingCubes.tsx

import React, { useLayoutEffect, useRef } from "react";
import { FloatingCube, NarrativeMessage } from "./FloatingCubes.styles";
import {
  FiFolder,
  FiAlertTriangle,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "next-i18next";
import type { JSX } from "react";

gsap.registerPlugin(ScrollTrigger);

// ✨ Define tipo seguro para categoría
export type Category = "proyectos" | "riesgos" | "soporte" | "recursos";

// ✨ Matriz con categorías por celda
const logoMatrix: (Category | "")[][] = [
  [
    "",
    "",
    "",
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "",
    "recursos",
    "recursos",
    "recursos",
    "",
    "",
  ],
  [
    "",
    "riesgos",
    "riesgos",
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "recursos",
    "recursos",
    "recursos",
    "recursos",
    "recursos",
    "",
  ],
  [
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "proyectos",
    "",
    "soporte",
    "",
    "proyectos",
    "",
    "recursos",
    "recursos",
    "recursos",
  ],
  [
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "proyectos",
    "",
    "soporte",
    "",
    "proyectos",
    "",
    "recursos",
    "recursos",
    "recursos",
  ],
  [
    "",
    "riesgos",
    "riesgos",
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "recursos",
    "recursos",
    "recursos",
    "recursos",
    "recursos",
    "",
  ],
  [
    "",
    "",
    "",
    "riesgos",
    "riesgos",
    "riesgos",
    "",
    "",
    "recursos",
    "recursos",
    "recursos",
    "",
    "",
  ],
];

// ✨ Iconos por categoría
const categoryIconMap: Record<Category, JSX.Element> = {
  proyectos: <FiFolder />,
  riesgos: <FiAlertTriangle />,
  soporte: <FiUsers />,
  recursos: <FiBarChart2 />,
};

// ✨ Construcción de datos para los cubos
type CubeData = {
  row: number;
  col: number;
  category: keyof typeof categoryIconMap;
  icon: JSX.Element;
};

const cubesData: CubeData[] = logoMatrix.flatMap((row, rowIndex) =>
  row
    .map((category, colIndex) =>
      category
        ? {
            row: rowIndex,
            col: colIndex,
            category: category as keyof typeof categoryIconMap,
            icon: categoryIconMap[category as keyof typeof categoryIconMap],
          }
        : null
    )
    .filter((item): item is CubeData => item !== null)
);

const FloatingCubes = () => {
  const { t } = useTranslation("common");
  const cubesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const narrative = containerRef.current;
      if (!narrative) return;

      const spacing = 42;
      const numCols = logoMatrix[0].length;
      const numRows = logoMatrix.length;
      const offsetX = ((numCols - 1) * spacing) / 2;
      const offsetY = ((numRows - 1) * spacing) / 2;

      cubesRef.current.forEach((el) => {
        const x = gsap.utils.random(-700, 700);
        const y = gsap.utils.random(-500, 500);
        el.dataset.initialX = String(x);
        el.dataset.initialY = String(y);
        gsap.set(el, { x, y, opacity: 0.3, scale: 0.7 });
        gsap.to(el, {
          y: `+=6`,
          duration: 2.5 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      ScrollTrigger.create({
        trigger: narrative,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const p =
            progress < 0.4
              ? progress / 0.4
              : progress > 0.5
              ? (1 - progress) / 0.3
              : 1;

          if (textRef.current) {
            const opacity =
              progress >= 0.4 && progress <= 0.5
                ? 1
                : 1 - Math.abs(progress - 0.5) * 5;
            gsap.to(textRef.current, {
              opacity,
              y: -10 + 10 * (1 - opacity),
              ease: "power2.out",
              duration: 0.4,
            });
          }

          cubesRef.current.forEach((el, i) => {
            const { row, col } = cubesData[i]!;
            const targetX = col * spacing - offsetX;
            const targetY = row * spacing - offsetY;
            const initialX = parseFloat(el.dataset.initialX || "0");
            const initialY = parseFloat(el.dataset.initialY || "0");
            const waveDelay = col / numCols;
            const waveHue = 0 + 360 * waveDelay;

            const currentX = gsap.utils.interpolate(initialX, targetX, p);
            const currentY = gsap.utils.interpolate(initialY, targetY, p);

            gsap.to(el, {
              x: currentX,
              y: currentY,
              opacity: 0.3 + 0.7 * p,
              scale: 0.7 + 0.3 * p,
              duration: 0.3,
              delay: 0.1 * p * waveDelay,
              ease: "power3.out",
              overwrite: "auto",
              filter: `hue-rotate(${waveHue}deg)`,
            });
          });
        },
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <NarrativeMessage ref={textRef}>
        {t("floatingCubes.message")}
      </NarrativeMessage>

      {cubesData.map((cube, index) => (
        <FloatingCube
          key={index}
          ref={(el) => {
            if (el) cubesRef.current[index] = el;
          }}
          $category={cube.category}
        >
          {cube.icon}
        </FloatingCube>
      ))}
    </div>
  );
};

export default FloatingCubes;
