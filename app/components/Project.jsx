"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { projectsData } from '../data';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter((item) =>
          activeFilter === 'general' ? item.title === 'General Carpentry' : item.title === 'Custom Carpentry'
        );

  return (
    <div>
      {/* Projects Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5 fw-bold">Our Projects</h1>
          </div>
          <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-12 text-center">
              <ul className="list-inline mb-5" id="portfolio-flters">
                <li
                  className={`mx-2 ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('all')}
                >
                  All
                </li>
                <li
                  className={`mx-2 ${activeFilter === 'general' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('general')}
                >
                  General Carpentry
                </li>
                <li
                  className={`mx-2 ${activeFilter === 'custom' ? 'active' : ''}`}
                  onClick={() => handleFilterClick('custom')}
                >
                  Custom Carpentry
                </li>
              </ul>
            </div>
          </div>
          <div className="row g-4 portfolio-container">
            {filteredProjects.map((item) => (
              <div
                className="col-lg-4 col-md-6 portfolio-item wow fadeInUp"
                key={item.id}
              >
                <div className="rounded overflow-hidden">
                  <div className="position-relative overflow-hidden">
                    <Image
                      className="img-fluid w-100"
                      src={item.image}
                      height={200}
                      width={500}
                      alt=""
                    />
                    <div className="portfolio-overlay">
                      <a className="btn btn-square btn-outline-light mx-1 ">
                        <FontAwesomeIcon icon={item.icon_one} />
                      </a>
                      <a className="btn btn-square btn-outline-light mx-1" href="">
                        <FontAwesomeIcon icon={item.icon_two} />
                      </a>
                    </div>
                  </div>
                  <div className="border border-5 border-light border-top-0 p-4">
                    <p className="fw-medium mb-2" style={{ color: '#A52A2A' }}>
                      {item.title}
                    </p>
                    <h5 className="lh-base mb-0 fw-bold">{item.subTitle}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Projects End */}
    </div>
  );
};

export default Project;
