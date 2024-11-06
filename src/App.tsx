import { getMovies } from './api/movies';
import './App.css'
import { MovieCard } from './components/MovieCard'

function App() {
  const movieMock = getMovies();
  return (
    <div>
      <h1>Questo è il componente React che rappresenta l'intera applicazione</h1>
        {
          movieMock.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}/>
          })
        }
    </div>
  )
}

export default App
