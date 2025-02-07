import { Card, Heading, Button, Box, Image } from "@chakra-ui/react"
import { RenderDetails } from "../components/RenderDetails"
import { Navbar } from "./navbar/Navbar"
import { useDetails } from "../hooks/useDetails"
import { srcImage } from "../utilities/functions"

export const Details = () => {
  const { cardType, details, handleBackClick, handleSectionChange } = useDetails()
  
  if (!details) return (
    <Box 
      height="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      fontSize="lg"
      color="gray.500"
    >
      Loading...
    </Box>
  )

  return (
    <>
      <Navbar onSectionChange={handleSectionChange}/>
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        pt={8}
        px={4}
        minHeight="calc(100vh - 80px)"
        bg="#E6F7EC"
      >
        <Card.Root 
          maxW="1000px"
          maxH="750px"
          w="full"
          bg="#F8F9FA"
          border="1px solid"
          borderColor="gray.200"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="xl"
          display="flex"
          flexDirection="row"
          transition="all 0.2s"
          _hover={{
            transform: "translateY(-2px)",
            boxShadow: "xl",
          }}
        >
          {/* Immagine a sinistra */}
          <Image
            src={srcImage(cardType, cardType.media_type === "person" ? cardType.image : cardType.poster)}
            objectFit="cover"
            display={{ base: "none", md: "block" }}
          />

          {/* Contenuto a destra */}
          <Box flex="1" display="flex" flexDirection="column">
            <Card.Header
              bg="gray.50"
              borderBottom="1px solid"
              borderColor="gray.200"
              py={6}
              px={8}
            >
              <Heading 
                size="lg" 
                fontWeight="bold"
                fontSize="xl"
              >
                {cardType.name}
              </Heading>
            </Card.Header>

            <Card.Body 
              color="gray.600"
              py={8}
              px={8}
              flex="1"
              overflowY="auto"
            >
              <RenderDetails cardType={cardType} details={details} />
            </Card.Body>

            <Card.Footer
              bg="gray.50"
              borderTop="1px solid"
              borderColor="gray.200"
              py={6}
              px={8}
            >
              <Button
                onClick={handleBackClick}
                colorScheme="teal"
                bgGradient="to-r" gradientFrom="#10b981" gradientTo="#0d9488"
                color="white"
                size="lg"
                shadow="md"
                _hover={{
                  transform: 'translateY(-1px)',
                  shadow: 'lg',
                }}
                transition="all 0.2s"
              >
                Back
              </Button>
            </Card.Footer>
          </Box>
        </Card.Root>
      </Box>
    </>
  )
}

export default Details
