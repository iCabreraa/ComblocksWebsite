// WhatIsManagementSystemSection.tsx (versión simplificada)
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 8rem 2rem;
  background: #0a0f1c;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.4rem;
  line-height: 1.8;
  opacity: 0.9;
`;

const WhatIsManagementSystemSection = () => (
  <Section>
    <Title>¿Qué es un Sistema de Gestión?</Title>
    <Paragraph>
      Es una forma estructurada de organizar la información y los procesos de tu
      empresa para alcanzar objetivos. Comblocks convierte esa teoría en
      herramientas prácticas que puedes usar desde el primer día.
    </Paragraph>
  </Section>
);

export default WhatIsManagementSystemSection;
