import React from 'react';
import Navbar from './components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import Footer from './components/Footer';
import './style.css'
import { Link } from 'react-router-dom';
import BackToTop from './components/BackToTop';
// import Whatsapp from './components/Whatsapp';

function Home() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <span>
              <img
                src="./HIJAB profile.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </span>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start">
          
         
<TypeAnimation className='fw-bold animationText'
  style={{ whiteSpace: 'pre-line', height: '230px', display: 'block' }}
  sequence={[
    `Hi All, I'm Benasir Begam\nMERN Stack Developer\nand I Create WordPress Solutions
`, 1000, '',
  ]}
  repeat={Infinity}
/>
{/* ================================ */}
<span className='fw-4 '>
<Link to="/contact"><button className=' mb-sm-1 mx-2 btn btn-outline-dark '>contact me</button></Link>

<a href="./Benasir Begam - NewResume.pdf" download><button className='mx-2 btn btn-outline-dark'>Download CV</button></a>

</span>       

   </div>
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="card text-dark para">
      <img src="./newbg.png" class="card-img" alt="" />

      <div class="card-img-overlay" >
 <h2 className='text-center fw-bold mb-5 display-4 stroke' style={{color:"#c28dbe"}} data-aos="zoom-in"  data-aos-duration="2000">Who I Am </h2>
      {/* <div className="container">
      <p className='text-center lh-lg fw-bold ' data-aos="fade-up" data-aos-duration="2000">A passionate MERN stack developer with a love for coding and problem-solving. 
    I specialize in creating dynamic and responsive web applications using the latest technologies. 
    With a strong foundation in JavaScript, React, Node.js, and MongoDB, I bring creativity and dedication 
    to every project I work on.</p>
      </div> */}
      <div className="container">
        <div className="col-9 mx-auto">
      <p className='text-center lh-lg fw-bold ' data-aos="fade-up" data-aos-duration="2000">I am a certified MERN stack developer with a passion for crafting seamless, dynamic web applications and solving complex problems through code. With expertise in JavaScript, React, Node.js, and MongoDB, I specialize in delivering creative and user-focused solutions.</p></div>
      <br />
      <div className="col-9 mx-auto">

      <p className='text-center lh-lg fw-bold ' data-aos="fade-up" data-aos-duration="2000">Beyond MERN, I have expanded my skill set to include building functional and visually appealing websites using WordPress, integrating my technical proficiency with intuitive design. My creative flair extends to Canva, where I design impactful visuals that elevate brand identity and engagement.</p></div><br />
      <div className="col-9 mx-auto">
      <p className='text-center lh-lg fw-bold ' data-aos="fade-up" data-aos-duration="2000">Driven by a love for learning and innovation, I bring versatility, dedication, and a commitment to excellence to every project I take on..</p></div>

      </div>
      </div>
      </div>
      </div>
         {/* <Whatsapp /> */}
      <BackToTop />
      <Footer/>
    </>
  );
}

export default Home;
