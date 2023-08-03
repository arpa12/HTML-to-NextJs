import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { serviceData } from "../data";

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
            {serviceData.map((item) => (
              <div
                key={item.id}
                className="col-md-6 col-lg-4 wow fadeInUp"
              >
                <div className="service-item">
                  <div className="overflow-hidden">
                    <Image
                      className="img-fluid"
                      src={item.image}
                      alt={`service ${item.id}`}
                      height={200}
                      width={350}
                    />
                  </div>
                  <div className="p-4 text-center border border-5 border-light border-top-0">
                    <h4 className="mb-3">{item.title}</h4>
                    <p>{item.description}</p>
                    <a
                      className="fw-medium"
                      href={item.actionLink[0].link}
                      style={{ color: "#A52A2A", textDecoration: "none" }}
                    >
                      {item.actionLink[0].button}
                      <FontAwesomeIcon icon={item.icon} className="fa-s" style={{ color: "#A52A2A" }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
};

export default Service;
