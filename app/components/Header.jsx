import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div>
         {/* Topbar Start */}
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <p className="fa fa-phone-alt text-primary me-2"></p>
              <p>+012 345 6789</p>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="fa-brands fa-facebook"
                  style={{ color: "#A52A2A" }}
                />
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <FontAwesomeIcon icon={faTwitter} style={{ color: "#A52A2A" }} />
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-1"
                href="#"
              >
                <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#A52A2A" }}/>
              </a>
              <a
                className="btn btn-sm-square bg-white text-primary me-0"
                href="#"
              >
                <FontAwesomeIcon icon={faInstagram} style={{ color: "#A52A2A" }}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End  */}

    </div>
  )
}

export default Header