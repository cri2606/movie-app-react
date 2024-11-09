// src/api/movies.ts
import { ResponseTrendingType } from "../types/responseTypes";
import { URL_MOVIES, URL_PEOPLE, URL_TV } from "./config";

export const getMovies = async () => {
    try {
        const response = await fetch(URL_MOVIES);
        if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
        const data: ResponseTrendingType = await response.json();
        return data.results.slice(0, 3);
    } catch (error) {
        console.error("Errore nel recupero dei movies:", error);
        return []; // Restituisce un array vuoto in caso di errore
    }
};

export const getPeople = async () => {
    try {
        const response = await fetch(URL_PEOPLE);
        if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
        const data: ResponseTrendingType = await response.json();
        return data.results.slice(0, 3);
    } catch (error) {
        console.error("Errore nel recupero dei people:", error);
        return []; // Restituisce un array vuoto in caso di errore
    }
};

export const getTV = async () => {
    try {
        const response = await fetch(URL_TV);
        if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
        const data: ResponseTrendingType = await response.json();
        return data.results.slice(0, 3);
    } catch (error) {
        console.error("Errore nel recupero dei TV:", error);
        return []; // Restituisce un array vuoto in caso di errore
    }
};


