import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';

function App() {
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
  return (
    <div>
      {/* <h1>Questo è il componente React che rappresenta l'intera applicazione</h1> */}
        {
          movieMock.map((movie) => {
            return <MovieCard movie={movie}/>
          })
        }
      {/* <h2>Questo è un H2</h2> */}
    </div>
  )
}

export default App
