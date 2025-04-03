// components/VisualEffects/ScrollNarrative.tsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollNarrative = () => {
  const cubesRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const cubes = document.querySelectorAll(
      ".floating-cube"
    ) as NodeListOf<HTMLElement>;

    // Seguridad: evitar errores si no se encontraron elementos
    if (!cubes || cubes.length === 0) return;

    cubesRef.current = cubes;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#integration",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    timeline.to(cubes, {
      x: (i) => (i % 5) * 40 - 80,
      y: (i) => Math.floor(i / 5) * 40 - 80,
      scale: 1.2,
      opacity: 0.8,
      duration: 2,
      ease: "power3.inOut",
      stagger: 0.02,
    });

    return () => {
      timeline.kill(); // Limpieza en caso de navegación
    };
  }, []);

  return null;
};

export default ScrollNarrative;
