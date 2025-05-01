'use client'
import React from 'react';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";
import { PiMapTrifoldFill } from "react-icons/pi";
import { PiWalletFill } from "react-icons/pi";
import { PiAirplaneInFlightFill } from "react-icons/pi";
import { PiNotepad } from "react-icons/pi";
import { LiaMapSolid } from "react-icons/lia";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { PiBuildings } from "react-icons/pi";



const Bookings = () => {
    const initialTime = 3 * 60 * 1000; // 3 minutes in milliseconds
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isTripStarted, setIsTripStarted] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
    useEffect(() => {
      startCountdown();
  
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, []);
  
    const startCountdown = () => {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 10) {
            clearInterval(intervalRef.current!);
            setIsTripStarted(true);
            setTimeout(() => {
              setIsTripStarted(false);
              setTimeLeft(initialTime);
              startCountdown();
            }, 1500);
            return 0;
          }
          return prevTime - 10; // Decrease every 10ms
        });
      }, 10); // Run every 10ms for fast millisecond effect
    };
  
    const formatTime = (ms: number) => {
      const totalSeconds = Math.floor(ms / 1000);
      const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
      const seconds = String(totalSeconds % 60).padStart(2, '0');
      const millis = String(Math.floor((ms % 1000) / 10)).padStart(2, '0'); // Show hundredths of a second
      return `${minutes}:${seconds}:${millis}`;
    };
  
  return (
    <div>
        <motion.section
          whileInView={{opacity: 1, y: 0}}
          initial={{opacity: 0, y: -100}}
          transition={{ duration: 0.5}} 
          className='w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5'>
          <p className='font-light text-base text-[var(--text-primary)] tracking-widest'>
            Easy and Fast</p>
            <div className="flex  justify-center h-full w-full">
              <div className="shadow-xl lg:w-[60%] md:w-[70%] w-full hover:shadow-sky-400 cursor-pointer rounded-full  md:text-3xl px-4 py-2 text-center text-xl bg-white text-[var(--text-primary)] font-medium tracking-wide flex flex-col lg:rounded-lg md:rounded-lg">
                <h3 className='flex justify-center items-center'>
                 <span className='text-white m-2 p-1.5 rounded-full text-lg font-light bg-[var(--light)]'>
                    <PiAirplaneTiltLight/>
                  </span>
                  Next trip starts in:
                    <span className='text-white m-2 p-1.5 rounded-full text-lg font-light bg-[var(--light)]'>
                      <PiAirplaneTiltLight/>
                    </span>
                </h3> 
                <h4 className='font-light mt-2 lg:mt-1 md:lg-1'>
                  {isTripStarted ? 'Trip started' : formatTime(timeLeft)}
                </h4>
              </div>
            </div>
          
          <main className='w-full  grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5'>
            <div className='flex mt-5 md:mt-9 lg:mt-12 flex-col gap-6 order-2 md:order-1'>
              <h1 className='text-4xl lg:text-5xl md:text-3xl text-[var(--text-primary)] font-medium'>Book your next trip in 3 easy steps</h1>
              {/* Icons and text */}
              <ul className='flex flex-col gap-8 mt-3 lg:mt-5'>
                <li className='gap-5 flex items-center justify-start'>
                  <p className='text-white bg-[var(--light)] p-2 rounded-md'>
                    <PiMapTrifoldFill />
                  </p>
                  <p className='text-sm font-light text-[var(--text-primary)]'>
                    Choose a very good Destination of your choice, and familiarize yourself with brand new environmental experience. 
                  </p>
                </li>
                <li className='flex gap-5 items-center justify-start'>
                  <p className='text-white bg-[var(--text-secondary)] p-2 rounded-md'>
                    <PiWalletFill />
                  </p>
                  <p className='text-sm font-light text-[var(--text-primary)]'>
                    Make Easy Payment with our financial channels to ensure a smooth and stress-free transaction process. 
                  </p>

                </li>
                <li className='flex gap-5 items-center justify-start'>
                  <p className='text-white bg-[var(--text-primary)] p-2 rounded-md'>
                    <PiAirplaneInFlightFill />
                  </p>
                  <p className='text-sm font-light text-[var(--text-primary)]'>
                   Arrive Airport on time on your scheduled date of travelling for a smooth and easy journey.
                  </p>
                </li>
              </ul>
            </div>
            <div className='w-full flex flex-col justify-center items-start lg:items-center relative order-1 md:order-2'>
              <div className='shadow-2xl lg:w-[70%] md:w-[80%] w-[90%] shadow-sky-500 p-4 rounded-xl flex flex-col gap-4'>
                {/* Trip to Greece */}
                <div className='h-[150px] overflow-hidden rounded-xl shadow'>
                  <Image src='/images/woman.jpeg' alt='Trip to Greece' width={800} height={400} title='Trip to Greece' className='w-full h-full object-cover object-top'/>
                </div>
                <div className='flex flex-col gap-3'>
                  <h4 className='text-base font-medium text-[var(--text-primary)]'>Trip To Greece</h4>
                  <p className='text-sm font-light text-[var(--text-primary)]'>14-29 June | by Robbin Jobs</p>
                  {/* Lower Icons under 1st cards */}
                  <div className='flex items-center gap-6 text-xl'>
                    <span className='text-[var(--text-primary)] p-2.5 rounded-full font-light bg-[var(--neutral3)]'>
                    <PiNotepad />
                    </span>
                    <span className='text-[var(--text-primary)] p-2.5 rounded-full font-light bg-[var(--neutral3)]'>
                    <LiaMapSolid />
                    </span>
                    <span className='text-[var(--text-primary)] p-2.5 rounded-full font-light bg-[var(--neutral3)]'>
                    <PiAirplaneTiltLight/>
                    </span>
                  </div>
                  {/* Lower Text */}
                  <p className='text-sm font-light text-[var(--text-primary)] flex items-center gap-3'>
                    <PiBuildings/>
                    24 people going
                  </p>
                </div>
              </div>
              {/* Trip to Rome 2nd card */}
              <div className='flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-10 bg-white py-3 px-4 border-2 border-[var(--neutral3)] shadow-md rounded-xl'>
                <div className='h-16 w-16 rounded-full overflow-hidden'>
                  <Image src='/images/holz.jpeg' alt='Trip to Rome' title='Trip to Rome' width={100} height={50} className='w-full h-full object-cover object-top'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <p className='text-xs font-light text-[var(--text-primary)]'>
                    Ongoing
                  </p>
                  <h4 className='text-base font-medium text-[var(--text-primary)]'>Trip to Rome</h4>
                  <p className='text-xs font-light text-[var(--text-primary)] pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-[var(--text-secondary)] '>40% Completed</p>
                </div>
              </div>
            </div>
          </main>

        </motion.section>
    </div>
  )
}

export default Bookings