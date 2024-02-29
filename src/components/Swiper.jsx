import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

export default function App() {
  return (
 
    <div className="container bg-transparent my-container">
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="./swiper/html-5.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/css-3.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/js.png" className="img-fluid swiper-image" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/bootstrap.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/library.png" className="img-fluid swiper-image"
        alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/mongodb.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/nodejs.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./swiper/mysql.png" className="img-fluid swiper-image"  alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
  );
}
 