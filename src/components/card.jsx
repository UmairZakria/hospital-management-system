import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

const card = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint:  1280, // Large screen breakpoint (can be adjusted)
              settings: {
                slidesToShow: 3, // Show 3 slides on larger screens
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 1024, // Medium screen breakpoint
                settings: {
                  slidesToShow: 2, // Show 2 slides on medium screens
                },
            },
            
            {
              breakpoint: 768, // Mobile breakpoint (can be adjusted)
              settings: {
                slidesToShow: 1, // Show 1 slide on mobile
                slidesToScroll: 1,
        arrows: false,

              },
            },
          ],
        arrows: true,
  
    };
    const notices = [
        {
            id: 1,
            image: 'https://dummyimage.com/720x400"',
            title: 'Important Notice 1',
            service : 'Lorem',
            discription: 'lsfdos os d;ldsf ew nlvo nvho rnfo wrehfonvxr nxv o rhnvc ;oronfg orgfvn  roenv'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXit8grLMpDdlgtQTd7rrqUkJn-yVbmbueQ&s',
            title: 'Important Notice 2',
            service : 'Lorem',
            discription: 'lsfdos os d;ldsf ew nlvo nvho rnfo wrehfonvxr nxv o rhnvc ;oronfg orgfvn  roenv'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXit8grLMpDdlgtQTd7rrqUkJn-yVbmbueQ&s',
            title: 'Important Notice 2',
            service : 'Lorem',
            discription: 'lsfdos os d;ldsf ew nlvo nvho rnfo wrehfonvxr nxv o rhnvc ;oronfg orgfvn  roenv'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXit8grLMpDdlgtQTd7rrqUkJn-yVbmbueQ&s',
            title: 'Important Notice 2',
            service : 'Lorem',
            discription: 'lsfdos os d;ldsf ew nlvo nvho rnfo wrehfonvxr nxv o rhnvc ;oronfg orgfvn  roenv'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXit8grLMpDdlgtQTd7rrqUkJn-yVbmbueQ&s',
            title: 'Important Notice 2',
            service : 'Lorem',
            discription: 'lsfdos os d;ldsf ew nlvo nvho rnfo wrehfonvxr nxv o rhnvc ;oronfg orgfvn  roenv'
        }]


    return (
        <div>
            <section className="">
                <div className=" w-[95%] px-5 py-10 mx-auto">
                    {/* <div className="flex flex-wrap -m-4"> */}

                        <Slider {...settings}>
                            {notices.map(notice => (
                                <div classNameName="p-4 md:w-1/3 ">
                                    <div className="h-full border-2 lg:mx-3 md:mx-5 mx-2 dark:border-gray-400 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={notice.image} alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{notice.service}</h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">{notice.title}</h1>
                                            <p className="leading-relaxed mb-3">{notice.discription}</p>
                                            <div className="flex items-center flex-wrap ">
                                                <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            ))}
                        </Slider>
                    {/* </div> */}
                </div>
            </section>
        </div>
    )
}

export default card
