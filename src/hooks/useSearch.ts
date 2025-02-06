import { useEffect, useState } from "react";
import { searchPeople } from "../api/searchPerson";
import { PersonType } from "../types/elementTypes";
import { useNavigate } from "react-router";

export const useSearch = (url: string) => {
  const navigate = useNavigate();
  const [element, setElement] = useState<PersonType[]>([]);

  useEffect(() => {
    const fetchElement = async () => setElement(await searchPeople(url));
    fetchElement();
  }, [url]);

  const handleSectionChange = (section: string) => {
    localStorage.setItem("activeSection", section);
    navigate("/");
  };

  return { element, handleSectionChange };
};
