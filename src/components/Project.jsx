// import React from 'react';
// import { Link } from 'react-router-dom';

// function Project({ image, title, description, demo, frontend,backend }) {
//   return (
//     <div className="card " >
//       <img src={image} className="card-img-top" alt="..." />
//       <div className="card-body">
//         <h5 className="card-title">{title}</h5>
//         <p className="card-text">{description}</p>
      
//       <Link  className='demo' to={demo} target="_blank"><button className="btn btn-dark btn-sm mx-auto d-flex justify-content-center align-items-center fw-bold text-decoration-none">Live Demo</button></Link>
//     <p className='text-center fw-semibold mt-3 '>click below to see the source code</p>
//     <div className="d-flex justify-content-center">
//       <div className="display-inline ">
//         <Link className='demo' to={frontend} target="_blank">
//           <button className="btn btn-outline-dark btn-sm mx-auto  fw-semibold text-decoration-none me-3" style={{color:"#7f6284"}}>Frontend code</button>
//         </Link>
//         <Link className='demo' to={backend} target="_blank">
//           <button className="btn  btn-outline-dark btn-sm mx-auto  fw-semibold text-decoration-none" style={{color:"#7f6284"}}>Backend code</button>
//         </Link>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }

// export default Project;
import React from 'react';
import { Link } from 'react-router-dom';

function Project({ image, title, description, demo, frontend, backend }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link className='demo' to={demo} target="_blank">
          <button className="btn btn-dark btn-sm mx-auto d-flex justify-content-center align-items-center fw-bold text-decoration-none">Live Demo</button>
        </Link>
        {frontend || backend ? (
          <p className='text-center fw-semibold mt-3'>Click below to see the source code</p>
        ) : null}        <div className="d-flex justify-content-center">
          <div className="display-inline">
            {frontend && (
              <Link className='demo' to={frontend} target="_blank">
                <button className="btn btn-outline-dark btn-sm mx-auto  fw-semibold text-decoration-none me-3" style={{ color: "#7f6284" }}>Frontend code</button>
              </Link>
            )}
            {backend && (
              <Link className='demo' to={backend} target="_blank">
                <button className="btn btn-outline-dark btn-sm mx-auto  fw-semibold text-decoration-none" style={{ color: "#7f6284" }}>Backend code</button>
              </Link>
            )}
            {!frontend && !backend && (
              <p className="text-center fw-semibold text-muted mt-2 ">This site is still live, so I can't provide the source code. I worked as a frontend developer on this project.</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
