import React from 'react'
import i9 from '../images/i9.png'
import i10 from '../images/i10.png'
import i11 from '../images/i11.png'
import i12 from '../images/i12.png'
import i13 from '../images/i13.png'
import i14 from '../images/i14.png'
function Third() {
  return (

<div className="row container-fluid  bg-white m-0">
<div className="col-12 flex  mt-5 pt-2 lg:flex justify-center lg:justify-center ">
  <p className="sm:text-2xl lg:text-3xl font-bold text-center  text-purple-700 sm-fs-6 h1-bold-text-benifit">
    Our Amazing Benefits Helpful For Your Hiring
  </p>
</div>
 
 <div className="row g-2  flex flex-wrap px-10 p-7  justify-content-between ">
      <div className="col-lg-4 col-sm-12 col-md-6 benifits-card mt-6 w-97 p-6 rounded-xl mr-9  hover:bg-slate-100">
        <div className="p-4 w-96">
          <img src={i9} alt="" />
          <p className="benifits-bold-text mt-4 sm:text-2xl lg:text-3xl font-bold  font-mono text-purple-700">60% Cost Reduce</p> <br/>
          <p className="p-text sm:text-lg lg:text-lg">Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-12 col-md-6 benifits-card  mt-6 w-97 p-6 rounded-xl mr-9  hover:bg-slate-100">
        <div className="p-4 w-96">
          <img src={i10} alt="" />
          <p className="benifits-bold-text mt-4 sm:text-lg lg:text-3xl  font-bold font-mono text-purple-700">50% Faster Recruitment
by TAT</p> <br/>
          <p className="p-text sm:text-lg lg:text-lg">Zero overhead in the hiring process - promise! Source top quality candidates for some of the best companies</p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-12 col-md-6 benifits-card  mt-6 w-97 p-6 rounded-xl   hover:bg-slate-100">
        <div className="p-4 w-96">
          <img src={i11} alt="" />
          <p className="benifits-bold-text mt-4 sm:text-lg lg:text-3xl font-bold font-mono text-purple-700">Highly Contextualized
Interview</p> <br/>
          <p className="p-text sm:text-lg lg:text-lg">Al models generate highly contextualized interviews for the candidates based on your Company profile, Job description and Candidate's CV.</p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-12 col-md-6 benifits-card  mt-6 w-97 p-6 rounded-xl mr-9 hover:bg-slate-100">
        <div className="p-4 w-96">
          <img src={i12} alt="" />
          <p className="benifits-bold-text mt-4 sm:text-lg  font-bold lg:text-3xl font-mono text-purple-700">Automated
Scheduling

</p> <br/>
          <p className="p-text sm:text-lg lg:text-lg">Email & WhatsApp based communication for interview scheduling with automated reminders.

</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 col-md-6 benifits-card mt-6 w-97 p-6 rounded-xl mr-9  hover:bg-slate-100">
        <div className="p-4 w-96">
          <img src={i13} alt="" />
          <p className="benifits-bold-text mt-4 font-bold sm:text-lg lg:text-3xl font-mono text-purple-700">AI generated Interviews
On what matters</p> <br/>
          <p className="p-text sm:text-lg lg:text-lg">0 manual interventions, completely seamless experience for the candidates.</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12  col-md-6 benifits-card  mt-4 w-97 p-6 rounded-xl hover:bg-slate-100   ">
        <div className="p-4 w-96 ">
          <img src={i14} alt="" />
          <p className="benifits-bold-text mt-4  font-bold sm:text-lg lg:text-3xl font-mono text-purple-700 ">in-built
ATS</p> <br/> 
          <p className="p-text sm:text-lg lg:text-lg">To manage all of your candidates & Credo verified CVs. Integrations with other ATS coming soon.</p>
        </div>
      </div> 
    </div> 

   
   
    
    </div>
 
   
  

  )
}

export default Third

