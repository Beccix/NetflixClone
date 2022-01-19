import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { Infos } from "./components/Infos";
import { MovieGrid } from "./components/MovieGrid";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <MovieGrid />
      <MovieGrid />
      <MovieGrid />
      <MovieGrid />
      <MovieGrid />
      <Infos />
      <GlobalStyle />
    </>
  );
}

