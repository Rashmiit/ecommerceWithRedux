import React from 'react';
import wirelessImage from '../assets/wireless-01.png';
import heroImage from '../assets/hero-img.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageList = [
    {
        id: 1,
        img: wirelessImage,
        title: '50% Off For Your First Shopping',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cupiditate enim nulla labore in asperiores laborum aliquam."
    },
    {
        id: 2,
        img: heroImage,
        title: '50% Off For Your First Shopping',
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed cupiditate enim nulla labore in asperiores laborum aliquam."
    },
];

const Home = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <>
        <div className='bg-green-100'>
            {/* Slider Section */}
            <div className='relative overflow-hidden min-h-[600px] sm:min-h-[650px] flex justify-center items-center'>
                <div className='container pb-8 sm:pb-0'>
                    <Slider {...sliderSettings}>
                        {imageList.map((item) => (
                            <div
                                key={item.id}
                                className='grid grid-cols-1 sm:grid-cols-2 items-start gap-8 px-6 sm:px-12 h-full'
                            >
                                {/* Content Section */}
                                <div className='p-8 sm:p-20 sm:w-[800px]'>
                                    <h1 className='font-bold text-4xl sm:text-6xl lg:text-7xl mb-6'>{item.title}</h1>
                                    <p className='text-base mb-6'>{item.description}</p>
                                    <button>
                                        Visit Collection
                                    </button>
                                </div>

                                {/* Image Section */}
                                <div className='flex justify-center sm:justify-end'>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className='w-full max-w-[400px] sm:max-w-[500px] object-contain'
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            </div>


            {/* Card Section */}
            <div className='bg-white p-20  sm:px-12 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 w-50'>
                    <div className="bg-pink-200">
                        <div className='p-4 text-black-500 text-center'>
                            <div className='flex justify-center items-center p-1'>
                                <img src='https://tse1.mm.bing.net/th?id=OIP.LFlWxwoNBj_rz-iF-xeZcgHaHa&pid=Api&P=0&h=220' alt='' className='rounded-full border border-white  w-10' />
                            </div>
                            <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
                        </div>
                    </div>

                    <div className="bg-green-200">
                        <div className='p-4 text-black-500 text-center'>
                            <div className='flex justify-center items-center p-1'>
                                <img src='https://tse1.mm.bing.net/th?id=OIP.3QV8eNDGmSpKgmEoLOe17wHaHa&pid=Api&P=0&h=220' alt='' className='rounded-full border border-white  w-10' />
                            </div>
                            <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
                        </div>
                    </div>

                    <div className="bg-yellow-100">
                        <div className='p-4 text-black-500 text-center'>
                            <div className='flex justify-center items-center p-1'>
                                <img src='https://tse1.mm.bing.net/th?id=OIP.Xv6rgr-xfuePNY5PQIzG6gHaHa&pid=Api&P=0&h=220' alt='' className='rounded-full border border-white  w-10' />
                            </div>
                            <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
                        </div>
                    </div>

                    <div className="bg-blue-200">
                        <div className='p-4 text-black-500 text-center'>
                            <div className='flex justify-center items-center p-1'>
                                <img src='https://tse4.mm.bing.net/th?id=OIP.fxTGVaJbAClTUD4tpePVHgHaHa&pid=Api&P=0&h=220' alt='' className='rounded-full border border-white  w-10' />
                            </div>
                            <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
                        </div>
                    </div>
                </div>
            </div>
        {/* Discount Category */}
        <div className='bg-blue-50'>
            <h1 className='font-bold text-center text-2xl sm:text-6xl lg:text-7xl'>Big Discount</h1>
        </div>
     
        </>
    );
};

export default Home;
