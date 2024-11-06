import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import React from 'react';
import Slider from 'react-slick';

const NoticeSlider = () => {
  const notices = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/7089010/pexels-photo-7089010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Important Notice 1',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/4269204/pexels-photo-4269204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Important Notice 2',
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
          <div key={notice.id} className="  md:h-auto h-auto lg:h-screen focus:outline-none">
            <img src={notice.image} alt={notice.title} className="w-full h-full md:object-cover object-contain lg:object-cover rounded-2xl" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NoticeSlider;
