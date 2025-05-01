import React from 'react'
import './globals.css'
import Image from "next/image"
// import Navbar from './components/Navbar'
import World from './sections/World'
import Navbar from '@/app/components/Navbar'
import Services from './sections/Services'
import Destination from './sections/Destination'
import Bookings from './sections/Bookings'
import Testimonial from './sections/Testimonial'
import Brands from './sections/Brands'
import News from './sections/News'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='font-poppins antialiased'>
      <Navbar/>
      <World/>
      <Services/>
      <Destination/>
      <Bookings/>
      <Testimonial/>
      <Brands/>
      <News/>
      <Footer/>
    </div>
  )
}

export default page