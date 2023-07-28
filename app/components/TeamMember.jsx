import React from 'react';
import Image from 'next/image';
import team1 from '../../public/assets/team-1.jpg';
import team2 from '../../public/assets/team-2.jpg';
import team3 from '../../public/assets/team-3.jpg';
import team4 from '../../public/assets/team-4.jpg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faFacebook, faTwitter, faInstagram);

const TeamMember = () => {
  return (
    <div>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5 fw-bold">Team Members</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                  <Image className="img-fluid" 
                  src={team1}
                  height={200}
                  width={300} 
                  alt="team1" />
                  <div className="team-social">
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebook} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  </div>
                </div>
                <div className="text-center border border-5 border-light border-top-0 p-4">
                  <h5 className="mb-0 fw-bold">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                <Image className="img-fluid" 
                  src={team2}
                  height={200}
                  width={300} 
                  alt="team2" />
                  <div className="team-social">
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebook} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  </div>
                </div>
                <div className="text-center border border-5 border-light border-top-0 p-4">
                  <h5 className="mb-0 fw-bold">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                <Image className="img-fluid" 
                  src={team3}
                  height={200}
                  width={300} 
                  alt="team3" />
                  <div className="team-social">
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebook} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  </div>
                </div>
                <div className="text-center border border-5 border-light border-top-0 p-4">
                  <h5 className="mb-0 fw-bold">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden position-relative">
                <Image className="img-fluid" 
                  src={team4}
                  height={200}
                  width={300} 
                  alt="team4" />
                  <div className="team-social">
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={faFacebook} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faTwitter} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                    <a className="btn btn-square" href=""><FontAwesomeIcon icon={faInstagram} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  </div>
                </div>
                <div className="text-center border border-5 border-light border-top-0 p-4">
                  <h5 className="mb-0 fw-bold">Full Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
};

export default TeamMember;
