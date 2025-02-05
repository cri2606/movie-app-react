import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { SimpleGrid, Heading } from "@chakra-ui/react";
import { useSearch } from "../hooks/useSearch";
import { MyCard } from "./MyCard";

export const Search = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); // Estrae i parametri dalla query string
  const query = queryParams.get("query") || "";

  const url = `search/person?query=${encodeURIComponent(query)}`;
  const { element, handleSectionChange } = useSearch(url);

    return (
      <>
        <Navbar onSectionChange={handleSectionChange}/>
        <Heading textAlign="left" fontSize="2xl" py={5} px={20} fontWeight="bold">Results for "{query}"</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={20} gap={10}>
            {element.map((item) => <MyCard key={item.id} element={item} />)}
          </SimpleGrid>
      </>
    );
};

export default Search;
