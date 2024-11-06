import './App.css'
import { MovieCard } from './components/MovieCard'
import { MovieType } from './types/movieTypes';

function App() {
  const movieMock: MovieType[] = [
    {
      id: 1,
      title: "Titolo 1",
    },
    {
      id: 2,
      title: "Titolo 2",
    },
    {
      id: 3,
      title: "Titolo 3",
    }
  ]
  return (
    <div>
      {/* <h1>Questo è il componente React che rappresenta l'intera applicazione</h1> */}
        {
          movieMock.map((movie) =>{
            return <MovieCard idMovie={movie.id} titleMovie={movie.title}/>
          })
        }
      {/* <h2>Questo è un H2</h2> */}
    </div>
  )
}

export default App
