import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretDown);

const Navbar = () => {
  return (
    <div>
      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
          <h2 className="m-0 text-danger fw-bold" style={{ color: "#A52A2A" }}>
            WooDY
          </h2>
        </a>
        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto p-4 p-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/service" className="nav-link">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a href="/project" className="nav-link">
                Project
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Pages <FontAwesomeIcon icon={faCaretDown} className="fa-s" />
              </a>
              <div className="dropdown-menu fade-up m-0">
                <a href="/feature" className="dropdown-item">
                  Feature
                </a>
                <a href="/quote" className="dropdown-item">
                  Free Quote
                </a>
                <a href="/team" className="dropdown-item">
                  Our Team
                </a>
                <a href="/testimonial" className="dropdown-item">
                  Testimonial
                </a>
                <a href="/404" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <a href="" className="btn p-3 me-5" style={{ backgroundColor: "#A52A2A", color: "#FFFFFF" }}>
            Get A Quote <i className="fa fa-arrow-right"></i>
          </a>
        </div>
      </nav>
      {/* Navbar End */}
    </div>
  );
};

export default Navbar;
