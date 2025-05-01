'use client'
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaPlay } from "react-icons/fa";

const World = () => {
  const controls = useAnimation();

  const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: false,
  });

  useEffect( () =>{
    if (inView) {
      controls.start({ x: 0, opacity: 1});
       } else {
       controls.start({ x: 200, opacity: 0});
      }
  },[inView]);

  return (
    <div>
      <section className='w-full lg:h-screen md:h-[550px] h-[630px] relative lg:overflow-x-hidden flex justify-end'>
        {/* Bg-Vector Image */}
        <div className='h-[60%] w-[80%] lg:h-[90vh] md:h-[50vh] lg:w-1/2 md:w-55%'>
          <Image src="/images/HeroVector.png" alt="Hero Bg-Vector"className='w-full h-full' width={50} height={20}/>
        </div>

        <main className='w-full lg:h-full h-auto grid md:grid-cols-2 absolute top-0 left-0 lg:px-24 md:px-8 px-5 pt-24 md:pt-32 lg:pt-0'>
          <div className='sm:mt-4 flex flex-col justify-center md:gap-6 gap-3 md:order-1 order-2'>
            {/* TEXTS */}
            <p className='uppercase tracking-widest lg:text-base text-sm font-normal text-[var(--text-secondary)]'>
              Best Destinations Around The World
            </p>
            <h1 className='text-[var(--text-primary)] lg:text-7xl md:text-5xl text-3xl font-medium'>
              <div>Travel, enjoy, and live a new full life.</div>
            </h1>
            <p className='font-light text-sm md:text-base text-justify text-[var(--text-primary)]'>
              Build longer comfort and save energy by flying with us. Your safety is assured as we offer premium services. Our esteemed professionals and pilots are highly qualified to give you a pleasant and memorable experience.
            </p>

            {/* BUTTTONS */}
            <div className='w-full md:w-full flex md:justify-start justify-between items-center lg:gap-12 md:gap-6 gap-0'>
              <button type='button' className='outline-none border-none lg:px-7 px-5 py-3 bg-[var(--light)] text-white font-extralight rounded-lg cursor-pointer'>
                Find out more
              </button>
              <div className='mx-5 flex items-center lg:gap-6 gap-3 cursor-pointer'>
                <span className='relative h-14 w-14 flex'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--text-primary)] opacity-75'></span>
                  <span className='flex relative justify-center items-center text-white rounded-full h-14 w-14 bg-[var(--text-secondary)]'>
                  {/* <Play size={24} strokeWidth={4}/> for icon settings*/}
                  <Link href='https://youtu.be/uslF5weSz-A?si=RKyrRxGA8seSdqPA'> <FaPlay/> </Link>
                  </span>
                </span>
                <Link href='https://youtu.be/uslF5weSz-A?si=RKyrRxGA8seSdqPA' type='button' className='outline-none border-none md:nowrap cursor-pointer'>Play Demo</Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-end md:order-2 order-1'>
            <div>
              {/* Hero-Image */}
              <motion.div
                ref={ref}
                initial={{ x: 200, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.5 }} 
                className='lg:h-[85%] lg:w-[90%] md:h-[100%] md:w-full w-[90%] h-[50vh]'
                >
                <Image
                  src='/images/hero-img.png' 
                  alt='hero' width={1000} height={600} 
                  title='Traveller' 
                  className='w-full h-full undefined'
                />
              </motion.div>
            </div>
          </div>
          </main>
      </section>
      
    </div>
  )
}

export default World