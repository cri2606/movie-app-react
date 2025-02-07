import { getElement } from "../api/element"
import { useQuery } from "@tanstack/react-query"

export const useCardContainer = (url: string) => {

  if(url.includes("search")){}
    const { data: element = [] } = useQuery({
      queryKey: ["elements", url],
      queryFn: () => getElement(url),
    }) 
    
  return { element }
}