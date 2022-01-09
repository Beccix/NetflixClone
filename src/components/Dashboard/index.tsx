import { DashInfo } from './styles';
import replay from '../../assets/replay.png'

export function Dashboard() {
  return (
    <DashInfo>
      <div>
        <a href="#">Assistir</a>
        <a href="#">Mais informações</a>
      </div>
      <div>
        <img src={replay} alt="" />
        <span>14</span>
      </div>
    </DashInfo>
  );
}