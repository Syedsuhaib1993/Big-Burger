import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ReviewCard from "../layout/ReviewCard";
const Review = () => {
  const data = [
    {
      id: 1,
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quo!",
      name: "Hammad Khan",
    },
    {
      id: 2,
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quo!",
      name: "Usama Khan",
    },
    {
      id: 3,
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quo!",
      name: "Haris Musazai",
    },
    {
      id: 4,
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quo!",
      name: "Faizan Yousufzai",
    },
    {
      id: 5,
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, quo!",
      name: "Hamza Waheed",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakPoint: 1023,
        setting: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
        },
      },
      {
        breakPoint: 768,
        setting: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:1,
        },
      },
      {
        breakPoint: 480,
        setting: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      {/* heading */}
      <h1 className="font-semibold text-4xl text-center text-secondary pt-24">Review</h1>
      <div className="py-10 mx-4 md:mx-0">
        <Slider {...settings}>
            {data.map((item)=>(
                <ReviewCard key={item.id} name={item.name} desc={item.desc} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
