"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const logos = [
  "/images/qantas.png",
  "/images/axon.png",
  "/images/jetstar.png",
  "/images/qantas.png",
  "/images/axon.png",
  "/images/jetstar.png",
]; // duplicate for infinite feel

const Brands = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0, // set to 0 for smooth continuous effect
    cssEase: "linear", // removes slide jump
    slidesToShow: 6, // adjust based on screen size
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <section className="w-full lg:px-20 px-6 my-16 lg:my-0">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-4">
            <Image
              src={logo}
              alt={`logo-${index}`}
              width={130}
              height={60}
              className="object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Brands;
