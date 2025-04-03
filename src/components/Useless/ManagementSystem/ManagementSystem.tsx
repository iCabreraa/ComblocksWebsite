import React from "react";
import {
  MSSection,
  MSTitle,
  MSDescription,
  MSGraphic,
} from "./ManagementSystem.styles";
import Container from "../Layout/Container";
import SectionWrapper from "../Layout/SectionWrapper";

const ManagementSystem = () => (
  <SectionWrapper id="management">
    <Container>
      <MSSection>
        <MSTitle>¿Qué es un sistema de gestión (MS)?</MSTitle>
        <MSDescription>
          Un sistema de gestión es un enfoque estructurado que permite a las
          organizaciones mejorar procesos empresariales, asegurando calidad,
          gestión del riesgo y cumplimiento normativo.
        </MSDescription>
        <MSGraphic src="/images/hero-image.jpg" alt="Sistema de Gestión" />
      </MSSection>
    </Container>
  </SectionWrapper>
);

export default ManagementSystem;
