import { MovieDetailsType, TvDetailsType, PersonDetailsType } from "../types/detailsTypes"
import { BASE_URL, API_KEY, OPTS } from "./config"

export const getDetails = async ({ media_type, id }: { media_type: string; id: number }): Promise<MovieDetailsType|TvDetailsType|PersonDetailsType> => {
  try {
    if(media_type === undefined) media_type = "person"
    const response = await fetch(`${BASE_URL}${media_type}/${id}?api_key=${API_KEY}`, OPTS)
    if (!response.ok) throw new Error("Errore nella richiesta a TMDB")
    const data = await response.json()
    return data
  } catch (error) { throw error }
}