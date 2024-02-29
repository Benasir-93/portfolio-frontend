
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from "../themeContext";
import "../style.css"

const Navbar = () => {
  const { theme, toggleTheme } = useTheme(); 
  
  useEffect(() => {
    const offcanvasNavbar = document.getElementById('offcanvasNavbar');
    const handleOffcanvasShown = () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0px';
    }; 

    offcanvasNavbar.addEventListener('shown.bs.offcanvas', handleOffcanvasShown);

    return () => {
      offcanvasNavbar.removeEventListener('shown.bs.offcanvas', handleOffcanvasShown);
    };
  }, []);

  const toggleMode = () => {
    toggleTheme();
  };

  return (
    <nav className={`navbar ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold fs-3" style={{color:"#7f6284"}}>Benasir Begam</Link>

        {/* toggle button for dark/light mode */}
        <div className="mode-switch ms-auto pe-2">
          <label>
            <input
              type="checkbox" 
              onChange={toggleMode}
              checked={theme === "dark"}
              style={{ display: "none" }} // Apply inline style to hide the checkbox

            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* menu button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="offcanvas offcanvas-end glassmorphism" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link">Projects</Link>
              </li>
               <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
