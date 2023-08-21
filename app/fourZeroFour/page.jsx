import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { errorData } from "../data";


const Page = () => {
  const containerStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/carousel-1.jpg")',
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center', 
    height: '50vh', 
    width: '210vh', 
  };

  return (
    <div>
      <div className="py-5 px-5" style={containerStyle}>
        <h1 className="display-3 text-white fw-bold py-5 px-5">404 Error</h1>
      </div>

      {/* 404 Start */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            {errorData && errorData.map((item)=>(
              <div className="col-lg-6" key={item.id}>
              <FontAwesomeIcon icon={item.icon} style={{ color: "#A52A2A", width:"100px",height:"100px" }} />
               <h1 className="display-1 fw-bold">{item.title}</h1>
               <h1 className="mb-4 fw-bold">{item.subtitle}</h1>
               <p className="mb-4">{item.description}</p>
               {item.actionLink && item.actionLink.map((item)=>(
                <a className="btn py-3 px-5" href="/" style={{ backgroundColor: "#A52A2A", color: "#FFFFFF" }} key={item.id}>{item.button}</a>
               ))}
             </div>
            ))}
          </div>
        </div>
      </div>
      {/* 404 End */}
    </div>
  );
};

export default Page;
