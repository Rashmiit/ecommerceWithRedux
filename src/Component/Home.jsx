import React from 'react';
import wirelessImage from '../assets/wireless-01.png';
import heroImage from '../assets/hero-img.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import productImg01 from "../assets/double-sofa-01.png";
import productImg02 from "../assets/double-sofa-02.png";
import productImg03 from "../assets/double-sofa-03.png";

import productImg04 from "../assets/single-sofa-01.jpg";
import productImg05 from "../assets/single-sofa-02.jpg";
import productImg06 from "../assets/single-sofa-03.jpg";
import productImg007 from "../assets/single-sofa-04.png";

import productImg07 from "../assets/arm-chair-01.jpg";
import productImg08 from "../assets/arm-chair-02.jpg";
import productImg09 from "../assets/arm-chair-03.jpg";
import productImg10 from "../assets/arm-chair-01.jpg";

import phone01 from "../assets/phone-01.jpg";
import phone02 from "../assets/phone-02.jpg";
import phone03 from "../assets/phone-03.png";
import phone04 from "../assets/phone-04.jpg";
import phone05 from "../assets/phone-05.jpg";
import phone06 from "../assets/phone-06.jpg";
import phone08 from "../assets/phone-08.png";

import watch01 from "../assets/watch-01.jpg";
import watch02 from "../assets/watch-02.jpg";
import watch03 from "../assets/watch-03.jpg";
import watch04 from "../assets/watch-04.jpg";

import wireless01 from "../assets/wireless-01.png";
import wireless02 from "../assets/wireless-02.png";
import wireless03 from "../assets/wireless-03.png";
import wireless04 from "../assets/wireless-04.png";

import sofaSlide from "../assets/hero-img.png";
import watchSlide from "../assets/watch-07.png";

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



export const products = [
    {
        id: "01",
        productName: "Stone and Beam Westview ",
        imgUrl: productImg01,
        price: 193,
        reviews: [
            {
                rating: 4.7,
            },
        ],
        avgRating: 4.5,
    },

    {
        id: "02",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.7,
    },


    {
        id: "08",
        productName: "Baltsar Chair",
        imgUrl: productImg08,
        price: 89,
        reviews: [
            {
                rating: 4.6,
            },
        ],
        avgRating: 4.7,
    },

    {
        id: "09",
        productName: "Helmar Chair",
        imgUrl: productImg09,
        price: 112,
        reviews: [
            {
                rating: 4.6,
            },

        ],
        avgRating: 4.7,
    },


    {
        id: "12",
        productName: "Realme 8",
        imgUrl: phone03,
        price: 599,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "13",
        productName: "One Plus Nord",
        imgUrl: phone04,
        price: 799,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

]


// new Arrival
const newArrival = [
    {
        id: "14",
        productName: "Apple iPhone 13 Pro",
        imgUrl: phone05,
        price: 899,
        reviews: [
            {
                rating: 4.8,
            },
        ],
        avgRating: 4.8,
    },

    {
        id: "15",
        productName: "Samsung Galaxy S22",
        imgUrl: phone06,
        price: 699,
        reviews: [
            {
                rating: 4.8,
            },
        ],
        avgRating: 4.8,
    },

    {
        id: "16",
        productName: "Rolex Watch",
        imgUrl: watch01,
        price: 299,

        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "17",
        productName: "Timex Easy Reader Watch",
        imgUrl: watch02,
        price: 299,

        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "18",
        productName: "Rolex Watch",
        imgUrl: watch03,
        price: 299,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "19",
        productName: "Apple Watch",
        imgUrl: watch04,
        price: 399,

        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "20",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01,
        price: 199,

        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },

    {
        id: "21",
        productName: "Beat EP Headphones",
        imgUrl: wireless03,
        price: 199,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },
    {
        id: "22",
        productName: "Black Headphones",
        imgUrl: wireless02,
        price: 169,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,
    },
    {
        id: "23",
        productName: "Bluetooth Headphones",
        imgUrl: wireless04,
        price: 139,
        reviews: [
            {
                rating: 4.8,
            },

        ],
        avgRating: 4.8,

    }]

const sales = [{

    id: "01",
    productName: "Stone and Beam Westview ",
    imgUrl: productImg01,
    price: 193,
    reviews: [
        {
            rating: 4.7,
        },
    ],
    avgRating: 4.5,
},

{
    id: "02",
    productName: "Rivet Bigelow Modern ",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    reviews: [
        {
            rating: 4.8,
        },

    ],
    avgRating: 4.7,
},


]

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
                <h1 className='font-bold text-center text-4xl '>Big Discount</h1>



                {/* Cards Section */}

                <div>
                    <div className='grid grid-cols-3 shadow-md gap-4 p-20'>
                        {products.map((product) => (
                            <div key={product.id} className='flex flex-col bg-white rounded shadow-md p-4'>
                                <img src={product.imgUrl} className='w-30 h-30  mx-auto' />
                                <h1 className='w-50 text-3xl'>{product.productName}</h1>
                                <h2 className='w-50 text-3xl'>${product.price}</h2>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div >
                <h1 className='text-center text-3xl p-10'>New Arrivals</h1>

                {/* new product */}
                <div>
                    <div className='grid grid-cols-3 shadow-md gap-4 p-20' >
                        {newArrival.map((item) => (
                            <div key={item.id} className='flex flex-col shadow-md p-10 rounded'>
                                <img src={item.imgUrl} alt='' />
                                <h1 className='w-50 text-3xl'>{item.productName}</h1>
                                <h2 className='w-50 text-3xl font-bold'>${item.price}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='bg-gray-200'>
                <h1 className='text-center text-3xl p-10'>Best Sales</h1>
                <div>
                    <div className='grid grid-cols-3 shadow-md gap-4 p-20'>
                        {newArrival.map((items) => (
                            <div key={items.id} className='flex bg-white flex-col shadow-md p-10 rounded'>
                                <img src={items.imgUrl} alt='' />
                                <h1 className='w-50 text-3xl'>{items.productName}</h1>
                                <h2 className='w-50 text-3xl font-bold'>{items.price}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
