import React from 'react'
import wirelessImage from '../assets/wireless-01.png';
function Home() {
    return (
        <div className="relative flex items-center justify-between px-10 py-20">
            <div className="max-w-lg space-y-6">
                <h1 className="text-4xl font-bold px-14 ">50% Off For Your First Shopping</h1>
                <p className='px-16'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero recusandae obcaecati doloreherlas cgasdstceo</p>
                <div className="mx-6 px-10 mb-10">
                    <button>Visit Collection</button>
                </div>
            </div>

            {/* Image placed in the right corner */}
            <img
                src={wirelessImage}
                alt="Sale"
                className="w-1/3 max-w-xs justify-center"
            />
        </div>
    )
}

export default Home;
