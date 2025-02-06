import { CardType } from "../types/cardType";

export const srcImage = (element: CardType, path: string | undefined) => {
    const mediaType = element.media_type || "person";
    if (path) 
        return `https://image.tmdb.org/t/p/w500${path}`;
    return mediaType === 'person' ? '/images/person_fallback.png' : '/images/movie_tv_fallback.png';
}