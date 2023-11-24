import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Slider = () => {
  return (
    <div>
 <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
      <SwiperSlide>Slide </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider
