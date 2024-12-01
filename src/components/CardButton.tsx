import { CardType } from "../types/cardType"
import { CardButtonType } from "../types/cardButtonType"
import { MovieDetailsType, TvDetailsType, PersonDetailsType } from "../types/detailsTypes";
import { getDetails } from "../api/details"
import { learnMore } from "../functions/functions"
import { Button, Link, Text } from "@chakra-ui/react"
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "../components/ui/dialog"
import { useState } from "react"

type CardButtonProps = {
  cardType: CardType;
};

export const CardButton = ({ cardType }: CardButtonProps) => {
  const [details, setDetails] = useState<MovieDetailsType | TvDetailsType | PersonDetailsType>();

  const fetchDetails = async () => {
      const data = await getDetails({
        media_type: cardType.media_type,
        id: cardType.id,
      });
      setDetails(data);
  };

  let cardButtonType: CardButtonType = { description: "" };

  if (details) {
    switch (cardType.media_type) {
      case "movie":
        cardButtonType = { description: (details as MovieDetailsType).overview };
        break;
      case "person":
        cardButtonType = { description: (details as PersonDetailsType).biography};
        break;
      case "tv":
        cardButtonType = { description: (details as TvDetailsType).overview};
        break;
    }
  }

  return (
    <DialogRoot placement="center" motionPreset="slide-in-bottom" onOpenChange={(isOpen) => isOpen && fetchDetails()}>
      <DialogTrigger asChild>
        <Button bgColor="blue">Show Details</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{cardType.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
            <Text whiteSpace="pre-wrap">{cardButtonType.description}</Text>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button bgColor="red">Close</Button>
          </DialogActionTrigger>
          <Link href={learnMore(cardType)} target="blank">
            <Button bgColor="black">Learn More</Button>
          </Link>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}