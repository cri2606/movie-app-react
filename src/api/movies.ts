// src/api/movies.ts
import { ResponseTrendingType } from "../types/responseTypes";
import { BASE_URL } from "./config";

export const getMovies = async () => {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) {
            throw new Error("Errore nella richiesta a TMDB");
        }
        const data: ResponseTrendingType = await response.json();
        return data.results; // Restituisci direttamente i risultati dei film
    } catch (error) {
        console.error("Errore nel recupero dei film:", error);
        return []; // Restituisce un array vuoto in caso di errore
    }
};
