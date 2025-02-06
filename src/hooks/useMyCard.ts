import { MovieType, TvType, PersonType } from "../types/elementTypes";
import { CardType } from "../types/cardType";
import { useNavigate, useLocation } from "react-router";

export const useMyCard = (element: MovieType | TvType | PersonType) => {
  const location = useLocation();
  const navigate = useNavigate();
  let cardType: CardType = { id: 0, media_type: "person" };

  const mediaType = element.media_type || "person";
  
  const handleClick = () => {
    if (location.pathname !== "/") return;
    navigate(`/${mediaType}/${cardType.id}`, { state: { cardType } });
  };

  switch (mediaType) {
    case "movie":
      cardType = {
        id: element.id,
        media_type: element.media_type,
        name: (element as MovieType).title,
        image: (element as MovieType).backdrop_path,
        poster: (element as MovieType).poster_path,
        description: (element as MovieType).overview,
      };
      break;
    case "person":
      cardType = {
        id: element.id,
        media_type: element.media_type,
        name: (element as PersonType).name,
        image: (element as PersonType).profile_path,
        description:
          "Role: " +
          (element as PersonType).known_for_department +
          "\nPopularity: " +
          (element as PersonType).popularity,
          
      };
      break;
    case "tv":
      cardType = {
        id: element.id,
        media_type: element.media_type,
        name: (element as TvType).name,
        image: (element as TvType).backdrop_path,
        poster: (element as TvType).poster_path,
        description: (element as TvType).overview,
      };
      break;
  }
  return { cardType, handleClick };
};
