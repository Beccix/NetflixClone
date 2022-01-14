import styled from 'styled-components'

export const Box = styled.div`
  width: 100%;
`

export const Container = styled.header`
  background: rgb(0,0,0);
  background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
  transition: background-color 350ms linear;
  padding: 1rem 2.5rem 1.5rem 2.5rem;
  width: 100%;
  position: fixed;
  z-index: 1;

  ${Box}.active & {
    background-color: black;
    transition: background-color 150ms linear;
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  }

  .imgLogo {
    display: inline-block;
    margin-right: 1.5rem;
  }

  .NavegationTab { 
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: var(--font-color);
    margin-right: 0.5rem;
  }

  img {
    width: auto;
    height: 30px;
  }
`

export const BurguerMenu = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`

export const RoutesNav = styled.div`
  display: none;

  li {
    list-style-type: none;
  }
  ul > li > a {
    text-decoration: none;
    color: var(--font-color);
  }
`

export const Accountbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 18%;
`
