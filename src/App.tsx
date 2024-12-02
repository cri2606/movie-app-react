// src/App.tsx
import { Link } from 'react-router';
import './App.css';
import { CardContainer } from './components/CardContainer';
import { Text } from "@chakra-ui/react";

function App() {
  return (
    <div>
      <h1>MovieApp</h1>
      <Text mt={2}>
        <Link to="/details">Vai ai dettagli</Link>
      </Text>
      {/* Componenti CardContainer per i diversi tipi di contenuto */}
      <CardContainer url="trending/movie/day" section="Trending Movies" />
      <CardContainer url="trending/person/day" section="Trending People" />
      <CardContainer url="trending/tv/day" section="Trending TV" />
    </div>
  );
}

export default App;
