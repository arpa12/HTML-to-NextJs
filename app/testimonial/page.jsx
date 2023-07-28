import React from "react";
import TestimonialCarousel from "../components/Testimonial";

const page = () => {
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
      <h1 className="display-3 text-white fw-bold py-5 px-5">Testimonial</h1>
    </div>

    <TestimonialCarousel />
   </div>
  );
};

export default page;
