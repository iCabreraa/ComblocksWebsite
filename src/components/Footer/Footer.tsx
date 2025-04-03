import React from "react";
import {
  FooterContainer,
  FooterContent,
  FooterLeft,
  FooterRight,
  FooterLink,
  FooterText,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <FooterText>
            © {new Date().getFullYear()} Comblocks. Todos los derechos
            reservados.
          </FooterText>
        </FooterLeft>
        <FooterRight>
          <FooterLink href="/privacy">Política de Privacidad</FooterLink>
          <FooterLink href="/terms">Términos y Condiciones</FooterLink>
          <FooterLink href="mailto:info@comblocks.io">Contacto</FooterLink>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
