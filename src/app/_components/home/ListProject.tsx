"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectItem from "@/app/_components/home/projectItem";

const ListProject = () => {
  const listProjectView = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2jLmAM8jAHdBlWO1KHfTei0aRxWgbqhAuw&s",
      title: "Nội thất phòng khách",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXV6JoGu8BguFr3KVSXfOF_Jq9sBz6ln9HQ&s",
      title: "Nội thất phòng ngủ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstfmBKjqHlklucZ8eMqvRioWmtfqPprs9uQ&s",
      title: "Nội thất phòng bếp",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74xiJVZQ2NnsYVtckxGluHZ-RPf-o66O_Bw&s",
      title: "Nội thất phòng tắm",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJYAXW7gRms45bpCxZAjd5-ntU0UqEOyJ0kg&s",
      title: "Nội thất phòng làm việc",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280, // Màn hình >= 1280px (PC)
        settings: {
          slidesToShow: 5, // Hiển thị 3 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // Màn hình >= 1024px (PC)
        settings: {
          slidesToShow: 4, // Hiển thị 3 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Màn hình từ 768px - 1023px (Tablet)
        settings: {
          slidesToShow: 3, // Hiển thị 2 ảnh
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Màn hình < 768px (Mobile)
        settings: {
          slidesToShow: 2, // Hiển thị 1 ảnh
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mt-[80px] px-[31px]">
      <h1 className="mb-[22px] text-center font-semibold text-[30px] text-[#9F7A5F]">
        Dự án
      </h1>
      <div className="w-full">
        <Slider {...settings}>
          {listProjectView.map((item, index) => (
            <div key={index} className="mx-[29px]">
              <ProjectItem image={item.image} title={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ListProject;
