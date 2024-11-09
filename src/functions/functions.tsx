import { MovieType } from "../types/movieTypes";

// Funzione per visualizzare l'immagine, passo il percoso dell'immagine (se definito) e l'alt
export const renderImage = (path: string | undefined, alt: string) => {
    return path ? (<img src={`https://image.tmdb.org/t/p/w500${path}`} alt={alt} />) : null;
};

// Funzione per rendere dinamico il colore dello sfondo al variare della tipologia
export const cardBackground = (item: MovieType) : string => {
    const backgroundColor = item.media_type === 'movie' ? '#ffcccc' :
    item.media_type === 'person' ? '#ccffcc' :
    item.media_type === 'tv' ? 'lightblue': 'white';   
    return backgroundColor;
}

// Funzione per settare l'url di ricerca quando clicco sul pulsante learnMore
export const learnMore = (item: MovieType) : string => {
    let searchQuery = item.title || item.name || "";  // Inizia con il titolo o il nome
    if (item.media_type === 'movie')
        searchQuery += " (movie)";  // Aggiungi "(movie)" se è un film
    else if (item.media_type === 'tv')
        searchQuery += " (TV series)";
    return searchQuery;
}