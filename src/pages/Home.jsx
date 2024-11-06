import React from 'react'
import Navbar from '../components/Navbar'
import NoticeSlider from '../components/Slider'
import Card from '../components/card'
import{ ReviewSection,ServicesSection} from '../components/rev'
import Contact from './Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
      
    <div>
      
      <NoticeSlider />

      <div className='my-5 border-b-2 lg:block hidden'></div>
    <ServicesSection/>
      <h1 className='md:text-4xl text-2xl text-center lg:text-6xl container mx-auto w-full font-semibold'>
      Our Clinic's Programmes
      and Services
      </h1>
      <Card/>
      <ReviewSection/>

    </div>
    <Footer/>
    </>
  )
}

export default Home
