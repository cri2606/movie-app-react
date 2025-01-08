// src/App.tsx
import './App.css';
import { CardContainer } from './components/CardContainer';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <>
      <Navbar />
      {/* Componenti CardContainer per i diversi tipi di contenuto */}
      <CardContainer url="trending/movie/day" section="Trending Movies" />
      <CardContainer url="trending/person/day" section="Trending People" />
      <CardContainer url="trending/tv/day" section="Trending TV" />
    </>
  );
}

export default App;
