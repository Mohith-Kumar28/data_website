import React from 'react'

const Demo = () => {
  return (
    <div>
        <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container max-w-5xl px-5 py-32 mx-auto flex flex-wrap items-center">
    <div className=" md:w-1/2 md:pr-16 ">
      <h1 className="title-font font-medium text-3xl text-white">Get a Demo</h1>
      <p className="leading-relaxed mt-4">Request a demo to experience the power of Chargevisor firsthand. Our team will provide personalized insights and live demonstrations of fraud detection capabilities tailored to your specific business needs. Discover how Chargevisor can protect your organization from emerging threats and provide comprehensive fraud prevention.</p>



      <nav className="p-6 flex flex-col sm:items-start sm:text-left text-center items-center -mb-1 space-y-2">
          <a>
            <span className="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Live Demo
          </a>
          <a>
            <span className="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Fraud Protection
          </a>
          <a>
            <span className="bg-gray-800 text-purple-400 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Tailored Experience
          </a>
        
        </nav>

    </div>
    <div className=" md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      {/* <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2> */}
      <div className="relative mb-4">
        <label for="first-name" className="leading-7 text-sm text-gray-400">First Name</label>
        <input type="text" id="first-name" name="first-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="last-name" className="leading-7 text-sm text-gray-400">Last Name</label>
        <input type="text" id="last-name" name="last-name" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-purple-900 rounded border border-gray-600 focus:border-purple-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white font-semibold bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Send Demo request</button>
      <p className="text-xs mt-3">Your details are safe with us.</p>
    </div>
  </div>
</section>
    </div>
  )
}

export default Demo