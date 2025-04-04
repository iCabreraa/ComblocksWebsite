import React from "react";
import {
  NarrativeSection,
  NarrativeWrapper,
  NarrativeTitle,
} from "./ScrollNarrativeSection.styles";
import FloatingCubes from "@/components/FloatingCubes/FloatingCubes";

const ScrollNarrativeSection = () => {
  return (
    <NarrativeSection id="narrative">
      <FloatingCubes />
      <NarrativeWrapper>
        <NarrativeTitle>¿Te suena este caos?</NarrativeTitle>
      </NarrativeWrapper>
    </NarrativeSection>
  );
};

export default ScrollNarrativeSection;
