import { Provider } from "./components/ui/provider.tsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router";
import { Details } from "./components/Details";
import App from './App.tsx';
import './index.css';
import { Search } from "./components/Search";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter basename="/movie-app-react">
        <Routes>
          <Route index element={<App />} />
          <Route path=":type/:id" element={<Details />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
