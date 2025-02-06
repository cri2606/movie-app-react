import { PersonType } from "../types/elementTypes";
import { BASE_URL, API_KEY, OPTS } from "./config"

export const searchPeople = async (endpoint: string): Promise<PersonType[]> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`,OPTS);
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
    const data = await response.json();
    return data.results;
  } catch (error) { throw error }
};
