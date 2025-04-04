import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* === FUENTES BASE === */
  :root {
    /* Light Mode */
    --color-bg: #f4f8ff;
    --color-surface: #ffffff;
    --color-surface-alt: #eaf2fd;

    --text-primary: #0f172a;
    --text-secondary: #475569;

    --color-brand: #3b82f6;
    --color-brand-100: #60a5fa;
    --color-brand-300: #38bdf8;
    --color-brand-600: #2563eb;

    --color-glow: #7dd3fc;

    --color-green: #22c55e;
    --color-red: #ef4444;
    --color-yellow: #fcd34d;

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.12);
    --shadow-elevated: 0 8px 24px rgba(0, 153, 255, 0.08);

    --border-radius-sm: 5px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;

    --hover-light: rgba(0, 153, 255, 0.08);
    --hover-strong: rgba(0, 153, 255, 0.18);
    --backdrop-color: rgba(0, 0, 0, 0.1);
  }

  body.dark-mode {
    --color-bg: #0f172a;
    --color-surface: #1e293b;
    --color-surface-alt: #334155;

    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;

    --color-brand: #3b82f6;
    --color-glow: #38bdf8;

    --shadow-sm: 0 1px 2px rgba(255, 255, 255, 0.04);
    --shadow-md: 0 4px 6px rgba(255, 255, 255, 0.08);
    --shadow-lg: 0 10px 15px rgba(255, 255, 255, 0.12);
    --shadow-elevated: 0 8px 24px rgba(0, 153, 255, 0.2);

    --hover-light: rgba(255, 255, 255, 0.05);
    --hover-strong: rgba(255, 255, 255, 0.08);
  }

  /* === RESET Y BASE === */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    color: var(--text-primary);
    background-color: var(--color-bg);
    min-height: 100vh;
    line-height: 1.6;
  }

  a {
    color: var(--color-brand);
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: var(--color-brand-300);
    text-shadow: 0 0 8px var(--color-glow);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
  }

  h1 {
    font-size: 4.2rem;
  }

  h2 {
    font-size: 3.2rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--text-secondary);
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
    border: none;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  ul {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 2px;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
`;

export default GlobalStyles;
