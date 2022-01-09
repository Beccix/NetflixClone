import { InfoList } from "../InfoList";
import InstagramImg from "../../assets/instagram.png";
import YoutubeImg from "../../assets/youtube.png";
import TwitterImg from "../../assets/twitter.png";
import FacebookImg from "../../assets/facebook.png";
import { IconsImg, InfoBox, InfoContact } from "./style";

export function ClientInfo() {
  return (
    <InfoBox>
      <IconsImg>
        <img src={FacebookImg} alt="" />
        <img src={InstagramImg} alt="" />
        <img src={TwitterImg} alt="" />
        <img src={YoutubeImg} alt="" />
      </IconsImg>
      <InfoContact>
        <main>
          <a href="">info 1</a>
          <a href="">info 2</a>
          <a href="">info 3</a>
          <a href="">info 4</a>
        </main>
        <InfoList />
        <InfoList />
        <InfoList />
      </InfoContact>
    </InfoBox>
  )
}