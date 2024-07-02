import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <NavLink className='navbar-brand mx-2' to='/'>Bridge of Hope</NavLink>
      <div className="container-fluid" >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} aria-current="page" to="/" >Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className={({isActive}) => `nav-link dropdown-toggle ${isActive ? 'active' : ''}` } to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                Project Spectrum
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className={({isActive}) => `dropdown-item ${isActive ? 'active' : ''}`} to="/autism">Autism</NavLink></li>
                <li><NavLink className={({isActive}) => `dropdown-item ${isActive ? 'active' : ''}`} to="/adhd">ADHD</NavLink></li>
                <li><NavLink className={({isActive}) => `dropdown-item ${isActive ? 'active' : ''}`} to="/dyslexia">Dyslexia</NavLink></li>
                <li><NavLink className={({isActive}) => `dropdown-item ${isActive ? 'active' : ''}`} to="/downsyndrome">Downsyndrome</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/projects" >Our Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/people" >People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} to="/contactUs" >Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;