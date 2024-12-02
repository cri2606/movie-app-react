import { useState } from "react";
import { MovieDetailsType, TvDetailsType, PersonDetailsType } from "../types/detailsTypes";
import { CardType } from "../types/cardType";
import { CardButtonType } from "../types/cardButtonType";
import { getDetails } from "../api/details";

export const useCardButton = (cardType: CardType) => {
  const [details, setDetails] = useState<MovieDetailsType | TvDetailsType | PersonDetailsType>();

  const fetchDetails = async () => {
    const data = await getDetails({
      media_type: cardType.media_type,
      id: cardType.id,
    });
    setDetails(data);
  };

  let cardButtonType: CardButtonType = { description: "" };

  if (details) {
    switch (cardType.media_type) {
      case "movie":
        cardButtonType = { description: (details as MovieDetailsType).overview };
        break;
      case "person":
        cardButtonType = { description: (details as PersonDetailsType).biography };
        break;
      case "tv":
        cardButtonType = { description: (details as TvDetailsType).overview };
        break;
    }
  }

  return { cardButtonType, fetchDetails };
};
