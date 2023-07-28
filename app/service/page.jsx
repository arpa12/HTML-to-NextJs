"use client";
import React from "react";
import Service from "../components/Service";
import Quote from "../components/Quote";
import TestimonialCarousel from "../components/Testimonial";

const page = () => {
  const containerStyle = {
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/carousel-1.jpg")',
    backgroundSize: 'cover', // Adjust the background size as needed (e.g., cover, contain)
    backgroundRepeat: 'no-repeat', // Set background-repeat to "repeat" if you want it to repeat
    backgroundPosition: 'center', // Adjust the background position as needed
    height: '50vh', // Set the height of the container to make sure the background image covers the
    width: '210vh', // Set the width of the container to make sure the
  };

  return (
   <div>
     <div className="py-5 px-5" style={containerStyle}>
      <h1 className="display-3 text-white fw-bold py-5 px-5">Service</h1>
    </div>

    <Service />
    <Quote />
    <TestimonialCarousel />
   </div>
  );
};

export default page;
