import { MovieDetailsType, TvDetailsType, PersonDetailsType } from "../types/detailsTypes";
import { CardType } from "../types/cardType";

type RenderDetailsProps = {
  cardType: CardType;
  details: MovieDetailsType | TvDetailsType | PersonDetailsType;
};

export const RenderDetails = ({ cardType, details }: RenderDetailsProps) => {
  if (!details) return <p>Loading...</p>;

  switch (cardType.media_type) {
    case "movie":
      const movieDetails = details as MovieDetailsType;
      return (
        <>
          <p><strong>Overview:</strong> {movieDetails.overview}</p>
          <p><strong>Release Date:</strong> {movieDetails.release_date}</p>
          <p><strong>Original Language:</strong> {movieDetails.original_language}</p>
          <p><strong>Popularity:</strong> {movieDetails.popularity}</p>
          <p><strong>Status:</strong> {movieDetails.status}</p>
          <p><strong>Vote Average:</strong> {movieDetails.vote_average}</p>
          <p><strong>Vote Count:</strong> {movieDetails.vote_count}</p>
        </>
      );
    case "tv":
      const tvDetails = details as TvDetailsType;
      return (
        <>
          <p><strong>Overview:</strong> {tvDetails.overview}</p>
          <p><strong>First Air Date:</strong> {tvDetails.first_air_date}</p>
          <p><strong>Last Air Date:</strong> {tvDetails.last_air_date}</p>
          <p><strong>Next Episode to Air:</strong> {tvDetails.next_episode_to_air || "N/A"}</p>
          <p><strong>Number of Episodes:</strong> {tvDetails.number_of_episodes}</p>
          <p><strong>Number of Seasons:</strong> {tvDetails.number_of_seasons}</p>
          <p><strong>Original Language:</strong> {tvDetails.original_language}</p>
          <p><strong>Popularity:</strong> {tvDetails.popularity}</p>
          <p><strong>Status:</strong> {tvDetails.status}</p>
          <p><strong>Vote Average:</strong> {tvDetails.vote_average}</p>
          <p><strong>Vote Count:</strong> {tvDetails.vote_count}</p>
        </>
      );
    case "person":
      const personDetails = details as PersonDetailsType;
      return (
        <>
          <p><strong>Birthday:</strong> {personDetails.birthday}</p>
          <p><strong>Place of Birth:</strong> {personDetails.place_of_birth}</p>
          <p><strong>Biography:</strong> {personDetails.biography}</p>
          <p><strong>Known for Department:</strong> {personDetails.known_for_department}</p>
          <p><strong>Popularity:</strong> {personDetails.popularity}</p>
        </>
      );
  }
};