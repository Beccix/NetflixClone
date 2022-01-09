import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --font-color: #F2F2F2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: black;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`