import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
      <div className="container ">
        <NavLink className="navbar-brand text-dark fw-bold fs-2" to="/">
          Presento <span className="text-danger">.</span>
        </NavLink>
        <button
          className="navbar-toggler text-dark"
          type="button"
          data-bs-toggle="collapse "
          data-bs-target="#navbarNav "
          aria-controls="navbarNav "
          aria-expanded="false"
          aria-label="Toggle navigation "
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/About">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/team">Team</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/testimonials">Testimonials</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;