// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
         <img src="./404.jpg" alt="" className='img-fluid' />
      <p className='fw-bold'>Sorry, the page you are looking for not in here.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
