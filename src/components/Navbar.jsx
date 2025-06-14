import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bold fs-2">
          Presento<span className="text-danger">.</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Home</NavLink>
            <NavLink to="/aboutus" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>About</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Services</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Portfolio</NavLink>
            <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Team</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Blog</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link mx-3 active fw-bold text-danger" : "nav-link mx-3"}>Contact</NavLink>
          </div>

          <button className="btn btn-danger px-4 ms-3" type="button">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
