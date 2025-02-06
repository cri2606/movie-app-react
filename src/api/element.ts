import { ResponseType } from "../types/responseTypes";
import { MovieType, TvType, PersonType } from "../types/elementTypes";
import { BASE_URL, API_KEY, OPTS } from "./env"


export const getElement = async (endpoint: string): Promise<(MovieType|TvType|PersonType)[]> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`,OPTS);
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
    const data: ResponseType = await response.json();
    return data.results;
  } catch (error) { throw error; }
}