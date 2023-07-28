import React from 'react';
import Image from 'next/image';
import feature from '../../public/assets/feature.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUserCheck, faDraftingCompass, faHeadphones   } from '@fortawesome/free-solid-svg-icons';

library.add(faUserCheck, faCheck, faDraftingCompass, faHeadphones);

const SecondFeature = () => {
  return (
    /* Feature Start */
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div className="col-lg-6 feature-text py-5 wow fadeIn px-3" >
            <div className="p-lg-5 ps-lg-0">
              <div className="section-title text-start">
                <h1 className="display-5 mb-4 fw-bold">Why Choose Us</h1>
              </div>
              <p className="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faCheck} className="fa-2x" style={{ color: "#A52A2A" }} />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Quality</p>
                      <h5 className="mb-0 fw-bold">Services</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faUserCheck} className="fa-2x" style={{ color: "#A52A2A" }} />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Creative</p>
                      <h5 className="mb-0 fw-bold">Designers</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faDraftingCompass} className="fa-2x" style={{ color: "#A52A2A" }} />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Free</p>
                      <h5 className="mb-0 fw-bold">Consultation</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: '60px', height: '60px' }}>
                    <FontAwesomeIcon icon={faHeadphones} className="fa-2x" style={{ color: "#A52A2A" }} />
                    </div>
                    <div className="ms-4">
                      <p className="mb-2">Customer</p>
                      <h5 className="mb-0 fw-bold">Support</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
            <div className="position-relative h-100">
              <Image 
              className="position-absolute img-fluid" 
              src={feature} 
              height={500}
              width={800}
              style={{ objectFit: 'cover' }} 
              alt="feature image" />
            </div>
          </div>
        </div>
      </div>
    </div>
    /* Feature End */
  );
}

export default SecondFeature;
