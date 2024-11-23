import { ElementType } from "../types/elementTypes";
import { learnMore, srcImage } from "../functions/functions";
import "../css/styles.css";
import { Card, Image, List, Button, Link } from "@chakra-ui/react"

type CardProps = {
  element: ElementType;
}

export const MyCard = ({ element }: CardProps) => {
  let data:any = {};

  switch (element.media_type) {
    case "movie":
      data.title = element.title;
      return (
        <Card.Root className="movie">
          <Image roundedTop="lg" src={srcImage(element, element.backdrop_path)} />
          <Card.Body>
            <Card.Title>{element.title}</Card.Title>
            <Card.Description marginTop={2} maxHeight={100} overflowY="auto">{element.overview}</Card.Description>
          </Card.Body>
          <Card.Footer>
            <Link href={learnMore(element)}>
              <Button bgColor="blue">Learn More</Button>
            </Link>
          </Card.Footer>
        </Card.Root>
      )
    case "person":
      return (
        <Card.Root className="person">
          <Image roundedTop="lg" src={srcImage(element, element.profile_path)} />
          <Card.Body>
            <Card.Title>{element.name}</Card.Title>
              <List.Root marginTop={2}>
                <List.Item><b>Role:</b> {element.known_for_department}</List.Item>
                <List.Item><b>Popularity:</b> {element.popularity}</List.Item>
              </List.Root>
          </Card.Body>
          <Card.Footer>
            <Link href={learnMore(element)}>
              <Button bgColor="blue">Learn More</Button>
            </Link>
          </Card.Footer>
        </Card.Root>
      )
    case "tv":
      return (
        <Card.Root className="tv">
          <Image roundedTop="lg" src={srcImage(element, element.backdrop_path)} />
          <Card.Body>
            <Card.Title>{element.name}</Card.Title>
            <Card.Description marginTop={2} maxHeight={100} overflowY="auto">{element.overview}</Card.Description>
          </Card.Body>
          <Card.Footer>
            <Link href={learnMore(element)}>
              <Button bgColor="blue">Learn More</Button>
            </Link>
          </Card.Footer>
        </Card.Root>
      )
  }
}