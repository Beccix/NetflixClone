import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard"
import { GlobalStyle } from "./styles/global";
import { Catalogue } from "./components/Catalogue";
import { ClientInfo } from "./components/Clientinfo";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <Catalogue />
      <ClientInfo />
      <GlobalStyle />
    </>
  );
}

