import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { MovieGrid } from "./components/Moviegrid";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <MovieGrid />
      <GlobalStyle />
    </>
  );
}

