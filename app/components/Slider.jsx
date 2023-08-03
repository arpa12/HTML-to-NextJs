import React from 'react';
import { Carousel } from 'react-bootstrap';
import { sliderData } from '../data.js';

const Slider = () => {

  return (
    <Carousel id="carouselExample">
      {sliderData && sliderData.map((item) => (
        <Carousel.Item key={item.id} className={item.className}>
          <div className="images" style={{ objectFit: 'cover' }}>
            <div className="container-text">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-8 text-center">
                  <h5 className="text-white text-uppercase mb-3 fw-bold">
                    {item.title}
                  </h5>
                  <h1 className="display-3 text-white mb-4 fw-bold">
                    {item.subTitle}
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    {item.description}
                  </p>
                  {item.actionLink.map((action) => (
                    <a
                      key={action.id}
                      href={action.link}
                      className={`btn py-md-3 px-md-5 me-3 slideInLeft ${item.className}-button`}
                      style={{
                        backgroundColor: action.id === 2 ? "#FFFFFF" : "#A52A2A",
                        color: action.id === 2 ? "#A52A2A" : "#FFFFFF",
                      }}
                    >
                      {action.id === 2 ? action.button_two : action.button_one}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
