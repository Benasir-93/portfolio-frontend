import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import './styles.css'; // your custom styles if any

// Project data array
const projects = [
  {
    id: 1,
    name: '5waysfze',
    image: '/5ways.JPG',
    link: '/projects', // internal page
  },
  {
    id: 2,
    name: 'Sharjah Gifts',
    image: 'sharjah.png',
    link: '/projects',
  },
  {
    id: 3,
    name: 'Angel Beauty Parlour',
    image: '/angel-home.JPG',
    link: '/projects',
  },
  {
    id: 4,
    name: 'Crescent Haj Service ',
    image: '/cres.JPG',
    link: '/projects',
  }, {
    id: 5,
    name: 'ToursWeGo',
    image: '/tour.JPG',
    link: '/projects',
  }, {
    id: 6,
    name: 'High SoMeat General trading L.L.C',
    image: '/high.JPG',
    link: '/projects',
  }, {
    id: 7,
    name: 'Almolabi Haj and Umrah',
    image: '/almolabi1.JPG',
    link: '/projects',
  },
  {
    id: 8,
    name: 'Al Minha Technical Services L.L.C ',
    image: '/alminha.JPG',
    link: '/projects',
  },
  {
    id: 9,
    name: 'MD General Trading L.L.C ',
    image: '/md.JPG',
    link: '/projects',
  },
  {
    id: 10,
    name: 'Dynamic Portfolio With Export To PDF',
    image: '/dynamic.JPG',
    link: '/projects',
  },
  {
    id: 11,
    name: 'MRITHU PHARMACY ',
    image: '/mrithu.JPG',
    link: '/projects',
  }, {
    id: 12,
    name: 'ORTHOCARE WEBSITE',
    image: '/ortho.JPG',
    link: '/projects',
  },
  {
    id: 13,
    name: 'Cartylitics',
    image: '/cartylitics.png',
    link: '/projects',
  },
  
  // Add more projects here...
];

export default function ProjectSlide() {
  return (
    <div className="projects-slider  " >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // 👈 Pause on hover
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
