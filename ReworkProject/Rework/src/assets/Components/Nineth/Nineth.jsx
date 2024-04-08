import React from "react";
import i28 from "../images/i28.png";
import i26 from "../images/i26.png";
import i27 from "../images/i27.png";

function Nineth() {
  return (
    <>
      <div className="row container-fluid bg-white flex justify-center">
        <div className="col-12 font-bold text-blue-800  text-center  mt-5 p-5">
          <p className=" text-4xl">Success Stories</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center sm:flex-row sm:justify-center lg:gap-8 ">
        <div className="mt-24 flex justify-start bg-white  hover:bg-violet-100 shadow-md  shadow-blue-500/40 md:shadow-indigo-500/40 w-96 p-3 rounded-md">
          <div className="col-lg-4 col-xl-4 col-xxl-4 col-sm-6 col-md-6 box-s rounded-5 ">
            <img className="w-auto h-72 rounded-md mt-2" src={i26} alt="" />
            <br></br>
            <p className="text-lg">
              Rework has been a great way to make the hiring process easier and
              faster.
            </p>
            <br />
            <p className="text-md text-gray-500">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend!“
            </p>
          </div>
        </div>

        <div className="mt-24 flex justify-start bg-white  hover:bg-violet-100 shadow-md  shadow-blue-500/40 md:shadow-indigo-500/40 w-96 p-3 rounded-md">
          <div className="col-lg-4 col-xl-4 col-xxl-4 col-sm-6 col-md-6 box-s rounded-5 ">
            <img className="w-auto h-72 rounded-md mt-2" src={i27} alt="" />
            <br></br>
            <p className="text-lg">
              Rework has been a great way to make the hiring process easier and
              faster.
            </p>
            <br />
            <p className="text-md text-gray-500">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend!“
            </p>
          </div>
        </div>
        <div className="mt-24 flex justify-start bg-white  hover:bg-violet-100 shadow-md  shadow-blue-500/40 md:shadow-indigo-500/40 w-96 p-3 rounded-md">
          <div className="col-lg-4 col-xl-4 col-xxl-4 col-sm-6 col-md-6 box-s rounded-5 ">
            <img className="w-auto h-72 rounded-md mt-2" src={i27} alt="" />
            <br></br>
            <p className="text-lg">
              Rework has been a great way to make the hiring process easier and
              faster.
            </p>
            <br />
            <p className="text-md text-gray-500">
              “We've been able to save money and time, and the recruiters have
              been able to find the best employers leads. Highly recommend!“
            </p>
          </div>
        </div>


       
      </div>
      <div className="flex gap-3.5  p-2 mt-11  ml-[45vw] max-md:mt-20">
      <div className="h-2 bg-violet-800 rounded-md sm:w-1/4 lg:w-[40px]"></div>
      <div className="h-2 bg-violet-100 rounded-md sm:w-1/2 lg:w-[81px]"></div>
    </div>
    
    </>
  );
}

export default Nineth;
