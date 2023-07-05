import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-white pb-44 relative z-10">
  <div className="container px-5 py-24 mx-auto max-w-6xl">
  <div className="flex flex-col">
      <div className="h-1 bg-gray-800 rounded overflow-hidden">
        <div className="w-24 h-full bg-purple-500"></div>
          {/* <Lottie className='  w-full' animationData={hero} loop={true} /> */}
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5  font-medium title-font text-2xl mb-2 sm:mb-0">Blogs</h1>
        {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Boujee has partnered with leading brands to deliver robust fraud protection solutions. Our trusted partners include industry leaders in e-commerce, banking, telecommunications, insurance, and gaming. By choosing Boujee, you join a network of companies that prioritize security and trust in their operations.

</p> */}
      </div>
    </div>


    <div className="flex flex-wrap -mx-4 -my-8">
      
            
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">Unveiling the Power of Boujee:</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">   <a target='_blank' href='https://www.bannerbank.com/financial-resources/blog/tips-to-prevent-online-fraud'>Protecting Against Online Fraud  </a></h1>
            <p className="leading-relaxed mb-5"> In today's digital landscape, online fraud has become a pervasive threat that affects individuals and businesses alike. The evolving tactics used by fraudsters make it challenging for organizations to detect and prevent fraudulent activity effectively. That's where Boujee comes in.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              </span>
            </a>
          </div>
        </div>
      </div> 
    
      
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Mar</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">30</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">Enhancing Security with Boujee:</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"> <a target='_blank' href='https://www.bannerbank.com/financial-resources/blog/tips-to-prevent-online-fraud'>Defending Against Digital Risks</a></h1>
            <p className="leading-relaxed mb-5">In the digital age, organizations face a multitude of digital risks that threaten the security of their sensitive information. Data breaches, identity theft, and cyber attacks have become all too common, and traditional security measures often fall short in effectively countering these threats. That's where Boujee steps in.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jan</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">06</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">Unmasking the Power of Boujee: </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"><a target='_blank' href='https://www.bannerbank.com/financial-resources/blog/tips-to-prevent-online-fraud'>Combatting Sophisticated Attacks</a></h1> 
            <p className="leading-relaxed mb-5">Cybercriminals are continually developing sophisticated attack techniques to breach organizational defenses and compromise sensitive data. Traditional security measures are often insufficient in countering these advanced threats, leaving organizations vulnerable to significant financial and reputational damage.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Henry Letham</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default Blog