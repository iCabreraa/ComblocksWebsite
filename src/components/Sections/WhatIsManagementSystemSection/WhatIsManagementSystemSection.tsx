import React from "react";
import styled from "styled-components";
import { useTranslation } from "next-i18next";

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

const WhatIsManagementSystemSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section>
      <Title>{t("managementSystem.title")}</Title>
      <Paragraph>{t("managementSystem.description")}</Paragraph>
    </Section>
  );
};

export default WhatIsManagementSystemSection;
