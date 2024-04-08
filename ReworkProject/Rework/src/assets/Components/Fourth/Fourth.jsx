import React from 'react'
import i15 from '../images/i15.png'
import i16 from '../images/i16.png'
import i17 from '../images/i17.png'

function Fourth() {
  return (
    <div className="row container-fluid m-0 bg-[#F6F6F6]" id="target2 ">
    <div className="col-12 h1-bold-text-benifits font-bold text-violet-800   sm:text-lg lg:text-4xl  text-center mt-5 pt-5 pb-5 mb-5 m-0">How Our System Operates
    </div>
 
    <div className="flex flex-wrap justify-evenly bg-[#F6F6F6]">
      <div className="flex flex-col lg:w-1/4 md:w-full sm:w-full xs:w-full justify-between rounded-lg m-10 hover:shadow-md bg-white  hover:bg-violet-200 p-2">
        <div className="flex flex-row justify-between">
          <p className="mt-4 font-bold text-2xl p-4">Upload Documents</p>
          <img className="h-20 w-20" src={i15} alt="" />
        </div>
         <div className="flex flex-col lg:mt-5 lg:mb-5 md:mt-3 md:mb-3 sm:mt-2 sm:mb-2 xs:mt-2 xs:mb-2">
          <p className="mt-1 text-lg font-semibold text-gray-600 p-6">Shortlist the most qualified candidate and upload their details for the top companies</p>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/4 md:w-full sm:w-full xs:w-full justify-between rounded-lg m-10 hover:shadow-md bg-white hover:bg-violet-200 p-2">
        <div className="flex flex-row justify-between">
          <p className="mt-4 font-bold text-2xl p-4">Sign Up</p>
          <img className="h-20 w-20" src={i16} alt="" />
        </div>
         <div className="flex flex-col lg:mt-5 lg:mb-5 md:mt-3 md:mb-3 sm:mt-2 sm:mb-2 xs:mt-2 xs:mb-2">
          <p className="mt-1 text-lg font-semibold text-gray-600 p-6">Follow the link below to sign up and get access of the current job postings</p>
        </div>
      </div>

      <div className="flex flex-col lg:w-1/4 md:w-full sm:w-full xs:w-full justify-between rounded-lg m-10 hover:shadow-md bg-white hover:bg-violet-200 p-2">
        <div className="flex flex-row justify-between">
          <p className="mt-4 font-bold text-2xl p-4">Get Rewards</p>
          <img className="h-20 w-20" src={i17} alt="" />
        </div>
         <div className="flex flex-col lg:mt-5 lg:mb-5 md:mt-3 md:mb-3 sm:mt-2 sm:mb-2 xs:mt-2 xs:mb-2">
          <p className="mt-1 text-lg font-semibold text-gray-600 p-6">As soon as the candidate gets selected you get your benefits</p>
        </div>
      </div>
       
    </div> 
 
    

 
    <div className="col-12 flex justify-center mt-4 mb-4 pt-4 pb-4">
      <button type="button" className="mx-auto font-semibold p-2 nav-button  text-purple-800 m-3 border-purple-800 border-2  focus:ring-blue-300 font-sans rounded-lg text-2xl  px-9 py-2 text-center dark:hover:bg-violet-700 dark:focus:ring-blue-800 hover:text-white" >
        Get Started
      </button>
    </div>


 
    </div>
  )
}

export default Fourth
