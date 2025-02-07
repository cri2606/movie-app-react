import { MovieType, PersonType, TvType } from "../types/elementTypes"
import { BASE_URL, API_KEY, OPTS } from "./config"

export const search = async (endpoint: string): Promise<(MovieType|TvType|PersonType)[]> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`,OPTS)
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB")
    const data = await response.json()
    return data.results.map((results: MovieType|TvType|PersonType) => ({
      ...results,
      media_type: (endpoint.includes("person") ? "person" : endpoint.includes("movie") ? "movie" : "tv")
    }))
  } catch (error) { throw error }
}
