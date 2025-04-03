import React from "react";
import {
  Section,
  Container,
  Title,
  Description,
  ImageWrapper,
  StyledImage,
} from "./WhatIsManagementSystemSection.styles";

const WhatIsManagementSystemSection = () => {
  return (
    <Section id="what-is-ms">
      <Container>
        <Title>¿Qué es un sistema de gestión (MS)?</Title>
        <Description>
          Un sistema de gestión es un enfoque estructurado que permite a las
          organizaciones mejorar procesos empresariales, asegurando calidad,
          gestión del riesgo y cumplimiento normativo.
        </Description>
        <ImageWrapper>
          <StyledImage
            src="/images/hero-image2.png"
            alt="Visualización de un sistema de gestión"
          />
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default WhatIsManagementSystemSection;
