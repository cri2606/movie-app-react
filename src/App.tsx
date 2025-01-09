// src/App.tsx
import './App.css';
import { CardContainer } from './components/CardContainer';
import Navbar from './components/navbar/Navbar';
import { useApp } from './hooks/useApp';

function App() {
  const { activeSection, setActiveSection, sectionUrls } = useApp();
  
  return (
    <>
      <Navbar onSectionChange={setActiveSection} />
      {/* Componenti CardContainer per i diversi tipi di contenuto */}
      <CardContainer url={sectionUrls[activeSection]} section={activeSection} />
    </>
  );
}

export default App;
