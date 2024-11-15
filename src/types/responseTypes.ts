// src/types/responseTypes.ts
import { ContentType } from "./contentTypes";

export type ResponseTrendingType = {
    results: ContentType[];
    page: number;
    total_pages: number;
    total_results: number;
};
