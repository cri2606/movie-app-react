import { MyCard } from "./MyCard";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { useCards } from "../hooks/useCards";

type CardContainerProps = {
  url: string,
  section: string
}

export const CardContainer = ({ url, section }: CardContainerProps) => {
  const {element} = useCards(url);
  return (
    <>
      <Heading textAlign="left" size="2xl" py={5} px={10}>{section}</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={10} gap={10}>
          {element.map((item) => <MyCard key={item.id} element={item} />)}
        </SimpleGrid>
    </>
  );
};

