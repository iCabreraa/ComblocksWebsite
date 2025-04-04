// components/Footer/Footer.tsx

import React from "react";
import {
  FooterContainer,
  FooterTop,
  FooterGrid,
  FooterColumn,
  FooterTitle,
  FooterLink,
  FooterBottom,
  Copyright,
  LanguageSelector,
  SocialIcons,
} from "./Footer.styles";
import { FaXTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>Comblocks</FooterTitle>
            <FooterLink href="#">Visión</FooterLink>
            <FooterLink href="#">Explorar App</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Recursos</FooterTitle>
            <FooterLink href="#">Centro de ayuda</FooterLink>
            <FooterLink href="#">Documentación</FooterLink>
            <FooterLink href="#">Tutoriales</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Legal</FooterTitle>
            <FooterLink href="#">Términos y condiciones</FooterLink>
            <FooterLink href="#">Política de cookies</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Redes</FooterTitle>
            <SocialIcons>
              <a href="#">
                <FaXTwitter />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaGithub />
              </a>
            </SocialIcons>
          </FooterColumn>
        </FooterGrid>
      </FooterTop>

      <FooterBottom>
        <LanguageSelector>
          <label htmlFor="language">Idioma:</label>
          <select id="language">
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </LanguageSelector>
        <Copyright>
          © {new Date().getFullYear()} Comblocks. Todos los derechos reservados.
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
