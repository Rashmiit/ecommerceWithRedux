import React from 'react';

function Footer() {
    return (
          <footer className="bg-blue-900 text-white p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold">Mart</h2>
                        <p className="mt-2 text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, cumque.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">About Us</h2>
                        <ul className="mt-2 space-y-2">
                            <li>Careers</li>
                            <li>Our Stores</li>
                            <li>Our Cares</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Customer Care</h2>
                        <ul className="mt-2 space-y-2">
                            <li>Help Center</li>
                            <li>How to Buy</li>
                            <li>Track Your Order</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Contact Us</h2>
                        <ul className="mt-2 space-y-2">
                            <li>Marthahalli, Bangalore</li>
                            <li>Email: abc35@gmail.com</li>
                            <li>Phone: +91 67575687686</li>
                        </ul>
                    </div>
                </div>
            </footer> 
    );
}

export default Footer;
