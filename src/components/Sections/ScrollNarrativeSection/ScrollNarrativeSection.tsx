import React from "react";
import {
  NarrativeSection,
  NarrativeWrapper,
  NarrativeTitle,
  NarrativeText,
} from "./ScrollNarrativeSection.styles";
import FloatingCubes from "@/components/FloatingCubes/FloatingCubes";
import { useTranslation } from "next-i18next";

const ScrollNarrativeSection = () => {
  const { t } = useTranslation("common");

  return (
    <NarrativeSection id="narrative">
      <FloatingCubes />
      <NarrativeWrapper>
        <NarrativeTitle>{t("narrative.title")}</NarrativeTitle>
        <NarrativeText>{t("narrative.subtitle")}</NarrativeText>
      </NarrativeWrapper>
    </NarrativeSection>
  );
};

export default ScrollNarrativeSection;
