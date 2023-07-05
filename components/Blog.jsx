import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="text-gray-600 body-font bg-white pb-44">
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
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">PRODUCTIVITY</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Mastering Remote Work Productivity: Tips and Strategies</h1>
            <p className="leading-relaxed mb-5"> This blog explores various strategies and tips to enhance productivity while working remotely. From creating a dedicated workspace to managing time effectively, discover practical techniques to stay focused, motivated, and productive in a remote work setup.</p>
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
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">E-COMMERCE</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The Future of E-commerce: Trends and Innovations to Watch</h1>
            <p className="leading-relaxed mb-5"> Dive into the evolving landscape of e-commerce and discover the latest trends and innovations shaping its future. This blog highlights advancements such as personalized shopping experiences, voice commerce, augmented reality, and more.</p>
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
            <h2 className="tracking-widest text-xs title-font font-medium text-purple-500 mb-1">COMMUNICATION</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">The Art of Effective Communication: Building Stronger Connections</h1>
            <p className="leading-relaxed mb-5">Effective communication is key to building strong relationships, both personally and professionally. In this blog, learn valuable techniques to improve your communication skills, including active listening, non-verbal cues, and clear articulation.</p>
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