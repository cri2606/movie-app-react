// src/App.tsx
import './App.css';
import { ContentHolder } from './components/ContentHolder';

function App() {
  return (
    <div>
      <h1>MovieApp</h1>

      {/* Componenti ContentHolder per i diversi tipi di contenuto */}
      <ContentHolder url="movie/day" pTitle="Top 3 Trending Movies" />
      <ContentHolder url="person/day" pTitle="Top 3 Trending People" />
      <ContentHolder url="tv/day" pTitle="Top 3 Trending TV" />
    </div>
  );
}

export default App;
