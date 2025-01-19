import React from 'react'

function Footer() {
  return (
    <>
    <footer className='flex mb-100 justify-center text-gray-400 bg-blue-900 p-20 gap-40 mt-auto'>
                <div className='space-y-3 '>
                    <div className='flex gap-4'>
                        <img src='https://static.vecteezy.com/system/resources/previews/000/420/589/original/shopping-bag-icon-vector-illustration.jpg' alt='' className='bg-blue-200 w-10' />
                        <h1 className='font-bold text-3xl text-white'>Mart</h1>
                    </div>
                    <p className='w-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ea ut perferendis porro voluptates officiis? Maxime, cumque. In eum, placeat odit ea quam asperiores maxime molestiae tempora rerum nobis </p>

                </div>
                <div className='space-y-3' >
                    <h1 className='text-white text-2xl'>About Us</h1>
                    <div className='space-y-3'>
                        <p>Careers</p>
                        <p>Our Strores</p>
                        <p>Our Cares</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
                <div className='space-y-3' >
                    <h1 className=' text-white text-2xl'>Customer Care</h1>
                    <div className='space-y-3'>
                        <p>Help Center</p>
                        <p>How to Buy</p>
                        <p>Track Your Order</p>
                        <p>Corporate & Bulk Purchasing</p>
                        <p>Returns & Refunds</p>
                    </div>
                </div>
                <div className='space-y-3' >
                    <h1 className='text-white text-2xl '>Contact Us</h1>
                    <div className='space-y-3'>
                        <p>Marthahalli Bangalore India</p>
                        <p>Email:abc35@gmail.com</p>
                        <p>Phone:+91 67575687686</p>
                    </div>
                </div>
            </footer>

 
    </>
  )
}

export default Footer