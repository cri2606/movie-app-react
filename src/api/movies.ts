// src/api/movies.ts
import { ResponseTrendingType } from "../types/responseTypes";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}movie/day?api_key=${API_KEY}`);
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
    const response = await fetch(`${BASE_URL}person/day?api_key=${API_KEY}`);
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
        const response = await fetch(`${BASE_URL}tv/day?api_key=${API_KEY}`);
        if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
        const data: ResponseTrendingType = await response.json();
        return data.results.slice(0, 3);
    } catch (error) {
        console.error("Errore nel recupero dei TV:", error);
        return []; // Restituisce un array vuoto in caso di errore
    }
};


