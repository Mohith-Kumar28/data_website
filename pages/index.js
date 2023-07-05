import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import UseCases from '@/components/UseCases'
import Brands from '@/components/Brands'
import Footer from '@/components/layout/Footer'
import Faq from '@/components/Faq'
import Demo from '@/components/Demo'
import Blog from '@/components/Blog'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gray-900 `}
    >
      
      <NavBar/>
      {/* <div className='max-w-5xl px-8 justify-center mx-auto '> */}
      <Hero/>
    <Stats/>
    <UseCases/>
    <Demo/>
    {/* <Brands/> */}
    <Blog/>
    <Faq/>
    {/* </div> */}
    <Footer/>

          </main>
  )
}
