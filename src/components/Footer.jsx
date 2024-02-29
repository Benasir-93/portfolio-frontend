
 import React from 'react';
 import { Link } from 'react-router-dom';
 
function Footer() {
  const iconStyle = {
    width: '5rem',
    marginRight: '10px',
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
  };

  return (
    <>
      <div className="container-fluid  py-3">
        <div className="row">
          <span className='d-flex justify-content-center'>
            <Link to="https://github.com/Benasir-93" target="_blank">
              <img src="./github.png" alt="GitHub" style={{ ...iconStyle, }} className="iconStyle" />
            </Link>
            <Link to="https://www.linkedin.com/in/benasir-faizal-755260288/" target="_blank">
              <img src="./linkedin.png" alt="LinkedIn" style={{ ...iconStyle, }} className="iconStyle" />
            </Link>
            {/* <Link to="www.benasirfaizal93@gmail.com">
              <img src="./gmail.png" alt="Email" style={{ ...iconStyle, }} className="iconStyle" />
            </Link> */}
          </span>
          <h6 className='text-center'>&copy; {new Date().getFullYear()} | Designed & Developed by Benasir Begam.</h6>
        </div>
      </div>
    </>
  );
}

export default Footer;

  