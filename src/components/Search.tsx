import { Navbar } from "../components/navbar/Navbar"
import { useSearch } from "../hooks/useSearch"
import { CardContainer } from "./CardContainer"

export const Search = () => {
  const { handleSectionChange, query, url } = useSearch()

    return (
      <>
        <Navbar onSectionChange={handleSectionChange}/>
        <CardContainer url={url} section={`Results for ${query}`}/>
      </>
    )
}

export default Search
