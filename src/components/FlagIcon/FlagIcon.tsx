import React from "react";
import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 2px #fff) drop-shadow(0 0 6px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 4px #fff) drop-shadow(0 0 12px currentColor);
  }
`;

const StyledSvg = styled.svg<{ $color: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: transparent;
  color: ${(props) => props.$color};
  animation: ${pulse} 2.5s infinite ease-in-out;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

type Props = {
  lang: "es" | "en" | "nl";
  onClick?: () => void;
};

const FlagIcon = ({ lang, onClick }: Props) => {
  let svgContent;
  let color = "#ffffff";

  switch (lang) {
    case "es":
      color = "#ffcc00";
      svgContent = (
        <>
          <path fill="#f1c142" d="M1 10H31V22H1z" />
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
            fill="#a0251e"
          />
          <path
            d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24.5)"
            fill="#a0251e"
          />
        </>
      );
      break;
    case "en":
      color = "#60a5fa";
      svgContent = (
        <>
          <rect width="32" height="32" fill="#012169" />
          <path d="M0 0L32 32M32 0L0 32" stroke="#fff" strokeWidth="5" />
          <path d="M0 0L32 32M32 0L0 32" stroke="#c8102e" strokeWidth="3" />
        </>
      );
      break;
    case "nl":
      color = "#ff3300";
      svgContent = (
        <>
          <rect width="32" height="11" fill="#ae1c28" />
          <rect y="11" width="32" height="10" fill="#fff" />
          <rect y="21" width="32" height="11" fill="#21468b" />
        </>
      );
      break;
  }

  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      $color={color}
      onClick={onClick}
    >
      {svgContent}
    </StyledSvg>
  );
};

export default FlagIcon;
