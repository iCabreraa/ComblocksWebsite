import React from "react";
import { useForm } from "react-hook-form";
import {
  ContactSection,
  ContactTitle,
  Form,
  Input,
  Textarea,
  Button,
  Error,
} from "./ContactForm.styles";
import SectionWrapper from "../Layout/SectionWrapper";
import Container from "../Layout/Container";

type ContactInputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactInputs>();

  const onSubmit = (data: ContactInputs) => {
    console.log("Mensaje enviado:", data);
    // Futuro: enviar a Supabase, EmailJS, etc.
  };

  return (
    <SectionWrapper id="contact">
      <Container>
        <ContactSection>
          <ContactTitle>¿Tienes preguntas?</ContactTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              placeholder="Tu nombre"
              {...register("name", { required: "El nombre es obligatorio" })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}

            <Input
              type="email"
              placeholder="Tu correo electrónico"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}

            <Textarea
              placeholder="Tu mensaje"
              {...register("message", {
                required: "El mensaje es obligatorio",
              })}
            />
            {errors.message && <Error>{errors.message.message}</Error>}

            <Button type="submit">Enviar mensaje</Button>
          </Form>
        </ContactSection>
      </Container>
    </SectionWrapper>
  );
};

export default ContactForm;
