import { MovieCarousel } from "../MovieSection";
import { Container } from "./styles";

export function MovieGrid() {
  return (
    <Container>
      <div>
        <h1>Minha lista</h1>
      </div>
      <MovieCarousel />
    </Container>
  )
}