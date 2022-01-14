import { AgeInfo, ButtonContainer, Container, DashboardBox, DashboardInfo } from "./style";
import { BsFillCaretRightFill } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { MdOutlineReplay } from "react-icons/md";

export function Dashboard() {
  return (
    <Container>
      <DashboardBox>
        <DashboardInfo>
          <h1>
            Assista a novos espisódios agora
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at autem unde eligendi voluptate. Asperiores porro alias.
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
        <AgeInfo>
          <MdOutlineReplay className="ReplayButton" />
          <div>
            <span>14</span>
          </div>
        </AgeInfo>
      </DashboardBox>
    </Container>
  )
}