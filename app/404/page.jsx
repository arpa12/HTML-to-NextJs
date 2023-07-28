import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

library.add(faExclamationTriangle);

const Page = () => {
  const containerStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/carousel-1.jpg")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    height: '50vh', 
    width: '210vh', 
  };

  return (
    <div>
      <div className="py-5 px-5" style={containerStyle}>
        <h1 className="display-3 text-white fw-bold py-5 px-5">404 Error</h1>
      </div>

      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
             <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: "#A52A2A", width:"100px",height:"100px" }} />
              <h1 className="display-1 fw-bold">404</h1>
              <h1 className="mb-4 fw-bold">Page Not Found</h1>
              <p className="mb-4">We are sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <a className="btn py-3 px-5" href="/" style={{ backgroundColor: "#A52A2A", color: "#FFFFFF" }}>Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </div>
  );
};

export default Page;
