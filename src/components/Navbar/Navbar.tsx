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
} from "./Navbar.styles";

import WideContainer from "@/components/Layout/WideContainer";
import Link from "next/link";
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

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [darkMode, toggleDarkMode] = useDarkMode();

  const handleEnter = (menu: string) => setActiveDropdown(menu);
  const handleLeave = () => setActiveDropdown(null);

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
              <DropdownButton>Plataforma</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "plataforma"}>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiClipboard size={18} /> Gestión de Proyectos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiShield size={18} /> Gestión de Riesgos
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiFolder size={18} /> Gestión Documental
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>

            <DropdownWrapper
              onMouseEnter={() => handleEnter("explorar")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>Explorar</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "explorar"}>
                <DropdownMenuItem onClick={() => scrollToSection("tools")}>
                  <FiInfo size={18} /> ¿Qué es?
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("app")}>
                  <FiGrid size={18} /> App
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("roadmap")}>
                  <FiMap size={18} /> Roadmap
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>
          </MenuGroup>

          <ThemeToggleButton onClick={toggleDarkMode} aria-label="Cambiar tema">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeToggleButton>

          <MenuGroup>
            <DropdownWrapper
              onMouseEnter={() => handleEnter("recursos")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>Recursos</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "recursos"}>
                <DropdownMenuItem onClick={() => scrollToSection("contact")}>
                  <FiMail size={18} /> Contacto
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("faq")}>
                  <FiHelpCircle size={18} /> FAQ
                </DropdownMenuItem>
                <Link href="/privacy">
                  <DropdownMenuItem>
                    <FiFileText size={18} /> Política de Privacidad
                  </DropdownMenuItem>
                </Link>
              </DropdownMenu>
            </DropdownWrapper>

            <DropdownWrapper
              onMouseEnter={() => handleEnter("soporte")}
              onMouseLeave={handleLeave}
            >
              <DropdownButton>Soporte</DropdownButton>
              <DropdownMenu $isVisible={activeDropdown === "soporte"}>
                <DropdownMenuItem>
                  <FiMessageSquare size={18} /> Centro de Ayuda
                </DropdownMenuItem>
              </DropdownMenu>
            </DropdownWrapper>
          </MenuGroup>
        </NavCenter>

        {/* App */}
        <NavRight>
          <AppButton href="#app">Explorar App</AppButton>
        </NavRight>
      </WideContainer>
    </NavbarContainer>
  );
};

export default Navbar;
