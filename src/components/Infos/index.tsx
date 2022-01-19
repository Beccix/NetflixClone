import { Container, IconBox, InfoGrid } from "./styles";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export function Infos() {
  return (
    <Container>
      <IconBox>
        <FaFacebookF size={60} color="white" />
        <FaInstagram size={60} color="white" />
        <FaTwitter size={60} color="white" />
        <FaYoutube size={60} color="white" />
      </IconBox>
      <InfoGrid>
        <h1>Idioma e legendas</h1>
        <h1>Audiodescrição</h1>
        <h1>Centro de ajuda</h1>
        <h1>Cartão pré-pago</h1>
        <h1>Impresa</h1>
        <h1>Relações com investidores</h1>
        <h1>Carreiras</h1>
        <h1>Termos de uso</h1>
        <h1>Privacidade</h1>
        <h1>Avisos legais</h1>
        <h1>Preferências de cookies</h1>
        <h1>Informações Corporativas</h1>
        <h1>Entre em contato</h1>
      </InfoGrid>
      <button>
        Código do serviço
      </button>
    </Container>
  )
}