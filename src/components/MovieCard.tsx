import { useState } from "react";
import { MovieType } from "../types/movieTypes";

type MovieCardProps = {
    movie: MovieType
}

export const MovieCard = ({ movie }: MovieCardProps) => {
    const [clickCount, setClickCount] = useState(0);

    const handleClick = (message: string) => {
        console.log(`Cliccato ${message}`);
    }
    const handleClickCount = () => {
        setClickCount(clickCount + 1);
        console.log(`Click count ${clickCount}`);
    }
    
    return(
        <div style={{backgroundColor: 'red'}} onClick={handleClickCount}>
            <h1>{movie.id}</h1>
            <p onClick={() => handleClick(movie.title)}>{movie.title}</p>
            <p onClick={() => handleClick(movie.description)}>{movie.description}</p>
            <p>Numero di click: {clickCount}</p>
        </div>
    );
}