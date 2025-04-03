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
  NavRight,
  AppButton,
  ThemeToggleButton,
} from "./Navbar.styles";

import WideContainer from "@/components/Layout/WideContainer";
import Link from "next/link";
import { Moon, Sun } from "react-feather";
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
        <div
          style={{ cursor: "pointer" }}
          onClick={() => scrollToSection("hero")}
        >
          <LogoContainer>
            <LogoImage
              src={darkMode ? "/iconComblocks-light.png" : "/iconComblocks.png"}
              alt="Comblocks logo"
            />
            <BrandName>Comblocks</BrandName>
          </LogoContainer>
        </div>

        <MenuGroup>
          <DropdownWrapper
            onMouseEnter={() => handleEnter("plataforma")}
            onMouseLeave={handleLeave}
          >
            <DropdownButton
              aria-haspopup="true"
              aria-expanded={activeDropdown === "plataforma"}
              role="button"
              tabIndex={0}
            >
              Plataforma
            </DropdownButton>
            <DropdownMenu $isVisible={activeDropdown === "plataforma"}>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("tools")}
                role="menuitem"
                tabIndex={0}
              >
                Gestión de Proyectos
              </DropdownMenuItem>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("tools")}
                role="menuitem"
                tabIndex={0}
              >
                Gestión de Riesgos
              </DropdownMenuItem>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("tools")}
                role="menuitem"
                tabIndex={0}
              >
                Gestión Documental
              </DropdownMenuItem>
            </DropdownMenu>
          </DropdownWrapper>

          <DropdownWrapper
            onMouseEnter={() => handleEnter("explorar")}
            onMouseLeave={handleLeave}
          >
            <DropdownButton
              aria-haspopup="true"
              aria-expanded={activeDropdown === "explorar"}
              role="button"
              tabIndex={0}
            >
              Explorar
            </DropdownButton>
            <DropdownMenu $isVisible={activeDropdown === "explorar"}>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("tools")}
                role="menuitem"
                tabIndex={0}
              >
                ¿Qué es?
              </DropdownMenuItem>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("app")}
                role="menuitem"
                tabIndex={0}
              >
                App
              </DropdownMenuItem>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("roadmap")}
                role="menuitem"
                tabIndex={0}
              >
                Roadmap
              </DropdownMenuItem>
            </DropdownMenu>
          </DropdownWrapper>

          <DropdownWrapper
            onMouseEnter={() => handleEnter("recursos")}
            onMouseLeave={handleLeave}
          >
            <DropdownButton
              aria-haspopup="true"
              aria-expanded={activeDropdown === "recursos"}
              role="button"
              tabIndex={0}
            >
              Recursos
            </DropdownButton>
            <DropdownMenu $isVisible={activeDropdown === "recursos"}>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("contact")}
                role="menuitem"
                tabIndex={0}
              >
                Contacto
              </DropdownMenuItem>
              <DropdownMenuItem
                as="div"
                onClick={() => scrollToSection("faq")}
                role="menuitem"
                tabIndex={0}
              >
                FAQ
              </DropdownMenuItem>
              <Link href="/privacy">
                <DropdownMenuItem as="div" role="menuitem" tabIndex={0}>
                  Política de Privacidad
                </DropdownMenuItem>
              </Link>
            </DropdownMenu>
          </DropdownWrapper>
        </MenuGroup>

        <NavRight>
          <ThemeToggleButton onClick={toggleDarkMode} aria-label="Cambiar tema">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </ThemeToggleButton>
          <AppButton href="/app">Explorar App</AppButton>
        </NavRight>
      </WideContainer>
    </NavbarContainer>
  );
};

export default Navbar;
