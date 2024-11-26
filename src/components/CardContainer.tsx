import { useEffect, useState } from "react"
import { MovieType, TvType, PersonType } from "../types/elementTypes"
import { getElement } from "../api/element"
import { MyCard } from "./MyCard"
import { SimpleGrid, Heading, Stack } from "@chakra-ui/react"
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

  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <>
      <Heading textAlign="left" size="2xl" py={5} px={10}>{section}</Heading>
      <Slider {...settings}>
          {element.map((item) => <MyCard key={item.id} element={item} />)}
      </Slider>
    </>
  );
};

