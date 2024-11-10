// src/types/responseTypes.ts
import { MovieType } from "./movieTypes";

export type ResponseTrendingType = {
    results: MovieType[];
    page: number;
    total_pages: number;
    total_results: number;
};
