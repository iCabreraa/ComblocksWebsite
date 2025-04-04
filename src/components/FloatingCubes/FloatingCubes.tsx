// components/FloatingCubes/FloatingCubes.tsx

import React, { useEffect, useRef } from "react";
import { FloatingCube } from "./FloatingCubes.styles";
import {
  FiAlertTriangle,
  FiFolder,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cubesData = [
  // Fila 1
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },

  // Fila 2
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },

  // Fila 3
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },

  // Fila 4
  { icon: <FiFolder />, category: "proyectos" },
  { icon: <FiAlertTriangle />, category: "riesgos" },
  { icon: <FiUsers />, category: "soporte" },
  { icon: <FiBarChart2 />, category: "recursos" },
];

const FloatingCubes = () => {
  const cubesRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const narrative = containerRef.current;
    if (!narrative) return;

    const spacing = 80;

    cubesRef.current.forEach((el, i) => {
      const x = gsap.utils.random(-400, 400);
      const y = gsap.utils.random(-300, 300);
      el.dataset.initialX = String(x);
      el.dataset.initialY = String(y);

      gsap.set(el, {
        x,
        y,
        opacity: 0.5,
        scale: 0.9,
      });
    });

    ScrollTrigger.create({
      trigger: narrative,
      start: "top center", // ← Cambio aquí
      end: "center center", // ← Y aquí
      scrub: 0.6,
      onUpdate: (self) => {
        const progress = self.progress;

        const bounds = narrative.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;

        const sectionTop = bounds.top + scrollY;
        const sectionHeight = bounds.height;

        const centerX = narrative.offsetWidth / 2;
        const centerY = sectionHeight / 2;

        cubesRef.current.forEach((el, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const targetX = col * spacing - spacing * 1.5;
          const targetY = row * spacing - spacing;

          const initialX = parseFloat(el.dataset.initialX || "0");
          const initialY = parseFloat(el.dataset.initialY || "0");

          const currentX = gsap.utils.interpolate(initialX, targetX, progress);
          const currentY = gsap.utils.interpolate(initialY, targetY, progress);

          gsap.to(el, {
            x: currentX,
            y: currentY,
            opacity: 0.4 + 0.6 * progress,
            scale: 0.9 + 0.1 * progress,
            duration: 0.3,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      },
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
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
