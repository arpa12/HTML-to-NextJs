// feature.jsx
import React from 'react';
// import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUserCheck, faCheck, faDraftingCompass, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { featureData } from "../data.js";

// Add the required icons to the FontAwesome library
// library.add(faUserCheck, faCheck, faDraftingCompass, faHeadphones);

const Feature = () => {
  return (
    <>
      {/* Feature Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {featureData && featureData.map((item) => {
              return (
                <div className="col-md-6 col-lg-3 " key={item.id}>
                  <div className="d-flex align-items-center justify-content-between mb-2">
                    <div
                      className="d-flex align-items-center justify-content-center bg-light"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <FontAwesomeIcon icon={item.icon} className="fa-2x" style={{ color: item.iconColor }} />
                    </div>
                    <h1 className="display-1 text-black fw-bold mb-0" style={{ "--bs-text-opacity": "0.3" }}>{item.number}</h1>
                  </div>
                  <h5 className='fw-bold'>{item.text}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Feature End */}
    </>
  );
};

export default Feature;
