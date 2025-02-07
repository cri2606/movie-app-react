import { Provider } from "./components/ui/provider.tsx"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Details } from "./components/Details"
import { Search } from "./components/Search"
import { App } from "./App.tsx"
import "./index.css"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <BrowserRouter basename="/">
          <Routes>
            <Route index element={<App />} />
            <Route path=":type/:id" element={<Details />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
