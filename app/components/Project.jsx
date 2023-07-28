import React from 'react'
import Image from 'next/image'
import one from '../../public/assets/portfolio-1.jpg';
import two from '../../public/assets/portfolio-2.jpg';
import three from '../../public/assets/portfolio-3.jpg';
import four from '../../public/assets/portfolio-4.jpg';
import five from '../../public/assets/portfolio-5.jpg';
import six from '../../public/assets/portfolio-6.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faEye, faLink);

const Project = () => {
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
          <li className="mx-2 active" data-filter="*">All</li>
          <li className="mx-2" data-filter=".first">General Carpentry</li>
          <li className="mx-2" data-filter=".second">Custom Carpentry</li>
        </ul>
      </div>
    </div>
    <div className="row g-4 portfolio-container">
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.1s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <Image 
            className="img-fluid w-100" 
            src={one} 
            height={200}
            width={500}
            alt="" />
            <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>General Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.3s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
            <Image 
            className="img-fluid w-100" 
            src={two} 
            height={200}
            width={500}
            alt="" />
            <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>Custom Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.5s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
          <Image 
            className="img-fluid w-100" 
            src={three} 
            height={200}
            width={500}
            alt="" />
           <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>General Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.1s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
          <Image 
            className="img-fluid w-100" 
            src={four} 
            height={200}
            width={500}
            alt="" />
           <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>Custom Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item first wow fadeInUp" data-wow-delay="0.3s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
          <Image 
            className="img-fluid w-100" 
            src={five} 
            height={200}
            width={500}
            alt="" />
            <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>General Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 portfolio-item second wow fadeInUp" data-wow-delay="0.5s">
        <div className="rounded overflow-hidden">
          <div className="position-relative overflow-hidden">
          <Image 
            className="img-fluid w-100" 
            src={six} 
            height={200}
            width={500}
            alt="" />
            <div className="portfolio-overlay">
              <a className="btn btn-square btn-outline-light mx-1 "> <FontAwesomeIcon icon={faEye} /></a>
              <a className="btn btn-square btn-outline-light mx-1" href=""><FontAwesomeIcon icon={faLink} /></a>
            </div>
          </div>
          <div className="border border-5 border-light border-top-0 p-4">
            <p className="fw-medium mb-2" style={{ color: "#A52A2A" }}>Custom Carpentry</p>
            <h5 className="lh-base mb-0 fw-bold">Wooden Furniture Manufacturing And Remodeling</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Projects End */}

    </div>
  )
}

export default Project