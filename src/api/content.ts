import { ResponseTrendingType } from "../types/responseTypes";
import { ContentType } from "../types/contentTypes";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Funzione generica per ottenere i contenuti di tendenza da TMDB.
 * @param endpoint Endpoint relativo per la richiesta (e.g., "movie/day", "tv/day", "person/day")
 * @returns Array dei contenuti di tendenza
 */
export const getTrendingContent = async (endpoint: string): Promise<ContentType[]> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
    const data: ResponseTrendingType = await response.json();
    return data.results.slice(0, 3); // Restituisce i primi 3 elementi
  } catch (error) {
    console.error(`Errore nel recupero dei contenuti per ${endpoint}:`, error);
    return []; // Restituisce un array vuoto in caso di errore
  }
};
