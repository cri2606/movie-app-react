// src/types/responseTypes.ts
import { MovieType } from "./movieTypes";

export type ResponseTrendingType = {
    results: MovieType[]; // L'API restituisce un array di film
    page: number;
    total_pages: number;
    total_results: number;
};
