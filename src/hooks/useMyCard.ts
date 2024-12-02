import { useEffect, useState } from "react";
import { MovieType, PersonType, TvType } from "../types/elementTypes";
import { getElement } from "../api/element";


export const useMyCard = (url: string) => {
    const [element, setElement] = useState<(MovieType | TvType | PersonType)[]>([]);

    useEffect(() => {
      const fetchElement = async () => setElement(await getElement(url));
      fetchElement();
    }, [url]);

    return {element};
}