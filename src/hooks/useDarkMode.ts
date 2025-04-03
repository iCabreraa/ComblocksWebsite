import { useEffect, useState } from "react";

export const useDarkMode = (): [boolean, () => void] => {
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setEnabled(isDark);
  }, []);

  useEffect(() => {
    const className = "dark-mode";
    if (enabled) {
      document.body.classList.add(className);
      localStorage.theme = "dark";
    } else {
      document.body.classList.remove(className);
      localStorage.theme = "light";
    }
  }, [enabled]);

  const toggle = () => setEnabled((prev) => !prev);

  return [enabled, toggle];
};
