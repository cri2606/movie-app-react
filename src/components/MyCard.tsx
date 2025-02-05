import { MovieType, TvType, PersonType } from "../types/elementTypes";
import { CardType } from "../types/cardType";
import { srcImage } from "../utilities/functions";
import { Card, Image, Box, Text } from "@chakra-ui/react";
import { toCardType } from "../utilities/toCardType";
import { useNavigate } from "react-router";

type CardProps = {
  element: MovieType | PersonType | TvType;
};

export const MyCard = ({ element }: CardProps) => {
  const navigate = useNavigate();
  const cardType: CardType = toCardType(element);

  const handleClick = () => {
    navigate(`/${cardType.media_type}/${cardType.id}`, { state: { cardType } });
  };

  return (
    <Card.Root
      className={cardType.class}
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      transition="all 0.2s"
      _hover={{
        transform: "translateY(-2px)",
        boxShadow: "xl",
      }}
      onClick={handleClick}
      cursor="pointer"
      position="relative" // Necessario per il posizionamento assoluto del nome
    >
      <Image
        roundedTop="xl"
        src={srcImage(cardType, cardType.image)}
        objectFit="cover"
        width="100%"
      />
      
      {/* Nome posizionato sopra l'immagine in basso a sinistra */}
      <Box
        position="absolute"
        bottom={2}
        left={2}
        bg="rgba(0, 0, 0, 0.7)"
        color="white"
        px={3}
        py={1}
        borderRadius="md"
        maxWidth="95%"
      >
        <Text truncate fontSize="md" fontWeight="bold">
          {cardType.name}
        </Text>
      </Box>
    </Card.Root>
  );
};
