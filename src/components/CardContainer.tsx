import { useEffect, useState } from "react"
import { ElementType } from "../types/elementTypes"
import { getElement } from "../api/element"
import { MyCard } from "./MyCard"
import { SimpleGrid, Heading, Box } from "@chakra-ui/react"

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
      <Heading textAlign="left" size="2xl" py={5} px={10}>{section}</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={10} gap={10}>
          {element.map((item) => <MyCard key={item.id} element={item} />)}
      </SimpleGrid>
    </>
  );
};

