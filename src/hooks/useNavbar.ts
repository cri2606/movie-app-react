import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useNavbar = (onSectionChange: (section: string) => void) => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("activeSection") || "Trending Movies"
  })

  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const sections = [
    { name: "Trending Movies", label: "Trending Movies" },
    { name: "Trending People", label: "Trending People" },
    { name: "Trending TV", label: "Trending TV" },
  ]

  useEffect(() => {
    localStorage.setItem("activeSection", activeSection)
  }, [activeSection])

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("activeSection")
    }
    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  const handleButtonClick = (section: string) => {
    setActiveSection(section)
    onSectionChange(section)
    localStorage.setItem("activeSection", section)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
      setOpen(false)
    }
  }

  const searchPlaceholder: string = "Search " + (activeSection === "Trending Movies" ? "Movies" : activeSection === "Trending People" ? "People" : "TV") + "..."

  return { sections, open, setOpen, activeSection, handleButtonClick, searchQuery, setSearchQuery, handleSearch, searchPlaceholder }
}
