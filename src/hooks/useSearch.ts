import { searchPeople } from "../api/searchPerson";
import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

export const useSearch = (url: string) => {
  const navigate = useNavigate();

  const { data: element = [] } = useQuery({
    queryKey: ["search", url],
    queryFn: () => searchPeople(url),
    enabled: !!url
  });

  const handleSectionChange = (section: string) => {
    localStorage.setItem("activeSection", section);
    navigate("/");
  };

  return { element, handleSectionChange };
};
