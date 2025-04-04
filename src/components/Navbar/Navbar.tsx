import React, { useState } from "react";
import {
  NavbarContainer,
  LogoContainer,
  LogoImage,
  BrandName,
  MenuGroup,
  DropdownWrapper,
  DropdownButton,
  DropdownMenu,
  DropdownMenuItem,
  NavCenter,
  NavRight,
  AppButton,
  ThemeToggleButton,
  LangButtonWrapper,
  FlagImage,
  FlagDropdown,
  FlagOption,
  FlagContainer,
  Separator,
  FlagButton,
} from "./Navbar.styles";

import WideContainer from "@/components/Layout/WideContainer";
import Link from "next/link";
import { useRouter } from "next/router";
import { Moon, Sun } from "react-feather";
import {
  FiFolder,
  FiShield,
  FiClipboard,
  FiInfo,
  FiGrid,
  FiMap,
  FiMail,
  FiHelpCircle,
  FiFileText,
  FiMessageSquare,
} from "react-icons/fi";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useTranslation } from "next-i18next";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [darkMode, toggleDarkMode] = useDarkMode();
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const handleEnter = (menu: string) => setActiveDropdown(menu);
  const handleLeave = () => setActiveDropdown(null);

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
    setShowLangDropdown(false);
  };

  const languageOptions = [
    { code: "en", label: "EN", src: "/icons/flags/en.png" },
    { code: "es", label: "ES", src: "/icons/flags/es.png" },
    { code: "nl", label: "NL", src: "/icons/flags/nl.png" },
  ];

  const currentLang = i18n.language;
  const current =
    languageOptions.find((l) => l.code === currentLang) || languageOptions[0];

  return (
    <NavbarContainer role="navigation" aria-label="Menú principal">
      <WideContainer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("hero")}
        >
          <LogoContainer>
            <LogoImage
              src={darkMode ? "/iconComblocks.png" : "/iconComblocks-light.png"}
              alt="Comblocks logo"
            />
            <BrandName>Comblocks</BrandName>
          </LogoContainer>
        </div>

        {/* Centro */}
        <NavCenter>
          <MenuGroup>
            <DropdownWrapper
              onMouseEnter={() => handleEnter("plataforma")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>{t("navbar.platform")}</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "plataforma"}>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiClipboard size={18} /> {t("navbar.projectManagement")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiShield size={18} /> {t("navbar.riskManagement")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiFolder size={18} /> {t("navbar.documentManagement")}
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>

            <DropdownWrapper
              onMouseEnter={() => handleEnter("explorar")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>{t("navbar.explore")}</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "explorar"}>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiInfo size={18} /> {t("navbar.whatIs")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("app")}>
                  <FiGrid size={18} /> {t("navbar.app")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("roadmap")}>
                  <FiMap size={18} /> {t("navbar.roadmap")}
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>
          </MenuGroup>

          {/* Controles de Experiencia */}
          <LangButtonWrapper>
            <ThemeToggleButton
              onClick={toggleDarkMode}
              aria-label="Cambiar tema"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </ThemeToggleButton>

            <Separator />

            <FlagContainer>
              <FlagButton onClick={() => setShowLangDropdown((prev) => !prev)}>
                <FlagImage src={current.src} alt={current.label} />
              </FlagButton>
              <FlagDropdown $visible={showLangDropdown}>
                {languageOptions
                  .filter((lang) => lang.code !== currentLang)
                  .map((lang) => (
                    <FlagOption
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      <FlagButton>
                        <FlagImage src={lang.src} alt={lang.label} />
                      </FlagButton>
                    </FlagOption>
                  ))}
              </FlagDropdown>
            </FlagContainer>
          </LangButtonWrapper>

          <MenuGroup>
            <DropdownWrapper
              onMouseEnter={() => handleEnter("recursos")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>{t("navbar.resources")}</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "recursos"}>
                <DropdownMenuItem onClick={() => scrollToSection("contact")}>
                  <FiMail size={18} /> {t("navbar.contact")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("faq")}>
                  <FiHelpCircle size={18} /> {t("navbar.faq")}
                </DropdownMenuItem>
                <Link href="/privacy">
                  <DropdownMenuItem>
                    <FiFileText size={18} /> {t("navbar.privacyPolicy")}
                  </DropdownMenuItem>
                </Link>
              </DropdownMenu>
            </DropdownWrapper>

            <DropdownWrapper
              onMouseEnter={() => handleEnter("soporte")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>{t("navbar.support")}</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "soporte"}>
                <DropdownMenuItem>
                  <FiMessageSquare size={18} /> {t("navbar.helpCenter")}
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>
          </MenuGroup>
        </NavCenter>

        {/* App */}
        <NavRight>
          <AppButton href="#app">{t("navbar.exploreApp")}</AppButton>
        </NavRight>
      </WideContainer>
    </NavbarContainer>
  );
};

export default Navbar;
