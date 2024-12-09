import { useNavigate } from "react-router";
import { Button } from "@chakra-ui/react";
import { CardType } from "../types/cardType";

type CardButtonProps = {
  cardType: CardType;
};

export const CardButton = ({ cardType }: CardButtonProps) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    navigate(`/${cardType.media_type}/${cardType.id}`, { state: { cardType } });
  };

  return (
    <Button bgColor="blue" onClick={handleClick}>
      Show Details
    </Button>
  );
};

// <DialogRoot placement="center" motionPreset="slide-in-bottom" onOpenChange={(isOpen) => isOpen && fetchDetails()}>
//   <DialogTrigger asChild>
//     <Button bgColor="blue">Show Details</Button>
//   </DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>{cardType.name}</DialogTitle>
//     </DialogHeader>
//     <DialogBody>
//         <Text whiteSpace="pre-wrap">{cardButtonType.description}</Text>
//     </DialogBody>
//     <DialogFooter>
//       <DialogActionTrigger asChild>
//         <Button bgColor="red">Close</Button>
//       </DialogActionTrigger>
//       <Link href={learnMore(cardType)} target="blank">
//         <Button bgColor="black">Learn More</Button>
//       </Link>
//     </DialogFooter>
//     <DialogCloseTrigger />
//   </DialogContent>
// </DialogRoot>