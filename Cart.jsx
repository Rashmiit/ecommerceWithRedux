import React from 'react'

function Cart() {
    return (
        <>

            <div className='grid bg-blue-100 min-h-screen items-center justify-center'>
                <div >
                    <div className='grid grid-cols-2 '>
                        <div className='shadow-md p-10  bg-white'>
                            <h1 className='mb-4  text-lg font-bold text-blue-900'>No items are add in cart</h1>
                        </div>
                        <div className='shadow-md p-5 bg-white ml-auto'>
                            <h2 className=' text-blue-900 font-bold p-5'>Cart Summary</h2><hr>
                            </hr>
                            <h1>Total Price:</h1>
                            <p className=' text-blue-900 font-bold'>$0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
