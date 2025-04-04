// components/VisualEffects/ScrollNarrative.tsx
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useMounted } from "@/hooks/useMounted";

gsap.registerPlugin(ScrollTrigger);

const ScrollNarrative = () => {
  const mounted = useMounted();

  useEffect(() => {
    if (!mounted) return;

    const cubes = document.querySelectorAll(
      ".floating-cube"
    ) as NodeListOf<HTMLElement>;

    if (!cubes || cubes.length === 0) return;

    // Etapa de caos (ToolCards)
    gsap.to(cubes, {
      scrollTrigger: {
        trigger: "#tools",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      x: () => gsap.utils.random(-200, 200),
      y: () => gsap.utils.random(-150, 150),
      rotation: () => gsap.utils.random(-180, 180),
      opacity: 0.5,
      scale: 0.8,
      ease: "expo.out",
      stagger: 0.01,
    });

    // Etapa de orden: al llegar a Integration
    gsap.to(cubes, {
      scrollTrigger: {
        trigger: "#integration",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      x: (i) => {
        // Forma ∞ (inspiración cartesiana)
        const theta = (i / cubes.length) * 2 * Math.PI;
        const a = 120; // escala
        return (a * Math.sin(theta)) / (1 + Math.pow(Math.cos(theta), 2));
      },
      y: (i) => {
        const theta = (i / cubes.length) * 2 * Math.PI;
        const a = 120;
        return (
          (a * Math.sin(theta) * Math.cos(theta)) /
          (1 + Math.pow(Math.cos(theta), 2))
        );
      },
      rotation: 0,
      scale: 1,
      opacity: 1,
      ease: "power3.inOut",
      stagger: 0.02,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  return null;
};

export default ScrollNarrative;
