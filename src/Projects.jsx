import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './components/Project'
import './style.css'


function Projects() {
  return (
<>
<Navbar/>
<div className="container-fluid">
 <h1 className='text-center text-decoration-underline' style={{color:"#4fa15d"}}  data-aos="zoom-in-down" data-aos-duration="1000">My Projects</h1></div>

<div className="container mt-sm-5">
<div className="row row-cols-1 row-cols-md-2 g-3">

{/* <div className="col-12 col-md-6">
    <Project image="./ortho.JPG"  title="ORTHOCARE WEBSITE" description="Replicated the frontend design of
www.orthocarebh.org using HTML, CSS, and Bootstrap.
Ensured the site's responsiveness and user-friendly
design for optimal user experience." demo="https://orthocarebahrain.netlify.app/"/>    </div> */}
<div className="col-12 col-md-6">
    <Project image="./pswd.JPG"  title="PASSWORD RESET " description="Securely reset passwords with our MERN-based app featuring JWT token authentication. Enjoy a seamless user experience and robust data protection as you navigate through our intuitive interface. Our app ensures effortless recovery of access from any device, providing you with peace of mind and convenience." demo="https://password-reset-benasir.netlify.app/login"
    frontend="https://github.com/Benasir-93/password-Reset-Frontend.git" 
    backend="https://github.com/Benasir-93/password-Reset-Backend.git" />    </div>


<div className="col-12 col-md-6">

    <Project image="./mrithu.JPG"  title="MRITHU PHARMACY WEBSITE" description="Spearheaded the front-end development for a leading pharmacy based in Bahrain.Transformed design concepts into a visually appealingand user-friendly website using cutting-edge front-
end technologies such as HTML, CSS, and JavaScript. Implemented responsive design principles, ensuring seamless user experiences across various devices." demo="http://www.mrithupharmacy.com/"
frontend="" 
backend="" /> 
   </div>

    
    <div className="col-12 col-md-6">
    <Project image="./dynamic.JPG "  title="Dynamic Portfolio With Export To PDF" description="Created a full-stack Dynamic Portfolio for GUVI certification
using the MERN stack—MongoDB, Express.js, React.js, and
Node.js. Collaborated on seamless integration, implementing
innovative features, and delivered a high-quality, fully
functional portfolio showcasing expertise in both frontend
and backend development." demo="https://dynamicportfolio.netlify.app/" 
frontend="https://github.com/Benasir-93/dynamic-frontend.git" 
backend="https://github.com/Benasir-93/dynamicPortfolio-backend.git"  />    </div>

  
  <div className="col-12 col-md-6">
    <Project image="./5way.JPG "  title="5way Website" description="Currently working on the 5way Website project, a recent
client request. The
static site includes a form where, upon user submission,
automated emails are generated for both the user and the
site owner. This project demonstrates my proficiency in
developing dynamic web solutions with backend
functionality and interactive frontend features." demo="https://5waymart.netlify.app/"   frontend="https://github.com/Benasir-93/5way-frontend.git" 
backend="https://github.com/Benasir-93/5way-backend.git"  />
    </div>
    </div>



  </div>
<Footer/>
</>
    )
}

export default Projects