import React from 'react'
import Image from 'next/image'
import { AiFillMail } from "react-icons/ai";


const News = () => {
  return (
    <section className='w-full flex my-32 relative justify-between items-start h-[400px]'>
        <div className='w-[30%] h-[70%] bg-[var(--neutral4)] rounded-r-xl self-end'></div>
        <div className='w-[30%] h-[70%] bg-[var(--neutral4)] rounded-l-xl'></div>
        <div className='w-full bg-[var(--neutral3)] h-[100%] flex flex-col absolute items-center justify-center md:gap-16 gap-10 px-5'>
            <h1 className='w-full lg:text-3xl md:text-2xl text-xl text-center lg:w-3/5 text-[var(--neutral5)]'>Subscribe to get information, latest news and other interesting offers about Jadoo.</h1>
            <form className='flex flex-col md:flex-row items-strecth gap-2'>
                <div className='relative'>
                    <input type='email' placeholder='Your email' className='border-none bg-white rounded-lg outline-none w-[300px] h-[50px] focus:outline-none pr-4 pl-9 text-[var(--text-primary)]' />
                    <div className='absolute top-4 left-3 text-[var(--neutral)]'> <AiFillMail /> </div>
                </div>
                <button type='submit' className='border-none outline-none cursor-pointer py-2 px-6 text-white font-light text-base rounded-lg bg-[var(--text-secondary)]'>Subscribe</button>
            </form>
        </div>
        <div className='absolute -bottom-16 right-2 h-32'>
            <Image src='/images/news.png' alt='Plus' width={100} height={80} className='w-full h-full' />
        </div>
    </section>
  )
}

export default News