import styled from "styled-components";

export const MovieWrapper = styled.div`
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        height: 10.5rem;
        text-align: center;
        font-size: 1.2rem;
        background: purple;

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

      .swiper-slide:hover {
        height: 11.5rem;
        transform: scale(1.2);
        transition: transform 1s, height 1s;
        z-index: 90;
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
        background-color: red;
      }
`