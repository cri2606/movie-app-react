import { CardType } from "../types/cardType"

export const srcImage = (element: CardType, path: string | undefined) => {
    if (path) 
        return `https://image.tmdb.org/t/p/w500${path}`
    return element.media_type === 'person' ? '/images/person_fallback.png' : '/images/movie_tv_fallback.png'
}