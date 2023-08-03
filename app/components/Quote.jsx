import React, { useState } from 'react';
import Image from 'next/image';
import { quotesData } from '../data';

const Quote = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    specialNote: '',
  });

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic with formData
    console.log(formData);
    // You can use this data to send to a backend server or perform other actions.
  };

  return (
    <div>
      {/* Quote Start */}
      <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
       {quotesData && quotesData.map((item)=>(
                 <div className="row g-0 mx-lg-0" key={item.id}>
                 <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
                   <div className="position-relative h-100">
                     <Image
                       className="position-absolute img-fluid"
                       src={item.image}
                       layout="fill"
                       objectFit="cover"
                       alt=""
                     />
                   </div>
                 </div>
                 <div className="col-lg-6 quote-text py-5 ">
                   <div className="p-lg-5 pe-lg-0">
                     <div className="section-title text-start">
                       <h1 className="display-5 mb-4 fw-bold">{item.title}</h1>
                     </div>
                     <p className="mb-4 pb-2">
                       {item.description}
                     </p>
                     <form onSubmit={handleSubmit}>
                       <div className="row g-3">
                         <div className="col-12 col-sm-6">
                           <input
                             type="text"
                             name="name"
                             value={formData.name}
                             onChange={handleInputChange}
                             className="form-control border-0"
                             placeholder="Your Name"
                             style={{ height: '55px' }}
                           />
                         </div>
                         <div className="col-12 col-sm-6">
                           <input
                             type="email"
                             name="email"
                             value={formData.email}
                             onChange={handleInputChange}
                             className="form-control border-0"
                             placeholder="Your Email"
                             style={{ height: '55px' }}
                           />
                         </div>
                         <div className="col-12 col-sm-6">
                           <input
                             type="text"
                             name="mobile"
                             value={formData.mobile}
                             onChange={handleInputChange}
                             className="form-control border-0"
                             placeholder="Your Mobile"
                             style={{ height: '55px' }}
                           />
                         </div>
                         <div className="col-12 col-sm-6">
                           <select
                             name="service"
                             value={formData.service}
                             onChange={handleInputChange}
                             className="form-select border-0"
                             style={{ height: '55px' }}
                           >
                             <option defaultValue>Select A Service</option>
                             <option value="1">Service 1</option>
                             <option value="2">Service 2</option>
                             <option value="3">Service 3</option>
                           </select>
                         </div>
                         <div className="col-12">
                           <textarea
                             name="specialNote"
                             value={formData.specialNote}
                             onChange={handleInputChange}
                             className="form-control border-0"
                             placeholder="Special Note"
                           />
                         </div>
                         <div className="col-12">
                           <button className="btn w-100 py-3" type="submit" style={{ backgroundColor: "#A52A2A", color:"#FFFFFF"}}>
                             Submit
                           </button>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
       ))}
        </div>
      </div>
      {/* Quote End */}
    </div>
  );
};

export default Quote;
