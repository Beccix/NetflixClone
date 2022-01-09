import styled from 'styled-components'

export const MovieScrollBox = styled.div`
  margin: 0 4rem 2.5rem 3.5rem;

  h1 { 
    color: var(--font-color);
    font-size: 4rem;
    display: block;
    margin-bottom: 0.6rem;
    font-size: clamp(1.4rem, 1.8vw, 32px);
  }
`

export const MovieGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 0px;

  img { 
    background-color: red;
    width: 15.3rem;
    height: 9rem;
  }
`