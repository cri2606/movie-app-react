import { useState } from "react";
import { getDetails } from "../api/details";
import { MovieDetailsType, PersonDetailsType, TvDetailsType } from "../types/detailsTypes";
import { CardType } from "../types/cardType";

export const useCardButton = (cardType: CardType) => {
  const [details, setDetails] = useState<MovieDetailsType | TvDetailsType | PersonDetailsType>();

  const fetchDetails = async () => {
    const data = await getDetails({
      media_type: cardType.media_type,
      id: cardType.id,
    });
    setDetails(data);
  };

  return { fetchDetails, details };
};

