import { MyCard } from "./MyCard";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { useCardContainer } from "../hooks/useCardContainer";

type CardContainerProps = {
  url: string,
  section: string
}

export const CardContainer = ({ url, section }: CardContainerProps) => {
  const {element} = useCardContainer(url);
  return (
    <>
      <Heading textAlign="left" fontSize="2xl" py={5} px={20} fontWeight="bold">{section}</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={20} gap={10}>
          {element.map((item) => <MyCard key={item.id} element={item} />)}
        </SimpleGrid>
    </>
  );
};

