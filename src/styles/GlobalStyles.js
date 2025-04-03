import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* 🎨 COLOR SYSTEM ================================================== */
  :root {
    /* Light Mode - Grey Scale */
    --color-grey-0: #f4f8ff;
    --color-grey-50: #eaf2fd;
    --color-grey-100: #dde9fc;
    --color-grey-200: #cddafc;
    --color-grey-300: #b8c9e9;
    --color-grey-400: #94a3b8;
    --color-grey-500: #64748b;
    --color-grey-600: #475569;
    --color-grey-700: #334155;
    --color-grey-800: #1e293b;
    --color-grey-900: #0f172a;

    /* Light Mode - Brand */
    --color-brand-primary: #3b82f6;
    --color-brand-100: #a5d8ff;
    --color-brand-300: #60a5fa;
    --color-brand-500: #3b82f6;
    --color-brand-600: #2563eb;
    --color-brand-800: #1e3a8a;

    /* Feedback Colors */
    --color-green: #22c55e;
    --color-red: #ef4444;
    --color-yellow: #fcd34d;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.12);

    /* Borders */
    --border-radius-sm: 5px;
    --border-radius-md: 8px;
    --border-radius-lg: 12px;

    /* Hover + UI */
    --hover-light: rgba(0, 153, 255, 0.08);
    --hover-strong: rgba(0, 153, 255, 0.18);
    --backdrop-color: rgba(0, 0, 0, 0.1);
  }

  /* 🌑 DARK MODE ===================================================== */
  body.dark-mode {
    --color-grey-0: #0f172a;
    --color-grey-50: #1e293b;
    --color-grey-100: #1e293b;
    --color-grey-200: #334155;
    --color-grey-300: #475569;
    --color-grey-400: #64748b;
    --color-grey-500: #94a3b8;
    --color-grey-800: #e2e8f0;
    --color-grey-900: #f8fafc;

    --color-brand-100: #7dd3fc;
    --color-brand-300: #38bdf8;
    --color-brand-600: #3b82f6;
    --color-brand-800: #1e3a8a;

    --shadow-md: 0 4px 6px rgba(255, 255, 255, 0.08);
    --shadow-lg: 0 10px 15px rgba(255, 255, 255, 0.12);

    --hover-light: rgba(255, 255, 255, 0.05);
    --hover-strong: rgba(255, 255, 255, 0.08);

    background-color: var(--color-grey-50);
    color: var(--color-grey-800);
  }

  /* 🧱 BASE STYLES =================================================== */
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
    color: var(--color-grey-800);
    background-color: var(--color-grey-0);
    min-height: 100vh;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
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

  :focus-visible {
    outline: 2px solid var(--color-brand-600);
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
