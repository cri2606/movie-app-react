export const BASE_URL = "https://api.themoviedb.org/3/"
export const API_KEY = "38901b2d500f17a1a1b512bd568081d6"

export const OPTS = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`
    }
}