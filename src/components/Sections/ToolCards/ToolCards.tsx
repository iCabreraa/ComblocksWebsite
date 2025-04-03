// ToolCards.tsx
import React from "react";
import {
  CardsGrid,
  SectionSubtitle,
  SectionTitle,
  StyledToolCardsSection,
  IntroBlock,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
} from "./ToolCards.styles";
import SectionWrapper from "@/components/Layout/SectionWrapper";
import { FiCheckCircle, FiShield, FiSettings } from "react-icons/fi";

const tools = [
  {
    id: 1,
    title: "Gestión de Proyectos",
    description:
      "Planifica, organiza y ejecuta proyectos con total visibilidad y control.",
    icon: <FiCheckCircle />,
  },
  {
    id: 2,
    title: "Gestión de Riesgos",
    description:
      "Identifica, evalúa y mitiga riesgos estratégicos y operacionales fácilmente.",
    icon: <FiShield />,
  },
  {
    id: 3,
    title: "Gestión Documental",
    description:
      "Centraliza documentos clave con trazabilidad, seguridad y acceso controlado.",
    icon: <FiSettings />,
  },
];

const ToolCards = () => {
  return (
    <SectionWrapper id="tools">
      <StyledToolCardsSection>
        <IntroBlock>
          <SectionTitle>Herramientas Comblocks</SectionTitle>
          <SectionSubtitle>
            Organiza, gestiona y automatiza. Descubre todo lo que puedes hacer
            con nuestros bloques.
          </SectionSubtitle>
        </IntroBlock>

        <CardsGrid>
          {tools.map((tool) => (
            <Card key={tool.id}>
              <CardIcon>{tool.icon}</CardIcon>
              <CardTitle>{tool.title}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </Card>
          ))}
        </CardsGrid>
      </StyledToolCardsSection>
    </SectionWrapper>
  );
};

export default ToolCards;
