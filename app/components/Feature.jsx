import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faCheck, faDraftingCompass, faHeadphones } from '@fortawesome/free-solid-svg-icons';

// Add the required icons to the FontAwesome library
library.add(faUserCheck, faCheck, faDraftingCompass, faHeadphones);

const Feature = () => {
  return (
    <>
      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px"}}
                >
                  <FontAwesomeIcon icon="user-check" className="fa-2x" style={{ color: "#A52A2A" }} />
                </div>
                <h1 className="display-1 text-black fw-bold mb-0"  style={{"--bs-text-opacity": "0.3" }}>01</h1>
              </div>
              <h5>Creative Designers</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px"}}
                >
                  <FontAwesomeIcon icon="check" className="fa-2x" style={{ color: "#A52A2A" }} />
                </div>
                <h1 className="display-1 text-black fw-bold mb-0" style={{"--bs-text-opacity": "0.3" }}>02</h1>
              </div>
              <h5>Quality Products</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px", "--bs-text-opacity": "0.5" }}
                >
                  <FontAwesomeIcon icon="drafting-compass" className="fa-2x" style={{ color: "#A52A2A" }} />
                </div>
                <h1 className="display-1 text-black fw-bold mb-0" style={{"--bs-text-opacity": "0.3" }}>03</h1>
              </div>
              <h5>Free Consultation</h5>
            </div>
            <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <div
                  className="d-flex align-items-center justify-content-center bg-light"
                  style={{ width: "60px", height: "60px", "--bs-text-opacity": "0.5" }}
                >
                  <FontAwesomeIcon icon="headphones" className="fa-2x" style={{ color: "#A52A2A" }} />
                </div>
                <h1 className="display-1 text-black fw-bold mb-0" style={{"--bs-text-opacity": "0.3" }}>04</h1>
              </div>
              <h5>Customer Support</h5>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
};

export default Feature;
