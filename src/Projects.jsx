import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Project from './components/Project'
import BackToTop from './components/BackToTop';
// import Whatsapp from './components/Whatsapp';

function Projects() {
  return (
<>
<Navbar/>
<div className="container-fluid">
 <h1 className='text-center text-decoration-underline' style={{color:"#4fa15d"}}  data-aos="zoom-in-down" data-aos-duration="1000">My Projects</h1></div>

<div className="container mt-sm-5">
<div className="row row-cols-1 row-cols-md-2 g-3">
 {/* New Projects */}
 <div className="col-12 col-md-6">
            <Project
              image="/5ways.JPG"
              title="5WAYSFZE - Web Development And Digital Marketing Agency"
              description="Developed a modern website for 5waysfze, a digital marketing and web development company based in the UAE, using React.js. The site features services like web design, graphic design, and digital marketing solutions. It offers a sleek, responsive design to effectively engage potential clients."
              demo="https://5waysfze.com/"
            />
          </div>
         <div className="col-12 col-md-6">
  <Project
    image="/sharjah.png" 
    title="SHARJAH GIFTS - Customised Gifts on E-commerce in UAE"
    description="This WordPress-powered e-commerce website is built using WooCommerce with a customised theme. Unlike the ordinary 'Add to Cart' systems, the site features a request method and a WhatsApp integration. Users can send bulk quotes seamlessly and, with just a click on the WhatsApp icon for any product, initiate a chat with product details auto-filled. This feature streamlines bulk inquiries and enhances the user experience for personalized gift shopping in the UAE."
    demo="https://sharjahgifts.com"
  />
</div>

    <div className="col-12 col-md-6">
            <Project
              image="/cres.JPG"
              title="Crescent Haj Service – Trichy, India"
              description=" Developed a clean and informative website for Crescent Haj Service, located in Trichy, India. The platform provides detailed Haj and Umrah package information, travel guidance, and essential pilgrimage updates, delivering a smooth and accessible experience for users in India."
              demo="https://crescenthajservice.com/"
            />
          </div>

          <div className="col-12 col-md-6">
            <Project
              image="/tour.JPG"
              title="ToursWeGo – Travel Agency in UAE"
              description=" Crafted a vibrant and user-friendly website for ToursWeGo, a travel and tourism agency based in the UAE. The site highlights domestic and international tour packages with easy navigation, online booking features, and engaging visuals to attract travelers and enhance the booking experience."
              demo="https://tourswego.com/"
            />
          </div>
          <div className="col-12 col-md-6">
            <Project
              image="/angel-home.JPG"
              title="New Angels's Bridal Studio - Karaikal"
              description="Designed and developed a user-friendly website for New Angel's Bridal Studio, a beauty parlor in Karaikal, built with WordPress. The site showcases bridal makeup, hand makeup, and jewel rental services. It offers a clean, elegant design with easy navigation for clients to explore services"
              demo="https://angelsbridalstudio.com/"
            />
          </div>

          <div className="col-12 col-md-6">
            <Project
              image="/high.JPG"
              title="High SoMeat General trading L.L.C - UAE"
              description="Developed a professional website for High SoMeat General Trading L.L.C, located in the UAE, using WordPress. The site showcases their range of products, including frozen meats, skins & hides, and scraps. It offers a seamless browsing experience with detailed product information and easy navigation"
              demo="https://highsomeat.com/"
            />
          </div>

          <div className="col-12 col-md-6">
            <Project
              image="/almolabi1.JPG"
              title="Almolabi Haj and Umrah - UAE"
              description="Built a user-friendly website for Al Molabi Hajj and Umrah Services, located in the UAE, using WordPress. The site provides essential information and services for Hajj and Umrah pilgrims. It features a clean design and easy navigation to enhance the user experience."
              demo="https://al-molabi-haj-and-umrah.netlify.app/"
            />
          </div> 

          <div className="col-12 col-md-6">
            <Project
              image="/alminha.JPG"
              title="Al Minha Technical Services L.L.C - UAE"
              description="Developed a modern, responsive website for Al Minha Technical Services L.L.C, based in the UAE, using React.js. The site showcases their MEP (Mechanical, Electrical, and Plumbing) services with dynamic content and interactive elements. It offers a smooth user experience with fast load times and easy navigation."
              demo="https://alminha-final.netlify.app/"
            />
          </div>
          
<div class="col-12 col-md-6">
    <Project image="./ortho.JPG"  title="ORTHOCARE WEBSITE" description="Replicated the frontend design of
www.orthocarebh.org using HTML, CSS, and Bootstrap.
Ensured the site's responsiveness and user-friendly
design for optimal user experience." demo="https://orthocarebahrain.netlify.app/"/>    </div>


<div class="col-12 col-md-6">

    <Project image="./mrithu.JPG"  title="MRITHU PHARMACY WEBSITE" description="Spearheaded the front-end development for a leading pharmacy based in Bahrain.Transformed design concepts into a visually appealingand user-friendly website using cutting-edge front-
end technologies such as HTML, CSS, and JavaScript. Implemented responsive design principles, ensuring seamless user experiences across various devices." demo="http://www.mrithupharmacy.com/"/>    </div>

    
    <div class="col-12 col-md-6">
    <Project image="./dynamic.JPG "  title="Dynamic Portfolio With Export To PDF" description="Created a full-stack Dynamic Portfolio for GUVI certification
using the MERN stack—MongoDB, Express.js, React.js, and
Node.js. Collaborated on seamless integration, implementing
innovative features, and delivered a high-quality, fully
functional portfolio showcasing expertise in both frontend
and backend development." demo="https://dynamicportfolio.netlify.app/"  />    </div>

  
  <div class="col-12 col-md-6">
    <Project image="./md.JPG "  title="MD General Trading L.L.C – Somalia | UAE" description="Designed a modern website for MD General Trading L.L.C, a Somalia-based company operating in the UAE. The site showcases their import-export services, product offerings, and key trading sectors, ensuring smooth user experience and clear product navigation across regions." demo="https://mdgeneraltrd.com/" />
    </div>
    </div>



  </div>
  {/* <Whatsapp/> */}
  <BackToTop/>
<Footer/>
</>
    )
}

export default Projects
