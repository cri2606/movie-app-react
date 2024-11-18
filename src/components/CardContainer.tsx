import { useEffect, useState } from "react";
import { ElementType } from "../types/elementTypes";
import { getElement } from "../api/element";
import { Card } from "./Card";

type CardContainerProps = {
    url: string,
    section: string
}

export const CardContainer = ({ url, section }: CardContainerProps) => {
    const [element, setElement] = useState<ElementType[]>([]);

    useEffect(() => {
        const fetchElement = async () => setElement(await getElement(url));
        fetchElement();
    }, [url]);

    return (
        <>
            <h2>{section}</h2>
            <div>
                { element.map((element) => <Card key={element.id} element={element} /> ) }
            </div>
        </>
    );
};
