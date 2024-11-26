import { useEffect, useState } from "react"
import { MovieType, TvType, PersonType } from "../types/elementTypes"
import { getElement } from "../api/element"
import { MyCard } from "./MyCard"
import { SimpleGrid, Heading } from "@chakra-ui/react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

type CardContainerProps = {
  url: string,
  section: string
}

export const CardContainer = ({ url, section }: CardContainerProps) => {
  const [element, setElement] = useState<(MovieType | TvType | PersonType)[]>([]);

  useEffect(() => {
    const fetchElement = async () => setElement(await getElement(url));
    fetchElement();

  }, [url]);

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  // };

  return (
    <>
      <Heading textAlign="left" size="2xl" py={5} px={10}>{section}</Heading>
      {/* <Slider {...settings}> */}
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} px={10} gap={10}>
          {element.map((item) => <MyCard key={item.id} element={item} />)}
        </SimpleGrid>
      {/* </Slider> */}
    </>
  );
};

