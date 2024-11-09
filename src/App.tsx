import { useEffect, useState } from 'react';
import { getMovies } from './api/movies';
import './App.css';
import { MovieCard } from './components/MovieCard';
import { MovieType } from './types/movieTypes'; 

function App() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  //useEffect(parFunzione, arrayDipendenze)
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovies();  // Chiamata alla funzione getMovies
      setMovies(movies);  // Memorizziamo i film nello stato
    };
    fetchMovies();  // Eseguiamo la chiamata
  }, []); // Questo effect viene eseguito solo al primo render, altrimenti andrebbe in loop

  return (
    <div>
      <h1>Lista dei film di tendenza</h1>
      {movies.length === 0 ? (
        <p>Nessun film trovato. Prova a ricaricare la pagina.</p>
      ) : (
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default App;
