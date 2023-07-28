import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <Carousel id="carouselExample">
      <Carousel.Item className="img-one">
        <div className="image-one" style={{ objectFit: 'cover' }}>
          <div className="container-text">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <h5 className="text-white text-uppercase mb-3 fw-bold text-center">
                  Welcome To WooDY
                </h5>
                <h1 className="display-3 text-white mb-4 fw-bold">
                  Best Carpenter & Craftsman Services
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <a
                  href=""
                  className="btn  py-md-3 px-md-5 me-3 slideInLeft"
                  style={{ backgroundColor: "#A52A2A" , color: "#FFFFFF" }}
                >
                  Read More
                </a>
                <a
                  href=""
                  className="btn btn-light py-md-3 px-md-5 slideInRight"
                >
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-two" style={{ objectFit: 'cover' }}>
        <div className="image-two">
          <div className="container-text">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <h5 className="text-white text-uppercase mb-3 fw-bold text-center">
                  Welcome To WooDY
                </h5>
                <h1 className="display-3 text-white slideInDown mb-4 fw-bold">
                  Best Carpenter & Craftsman Services
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <a
                  href=""
                  className="btn py-md-3 px-md-5 me-3 slideInLeft"
                  style={{ backgroundColor: "#A52A2A" , color: "#FFFFFF" }}
                >
                  Read More
                </a>
                <a
                  href=""
                  className="btn btn-light py-md-3 px-md-5 slideInRight"
                >
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item className="img-three" style={{ objectFit: 'cover' }}>
        <div className="image-three">
          <div className="container-text">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-8 text-center">
                <h5 className="text-white text-uppercase mb-3 fw-bold text-center">
                  Welcome To WooDY
                </h5>
                <h1 className="display-3 text-white slideInDown mb-4 fw-bold">
                  Best Carpenter & Craftsman Services
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <a
                  href=""
                  className="btn py-md-3 px-md-5 me-3 slideInLeft"
                  style={{ backgroundColor: "#A52A2A" , color: "#FFFFFF" }}
                >
                  Read More
                </a>
                <a
                  href=""
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
