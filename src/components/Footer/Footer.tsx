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
  SocialIcons,
} from "./Footer.styles";
import { FaXTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa6";
import { useTranslation } from "next-i18next";
// import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation("common");
  // const router = useRouter();

  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedLang = e.target.value;
  //   router.push(router.pathname, router.asPath, { locale: selectedLang });
  // };

  return (
    <FooterContainer>
      <FooterTop>
        <FooterGrid>
          <FooterColumn>
            <FooterTitle>{t("footer.comblocks.title")}</FooterTitle>
            <FooterLink href="#">{t("footer.comblocks.vision")}</FooterLink>
            <FooterLink href="#">{t("footer.comblocks.exploreApp")}</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t("footer.resources.title")}</FooterTitle>
            <FooterLink href="#">{t("footer.resources.helpCenter")}</FooterLink>
            <FooterLink href="#">
              {t("footer.resources.documentation")}
            </FooterLink>
            <FooterLink href="#">{t("footer.resources.tutorials")}</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t("footer.legal.title")}</FooterTitle>
            <FooterLink href="#">{t("footer.legal.terms")}</FooterLink>
            <FooterLink href="#">{t("footer.legal.cookies")}</FooterLink>
            <FooterLink href="#">{t("footer.legal.privacy")}</FooterLink>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>{t("footer.social.title")}</FooterTitle>
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
        <Copyright>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
