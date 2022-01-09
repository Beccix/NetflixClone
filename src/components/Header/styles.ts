import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem 2rem 1rem 3.5rem;
  background: black;
  overflow: hidden;
  position: fixed;
  top: 0; 
  width: 100%; 
`;

export const Content = styled.nav`

  position: relative;
  display: flex;
  align-items: center;

  div:first-of-type {
    display: inline-block;
    width: 70%;
    
    a {
      margin-right: 2%;
    }
  }

  div:last-of-type {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a:not(:last-of-type), img {
      
    }
  }
  
  a { 
    font-size: clamp(16px, 1.9vw, 32px);
    color: var(--font-color);
    text-decoration: none;
  }

  .imgLogo {
    width: 7rem;
    margin-right: 1rem;
  }

  input { 
    display: none;
  }

  .avatar {
    width: 1.8rem;
  }
`;

export const Icons = styled.img`
  width: 1.8rem;
  filter: brightness(0) invert(1);
`;



