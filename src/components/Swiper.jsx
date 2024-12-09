import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default function App() {
  return (
 
    <div className="container bg-transparent my-container">
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./certificate/1.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/2.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/3.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/4.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/5.png" className="img-fluid swiper-image"
        alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/6.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/7.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./certificate/8.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
  );
}
 