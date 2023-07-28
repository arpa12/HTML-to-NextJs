import React from 'react';
import Image from 'next/image';
import quote from '../../public/assets/quote.jpg';

const Quote = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add form submission logic here
  };

  return (
    <div>
      {/* Quote Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <Image
                  className="position-absolute img-fluid"
                  src={quote}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4 fw-bold">Free Quote</h1>
                </div>
                <p className="mb-4 pb-2">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
                  diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
                  erat amet
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Name"
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email"
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Your Mobile"
                        style={{ height: '55px' }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <select className="form-select border-0" style={{ height: '55px' }}>
                        <option defaultValue>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <textarea className="form-control border-0" placeholder="Special Note" />
                    </div>
                    <div className="col-12">
                      <button className="btn w-100 py-3" type="submit" style={{ backgroundColor: "#A52A2A", color:"#FFFFFF"}}>
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End */}
    </div>
  );
};

export default Quote;
