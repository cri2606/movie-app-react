import { useLocation, useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getDetails } from "../api/details"
import { CardType } from "../types/cardType"

export const useDetails = () => {
  const { state } = useLocation()
  const navigate = useNavigate()
  const cardType: CardType = state.cardType

  const { data: details, isLoading, isError } = useQuery({
    queryKey: ["details", cardType.media_type, cardType.id],
    queryFn: () => getDetails({ media_type: cardType.media_type, id: cardType.id })
  })

  const handleBackClick = () => navigate(-1)

  const handleSectionChange = (section: string) => {
    localStorage.setItem("activeSection", section)
    navigate("/")
  }

  return { cardType, details, handleBackClick, handleSectionChange, isLoading, isError }
}