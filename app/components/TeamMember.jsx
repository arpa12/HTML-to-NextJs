import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { teamMembersData } from "../data";

const TeamMember = () => {
  return (
    <div>
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="display-5 mb-5 fw-bold">Team Members</h1>
          </div>
          <div className="row g-4" >
          {teamMembersData && teamMembersData.map((item)=>(
            <div className="col-lg-3 col-md-6 wow fadeInUp" key={item.id}>
            <div className="team-item">
              <div className="overflow-hidden position-relative">
                <Image className="img-fluid" 
                src={item.image}
                height={200}
                width={300} 
                alt="team1" />
                <div className="team-social">
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={item.icon_one} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={item.icon_two} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                  <a className="btn btn-square" href=""><FontAwesomeIcon icon={item.icon_three} className="fa-s" style={{ color: "#A52A2A" }} /></a>
                </div>
              </div>
              <div className="text-center border border-5 border-light border-top-0 p-4">
                <h5 className="mb-0 fw-bold">{item.name}</h5>
                <small>{item.designation}</small>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>
      </div>
      {/* Team End */}
    </div>
  );
};

export default TeamMember;
