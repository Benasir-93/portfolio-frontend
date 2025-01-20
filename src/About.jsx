import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Swiper from './components/Swiper'
import BackToTop from './components/BackToTop';
import Whatsapp from './components/Whatsapp';

function About() {
  return (
<>
<Navbar/>
<div class="card mb-3 shadow-lg w-75 mx-auto custom-border mt-sm-5">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./HIJAB profile.png" class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title mb-4 text-center" style={{color:"#4fa15d"}}  data-aos="fade-right" data-aos-duration="1000">Who I Am</h3>
        <p className="fw-medium text-muted">I'm a confident and passionate web developer specializing in JavaScript, with a focus on creating dynamic and interactive user interfaces using React. I have expertise in the entire MERN stack and am also skilled in WordPress development, crafting user-friendly and responsive websites tailored to meet diverse client needs.

</p>
        <p class="fw-medium text-muted">
        With over two years of freelancing experience and completing the MERN Stack Development program at GUVI, I'm excited to connect and explore collaboration opportunities. Let's chat about how my skills can contribute to your projects. Feel free to reach out and start a conversation!</p>
      </div>
    </div>
  </div>
</div>
{/* my skills */}
{/* <div className="container mt-5 w-75"  >
  <h2 className='text-center mb-5 fs-1 text-decoration-underline' style={{color:"#4fa15d"}}  data-aos="zoom-in-down" data-aos-duration="1000">My Skills</h2>
  <div className="row mb-4">
    {Array.from({ length: 8 }).map((_, index) => (
      <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
        <img
          src={`./swiper/${index + 1}.png`}
          className="img-fluid mx-auto d-block"
          alt={`swiper ${index + 1}`}
          style={{ maxWidth: '100%' }}
        />
      </div>
    ))}
  </div>
</div> */}
{/* My Skills */}
<div className="container mt-5 w-75">
  <h2 className='text-center mb-5 fs-1 text-decoration-underline' style={{color:"#4fa15d"}} data-aos="zoom-in-down" data-aos-duration="1000">
    My Skills
  </h2>
  <div className="row mb-4">
    {Array.from({ length: 9 }).map((_, index) => (
      <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-4">
        <img
          src={`./swiper/${index + 1}.png`}
          className="img-fluid mx-auto d-block"
          alt={`swiper ${index + 1}`}
          style={{ maxWidth: '100%' }}
        />
      </div>
    ))}
  </div>
  {/* my certificate */}
<div className="contaner bg-light ">
<Swiper/></div>
</div>

  <Whatsapp/>
  <BackToTop/>
<Footer/>
</>  )
}

export default About
