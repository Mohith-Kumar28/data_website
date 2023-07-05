import React from 'react'
import Lottie from "lottie-react";
import hero from "../animations/hero.json";
import Link from 'next/link';
// import dynamic from "next/dynamic";

// const hero= dynamic(() => import("../animations/hero.json"), {
// ssr: false,
// });

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container max-w-5xl mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Empowering Enterprises with AI-Powered Fraud Protection
          {/* <br className="hidden lg:inline-block"/>goes here */}
        </h1>
        <p className="mb-8 leading-relaxed">Welcome to Boujee, the leading AI-powered platform that safeguards the world's largest enterprises from online fraud, digital risks, and sophisticated attacks.</p>
        <div className="flex justify-center">
          <Link href={'mailto:sokandar@boujee.cloud'}>
          <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">Contact Us</button>
          </Link>
          {/* <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button> */}
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img className="object-cover object-center rounded" alt="hero" src="/assets/hero.svg"/> */}
        <Lottie className='  w-full' animationData={hero} loop={true} />

      </div>
    </div>
  </section>
  )
}

export default Hero