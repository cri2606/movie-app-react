// src/components/MovieCard.tsx
import { MovieType } from "../types/movieTypes";
import { renderImage, learnMore, cardBackground } from "../functions/functions";
import "../css/movieCard.css";

type MovieCardProps = {
    item: MovieType;
};

export const MovieCard = ({ item }: MovieCardProps) => {
    return (
        <div style={{ backgroundColor: cardBackground(item), margin: '10px', padding: '10px' }}>
            {/* Condizioni basate sul tipo di media (movie, person, tv) */}
            {item.media_type === 'movie' && (
                <>
                    <h1>{item.title}</h1>
                    {/* Richiama la funzione per l'immagine */}
                    {renderImage(item.backdrop_path, item.title || "Movie")}
                    <p>{item.overview || "Nessuna descrizione disponibile"}</p>
                    {item.vote_average && <p>Voto medio: {item.vote_average}</p>}
                </>
            )}
            {item.media_type === 'person' && (
                <>
                    <h1>{item.name}</h1>
                    {/* Richiama la funzione per l'immagine */}
                    {renderImage(item.profile_path, item.name || "Person")}
                    <p>Role: {item.role || "N/A"}</p>
                    <p>Known for: {item.known_for_department || "N/A"}</p>
                    <p>Popularity: {item.popularity}</p>
                </>
            )}
            {item.media_type === 'tv' && (
                <>
                    <h1>{item.name}</h1>
                    {/* Richiama la funzione per l'immagine */}
                    {renderImage(item.backdrop_path, item.name || "TV Show")}
                    <p>{item.overview || "Nessuna descrizione disponibile"}</p>
                    {item.vote_average && <p>Voto medio: {item.vote_average}</p>}
                </>
            )}
            {/* Pulsante "Learn More" con link */}
            <a href={`https://www.google.com/search?q=${encodeURIComponent(learnMore(item))}`} className="btn" target="_blank" rel="noopener noreferrer" >
                Learn More
            </a>
        </div>
    );
};
