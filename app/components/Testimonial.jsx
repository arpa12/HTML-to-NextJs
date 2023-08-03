import React from 'react';
import Image from 'next/image';
import { teamMembersData, testimonialData } from '../data';
const TestimonialCarousel = () => {
  return (
    <div className="container">
      <h1 className='display-5 mb-5 fw-bold text-center'>__Testimonials__</h1>
      <div className="carousel slide" data-bs-ride="carousel" id="carouselExampleSlidesOnly">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
          {teamMembersData && testimonialData.map((item)=>(
                         <div className="col-lg-4" key={item.id}>
                         <div className="card">
                           <div className="box front">
                             <Image alt="" 
                             src={item.image} 
                             width={50}
                             height={50}
                             />
                             <h2>{item.name}</h2>
                             <h4>{item.designation}</h4>
                           </div>
                           <div className="box back">
                             <span className="fa fa-quote-left"></span>
                             <p>
                               {item.comment}
                             </p>
                           </div>
                         </div>
                       </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCarousel;
