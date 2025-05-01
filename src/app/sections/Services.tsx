'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div>
        <section className='mt-8 w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6'>
            <div className='absolute top-0 right-4 lg:h-36 h-24'>
                <Image src='/images/styles.png' alt='Vector' title='styles' width={400} height={200} className='mt-10 w-full h-full undefined'
                />
            </div>
            <main className='flex flex-col w-full pt-32 gap-3 items-center justify-center'>
                <motion.p
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{ duration: 0.5}} 
                    className='font-light text-base tracking-widest text-[var(--neutral)]'>
                    CATEGORY
                </motion.p>
                <motion.h2
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{ duration: 0.5}} 
                    className='md:text-4xl text-2xl font-medium capitalize text-[var(--text-primary)]'>
                    We Offer Best Services
                </motion.h2>
                {/* 4 List of Services */}
                <motion.div
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{ duration: 0.5}}
                    className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0'>
                    <div className='w-full bg-white flex flex-col justify-center items-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl card after:bg-[var(--text-secondary)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                            <Image src='/images/icon.png' alt='vector' title='icon' width={400} height={200} className='w-full h-full object-cover' />
                        </div>
                        {/* Text */}
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h4 className='text-base font-medium rounded text-[var(--text-primary)]'>Calculated Weather</h4>
                            <p className='font-light text-sm text-center text-[var(--neutral)]'>Our in-built technologies are accurate for checking weather conditions before flying.</p>
                        </div>
                    </div>
                    <div className='w-full bg-white flex flex-col justify-center items-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl card after:bg-[var(--text-secondary)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                            <Image src='/images/icons.png' alt='Best Flight' title='icon' width={400} height={200} className='w-full h-full object-cover' />
                        </div>
                        </div>
                        {/* Text */}
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h4 className='text-base font-medium rounded text-[var(--text-primary)]'>Best Flight</h4>
                            <p className='font-light text-sm text-center text-[var(--neutral)]'>We offer the best flight services in town. We are Tested, Trusted and Reliable.</p>
                        </div>
                    </div>
                    <div className='w-full bg-white flex flex-col justify-center items-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl card after:bg-[var(--text-secondary)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                            <Image src='/images/iconss.png' alt='Local Events' title='icon' width={400} height={200} className='w-full h-full object-cover' />
                        </div>
                        </div>
                        {/* Text */}
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h4 className='text-base font-medium rounded text-[var(--text-primary)]'>Local Events</h4>
                            <p className='font-light text-sm text-center text-[var(--neutral)]'>Our Team helps to  sponsor local events to enable you have lasting memories.</p>
                        </div>
                    </div>
                    <div className='w-full bg-white flex flex-col justify-center items-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl card after:bg-[var(--text-secondary)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                        <div className='w-28 h-28 relative z-10 before:content[""] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl before:bg-[var(--neutral2)]'>
                            <Image src='/images/iconsss.png' alt='customize' title='icon' width={400} height={200} className='w-full h-full object-cover' />
                        </div>
                        </div>
                        {/* Text */}
                        <div className='w-full flex flex-col items-center gap-2'>
                            <h4 className='text-base font-medium rounded text-[var(--text-primary)]'>Customization</h4>
                            <p className='font-light text-sm text-center text-[var(--neutral)]'>We offer customization services for customers who like to appear differently.</p>
                        </div>
                    </div>
                </motion.div>
            </main>
            
        </section>
    </div>
  )
}

export default Services