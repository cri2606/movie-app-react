import { getElement } from "../api/element";
import { useQuery } from "@tanstack/react-query";

export const useCardContainer = (url: string) => {
    const { data: element = [] } = useQuery({
      queryKey: ["elements", url],
      queryFn: () => getElement(url),
    });
    
    return {element};
}