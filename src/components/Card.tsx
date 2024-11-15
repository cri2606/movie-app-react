import { ElementType } from "../types/elementTypes";
import { srcImage } from "../functions/functions";
import "../css/styles.css";

type CardProps = {
    element: ElementType;
  }
  
  export const Card = ({ element }: CardProps) => {
    switch (element.media_type) {
      case "movie":
        return (
          <div className="movie">
            <h2>{element.title}</h2>
            <img src={srcImage(element, element.backdrop_path)} />
            <p>{element.overview}</p>
          </div>
        )
      case "person":
        return (
          <div className="person">
            <h2>{element.name}</h2>
            <img src={srcImage(element, element.profile_path)} />
            <p>{element.overview}</p>
          </div>
        )
      case "tv":
        return (
          <div className="tv">
            <h2>{element.name}</h2>
            <img src={srcImage(element, element.backdrop_path)} />
            <p>{element.overview}</p>
          </div>
        )
    }
  }