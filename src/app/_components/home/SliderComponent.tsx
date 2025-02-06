"use client"; // Nếu dùng trong app router của Next.js

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderComponent = () => {
  const data = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Txdn_A-EMTy_G-SM4sG04C8iw1dHwEWyBw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UG5upoEGZ4sXJU3GZTsH3zYMWX2dAcmgkw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRolKwKN_osGEs1132DMP0wHMmW4VkZK2hGg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCM1LWXcYAGq-3S5gpTkELvgjkugS-7lsRQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAZtFWgrv0n_22O_kolDgUHUJZ-61LRJ2XLA&s",
  ];

  // Nút Previous
  const CustomPrevArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute left-[20px] z-[7] flex items-center justify-center w-10 h-10 bg-white text-[#9F7A5F] border-[1px] border-[#9F7A5F] rounded-full shadow-lg -translate-y-1/2 top-1/2 hover:bg-[#9F7A5F] hover:text-white"
        onClick={onClick}
      >
        <FaChevronLeft />
      </button>
    );
  };

  // Nút Next
  const CustomNextArrow = (props: { onClick: () => void }) => {
    const { onClick } = props;
    return (
      <button
        className="absolute right-[20px] z-[7] flex items-center justify-center w-10 h-10 bg-white text-[#9F7A5F] border-[1px] border-[#9F7A5F] rounded-full shadow-lg -translate-y-1/2 top-1/2 hover:bg-[#9F7A5F] hover:text-white"
        onClick={onClick}
      >
        <FaChevronRight />
      </button>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <CustomNextArrow onClick={() => {}} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} />,
  };

  return (
    <div className="w-full mx-auto lg:mx-0 py-8">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="relative w-full xs:h-[321px] xm:h-[321px] sm:h-[321px] lg:h-[631px]">
              <Image
                src={item}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg aspect-[4/3] lg:rounded-none shadow-md object-cover"
                priority={true}
                quality={100}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
