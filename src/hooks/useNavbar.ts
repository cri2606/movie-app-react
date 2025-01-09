import { useState, useEffect } from "react";

export const useNavbar = (onSectionChange: (section: string) => void) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    // Recupera la sezione dal localStorage o usa 'Trending Movies' come default
    return localStorage.getItem("activeSection") || "Trending Movies";
  });

  // Salva la sezione attiva nel localStorage ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  // Resetta la sezione attiva quando l'applicazione viene chiusa
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("activeSection"); // Rimuove lo stato salvato
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleButtonClick = (section: string) => {
    setActiveSection(section);
    onSectionChange(section);
  };

  // Chiude il responsive menu quando la pagina torna a larghezza desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {open, setOpen, activeSection, handleButtonClick};
};
