'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiXCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect( () =>{
        const handleScroll = () =>{
            setScroll(window.scrollY > 5)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div className='w-full h-auto fixed top-0 left-0 z-50'>
        <div>
                <nav className={`bg-transparent transition-colors duration-100 ${scroll ? `bg-white shadow-md`: `bg-transparent`} w-full md:h-24 h-20 lg:px-24 md:px-12 px-8 flex justify-between items-center`}>
                    {/* Logo */}
                    <Link href="/" className='md:h-10 h-8'>
                        <Image src="/images/Jadoo-text.png" alt="logo" width={155} height={34} className='w-full h-full' />
                    </Link>
                    {/* Nav Links */}
                    <div className='lg:flex hidden items-center gap-20'>
                        <ul className='flex items-center justify-center gap-8'>
                            {/* Links */}
                            <li className='text-base w-full'>
                                <Link href='/' aria-current="page" className='relative inline-block overflow-hidden pt-2 pl-2 before:h-2 before:w-2 before:bg-[var(--light)] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[var(--light)] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in active'>
                                Destination
                                </Link>
                            </li>
                            <li className='text-base w-full'>
                                <Link href='/' aria-current="page" className='relative inline-block overflow-hidden pt-2 pl-2 before:h-2 before:w-2 before:bg-[var(--light)] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[var(--light)] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in active'>
                                Hotels
                                </Link>
                            </li>
                            <li className='text-base w-full'>
                                <Link href='/' aria-current="page" className='relative inline-block overflow-hidden pt-2 pl-2 before:h-2 before:w-2 before:bg-[var(--light)] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[var(--light)] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in active'>
                                Flights
                                </Link>
                            </li>
                            <li className='text-base w-full'>
                                <Link href='/' aria-current="page" className='relative inline-block overflow-hidden pt-2 pl-2 before:h-2 before:w-2 before:bg-[var(--light)] before:absolute before:top-2 before:-left-10 before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0.5 after:w-0.5 after:h-3 after:bg-[var(--light)] after:absolute after:left-1 after:-top-10 hover:after:top-3.5 after:transition-all after:duration-200 after:ease-in active'>
                                Bookings
                                </Link>
                            </li>
                        </ul>
                        {/* Buttons*/}
                        <ul className='flex items-center bg-primary justify-center gap-6'>
                            {/* <li className='w-full'>
                                <button type='button' className='overfolw-hidden before:bottom-0 border-b-2 border-transparent relative py-2 px-8 hover:border-gray-950 before:content-[" "] before:absolute before:left-0 before:w-full before:h-0 before:-[var(--light)] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base'>
                                    Login
                                </button>
                            </li> */}
                            <li className='w-full'>
                                <button type='button' className='relative border-b-2 border-transparent overflow-hidden px-8 py-2 transition-all duration-500 ease-in  before:absolute before:left-0 before:bottom-[-100%] before:w-full before:h-full hover:before:bg-[var(--light)] before:transition-all before:duration-500 hover:border-gray-950 hover:before:bottom-0 text-base'>
                                    <span className='relative z-10'>Login</span>
                                </button>
                            </li>
                            <li className='w-full'>
                                <button type='button' className='relative border-2 overflow-hidden px-6 py-3 transition-all duration-500 ease-in-out  before:absolute before:left-0 before:bottom-[100%] before:w-full before:h-full before:bg-[var(--light)] before:transition-all before:duration-500 hover:before:bottom-0 text-base'>
                                    <span className='relative z-10'>Signup</span>
                                </button>
                            </li>
                            {/* Lang Select */}
                            <li className='text-gray-950'>
                                <select className='border-none font-light text-base outline-none bg-transparent'>
                                    <option value="EN">EN</option>
                                    <option value="ITA">ITA</option>
                                    <option value="FRA">FRA</option>    
                                </select>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
            {/* RESPONSIVE NAVBAR */}
            {/* Burger Icon */}
            {!isOpen && (
                    <div className="lg:hidden flex fixed top-6 right-6 z-50 space-x-5">
                     {/* Lang Select */}
                            <li className='text-[var(--text-gray)] list-none'>
                                <select className='lg:hidden border-none font-light text-base outline-none bg-transparent'>
                                    <option value="EN">EN</option>
                                    <option value="ITA">ITA</option>
                                    <option value="FRA">FRA</option>    
                                </select>
                            </li>
                        <GiHamburgerMenu className="text-3xl text-dark" onClick={() => setIsOpen(true)} />
                    </div>
                )
            }
              

            {/* Slide-in Navbar with animations */}
            <AnimatePresence>
                 {isOpen && (
                <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 lg:hidden"
                >
                {/* Dark Background Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 bg-[var(--neutral)]"
                    onClick={() => setIsOpen(false)}
                />

                {/* Slide-in White Panel */}
                <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
                    className="absolute right-0 w-[70%] h-full bg-white flex flex-col justify-between z-50"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                >
                    {/* LOGO and Close */}
                    <section className="w-full px-4 py-6 flex flex-col gap-16 h-full">
                    <div className="w-full flex justify-between items-center">
                        <Link className="h-8 md:h-10" href="/">
                        <Image src="/images/Jadoo-text.png" alt="Logo" width={100} height={70} className="w-full h-full" />
                        </Link>
                        <BiXCircle
                        onClick={() => setIsOpen(false)}
                        className="text-3xl cursor-pointer z-[999]"
                        />
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-3 pl-2">
                        <li className='w-full text-base'><Link aria-current='page' className='relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-[ var(--light)] before:absolute before:bottom-0  before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 active after:block after:h-0.5 after:w-0 after:bg-[var(--light)] after:transition-all after:duration-300 hover:after:w-full' href="/">Destination</Link></li>
                        <li className='w-full text-base'><Link aria-current='page' className='relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-[ var(--light)] before:absolute before:bottom-0  before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 active after:block after:h-0.5 after:w-0 after:bg-[var(--light)] after:transition-all after:duration-300 hover:after:w-full' href="/">Hotels</Link></li>
                        <li className='w-full text-base'><Link aria-current='page' className='relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-[ var(--light)] before:absolute before:bottom-0  before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 active after:block after:h-0.5 after:w-0 after:bg-[var(--light)] after:transition-all after:duration-300 hover:after:w-full' href="/">Flights</Link></li>
                        <li className='w-full text-base'><Link aria-current='page' className='relative overflow-hidden inline-block before:w-full before:h-0.5 before:bg-[ var(--light)] before:absolute before:bottom-0  before:-left-full before:rounded-full before:transition-all before:duration-200 before:ease-in hover:before:left-0 active after:block after:h-0.5 after:w-0 after:bg-[var(--light)] after:transition-all after:duration-300 hover:after:w-full' href="/">Bookings</Link></li>
                    </ul>
                </section>

                    {/* Bottom Buttons */}
                    <ul className="flex justify-center w-full items-center pb-24 gap-4">
                    <li className='w-auto'><button className="before:bottom-0 hover:before:border-b-2 border-white hover:[var(--text-gray)] py-1.5 px-5 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-[var(--light)] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base">Login</button></li>
                    <li className='w-auto'><button className="border-2 border-[var(--text-gray)] before:top-0 py-1.5 px-5 relative z-10 before:content-[''] before:absolute before:left-0 before:w-full before:h-0 before:bg-[var(--light)] before:-z-10 hover:before:h-full before:transition-all before:duration-300 before:ease-in text-base">Signup</button></li>
                    {/* border-b-2 py-1.5 px-5 */}
                    </ul>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
    </div>
  )
}

export default Navbar