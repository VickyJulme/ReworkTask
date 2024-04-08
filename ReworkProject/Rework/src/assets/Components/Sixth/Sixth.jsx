import React from 'react'
import i21 from '../images/i21.png'
import i20 from '../images/i20.png'
import i22 from '../images/i22.png'

function Sixth() {
  return (

<div className="container mx-auto justify-center mt-5 mb-5">
  <div className="lg:w-7/12 lg:mt-5">
    <div className="container mx-auto">
      <div className="font-bold text-violet-800 text-3xl p-3">
        <p>Discover the Future of Talent Assessment!</p>
      </div>
      <br />
      <div className="mt-2 p-3">
        <p>Facing challenges in traditional hiring? Uncover the costs, pitfalls, and the game-changing role of Generative AI in recruitment.</p>
      </div>
      <br />
      <div className="mt-2 p-3">
        <p className="flex items-center font-bold text-black text-lg">
          <img src={i20} alt="" className="mr-2" /> Inside this Whitepaper:
        </p>
        <br />
        <p className="flex items-center">
          <img src={i21} alt="" className="mr-2" /> Manual vs. Machine-based hiring: Costs & Challenges.
        </p>
        <br />
        <p className="flex items-center">
          <img src={i21} alt="" className="mr-2" /> The truth about "Interview as a Service."
        </p>
        <br />
        <p className="flex items-center">
          <img src={i21} alt="" className="mr-2" /> Generative AI: The simple explanation. Optimize Your Hiring Process Today!
        </p>
        <br />
        <br/>
        <button className="discover-button  shadow-md hover:shadow-lg hover:shadow-violet-600 shadow-right hover:shadow-bottom  text-xl rounded-lg  font-bold font-sans text-white w-11/12 ps-4 pe-4 pt-4 pb-4 border-4 border-transparent hover:border-violet-500 dark:hover:bg-white  dark:focus:ring-blue-800 bg-violet-700 hover:text-violet-600">
        Download Now For Smart Recruitment
        </button>
      </div>
    </div>
  </div>
  <div className="m-0  flex justify-end  mt-md-5 lg:-mt-96 mt-sm-5 mt-lg-0 mt-xl-0 mt-xxl-0  flex-col lg:flex-row">
    <img className='w-80  p-6  ml-40 h-auto lg:w-auto lg:h-auto' src={i22} alt="" />
  </div>
</div>





  )
}

export default Sixth