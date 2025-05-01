"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Destination = () => {
  // const [sliderRef, setSliderRef] = useState(null)
  const sliderRef = useRef<Slider | null>(null);

  const cards = [
    {
      image: "/images/pix.jpeg",
      title: "Rome, Italy",
      views: "5.42k",
      description: "10 days trip.",
    },
    {
      image: "/images/pixs.jpeg",
      title: "London, UK",
      views: "4.2k",
      description: "12 days trip.",
    },
    {
      image: "/images/pixsss.jpeg",
      title: "Paris, France",
      views: "15k",
      description: "26 days trip.",
    },
    {
      image: "/images/pic.jpeg",
      title: "New York, USA",
      views: "4.5k",
      description: "8 days trip.",
    },
    {
      image: "/images/pics.jpeg",
      title: "Warsaw, Poland",
      views: "3.9k",
      description: "14 days trip.",
    },
    {
      image: "/images/picss.jpeg",
      title: "Dubai, UAE",
      views: "9.2k",
      description: "17 days trip.",
    },
  ]


  const settings = {
    infinite: true, // enables cloning for seamless scroll
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, //set custom arrows to true
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
        <section className='flex flex-col h-auto w-full items-center justify-center relative lg:px-24 md:px-20 px-6 my-20'>
            <motion.p
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{ duration: 0.5}} 
              className='font-light text-base tracking-widest text-[var(--neutral)]'
              >
              Top selling
            </motion.p>
            <motion.h2 
              whileInView={{opacity: 1, y: 0}}
              initial={{opacity: 0, y: -100}}
              transition={{ duration: 0.5}}
              className='md:text-4xl text-2xl font-medium capitalize text-[var(--text-primary)]'
             >
              Top Destinations
            </motion.h2>
           

            <div className="w-full max-w-6xl mx-auto mt-12 px-4">
              {/* Custom Arrows */}
              <div className="flex justify-end mb-4 gap-2">
                <button
                  type='button'
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="outline-none border-none bg-[var(--lighter)] text-[var(--text-primary)] cursor-pointer p-2 rounded-full hover:bg-[var(--light)]"
                >
                  <FaCaretLeft size={20} />
                </button>
                <button
                  type='button'
                  onClick={() => sliderRef.current?.slickNext()}
                  className="outline-none border-none bg-[var(--lighter)] text-[var(--text-primary)] cursor-pointer p-2 rounded-full hover:bg-[var(--light)]"
                >
                  <FaCaretRight size={20} />
                </button>
              </div>

              {/* Slider */}
              <Slider ref={sliderRef} {...settings}>
                {cards.map((card, index) => (
                  <div key={index} className="px-3">
                    <div className="rounded-lg shadow-md cursor-pointer group overflow-hidden">
                      <div className='w-full h-[250px] overflow-hidden'>
                        <Image
                          src={card.image}
                          alt={card.title}
                          width={325}
                          height={150}
                          className="w-full h-full group-hover:scale-125 transition duration-500 ease"
                        />
                      </div>
                      {/* Text */}
                      <div className='flex flex-col gap-4 px-5 py-5'>
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-base text-[var(--text-primary)]">{card.title}</h4>
                          <span className="font-light text-sm text-[var(--text-primary)]">{card.views}</span>
                        </div>
                        <div className="w-full flex items-center gap-4 text-[var(--text-primary)]">
                          <span className="text-xs">✈️</span>
                          <p className="text-[var(--text-primary)] font-light text-base">{card.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
          </div>
        </section>
    </div>
  )
}

export default Destination