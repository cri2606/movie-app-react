import { MovieType, TvType, PersonType } from "../types/elementTypes";
import { CardType } from "../types/cardType";
import { srcImage } from "../utilities/functions";
import "../css/styles.css";
import { Card, Image } from "@chakra-ui/react";
import { CardButton } from "./CardButton";
import { toCardType } from "../utilities/toCardType";

type CardProps = {
  element: MovieType | PersonType | TvType;
}

export const MyCard = ({ element }: CardProps) => {
  const cardType: CardType = toCardType(element);
  return (
    <Card.Root className={cardType.class}>
      <Image roundedTop="lg" src={srcImage(cardType, cardType.image)} />
      <Card.Body>
        <Card.Title fontWeight="semibold">{cardType.name}</Card.Title>
        <Card.Description lineClamp="3" whiteSpace="pre-wrap" marginTop={2}>{cardType.description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <CardButton cardType={cardType} />
      </Card.Footer>
    </Card.Root>
  )
}