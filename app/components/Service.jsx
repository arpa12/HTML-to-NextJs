import React from "react";
import Image from "next/image";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);

const Service = () => {
  return (
    <>
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5 fw-bold">Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-1.jpg"
                    alt="service 1"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">General Carpentry</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-2.jpg"
                    alt="service 2"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Furniture Manufacturing</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-3.jpg"
                    alt="service 3"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Furniture Remodeling</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-4.jpg"
                    alt="service 4"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Wooden Floor</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-5.jpg"
                    alt="service 5"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Wooden Furniture</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="overflow-hidden">
                  <Image
                    className="img-fluid"
                    src="/assets/service-6.jpg"
                    alt="service 6"
                    height={200}
                    width={350}
                  />
                </div>
                <div className="p-4 text-center border border-5 border-light border-top-0">
                  <h4 className="mb-3">Custom Work</h4>
                  <p>
                    Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam
                    lorem diam.
                  </p>
                  <a
                    className="fw-medium"
                    href=""
                    style={{ color: "#A52A2A", textDecoration: "none" }}
                  >
                    Read More <FontAwesomeIcon icon={faArrowRight} className="fa-s" style={{ color: "#A52A2A" }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Service;
