import { useEffect, useState } from "react";
import { Lang } from "../App";

export function usePreferences() {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = localStorage.getItem("lang");
    return stored === "es" || stored === "en" ? stored : "en";
  });

  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return { lang, setLang, darkMode, setDarkMode };
}
