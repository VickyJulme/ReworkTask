import i3 from '../images/i3.png'
import i2 from '../images/i2.png'


function Brand() {
  return (
    <> 
   
     <div className="container mx-auto mt-10 ">
      <div className="md:flex md:justify-center lg:justify-between p-20 pt-1">
        <div className="md:w-7/12 lg:w-7/12 xl:w-7/12">
          <div className="mx-4 md:mx-lg-0">
            <h1 className="text-purple-700 text-3xl lg:text-4xl font-bold mb-4">Power Up your Hiring</h1>
            <h2 className="text-purple-700 text-3xl lg:text-4xl font-bold mb-4">With Rework .</h2>
            <p className="text-slate-500 text-lg lg:text-xl mb-4">
              Empower your business with cutting-edge A.I. technology, simplified processes, and top-tier talent connections.
              Rework is your strategic partner in redefining how you hire.
            </p>
          
            <button type="button" className="Book-A-Demo-button  shadow-md hover:shadow-lg hover:shadow-violet-600 shadow-right hover:shadow-bottomtext-2xl font-bold font-mono border-2 mt-10 relative top-10 left-30 m-0 border-blue-700 hover:text-white text-purple-700 transition duration-300 hover:bg-violet-700 text-font-bold py-4 px-10 rounded-lg p-lg-2 pt-sm-2 pb-sm-2 pt-md-2 pb-md-2 ps-lg-5 pe-lg-5 ps-sm-5 pe-sm-5 ps-md-5 pe-md-5">
              Book A Demo
            </button>
          </div>
          
          <div className="hidden md:block col-12 mx-lg-4 px-4 py-4 mt-20 absolute bottom-30 left-50 h-70 w-30">
            <img src={i2} alt="" />
          </div> 
     
        </div>
        <div className="mt-50 md:mt-40 lg:ml-8 xl:ml-8">
          <img className="w-full" src={i3} alt="i3" />
        </div>
      </div>
    </div>

    </>
  )
}

export default Brand