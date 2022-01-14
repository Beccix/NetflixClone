import logoImg from '../../assets/logo.svg'
import { Accountbox, Box, BurguerMenu, Container, NavBar, RoutesNav } from "./styles";
import { FaBell, FaSearch } from 'react-icons/fa';
import { BsFillCaretDownFill } from "react-icons/bs";
import AvatarImg from "../../assets/woman.png"
import { useState } from "react";

export function Header() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <Box className={navbar ? 'active' : ''}>
      <Container>
        <NavBar>
          {/* logo / nav */}
          <a href="#">
            <img className="imgLogo" src={logoImg} alt="Netflix logo" />
          </a>
          {/* burguer menu */}
          <BurguerMenu>
            <a className="NavegationTab" href="#">Navegar</a>
            <BsFillCaretDownFill size={20} color="white" />
          </BurguerMenu>
          {/* first-nav */}
          <RoutesNav>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Séries</a>
              </li>
              <li>
                <a href="#">Filmes</a>
              </li>
              <li>
                <a href="#">Bombando</a>
              </li>
              <li>
                <a href="#">Minha lista</a>
              </li>
            </ul>
          </RoutesNav>
          {/* secondary-nav */}
          <Accountbox>
            <FaSearch size={20} color="white" />
            <FaBell size={20} color="white" />
            <button type="button">
              <img src={AvatarImg} alt="" />
            </button>
          </Accountbox>
        </NavBar>
      </Container>
    </Box>
  )
}

