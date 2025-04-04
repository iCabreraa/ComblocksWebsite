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
import { useTranslation } from "next-i18next";

const ToolCards = () => {
  const { t } = useTranslation("common");
  const [activeCategory, setActiveCategory] = useState("todos");

  const tools = [
    {
      id: "proyectos-1",
      category: "proyectos",
      icon: <FiCheckSquare size={28} />,
      title: t("tools.project.title"),
      description: t("tools.project.description"),
    },
    {
      id: "riesgos-1",
      category: "riesgos",
      icon: <FiShield size={28} />,
      title: t("tools.risk.title"),
      description: t("tools.risk.description"),
    },
    {
      id: "recursos-1",
      category: "recursos",
      icon: <FiFileText size={28} />,
      title: t("tools.documents.title"),
      description: t("tools.documents.description"),
    },
    {
      id: "proyectos-2",
      category: "proyectos",
      icon: <FiBarChart2 size={28} />,
      title: t("tools.dashboard.title"),
      description: t("tools.dashboard.description"),
    },
    {
      id: "proyectos-3",
      category: "proyectos",
      icon: <FiCalendar size={28} />,
      title: t("tools.roadmap.title"),
      description: t("tools.roadmap.description"),
    },
    {
      id: "soporte-1",
      category: "soporte",
      icon: <FiLifeBuoy size={28} />,
      title: t("tools.help.title"),
      description: t("tools.help.description"),
    },
    {
      id: "riesgos-2",
      category: "riesgos",
      icon: <FiTool size={28} />,
      title: t("tools.isms.title"),
      description: t("tools.isms.description"),
    },
    {
      id: "recursos-2",
      category: "recursos",
      icon: <FiGrid size={28} />,
      title: t("tools.resources.title"),
      description: t("tools.resources.description"),
    },
  ];

  const categories = ["todos", "proyectos", "riesgos", "soporte", "recursos"];

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
            {t(`categories.${category}`)}
          </FilterButton>
        ))}
      </FilterButtons>

      <ToolGrid>
        {tools
          .filter(
            (tool) =>
              activeCategory === "todos" || tool.category === activeCategory
          )
          .map((tool) => (
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
