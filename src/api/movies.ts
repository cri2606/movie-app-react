import { MovieType } from "../types/movieTypes";
export const getMovies = () => {

    const movieMock: MovieType[] = [
        {
          id: 1,
          title: "Il signore degli anelli",
          description: "Descrizione 1",
        },
        {
          id: 2,
          title: "Harry Potter",
          description: "Descrizione 2",
        },
        {
          id: 3,
          title: "Il Padrino",
          description: "Descrizione 3",
        }
      ]
    return movieMock;
}