import logoImg from '../../assets/logo.svg'
import searchImg from '../../assets/search.png'
import notificationImg from '../../assets/notification.png'
import perfilImg from '../../assets/woman.png'
import arrowImg from '../../assets/arrow.png'
import { Container, Content, Icons } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <a href="#">
          <img className="imgLogo" src={logoImg} alt="Netflix logo" />
        </a>
        <div>
          <a href="#">
            Início
          </a>
          <a href="#">
            Séries
          </a>
          <a href="#">
            Filmes
          </a>
          <a href="#">
            Bombando
          </a>
          <a href="#">
            Minha Lista
          </a>
        </div>
        <div>
          <input type="text" placeholder="Titulo, gente e genêro" />
          <Icons src={searchImg} alt="lupa" />
          <a href="#">
            <span>Infantil</span>
          </a>
          <a href="#">
            <Icons src={notificationImg} alt="notificação" />
          </a>
          <a href="#">
            <img className="avatar" src={perfilImg} alt="Perfil" />
          </a>
          <a href="#">
            <Icons src={arrowImg} alt="Seta" />
          </a>
        </div >
      </Content >
    </Container >
  )
}





