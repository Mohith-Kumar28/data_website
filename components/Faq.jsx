import React from 'react'
import According from './According'
import Lottie from "lottie-react";
import blueWaves from "../animations/blueWaves.json";
// import dynamic from "next/dynamic";

// const blueWaves= dynamic(() => import("../animations/blueWaves.json"), {
// ssr: false,
// });

const Faq = () => {
  return (
    <div id='faq' className='relative'>

<Lottie className='rotate-180 hidden md:flex md:absolute z-20 md:bottom-72   left-0 w-full' animationData={blueWaves} loop={true} />

        <section className="text-gray-400 relative z-10 bg-[#60C3D8] body-font">
  <div className="  container max-w-5xl px-5 py-24 md:mt-10 md:pb-32 mx-auto flex ">
    <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 ">FAQ's</h2>
    <div className="flex flex-grow ">
    <div className='w-3 relative z-30  rounded-full  h-full flex-col md:bg-gray-800 mx-4'></div>
     <According/>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Faq