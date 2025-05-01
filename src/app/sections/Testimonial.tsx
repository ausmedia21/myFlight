"use client"
import React,  { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
    // const [sliderRef, setSliderRef] = useState(null)
    const sliderRef = useRef<Slider | null>(null);

  const cards = [
    {
      image: "/images/celeb.jpeg",
      name: "Philip Imagodei",
      location: "Lahore, Pakistan",
      description: "You did a fabulous job. There were no hitches. Thank you again for all your work planning this trip.",
    },
    {
        image: "/images/celebs.jpeg",
        name: "Rose",
        location: "Port-Harcourt, Nigeria",
        description: "Jadoo was great with the entire process from planning to updates during the trip. We had 11 people and everything was perfectly executed. We appreciate all of her hard work. It was truly the trip of a lifetime. Thank you!",
    },
    {
        image: "/images/celebss.jpeg",
        name: "Stanley",
        location: "Vancouver, Canada",
        description: "Booking through you was very easy and made our lives so much easier. I have nothing bad to say! Thank you for giving us tips and guidance before we left on what to bring and such, that was very helpful!",
    },
    {
        image: "/images/celebsss.jpeg",
        name: "Debbie",
        location: "Abuja, Nigeria",
        description: "Thank you for your recommendation and putting the trip together. The resort was absolutely beautiful. The infinity pools, the palm trees in the main pool, the infinity pool in out preferred area overlooking the gulf and the golf course were exceptional....",
    },
  ]
  
  const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Show one at a time vertically
        slidesToScroll: 1,
        vertical: true, // <-- Make it vertical
        verticalSwiping: true, // <-- Enable swipe up/down
        arrows: false, // we’ll control with custom buttons
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
              },
            },
        ],
    };
    
    return (
            <div>
                <motion.section
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{ duration: 0.5}}
                    className='w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 mt-36 gap-5'>
                    <main className='grid w-full md:grid-cols-2 lg:gap-0 gap-8 md:gap-5'>
                        <div className='w-full flex flex-col gap-6'>
                            <p className='font-light text-base text-[var(--text-primary)] tracking-widest'>Testimonials</p>
                            <h1 className='lg:text-5xl md:text-3xl text-4xl text-[var(--text-primary)] font-medium'>What people say about Us.</h1>
                        </div>
                        <div className='w-full lg:h-[400px] flex justify-center gap-4 items-center'>
                            <div className='lg:h-[250px] w-[90%]'>
                                <div className='slick-slider slick-vertical slick-initialized'dir="ltr">
                                    <button className='slick-arrow slick-prev' type='button' data-role="none">
                                    </button>
                                    <div className='slick-list'>
                                            {/* Slider */}
                                            <Slider ref={sliderRef} {...settings}>
                                                {cards.map((card, index) => (
                                                <div key={index}>
                                                    <div className='bg-white shadow border-[1px] relative rounded-xl p-4 lg:h-[200px] h-[260px] lg:mb-4 w-full flex gap-4 justify-start'>
                                                        {/* Image */}
                                                        <div className='w-20 h-20 rounded-full absolute lg:bottom-4 bottom-3 right-4 overflow-hidden'>
                                                            <Image src={card.image} width={150} height={80} alt={card.name} className='w-full h-full object-cover object-top' />
                                                        </div>
                                                        <div className='flex flex-col justify-center gap-6'>
                                                            <q className='text-[0.84rem] font-light text-[var(--text-primary)]'>{card.description}</q>
                                                            <div className='flex flex-col gap-2'>
                                                                <h4 className='text-base text-[var(--text-primary)] font-medium'>{card.name}</h4>
                                                                <p className='text-sm font-light text-[var(--text-primary)]'>{card.location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                ))}
                                            </Slider>
                                    </div>
                                    <button className='slick-arrow slick-next' type='button' data-role="none" style={{display:'block'}} onClick={() => sliderRef.current?.slickNext()}>
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4 pb-5'>
                                <button id='prev' type='button'  className='cursor-pointer outline-none border-none bg-[var(--lighter)] text-[var(--text-primary)] hover:bg-[var(--light)] p-2 rounded-full' onClick={() => sliderRef.current?.slickPrev()}>
                                    <IoMdArrowDropup />
                                </button>
                                <button id='prev' type='button' className='cursor-pointer outline-none border-none bg-[var(--lighter)] text-[var(--text-primary)] hover:bg-[var(--light)] p-2 rounded-full' onClick={() => sliderRef.current?.slickNext()}>
                                    <IoMdArrowDropdown />
                                </button>
                            </div>
                        </div>
                    </main>
                </motion.section>
            </div>
    )
}

export default Testimonial