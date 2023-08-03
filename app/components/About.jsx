"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { aboutData } from '../data';

const About = () => {
  const [counterOn, setCounterOn] = useState(false);
  
  return (
    <>
      {/* About Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
          {aboutData && aboutData.map((item) => (
            <div className="row g-0 mx-lg-0" key={item.id}>
              <div className="col-lg-6 ps-lg-0" style={{ minHeight: "400px" }}>
                <div className="position-relative h-100">
                  <Image
                    className="position-absolute img-fluid w-100 h-100"
                    src={item.image}
                    height={500}
                    width={500}
                    style={{ objectFit: "cover" }}
                    alt="about image"
                  />
                </div>
              </div>
              <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                <div className="p-lg-5 pe-lg-0">
                  <div className="section-title text-start">
                    <h1 className="display-5 mb-4 fw-bold">About Us</h1>
                  </div>
                  <p className="mb-4 pb-2">{item.description}</p>
                  <div className="row g-4 mb-4 pb-2">
                    <div className="col-sm-6 wow fadeIn">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "60px", height: "60px" }}>
                          <FontAwesomeIcon icon={item.icon_one} className="fa-2x" style={{ color: "#A52A2A" }} />
                        </div>
                        <div className="ms-3">
                          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h2 className="mb-1" style={{ color: "#A52A2A" }}>
                              {counterOn && <CountUp start={0} end={1234} duration={2} delay={0} />}
                            </h2>
                          </ScrollTrigger>
                          <p className="fw-medium mb-0">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 wow fadeIn">
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white" style={{ width: "60px", height: "60px" }}>
                          <FontAwesomeIcon icon={item.icon_two} className="fa-2x" style={{ color: "#A52A2A" }} />
                        </div>
                        <div className="ms-3">
                          <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h2 className="mb-1" style={{ color: "#A52A2A" }}>
                              {counterOn && <CountUp start={0} end={1234} duration={2} delay={0} />}
                            </h2>
                          </ScrollTrigger>
                          <p className="fw-medium mb-0">Projects Done</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href={item.actionLink[0].link} className="btn py-3 px-5" style={{ backgroundColor: "#A52A2A", color: "#FFFFFF" }}>
                    {item.actionLink[0].button}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About End  */}
    </>
  );
};

export default About;
