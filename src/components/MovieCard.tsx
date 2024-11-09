// src/components/MovieCard.tsx
import { MovieType } from "../types/movieTypes";

type MovieCardProps = {
    movie: MovieType;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
    return (
        <div style={{ backgroundColor: 'red' }}>
            <h1>{movie.title}</h1>
            {movie.poster_path && (
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            )}
            <p>{movie.overview}</p>
            <p>Data di rilascio: {movie.release_date}</p>
            <p>Voto medio: {movie.vote_average}</p>
        </div>
    );
};
