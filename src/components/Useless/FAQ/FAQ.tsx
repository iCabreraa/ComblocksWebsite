import React, { useState } from "react";
import {
  FAQSection,
  FAQTitle,
  Question,
  QuestionHeader,
  Answer,
} from "./FAQ.styles";
import SectionWrapper from "../Layout/SectionWrapper";
import Container from "../Layout/Container";

const faqData = [
  {
    question: "¿Qué es Comblocks?",
    answer:
      "Comblocks es una plataforma todo-en-uno para la gestión de sistemas de información, cumplimiento y procesos.",
  },
  {
    question: "¿Es segura la plataforma?",
    answer:
      "Sí. Utilizamos estándares de seguridad avanzados y almacenamiento en la nube cifrado.",
  },
  {
    question: "¿Está adaptada para certificaciones como ISO 27001?",
    answer:
      "Totalmente. Comblocks fue diseñada para facilitar auditorías y certificaciones ISO.",
  },
  {
    question: "¿Puedo usar Comblocks en una empresa pequeña?",
    answer:
      "Sí. Comblocks es modular y se adapta tanto a startups como a grandes corporaciones.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <Container>
        <FAQSection>
          <FAQTitle>Preguntas Frecuentes</FAQTitle>
          {faqData.map((item, index) => (
            <Question key={index}>
              <QuestionHeader onClick={() => toggle(index)}>
                {item.question}
              </QuestionHeader>
              {activeIndex === index && <Answer>{item.answer}</Answer>}
            </Question>
          ))}
        </FAQSection>
      </Container>
    </SectionWrapper>
  );
};

export default FAQ;
