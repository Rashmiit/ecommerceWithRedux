// import React from 'react';
// import tableImage from '../assets/table.jpg';
// import { useState } from 'react';
// const options = [
//     {
//         id: 1,
//         name: 'Sofa',
//     },
//     {
//         id: 2,
//         name: 'Sofa',
//     },
//     {
//         id: 3,
//         name: 'Sofa',
//     },
// ]
// function Shop() {
//     return (
//         <div className="relative w-screen h-screen">
//             <img
//                 src={tableImage}
//                 alt="Table"
//                 className="object-cover w-full h-full"
//             />
//             <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl bg-black bg-opacity-50 ">
//                 Product
//             </h1>

//             <div className='bg-white-100'>
//                 <button className='bg-blue-900 text-white space-y-10'>Filter By Category</button>


//             </div>
//         </div>
//     );
// }

// export default Shop;


import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import tableImage from '../assets/table.jpg';

const options = [
        {
            id: 1,
            name: 'Sofa',
        },
        {
            id: 2,
            name: 'Sofa',
        },
        {
            id: 3,
            name: 'Sofa',
        },
    ]
export default function Shop() {
    return (

        <div className="relative w-screen h-screen">
            <img
                src={tableImage}
                alt="Table"
                className="object-cover w-full h-full"
            />
            <h1 className="absolute inset-0 flex items-center justify-center text-white font-bold text-4xl bg-black bg-opacity-50 ">
                Product
            </h1>

            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-800 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                        Options
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white text-black-200 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-black-700  data-[focus]:outline-none"
                            >
                                Account settings
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                Support
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                License
                            </a>
                        </MenuItem>
                        <form action="#" method="POST">
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu>
            </div>
            )
            
}
