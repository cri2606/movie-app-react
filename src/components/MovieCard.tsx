type MovieCardProps = {
    idMovie: number;
    titleMovie: string;
}
export const MovieCard = (props:MovieCardProps) =>{
    return(
        <div>
            <h1>{props.idMovie}</h1>
            <p>{props.titleMovie}</p>
        </div>
    );
}