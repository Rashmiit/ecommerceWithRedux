import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import tableImage from '../assets/table.jpg';
import { AiOutlineSearch } from "react-icons/ai";
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// Import product images
import productImg01 from "../assets/double-sofa-01.png";
import productImg02 from "../assets/double-sofa-02.png";
import productImg03 from "../assets/double-sofa-03.png";
import productImg07 from "../assets/arm-chair-01.jpg";
import productImg08 from "../assets/arm-chair-02.jpg";
import productImg09 from "../assets/arm-chair-03.jpg";
import productImg04 from "../assets/single-sofa-01.jpg";
import productImg05 from "../assets/single-sofa-02.jpg";
import productImg06 from "../assets/single-sofa-03.jpg";
import phone01 from "../assets/phone-01.jpg";
import phone02 from "../assets/phone-02.jpg";
import phone03 from "../assets/phone-03.png";
import watch01 from "../assets/watch-01.jpg";
import watch02 from "../assets/watch-02.jpg";
import wireless01 from "../assets/wireless-01.png";

// Categories for filtering
const options = [
    { id: 1, name: 'Sofa' },
    { id: 2, name: 'Chair' },
    { id: 3, name: 'Watch' },
    { id: 4, name: 'Mobile' },
    { id: 5, name: 'Wireless' },
];

// Product data
const image = [
    {
        id: "01",
        productName: "Stone and Beam Westview",
        imgUrl: productImg01,
        category: "sofa",
        price: 193,
    },
    {
        id: "02",
        productName: "Rivet Bigelow Modern",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
    },
    {
        id: "03",
        productName: "Helmar Chair",
        imgUrl: productImg09,
        category: "chair",
        price: 112,
    },
    {
        id: "04",
        productName: "Sakarias Armchair",
        imgUrl: productImg07,
        category: "chair",
        price: 99,
    },
    {
        id: "05",
        productName: "Apple iPhone 12 Pro",
        imgUrl: phone01,
        category: "mobile",
        price: 799,
    },
    {
        id: "06",
        productName: "Rolex Watch",
        imgUrl: watch01,
        category: "watch",
        price: 299,
    },
    {
        id: "07",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01,
        category: "wireless",
        price: 199,
    },
];

function Shop({ setProductId, setCartAllProduct }) {
    const handleAddToCart = (id) => {
        const productToAdd = image.find(product => product.id === id);
        if (productToAdd) {
            setCartAllProduct(prev => [...prev, productToAdd]);
        }
        console.log("Product added to cart:", productToAdd);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Filter by Category');
    const [filteredProducts, setFilteredProducts] = useState(image);

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option.name);
        setIsDropdownOpen(false);
        setFilteredProducts(option.name === 'Filter by Category' ? image : image.filter(product => product.category === option.name.toLowerCase()));
    };

    const handleClickOutside = (event) => {
        if (event.target.closest('.dropdown')) return;
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative flex-grow">
                <img src={tableImage} alt="Table" className="object-cover w-full h-80" />
                <h1 className="inset-0 flex items-center justify-center text-white font-bold text-4xl bg-black bg-opacity-50">Product</h1>

                <div className="absolute p-5 left-10 dropdown">
                    <button onClick={toggleDropdown} className="inline-flex justify-between items-center bg-blue-800 text-white px-4 py-2 rounded-md shadow-md">
                        {selectedOption}
                        <ChevronDownIcon className="h-5 w-5" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute w-48 bg-white border rounded-md shadow-lg">
                            {options.map((option) => (
                                <button key={option.id} onClick={() => handleOptionSelect(option)} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    {option.name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="bg-white object-cover mt-64 m-2 grid grid-cols-3 gap-4 p-4 w-full">
                    {filteredProducts.map((product) => (
                        <Link to='/product/${product.id}'>
                            <div key={product.id} className="shadow-md h-full flex flex-col">
                                <img src={product.imgUrl} className="h-full w-full p-5" alt={product.productName} />
                                <h1 className='font-bold p-1'>{product.productName}</h1>
                                <div className='flex items-center gap-4 p-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>

                                <div className='flex'>
                                    <h2 className='w-50 text-2xl'>${product.price}</h2>
                                    <button className='hover:bg-blue-900 hover:text-white ml-auto w-12 h-11 rounded-full shadow-md bg-white text-4xl' onClick={() => handleAddToCart(product.id)}>
                                        +
                                    </button>
                                </div>
                            </div>
                            </Link>
                    ))}
                        </div>
            </div>
            </div>
            );
}

            export default Shop;
