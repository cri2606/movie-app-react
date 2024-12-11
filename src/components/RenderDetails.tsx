import { MovieDetailsType, TvDetailsType, PersonDetailsType } from "../types/detailsTypes";
import { CardType } from "../types/cardType";

type RenderDetailsProps = {
  cardType: CardType;
  details: MovieDetailsType | TvDetailsType | PersonDetailsType;
};

export const RenderDetails = ({ cardType, details } : RenderDetailsProps) => {
  if (!details) return <p>Loading...</p>;

  switch (cardType.media_type) {
    case "movie":
      const movieDetails = details as MovieDetailsType;
      return (
        <>
          <p><strong>Title:</strong> {movieDetails.title}</p>
          <p><strong>Overview:</strong> {movieDetails.overview}</p>
          <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
        </>
      );
    case "tv":
      const tvDetails = details as TvDetailsType;
      return (
        <>
          <p><strong>Overview:</strong> {tvDetails.overview}</p>
          <p><strong>First Air Date:</strong> {tvDetails.first_air_date}</p>
        </>
      );
    case "person":
      const personDetails = details as PersonDetailsType;
      return (
        <>
          <p><strong>Name:</strong> {personDetails.name}</p>
          <p><strong>Biography:</strong> {personDetails.biography}</p>
          <p><strong>Birthday:</strong> {personDetails.birthday}</p>
        </>
      );
  }
};
