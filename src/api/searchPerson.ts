import { PersonType } from "../types/elementTypes";
const API_KEY = import.meta.env.VITE_API_KEY;
import { BASE_URL } from "./env"

export const searchPeople = async (endpoint: string): Promise<PersonType[]> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB");
    const data = await response.json();
    return data.results;
  } catch (error) { throw error }
};
