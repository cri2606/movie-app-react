import { useState, useEffect } from "react"

export const useApp = () => {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "Trending Movies"
  })

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection)
  }, [activeSection])

  const sectionUrls: { [key: string]: string } = {
    "Trending Movies": "trending/movie/day",
    "Trending People": "trending/person/day",
    "Trending TV": "trending/tv/day",
  }

  return { activeSection, setActiveSection, sectionUrls }
}
