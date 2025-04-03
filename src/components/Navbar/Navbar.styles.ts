import styled, { css } from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: var(--color-grey-900);
  box-shadow: var(--shadow-md);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 1.5rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-brand-100);
  cursor: pointer;
`;

export const LogoImage = styled.img`
  width: 44px;
  height: 44px;
  transition: filter 0.3s ease;

  body.dark-mode & {
    filter: brightness(1.2);
  }
`;

export const BrandName = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  font-family: "Space Grotesk", sans-serif;
  color: var(--color-brand-100);
`;

export const MenuGroup = styled.div`
  display: flex;
  gap: 2.8rem;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-brand-300);
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const DropdownMenu = styled.ul<{ $isVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
  margin-top: 0.8rem;
  background-color: var(--color-grey-800);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-md);
  list-style: none;
  padding: 1rem 0;
  min-width: 240px;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;

  ${({ $isVisible }) =>
    $isVisible &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    `}
`;

export const DropdownMenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.6rem;
  color: var(--color-grey-100);
  font-size: 1.6rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--hover-strong);
    color: var(--color-brand-100);
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AppButton = styled.a`
  background: linear-gradient(
    135deg,
    var(--color-brand-500),
    var(--color-brand-600)
  );
  color: var(--color-grey-0);
  padding: 0.9rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 14px rgba(0, 153, 255, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 153, 255, 0.5);
  }
`;

export const ThemeToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-grey-0);
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-brand-300);
  }
`;
