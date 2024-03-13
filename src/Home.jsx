import React from 'react';
import Navbar from './components/Navbar';
import { TypeAnimation } from 'react-type-animation';
import Footer from './components/Footer';
import './style.css'
import { Link } from 'react-router-dom';
import { useTheme } from "./themeContext";

function Home() {
  const { theme } = useTheme();
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
  style={{ whiteSpace: 'pre-line', height: '130px', display: 'block' }}
  sequence={[
    `Hi All, I'm Benasir Begam\nMERN STACK DEVELOPER
`, 1000, '',
  ]}
  repeat={Infinity}
/>
{/* ================================ */}
<div className='d-flex fw-4'>
  <Link to="/contact">
    <button className={`mb-sm-1 mx-2 btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>
      Contact Me
    </button>
  </Link>
  <Link to="https://drive.google.com/file/d/1hITz9m1kFrmZAPz4YoO7Jz3L7SM0fggC/view?usp=sharing" target="_blank">
    <button className={`mx-2 btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}>
      View CV
    </button>
  </Link>
</div>

 </div>
        </div>
      </div>

      <div className="container-fluid mt-4 ">
        <div className="card text-white para">
      <img src="./l1.png" className="card-img" alt="" />

      <div className="card-img-overlay" >
 <h2 className='text-center fw-bold mb-4' data-aos="zoom-in"  data-aos-duration="2000">Who I Am </h2>
      <div className="container">
      <p className='text-center lh-lg fw-bold ' data-aos="fade-up" data-aos-duration="2000">A passionate MERN stack developer with a love for coding and problem-solving. 
    I specialize in creating dynamic and responsive web applications using the latest technologies. 
    With a strong foundation in JavaScript, React, Node.js, and MongoDB, I bring creativity and dedication 
    to every project I work on.</p>
      </div>
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
