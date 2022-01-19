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
        spaceBetween={4}
        slidesPerView={2}
        slidesPerGroup={2}
        loopFillGroupWithBlank={true}
        loop={true}
        navigation
      >
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNk4cVpVF8pwRJoi1wJe04MH-c0baDu5f_ZfB-HT8EZF_2V_Ce7KXm5tx-V1Uy0kmaIKw&usqp=CAU" alt="" />
        </SwiperSlide>

      </Swiper>
    </MovieWrapper >
  )
}