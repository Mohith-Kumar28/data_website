import React from 'react'
import Lottie from "lottie-react";
import lock from "../animations/lock.json";

const UseCases = () => {
  return (
    <div>
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container max-w-5xl mx-auto flex px-5 py-28 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">About Us
      </h1>
      <p className="mb-8 leading-relaxed">At Chargevisor, our mission is to deliver the world's most sophisticated AI-powered solutions to keep companies and their customers safe from fraud and abuse. Our breakthrough AI technology and seamless workflows empower fraud and data science teams to proactively defeat emerging fraud with speed and agility. </p>
     
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="/assets/useCase1.svg"/>
    </div>
  </div>
</section>



<section className="text-gray-400 body-font bg-gray-900">
  <div className="container max-w-5xl flex flex-wrap px-5 py-6 mx-auto items-center rounded-3xl border-b-8 border-gray-800">
    <div className="md:w-1/3 md:pr-12  md:border-r md:border-b-0 md:mb-0 mb-10 pb-10 border-b border-gray-800">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Use Cases</h1>
     
      <div class="flex flex-col gap-y-2">
      <div class="  w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">E-commerce</span>
        </div>
      </div>
      <div class="  w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Banking and Finance</span>
        </div>
      </div>
      <div class="  w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Gaming and Entertainment</span>
        </div>
      </div>
      <div class="  w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Telecommunications</span>
        </div>
      </div>
      <div class="  w-full">
        <div class="bg-gray-800 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" class="text-purple-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span class="title-font font-medium">Insurance</span>
        </div>
      </div>
    
    </div>


      {/* <a className="text-purple-400 inline-flex items-center mt-4">Learn More
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a> */}
    </div>
    <div className="flex flex-col md:w-2/3 md:pl-12">

<div className='flex flex-col md:flex-row'>
    <Lottie className='  w-80 ' animationData={lock} loop={true} />

      <h2 className="title-font font-bold text-white tracking-wider text-lg md:pr-24 mt-10">Chargevisor provides comprehensive fraud protection in various industries</h2>
      </div>


      <p className="leading-relaxed text-base">With our proprietary unsupervised machine learning algorithms, we can detect known and unknown malicious behavior with pinpoint accuracy, eliminating the need for extensive training times or large datasets.</p>
    </div>
  </div>
</section>

    </div>

  )
}

export default UseCases