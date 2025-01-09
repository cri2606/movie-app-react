import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCardButton } from "./useCardButton";
import { CardType } from "../types/cardType";

export const useDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cardType: CardType = state.cardType;

  const { fetchDetails, details } = useCardButton(cardType);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleBackClick = () => {
    navigate("/"); // Torna alla pagina principale
  };

  const handleSectionChange = (section: string) => {
    localStorage.setItem("activeSection", section); // Aggiorna la sezione attiva
    navigate("/"); // Torna alla pagina principale
  };

  return {cardType, details, handleBackClick, handleSectionChange};
};
