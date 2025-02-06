import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useNavbar = (onSectionChange: (section: string) => void) => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "Trending Movies";
  });

  const [searchQuery, setSearchQuery] = useState(""); // Stato per la query di ricerca
  const navigate = useNavigate(); // Per navigare alla pagina di ricerca

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection);
  }, [activeSection]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("activeSection");
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Funzione per gestire la ricerca
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setOpen(false); // Chiude il menu responsive dopo la ricerca
    }
  };

  return {
    open,
    setOpen,
    activeSection,
    handleButtonClick,
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
};
