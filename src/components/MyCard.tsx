import { ElementType } from "../types/elementTypes";
import { CardType } from "../types/cardType";
import { learnMore, srcImage } from "../functions/functions";
import "../css/styles.css";
import { Card, Image, List, Button, Link } from "@chakra-ui/react"

type CardProps = {
  element: ElementType;
}

export const MyCard = ({ element }: CardProps) => {

  let cardType: CardType = { media_type: "" };

  switch (element.media_type) {
    case "movie":
      cardType = {
        media_type: element.media_type,
        name: element.title,
        image: element.backdrop_path,
        description: element.overview,
        class: "movie"
      };
      break;
    case "person":
      cardType = {
        media_type: element.media_type,
        name: element.name,
        image: element.profile_path,
        description: "Role: " + element.known_for_department,
        class: "person"
      };
      break;
    case "tv":
      cardType = {
        media_type: element.media_type,
        name: element.name,
        image: element.backdrop_path,
        description: element.overview,
        class: "tv"
      };
      break;
  }
  return (
    <Card.Root className={cardType.class}>
      <Image roundedTop="lg" src={srcImage(cardType, cardType.image)} />
      <Card.Body>
        <Card.Title>{cardType.name}</Card.Title>
        <Card.Description marginTop={2} maxHeight={100} overflowY="auto">{cardType.description}</Card.Description>
      </Card.Body>
      <Card.Footer>
        <Link href={learnMore(cardType)}>
          <Button bgColor="blue">Learn More</Button>
        </Link>
      </Card.Footer>
    </Card.Root>
  )
}
  // <Card.Root className="person">
  //   <Image roundedTop="lg" objectFit="cover" src={srcImage(element, element.profile_path)} />
  //   <Card.Body>
  //     <Card.Title>{element.name}</Card.Title>
  //     <List.Root marginTop={2}>
  //       <List.Item><b>Role:</b> {element.known_for_department}</List.Item>
  //       <List.Item><b>Popularity:</b> {element.popularity}</List.Item>
  //     </List.Root>
  //   </Card.Body>
  //   <Card.Footer>
  //     <Link href={learnMore(element)}>
  //       <Button bgColor="blue">Learn More</Button>
  //     </Link>
  //   </Card.Footer>
  // </Card.Root>