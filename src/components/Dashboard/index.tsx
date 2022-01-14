import { ButtonContainer, Container, DashboardBox, DashboardInfo } from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export function Dashboard() {
  return (
    <Container>
      <DashboardBox>
        <DashboardInfo>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at autem unde eligendi voluptate. Asperiores porro alias dolorum eum quasi veniam, obcaecati dicta. Dolores pariatur fuga cumque, voluptatibus quis cupiditate.
          </p>
          <ButtonContainer>
            <div>
              <button><BsFillCaretRightFill size={35} className="Icon" />Assistir</button>
            </div>
            <div>
              <button><AiOutlineExclamationCircle size={30} className="Icon" />Mais informações</button>
            </div>
          </ButtonContainer>
        </DashboardInfo>
      </DashboardBox>
    </Container>
  )
}