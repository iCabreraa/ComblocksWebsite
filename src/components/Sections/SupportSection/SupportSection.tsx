import React from "react";
import {
  Section,
  Container,
  Title,
  Grid,
  FormColumn,
  Label,
  Input,
  Textarea,
  SubmitButton,
  FAQColumn,
  QuestionBlock,
  Question,
  Answer,
} from "./SupportSection.styles";

const SupportSection = () => {
  return (
    <Section id="support">
      <Container>
        <Title>¿Tienes preguntas o necesitas ayuda?</Title>
        <Grid>
          <FormColumn>
            <Label htmlFor="name">Nombre</Label>
            <Input type="text" id="name" name="name" />

            <Label htmlFor="email">Correo electrónico</Label>
            <Input type="email" id="email" name="email" />

            <Label htmlFor="message">Mensaje</Label>
            <Textarea id="message" name="message" rows={5} />

            <SubmitButton aria-label="Enviar formulario de contacto">
              Enviar
            </SubmitButton>
          </FormColumn>

          <FAQColumn>
            <QuestionBlock>
              <Question>¿Qué es Comblocks?</Question>
              <Answer>
                Una solución modular para gestionar procesos, riesgos y
                documentación.
              </Answer>
            </QuestionBlock>
            <QuestionBlock>
              <Question>¿Es compatible con ISO 27001?</Question>
              <Answer>
                Sí, Comblocks está diseñado para apoyar sistemas de gestión
                basados en normas ISO.
              </Answer>
            </QuestionBlock>
          </FAQColumn>
        </Grid>
      </Container>
    </Section>
  );
};

export default SupportSection;
