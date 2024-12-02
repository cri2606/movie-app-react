import { CardType } from "../types/cardType";
import { learnMore } from "../utilities/functions";
import { Button, Link, Text } from "@chakra-ui/react";
import { DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger, DialogActionTrigger } from "../components/ui/dialog";
import { useCardButton } from "../hooks/useCardButton";

type CardButtonProps = {
  cardType: CardType;
};

export const CardButton = ({ cardType }: CardButtonProps) => {
  const { cardButtonType, fetchDetails } = useCardButton(cardType);
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