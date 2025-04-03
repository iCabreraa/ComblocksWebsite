import React, { useState } from "react";
import {
  TabsContainer,
  TabTitle,
  StyledTabList,
  StyledTab,
  TabContent,
} from "./InfoTabs.styles";
import SectionWrapper from "../Layout/SectionWrapper";
import Container from "../Layout/Container";

const tabs = [
  {
    title: "¿Qué es Comblocks?",
    content:
      "Comblocks proporciona una solución fiable para racionalizar y optimizar sistemas de gestión...",
  },
  {
    title: "¿Por qué elegir Comblocks?",
    content: "Plataforma todo en uno, segura, confiable y siempre actualizada.",
  },
];

const InfoTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SectionWrapper id="infotabs">
      <Container>
        <TabsContainer>
          <TabTitle>Comblocks en Detalle</TabTitle>
          <StyledTabList>
            {tabs.map((tab, idx) => (
              <StyledTab
                key={tab.title}
                selected={selectedIndex === idx}
                onClick={() => setSelectedIndex(idx)}
              >
                {tab.title}
              </StyledTab>
            ))}
          </StyledTabList>
          <TabContent>{tabs[selectedIndex].content}</TabContent>
        </TabsContainer>
      </Container>
    </SectionWrapper>
  );
};

export default InfoTabs;
