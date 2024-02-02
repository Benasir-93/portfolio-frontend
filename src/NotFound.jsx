// NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      {/* <h1 className="display-1">404</h1>
      <p className="lead">Page not found</p> */}
      <img src="./404.jpg" alt="" className='img-fluid' />
      <p>Sorry, the page you are looking for not in Here.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
