import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCardButton } from "../hooks/useCardButton";
import { CardType } from "../types/cardType";
import { Card, Heading, Button, Box } from "@chakra-ui/react";
import { RenderDetails } from "../components/RenderDetails";
import Navbar from "./navbar/Navbar";

export const Details = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const cardType: CardType = state.cardType;

  const { fetchDetails, details } = useCardButton(cardType);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  const handleBackClick = () => {
    navigate("/"); // Torna alla pagina principale
  };

  if (!details) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Box display="flex" alignItems="center" justifyContent="center" pt={10}>
        <Card.Root maxW={1000} border="1px solid" borderColor="gray.300">
          <Card.Header>
            <Heading size="md" fontWeight="semibold">{cardType.name}</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
            <RenderDetails cardType={cardType} details={details} />
          </Card.Body>
          <Card.Footer>
            <Button color="white" bgColor="red" onClick={handleBackClick}>Back to Home</Button>
          </Card.Footer>
        </Card.Root>
      </Box>
    </>
  );
};

