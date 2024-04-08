import React from "react";
import i4 from '../images/i4.png'
import i5 from '../images/i5.png'
import i6 from '../images/i6.png'
import i7 from '../images/i7.png'
import i8 from '../images/i8.png'


function Second() {
  return (
  
  <div className="row col-12 container-fluid brand-container mt-5 mx-0 m-0 bg-violet-100">
  <div className="col-12 d-flex justify-content-center mt-5 container-fluid m-0">
    <p className="hire-for text-center text-2xl font-serif text-violet-800 p-5 rounded-lg">
      Hire for 1000+ Brands Including
    </p>
  </div>
  <div className="row container-fluid mt-3 p-2 pb-5 m-0 flex flex-wrap justify-evenly">
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i4} alt="" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i5} alt="" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i6} alt="" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i7} alt="" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i8} alt="" />
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-2 p-4 d-flex justify-content-around">
      <img src={i4} alt="" />
    </div>
  </div>
</div>

  );
}

export default Second;

