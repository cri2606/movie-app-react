import { MovieType, TvType, PersonType } from "../types/elementTypes"
import { srcImage } from "../utilities/functions"
import { Card, Image, Box, Text } from "@chakra-ui/react"
import { useMyCard } from "../hooks/useMyCard"

type CardProps = {
  element: MovieType | PersonType | TvType
}

export const MyCard = ({ element }: CardProps) => {
  const {cardType, handleClick} = useMyCard(element)

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
      position="relative"
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
  )
}

export default MyCard