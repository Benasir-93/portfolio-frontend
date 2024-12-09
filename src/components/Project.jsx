import React from 'react';
import { Link } from 'react-router-dom';

function Project({ image, title, description, demo, source }) {
  return (
    <div className="card " >
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={demo} target="_blank" className='text-decoration-none'><button className="btn btn-dark btn-sm mx-auto d-flex justify-content-center align-items-center fw-bold text-decoration-none">Live Demo</button></Link>
      </div>
    </div>
  );
}

export default Project;
