import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import React from 'react';
import Slider from 'react-slick';

const NoticeSlider = () => {
  const notices = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/7089010/pexels-photo-7089010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Empowering Healthcare, One Patient at a Time',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4269204/pexels-photo-4269204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Your Trusted Partner in Modern Healthcare Management',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1601841197690-6f0838bdb005?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Seamless Care, Streamlined Operations',
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed:3000, 
  };

  return (
    <div className="mt-1 border-none  w-full ">
      <Slider {...settings}>
        {notices.map(notice => (
          <div key={notice.id} className=" relative md:h-auto h-auto lg:h-screen focus:outline-none">
            <img src={notice.image} alt={notice.title} className="w-full h-full md:object-cover object-contain lg:object-cover rounded-2xl" />
            <h1 className="md:text-4xl text-xl lg:text-5xl translate-y-[-50%] lg:animate-bounce   font-semibold bg-[#ffffff65]  dark:bg-[#00000056] p-4 absolute top-1/2 left-2 ">{notice.title}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NoticeSlider;
