import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  const [cart, setCart] = useState([]); // State to manage cart items

  return (
    <Router>
      <Navbar cart={cart} /> {/* Pass cart to Navbar */}
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/Shop" element={<Shop cart={cart} setCart={setCart} />} /> {/* Pass cart and setCart */}
        <Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} /> {/* Pass cart and setCart */}
      </Routes>
    </Router>
  );
}

export default App;
