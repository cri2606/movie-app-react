import { useNavigate, useLocation } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { search } from "../api/search"

export const useSearch = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const query = queryParams.get("query") || ""

  const activeSection = localStorage.getItem("activeSection") || "Trending Movies"

  const searchEndpoint = activeSection.includes("Movies")
    ? "search/movie"
    : activeSection.includes("TV")
    ? "search/tv"
    : "search/person"

  const url = `${searchEndpoint}?query=${encodeURIComponent(query)}`

  const { data: element = [] } = useQuery({
    queryKey: ["search", url],
    queryFn: () => search(url),
    enabled: !!query // Esegui solo se c'è una query valida
  })

  const handleSectionChange = (section: string) => {
    localStorage.setItem("activeSection", section)
    navigate("/")
  }

  return { element, handleSectionChange, query, url }
}
