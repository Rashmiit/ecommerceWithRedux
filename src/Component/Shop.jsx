import React, { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import tableImage from '../assets/table.jpg';
import { AiOutlineSearch } from "react-icons/ai";
import productImg01 from "../assets/double-sofa-01.png";
import productImg02 from "../assets/double-sofa-02.png";
import productImg03 from "../assets/double-sofa-03.png";
import productImg07 from "../assets/arm-chair-01.jpg";
import productImg08 from "../assets/arm-chair-02.jpg";
import productImg09 from "../assets/arm-chair-03.jpg";
import productImg10 from "../assets/arm-chair-01.jpg";




import productImg04 from "../assets/single-sofa-01.jpg";
import productImg05 from "../assets/single-sofa-02.jpg";
import productImg06 from "../assets/single-sofa-03.jpg";
import productImg007 from "../assets/single-sofa-04.png";
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

const options = [
    { id: 1, name: 'Sofa' },
    { id: 2, name: 'Chair' },
    { id: 3, name: 'Watch' },
    { id: 4, name: 'Mobile' },
    { id: 5, name: 'Wireless' },
];

const image = [
    {
        id: "01",
        productName: "Stone and Beam Westview ",
        imgUrl: productImg01,
        category: "sofa",
        price: 193,
        discount: 30,
    },
    {
        id: "02",
        productName: "Rivet Bigelow Modern ",
        imgUrl: productImg02,
        category: "sofa",
        price: 253,
        discount: 20
    },
    {
        id: "09",
        productName: "Helmar Chair",
        imgUrl: productImg09,
        category: "chair",
        price: 112,
        discount:35,
    },
    {
        id: "07",
        productName: "Sakarias Armchair",
        imgUrl: productImg07,
        category: "chair",
        price: 99,
    },
    {
        id: "08",
        productName: "Baltsar Chair",
        imgUrl: productImg08,
        category: "chair",
        price: 89,
    },
    {
        id: "12",
        productName: "Realme 8",
        imgUrl: phone03,
        category: "mobile",
        price: 599,
        discount:10,
    },
    {
        id: "13",
        productName: "One Plus Nord",
        imgUrl: phone04,
        category: "mobile",
        price: 799,
        discount:5,
    },
    {
        id: "03",
        productName: "Amazon Brand Modern Sofa",
        imgUrl: productImg03,
        category: "sofa",
        price: 173,
    },
    {
        id: "04",
        productName: "Fllufy Sheep Sofa",
        imgUrl: productImg04,
        category: "sofa",
        price: 163
    },
    {
        id: "05",
        productName: "Faux Velvet Sofa",
        imgUrl: productImg05,
        category: "sofa",
        price: 163,
    },
    {
        id: "27",
        productName: "Modern Arm Sofa",
        imgUrl: productImg007,
        category: "sofa",
        price: 173,
    },
    {
        id: "10",
        productName: "Apple iPhone 12 Pro",
        imgUrl: phone01,
        category: "mobile",
        price: 799,
    },
    {
        id: "11",
        productName: "Apple iPhone 12 Max",
        imgUrl: phone02,
        category: "mobile",
        price: 799,
    },

    {
        id: "13",
        productName: "One Plus Nord",
        imgUrl: phone04,
        category: "mobile",
        price: 799,
    },
    {
        id: "14",
        productName: "Apple iPhone 13 Pro",
        imgUrl: phone05,
        category: "mobile",
        price: 899,
    },
    {
        id: "15",
        productName: "Samsung Galaxy S22",
        imgUrl: phone06,
        category: "mobile",
        price: 699,
    },
    {
        id: "16",
        productName: "Rolex Watch",
        imgUrl: watch01,
        category: "watch",
        price: 299,
    },
    {
        id: "17",
        productName: "Timex Easy Reader Watch",
        imgUrl: watch02,
        category: "watch",
        price: 299,
    },
    {
        id: "19",
        productName: "Apple Watch",
        imgUrl: watch04,
        category: "watch",
        price: 399,
    },
    {
        id: "20",
        productName: "Beat Studio Wireless",
        imgUrl: wireless01,
        category: "wireless",
        price: 199
    },
    {
        id: "21",
        productName: "Beat EP Headphones",
        imgUrl: wireless03,
        category: "wireless",
        price: 199,
    },
    {
        id: "22",
        productName: "Black Headphones",
        imgUrl: wireless02,
        category: "wireless",
        price: 169,
    },
    {
        id: "23",
        productName: "Bluetooth Headphones",
        imgUrl: wireless04,
        category: "wireless",
        price: 139,
    },
];

export default function Shop() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Filter by Category');
    const [filteredProducts, setFilteredProducts] = useState(image); // display  all products

    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option.name);
        setIsDropdownOpen(false);

        // Filter products based on selected category
        if (option.name === 'Filter by Category') {
            setFilteredProducts(image); 
        } else {
            setFilteredProducts(image.filter((product) => product.category === option.name.toLowerCase()));
        }
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
                <img
                    src={tableImage}
                    alt="Table"
                    className="object-cover w-full h-80"
                />
                <h1 className="absolute inset-0 flex items-center justify-center  text-white font-bold text-4xl bg-black bg-opacity-50">
                    Product
                </h1>

                <div className="absolute p-5 left-10 dropdown">
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex justify-between items-center bg-blue-800 text-white px-4 py-2 rounded-md shadow-md"
                    >
                        {selectedOption}
                        <ChevronDownIcon className="h-5 w-20" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute w-48 bg-white border rounded-md shadow-lg ">
                            {options.map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => handleOptionSelect(option)}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    {option.name}
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="relative search_box fixed bottom-10 ml-80">
                        <input
                            type="text"
                            value=""
                            placeholder="search..."
                            className="rounded-full  p-4 py-2 w-80 ml-80 bg-pink-100 text-gray-900"
                        />
                        <button className="absolute left-72 ml-80 mt-5 transform -translate-y-1/2 justify-center items-center ">
                            <AiOutlineSearch />
                        </button>

                        <div className="bg-white object-cover grid grid-cols-3 gap-4 p-4 w-full min-h-screen">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="shadow-md h-full">
                                    <img
                                        src={product.imgUrl}
                                        className=" h-full "
                                        alt={product.productName}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
