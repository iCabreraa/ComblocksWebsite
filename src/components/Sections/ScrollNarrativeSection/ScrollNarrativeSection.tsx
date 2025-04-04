import React from "react";
import {
  NarrativeSection,
  NarrativeWrapper,
  NarrativeTitle,
  NarrativeText,
} from "./ScrollNarrativeSection.styles";
import FloatingCubes from "@/components/FloatingCubes/FloatingCubes";

const ScrollNarrativeSection = () => {
  return (
    <NarrativeSection id="narrative">
      <FloatingCubes />
      <NarrativeWrapper>
        <NarrativeTitle>¿Te suena este caos?</NarrativeTitle>
        <NarrativeText>
          Comblocks transforma este caos en estructura. Observa cómo se
          organiza.
        </NarrativeText>
      </NarrativeWrapper>
    </NarrativeSection>
  );
};

export default ScrollNarrativeSection;
