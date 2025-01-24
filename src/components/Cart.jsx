import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';

const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    // Update cartItems when the cart prop changes
    setCartItems(cart);
  }, [cart]);

  const handleQuantityChange = (index, action) => {
    const updatedCartItems = [...cartItems];
    const product = updatedCartItems[index];

    if (action === 'increase') {
      product.quantity += 1; // Increase the quantity
    } else if (action === 'decrease' && product.quantity > 1) {
      product.quantity -= 1; // Decrease the quantity (minimum 1)
    }

    setCartItems(updatedCartItems); // Update local cart state
    setCart(updatedCartItems); // Update the parent cart state
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems); // Remove the item from the local cart state
    setCart(updatedCartItems); // Update the parent cart state
  };

  const totalPrice = cartItems.reduce((total, product) => {
    const price = parseFloat(product.price);
    const quantity = parseInt(product.quantity);

    if (!isNaN(price) && !isNaN(quantity)) {
      return total + price * quantity;
    }
    return total;
  }, 0);

  return (
    <div className="p-1 flex flex-col">
      {cartItems.length > 0 ? (
        <div className="">
          {cartItems.map((product, index) => (
            <div key={index} className="bg-white rounded shadow-md p-4 mb-4">
              <img
                src={product.imgUrl}
                className="w-80 h-72  rounded"
                alt={product.productName}
              />
              <h1 className="text-xl text-center mt-1">{product.productName}</h1>
              <p className="text-center mt-1">${product.price}</p>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  className="text-xl font-bold text-gray-500"
                  onClick={() => handleQuantityChange(index, 'decrease')}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  className="text-xl font-bold text-gray-500"
                  onClick={() => handleQuantityChange(index, 'increase')}
                >
                  +
                </button>
                <button
                  className="text-red-500 ml-4"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-2xl font-bold mt-8">No Items are add in cart</p>
      )}
      <div className="mt-8 text-center ">
        <h1 className='text-2xl font-bold'>Cart Summary</h1><hr></hr>
        <h3 className="p-5">Total Price: </h3>
        <h4 className='text-2xl font-bold'>${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
