import styled from 'styled-components'

export const DashInfo = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 36.5rem;

  div {
    margin: 0 4rem 6.5rem 3.5rem; 
  }

  div:last-of-type {
    width: 5.5rem;
    display: flex;
    justify-content: space-between;
  }

  a { 
    color: var(--font-color);
    text-decoration: none;
    font-size: clamp(1.4rem, 2.1vw, 32px); 
    font-weight: bold;
  }

  span {
    color: var(--font-color);
    font-size: clamp(1.4rem, 1.8vw, 32px)
  }

  img {
    filter: brightness(0) invert(1);
    width: 1.5rem;
  }
`