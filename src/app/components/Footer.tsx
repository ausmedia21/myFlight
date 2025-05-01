import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='w-full flex flex-col bg-white'>
      <section className='w-full h-auto grid lg:grid-cols-5 md:grid-cols-3 lg:px-20 md:px-12 px-6 gap-7 md:gap-4 lg:gap-0'>
        <div className='flex flex-col items-start gap-4'>
          <Link className='w-28' href="/">
            <Image src='/images/footerlogo.png' alt="Logo" title='Logo' width={50} height={50} className='w-full h-full undefined' />
          </Link>
          <p className='text-sm text-[var(--neutral6)]'>Book your trip in minutes, get full control for much longer.</p>
        </div>
        {/* LInks */}
        <div className='flex flex-col md:items-center gap-4 md:mt-8'>
          <h2 className='text-xl text-[var(--text-primary)]'>Quick Links</h2>
          <ul className='flex flex-col gap-2'>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Destination</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Hotels</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Flight</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Bookings</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Login</Link>
            </li>
            <li className='text-sm md:mb-3 lg:mb-3'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Signup</Link>
            </li>
          </ul>
        </div>
        <div className='flex flex-col md:items-center gap-4 md:mt-8'>
          <h2 className='text-xl text-[var(--text-primary)]'>Contacts</h2>
          <ul className='flex flex-col md:ml-12 gap-2'>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>FAQs</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Help</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Policies</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div className='flex md:justify-start md:mb-3.5 md:w-full flex-col md:items-start gap-4 md:mt-8'>
          <h2 className='text-xl md:text-left text-[var(--text-primary)]'>More</h2>
          <ul className='flex flex-col gap-2 lg:ml-10'>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Career</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Airline</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Airline Fees</Link>
            </li>
            <li className='text-sm'>
              <Link className='text-[var(--neutral6)] transition-all duration-300 hover:underline' href='/'>Low Fare Tips</Link>
            </li>
          </ul>
        </div>
        {/* Footer Icons */}
        <div className='flex flex-col md:items-center gap-4 md:mt-8'>
          <ul className='w-full md:justify-center flex items-center lg:justify-center gap-4'>
            <li>
              <Link className='border-[1px] p-2.5 rounded-full transition-all duration-300 ease-in text-[var(--text-primary)] flex border-[var(--text-primary)] hover:bg-gradient-to-tr hover:from-[var(--text-primary)] hover:to-[var(--neutral6)] hover:text-white' href='/'> <FaFacebook /> </Link>
              {/* 7-neutral & pri-6 */}
            </li>
            <li>
              <Link className='border-[1px] p-2.5 rounded-full transition-all duration-300 ease-in text-[var(--text-primary)] flex border-[var(--text-primary)] hover:bg-gradient-to-tr hover:from-[var(--text-primary)] hover:to-[var(--neutral6)] hover:text-white' href='/'> <FaInstagram /> </Link>
            </li>
            <li>
              <Link className='border-[1px] p-2.5 rounded-full transition-all duration-300 ease-in text-[var(--text-primary)] flex border-[var(--text-primary)] hover:bg-gradient-to-tr hover:from-[var(--text-primary)] hover:to-[var(--neutral6)] hover:text-white' href='/'> <FaXTwitter /> </Link>
            </li>
          </ul>
          <p className='text-base font-light text-[var(--neutral6)]'>Discover Our App</p>
          <Link className='mb-5 lg:mb-0  w-28' href='/'>
            <Image src='/images/google.png' alt='Play store' title='Play Store' width={100} height={80} className='w-full h-full undefined' />
          </Link>
        </div>
      </section>
      <div className='text-center text-white text-sm py-6 bg-[var(--neutral)] font-light'> Copyright &copy; 2025 ausmedia. All rights reserved.</div>
        
    </footer>
  )
}

export default Footer