import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import productImg01 from "../assets/double-sofa-01.png";
import productImg02 from "../assets/double-sofa-02.png";
import productImg03 from "../assets/double-sofa-03.png";
import phone03 from "../assets/phone-03.png";
import watch01 from "../assets/watch-01.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wirelessImage from '../assets/wireless-01.png';
import heroImage from '../assets/hero-img.png';

// List of images for the slider
const imageList = [
  {
    id: 1,
    img: wirelessImage,
    title: '50% Off For Your First Shopping',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
  {
    id: 2,
    img: heroImage,
    title: '50% Off For Your First Shopping',
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
  },
];

// List of products
export const products = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    price: 193,
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    price: 253,
    avgRating: 4.7,
  },
  {
    id: "12",
    productName: "Realme 8",
    imgUrl: phone03,
    price: 599,
    avgRating: 4.8,
  },
  {
    id: "16",
    productName: "Rolex Watch",
    imgUrl: watch01,
    price: 299,
    avgRating: 4.8,
  },
];

// List of new arrival products
const newArrival = [
  {
    id: "03",
    productName: "New Arrival Sofa",
    imgUrl: productImg03,
    price: 150,
    avgRating: 4.2,
  },
  // Add more new arrival products as needed
];

const Home = ({ cart, setCart }) => {
  const navigate = useNavigate(); // Initialize navigate function
  const [msg, setMsg] = useState('');

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setMsg(`${product.productName} has been added to the cart.`);
    setTimeout(() => {
      setMsg('');
      navigate('/Cart'); // Navigate to the Cart page
    }, 1000); // Add delay for a smooth experience
  };

  return (
    <div>
      {msg && (
        <div className="fixed top-4 right-4 bg-white-200 text-black p-4 rounded shadow-lg z-50">
          {msg}
        </div>
      )}

      {/* Slider Section */}
      <div className='bg-green-100'>
        <div className='relative overflow-hidden min-h-[600px] sm:min-h-[650px] flex justify-center items-center'>
          <div className='container pb-8 sm:pb-0'>
            <Slider {...sliderSettings}>
              {imageList.map((item) => (
                <div key={item.id} className='grid grid-cols-1 sm:grid-cols-2 items-start gap-8 px-6 sm:px-12 h-full'>
                  {/* Content Section */}
                  <div className='p-8 sm:p-20 sm:w-[800px]'>
                    <h1 className='font-bold text-4xl sm:text-6xl lg:text-7xl mb-6'>{item.title}</h1>
                    <p className='text-base mb-6'>{item.description}</p>
                    <button>Visit Collection</button>
                  </div>
                  {/* Image Section */}
                  <div className='flex justify-center sm:justify-end'>
                    <img src={item.img} alt={item.title} className='w-full max-w-[400px] sm:max-w-[500px] object-contain' />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className='bg-white p-20 sm:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-10 w-50'>
          {/* Card Items */}
          <div className="bg-pink-200">
            <div className='p-4 text-black-500 text-center'>
              <div className='flex justify-center items-center p-1'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.LFlWxwoNBj_rz-iF-xeZcgHaHa&pid=Api&P=0&h=220' alt='' className='object-cover rounded-full border border-white w-10' />
              </div>
              <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
            </div>
          </div>
          <div className="bg-pink-200">
            <div className='p-4 text-black-500 text-center'>
              <div className='flex justify-center items-center p-1'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.LFlWxwoNBj_rz-iF-xeZcgHaHa&pid=Api&P=0&h=220' alt='' className='object-cover rounded-full border border-white w-10' />
              </div>
              <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
            </div>
          </div>
          <div className="bg-pink-200">
            <div className='p-4 text-black-500 text-center'>
              <div className='flex justify-center items-center p-1'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.LFlWxwoNBj_rz-iF-xeZcgHaHa&pid=Api&P=0&h=220' alt='' className='object-cover rounded-full border border-white w-10' />
              </div>
              <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
            </div>
          </div>
          <div className="bg-pink-200">
            <div className='p-4 text-black-500 text-center'>
              <div className='flex justify-center items-center p-1'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.LFlWxwoNBj_rz-iF-xeZcgHaHa&pid=Api&P=0&h=220' alt='' className='object-cover rounded-full border border-white w-10' />
              </div>
              <h5 className='font-bold text-lg p-5'>Free Shipping</h5>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Discount Category */}
      <div className='bg-blue-50'>
        <h1 className='font-bold text-center text-4xl'>Big Discount</h1>
        {/* Cards Section */}
        <div className='grid grid-cols-3 shadow-md gap-4 p-20'>
          {products.map((product) => (
            <div key={product.id} className='flex flex-col bg-white rounded shadow-md p-4'>
              <div className='flex group'>
                <button className='bg-blue-700 w-16 text-white rounded h-8'>30% off</button>
                <img src='https://tse1.mm.bing.net/th?id=OIP.dmXb5_lNEfx4-x1jopEEdAHaGX&pid=Api&P=0&h=220' alt='heart' className='w-5 h-5 group-hover:opacity-100 transition-opacity duration-300 opacity-0 object-cover ml-auto' />
              </div>
              <div key={product.id} className='flex bg-white flex-col shadow-md p-10 rounded'>
                <img src={product.imgUrl} alt='' className='object-cover' />
                <h1 className='w-50 text-3xl'>{product.productName}</h1>
                <div className='flex items-center gap-4'>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={`text-yellow-500 ${index < product.avgRating ? '' : 'opacity-50'}`} />
                  ))}
                </div>
                <div className='flex'>
                  <h2 className='w-50 text-3xl font-bold'>${product.price}</h2>
                  <button className='hover:bg-blue-900 hover:text-white ml-auto w-12 h-11 rounded-full shadow-md bg-white text-4xl' onClick={() => handleAddToCart(product)}>
                    +
                  </button>
                </div>
              </div>
              </div>

          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className='bg-gray-200'>
        <h1 className='text-center text-3xl p-10'>Best Sales</h1>
        <div>
          <div className='grid grid-cols-3 shadow-md gap-4 p-20'>
            {products.map((item) => (
              <div key={item.id} className='flex bg-white flex-col shadow-md p-10 rounded'>
                <img src={item.imgUrl} alt='' className='object-cover' />
                <h1 className='w-50 text-3xl'>{item.productName}</h1>
                <div className='flex items-center gap-4'>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={`text-yellow-500 ${index < item.avgRating ? '' : 'opacity-50'}`} />
                  ))}
                </div>
                <div className='flex'>
                  <h2 className='w-50 text-3xl font-bold'>${item.price}</h2>
                  <button className='hover:bg-blue-900 hover:text-white ml-auto w-12 h-11 rounded-full shadow-md bg-white text-4xl' onClick={() => handleAddToCart(item)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best Sales Section */}
      <div className='bg-gray-200'>
        <h1 className='text-center text-3xl p-10'>Best Sales</h1>
        <div>
          <div className='grid grid-cols-3 shadow-md gap-4 p-20'>
            {products.map((item) => (
              <div key={item.id} className='flex bg-white flex-col shadow-md p-10 rounded'>
                <img src={item.imgUrl} alt='' className='object-cover' />
                <h1 className='w-50 text-3xl'>{item.productName}</h1>
                <div className='flex items-center gap-4'>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className={`text-yellow-500 ${index < item.avgRating ? '' : 'opacity-50'}`} />
                  ))}
                </div>
                <div className='flex'>
                  <h2 className='w-50 text-3xl font-bold'>${item.price}</h2>
                  <button className='hover:bg-blue-900 hover:text-white ml-auto w-12 h-11 rounded-full shadow-md bg-white text-4xl' onClick={() => handleAddToCart(item)}>
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Link in Navbar */}
      <div className="right-4 p-4 b text-white rounded-full cursor-pointer">
        <Link to="/Cart">View Cart</Link>
      </div>
    </div>
  );
};

export default Home;
