import React from 'react';
import Image from 'next/image';
import one from '../../public/assets/testimonial-1.jpg'
import two from '../../public/assets/testimonial-2.jpg'
import three from '../../public/assets/testimonial-3.jpg'
import four from '../../public/assets/testimonial-4.jpg'
const TestimonialCarousel = () => {
  return (
    <div className="container">
      <h1 className='display-5 mb-5 fw-bold text-center'>__Testimonials__</h1>
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <Image alt="" 
                    src={one} 
                    width={50}
                    height={50}
                    />
                    <h2>Full Name</h2>
                    <h4>Designation</h4>
                  </div>
                  <div className="box back">
                    <span className="fa fa-quote-left"></span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <Image alt="" 
                    src={two} 
                    width={50}
                    height={50}
                    />
                    <h2>Full Name</h2>
                    <h4>Designation</h4>
                  </div>
                  <div className="box back">
                    <span className="fa fa-quote-left"></span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="box front">
                    <Image alt="" 
                    src={three} 
                    width={50}
                    height={50}
                    />
                    <h2>Full Name</h2>
                    <h4>Designation</h4>
                  </div>
                  <div className="box back">
                    <span className="fa fa-quote-left"></span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mx-auto p-2">
                <div className="card">
                  <div className="box front">
                    <Image alt="" 
                    src={four} 
                    width={50}
                    height={50}
                    />
                    <h2>Full Name</h2>
                    <h4>Designation</h4>
                  </div>
                  <div className="box back">
                    <span className="fa fa-quote-left"></span>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores soluta quidem dolorem debitis. Minima, optio illum magni exercitationem eum laborum! Incidunt sequi repellat vero.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
