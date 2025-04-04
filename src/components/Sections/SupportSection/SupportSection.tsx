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
import { useTranslation } from "next-i18next";

const SupportSection = () => {
  const { t } = useTranslation("common");

  return (
    <Section id="support">
      <Container>
        <Title>{t("support.title")}</Title>
        <Grid>
          <FormColumn>
            <Label htmlFor="name">{t("support.form.name")}</Label>
            <Input type="text" id="name" name="name" />

            <Label htmlFor="email">{t("support.form.email")}</Label>
            <Input type="email" id="email" name="email" />

            <Label htmlFor="message">{t("support.form.message")}</Label>
            <Textarea id="message" name="message" rows={5} />

            <SubmitButton aria-label="Enviar formulario de contacto">
              {t("support.form.submit")}
            </SubmitButton>
          </FormColumn>

          <FAQColumn>
            <QuestionBlock>
              <Question>{t("support.faq.q1")}</Question>
              <Answer>{t("support.faq.a1")}</Answer>
            </QuestionBlock>
            <QuestionBlock>
              <Question>{t("support.faq.q2")}</Question>
              <Answer>{t("support.faq.a2")}</Answer>
            </QuestionBlock>
          </FAQColumn>
        </Grid>
      </Container>
    </Section>
  );
};

export default SupportSection;
