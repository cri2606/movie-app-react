// src/App.tsx
import { useEffect, useState } from 'react';
import { getMovies, getPeople, getTV } from './api/movies';
import './App.css';
import { MovieCard } from './components/MovieCard';
import { MediaType } from './types/movieTypes';

function App() {
  const [topMovies, setTopMovies] = useState<MediaType[]>([]);
  const [topPeople, setTopPeople] = useState<MediaType[]>([]);
  const [topTVSeries, setTopTVSeries] = useState<MediaType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      const people = await getPeople();
      const tv = await getTV();

      setTopMovies(movies);
      setTopPeople(people);
      setTopTVSeries(tv);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>MovieApp</h1>

      <h2>Top 3 Trending Movies</h2>
      {topMovies.length > 0 ? (
        topMovies.map((movie) => (
          <MovieCard key={movie.id} item={movie} />
        ))
      ) : (
        <p>Caricamento in corso...</p>
      )}

      <h2>Top 3 Trending People</h2>
      {topPeople.length > 0 ? (
        topPeople.map((person) => (
          <MovieCard key={person.id} item={person} />
        ))
      ) : (
        <p>Caricamento in corso...</p>
      )}

      <h2>Top 3 Trending TV</h2>
      {topTVSeries.length > 0 ? (
        topTVSeries.map((tvShow) => (
          <MovieCard key={tvShow.id} item={tvShow} />
        ))
      ) : (
        <p>Caricamento in corso...</p>
      )}
    </div>
  );
}

export default App;
