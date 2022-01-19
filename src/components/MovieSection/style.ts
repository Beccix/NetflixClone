import styled from "styled-components";

export const MovieWrapper = styled.div`
      margin-left: 4%;
      z-index: 10;

  .swiper {
  width: 100%;
  height: 100%;
  }

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-button-next, .swiper-button-prev {
  color: white; 
  transform: scale(1.2);
}

.swiper-button-next {
  transform: translateX(20%);
}

.swiper-button-prev {
  transform: translateX(-100%);
  z-index: 20;
}
`