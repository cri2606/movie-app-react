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
    <Button color="white" bgColor="blue" onClick={handleClick}>Show Details</Button>
  );
};