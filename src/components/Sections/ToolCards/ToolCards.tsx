import React, { useState } from "react";
import {
  ToolSection,
  ToolGrid,
  FilterButtons,
  FilterButton,
  ToolCard,
  ToolIcon,
  ToolTitle,
  ToolDescription,
} from "./ToolCards.styles";

import {
  FiGrid,
  FiShield,
  FiFileText,
  FiCheckSquare,
  FiCalendar,
  FiLifeBuoy,
  FiBarChart2,
  FiTool,
} from "react-icons/fi";

const tools = [
  {
    id: "proyectos-1",
    category: "proyectos",
    icon: <FiCheckSquare size={28} />,
    title: "Gestión de Proyectos",
    description: "Organiza, asigna y haz seguimiento visual a tareas clave.",
  },
  {
    id: "riesgos-1",
    category: "riesgos",
    icon: <FiShield size={28} />,
    title: "Gestión de Riesgos",
    description: "Identifica, evalúa y mitiga riesgos desde un solo panel.",
  },
  {
    id: "recursos-1",
    category: "recursos",
    icon: <FiFileText size={28} />,
    title: "Gestión Documental",
    description: "Control de versiones, permisos y auditoría documental.",
  },
  {
    id: "proyectos-2",
    category: "proyectos",
    icon: <FiBarChart2 size={28} />,
    title: "Dashboard & App",
    description: "Visualiza métricas, flujos y estados de tu organización.",
  },
  {
    id: "proyectos-3",
    category: "proyectos",
    icon: <FiCalendar size={28} />,
    title: "Roadmap",
    description: "Explora el futuro de Comblocks y participa en su evolución.",
  },
  {
    id: "soporte-1",
    category: "soporte",
    icon: <FiLifeBuoy size={28} />,
    title: "Centro de Ayuda",
    description: "Resuelve dudas y consulta tutoriales rápidamente.",
  },
  {
    id: "riesgos-2",
    category: "riesgos",
    icon: <FiTool size={28} />,
    title: "Panel ISMS/ISO 27001",
    description: "Tu centro de comando para cumplimiento y auditorías.",
  },
  {
    id: "recursos-2",
    category: "recursos",
    icon: <FiGrid size={28} />,
    title: "Recursos",
    description: "Plantillas, manuales y contenido para potenciar tu gestión.",
  },
];

const categories = ["todos", "proyectos", "riesgos", "soporte", "recursos"];

const ToolCards = () => {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredTools =
    activeCategory === "todos"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  return (
    <ToolSection id="tools">
      <FilterButtons>
        {categories.map((category) => (
          <FilterButton
            key={category}
            onClick={() => setActiveCategory(category)}
            $active={activeCategory === category}
            $category={category}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </FilterButton>
        ))}
      </FilterButtons>

      <ToolGrid>
        {filteredTools.map((tool) => (
          <ToolCard key={tool.id} $category={tool.category}>
            <ToolIcon $category={tool.category}>{tool.icon}</ToolIcon>
            <ToolTitle>{tool.title}</ToolTitle>
            <ToolDescription>{tool.description}</ToolDescription>
          </ToolCard>
        ))}
      </ToolGrid>
    </ToolSection>
  );
};

export default ToolCards;
