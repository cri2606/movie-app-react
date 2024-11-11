import { MediaType } from "../types/movieTypes";

// Funzione per visualizzare l'immagine, passo il percoso dell'immagine
export const renderImage = (item: MediaType, path: string | undefined) => {
    const imageUrl = path ? `https://image.tmdb.org/t/p/w500${path}`: item.media_type === 'person'
        ? '../images/user.png'
        : '../images/movie.png';

    return <img src={imageUrl} alt="errore nel caricamento dell'immagine" />;
};

// Funzione per rendere dinamico il colore dello sfondo al variare della tipologia
export const cardBackground = (item: MediaType) : string => {
    const backgroundColor = item.media_type === 'movie' ? '#ffcccc' :
    item.media_type === 'person' ? '#ccffcc' :
    item.media_type === 'tv' ? 'lightblue': 'white';   
    return backgroundColor;
}

// Funzione per settare l'url di ricerca quando clicco sul pulsante learnMore
export const learnMore = (item: MediaType) : string => {
    let searchQuery = item.title || item.name || "";  // Inizia con il titolo o il nome
    if (item.media_type === 'movie')
        searchQuery += " (movie)";  // Aggiungi "(movie)" se è un film
    else if (item.media_type === 'tv')
        searchQuery += " (TV series)";
    return searchQuery;
}