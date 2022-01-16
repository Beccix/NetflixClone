import { MovieWrapper } from "./style";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/navigation"
import SwiperCore, {
  Pagination, Navigation
} from 'swiper';
SwiperCore.use([Pagination, Navigation]);

export function MovieCarousel() {
  return (
    <MovieWrapper>
      <Swiper
        spaceBetween={2}
        slidesPerView={3}
        slidesPerGroup={2}
        navigation
      >
        <SwiperSlide>Movie 1</SwiperSlide>
        <SwiperSlide>Movie 2</SwiperSlide>
        <SwiperSlide>Movie 3</SwiperSlide>
        <SwiperSlide>Movie 4</SwiperSlide>
        <SwiperSlide>Movie 5</SwiperSlide>
        <SwiperSlide>Movie 6</SwiperSlide>
        <SwiperSlide>Movie 7</SwiperSlide>
        <SwiperSlide>Movie 8</SwiperSlide>
      </Swiper>
    </MovieWrapper >
  )
}