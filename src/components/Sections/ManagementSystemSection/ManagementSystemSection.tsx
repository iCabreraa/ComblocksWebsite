import React from "react";
import {
  Section,
  Title,
  Description,
  CubeGrid,
  Cube,
} from "./ManagementSystemSection.styles";

const modules = [
  { label: "Riesgos", icon: "🔐" },
  { label: "Calidad", icon: "📊" },
  { label: "Auditoría", icon: "🔍" },
  { label: "Compliance", icon: "📑" },
  { label: "Procesos", icon: "⚙️" },
  { label: "Usuarios", icon: "👥" },
];

const ManagementSystemSection = () => {
  return (
    <Section id="management">
      <Title>Unifica tu organización en un solo sistema de gestión</Title>
      <Description>
        Al llegar aquí, los módulos clave se integran en una estructura sólida y
        visual. Cada cubo representa una funcionalidad esencial de Comblocks.
      </Description>
      <CubeGrid>
        {modules.map((mod, i) => (
          <Cube key={i} style={{ transform: `rotate(${i * 10}deg)` }}>
            {mod.icon}
          </Cube>
        ))}
      </CubeGrid>
    </Section>
  );
};

export default ManagementSystemSection;
