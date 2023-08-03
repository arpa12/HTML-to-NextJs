"use client";
import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

library.add(faMapMarker, faPhone, faEnvelope, faArrowRight);
library.add(faFacebook, faTwitter, faLinkedinIn, faYoutube);

const Footer = () => {
  const [email, setEmail] = useState(""); // State to manage the input field value

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    // Handle sign up logic here, e.g., send the email to the server
    console.log("Email signed up:", email);
  };

  return (
    <div>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4 fw-bold">Address</h4>
              <p className="mb-2">
                <FontAwesomeIcon icon={faMapMarker} className="fa-s me-2" />
                123 Street, New York, USA
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="fa-s me-2" />
                +012 345 67890
              </p>
              <p className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="fa-s me-2" />
                info@example.com
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#">
                  <FontAwesomeIcon icon={faTwitter} style={{ color: "#A52A2A" }} />
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#">
                  <FontAwesomeIcon icon={faFacebook} style={{ color: "#A52A2A" }} />
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#">
                  <FontAwesomeIcon icon={faYoutube} style={{ color: "#A52A2A" }} />
                </a>
                <a className="btn btn-sm-square bg-white text-primary me-1" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#A52A2A" }} />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4 fw-bold">Services</h4>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                General Carpentry
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Furniture Remodeling
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Wooden Floor
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Wooden Furniture
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Custom Carpentry
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4 fw-bold">Quick Links</h4>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                About Us
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Contact Us
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Our Services
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Terms & Condition
              </a>
              <a className="btn btn-link" href="">
                <FontAwesomeIcon icon={faArrowRight} className="fa-s me-2" />
                Support
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4 fw-bold">Newsletter</h4>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <form onSubmit={handleSignUp}>
                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                    value={email} // Bind input value to the email state
                    onChange={handleInputChange} // Update state when input changes
                  />
                  <button
                    type="submit"
                    className="btn py-2 position-absolute top-0 end-0 mt-2 me-2"
                    style={{ backgroundColor: "#A52A2A", color: "#FFFFFF" }}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy;{" "}
                <a className="border-bottom" href="/">
                  Woody-Carpentar Website Template
                </a>
                , All Right Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                <a className="border-bottom" href="/">
                  HTML Codex
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </div>
  );
};

export default Footer;
