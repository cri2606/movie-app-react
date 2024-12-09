import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useCardButton } from "../hooks/useCardButton";
import { CardType } from "../types/cardType";

export const Details = () => {
  const { state } = useLocation();
  const cardType: CardType = state.cardType;

  const { cardButtonType, fetchDetails } = useCardButton(cardType);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return (
    <div>
      <h1>{cardType.name}</h1>
      <p><strong>Type:</strong> {cardType.media_type}</p>
      <p><strong>ID:</strong> {cardType.id}</p>
      <p><strong>Description:</strong> {cardButtonType.description}</p>
    </div>
  );
};
