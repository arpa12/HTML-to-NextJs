import React from 'react';
import Image from 'next/image';
import feature from '../../public/assets/feature.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { secondFeatureData } from '../data';

const SecondFeature = () => {
  return (
    /* Feature Start */
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        {secondFeatureData.map((item) => (
          <div className="row g-0 mx-lg-0" key={item.id}>
            <div className="col-lg-6 feature-text py-5 wow fadeIn px-5">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4 fw-bold">{item.title}</h1>
                </div>
                <p className="mb-4 pb-2">{item.description}</p>
                <div className="row g-4">
                  {item.icons.map((iconItem) => (
                    <div className="col-6" key={iconItem.id}>
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
                          style={{ width: '60px', height: '60px' }}
                        >
                          {/* Use dynamic icon based on the icon object */}
                          
                          {iconItem.icon_one && (
                            <FontAwesomeIcon icon={iconItem.icon_one} className="fa-2x" style={{ color: "#A52A2A" }} />
                          )}
                          {iconItem.icon_two && (
                            <FontAwesomeIcon icon={iconItem.icon_two} className="fa-2x" style={{ color: "#A52A2A" }} />
                          )}
                          {iconItem.icon_three && (
                            <FontAwesomeIcon icon={iconItem.icon_three} className="fa-2x" style={{ color: "#A52A2A" }} />
                          )}
                          {iconItem.icon_four && (
                            <FontAwesomeIcon icon={iconItem.icon_four} className="fa-2x" style={{ color: "#A52A2A" }} />
                          )}
                        </div>
                        <div className="ms-4">
                          <p className="mb-2">{iconItem.title}</p>
                          <h5 className="mb-0 fw-bold">{iconItem.subtitle}</h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <Image
                  className="position-absolute img-fluid"
                  src={item.image}
                  height={500}
                  width={800}
                  style={{ objectFit: 'cover' }}
                  alt="feature image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    /* Feature End */
  );
}

export default SecondFeature;
