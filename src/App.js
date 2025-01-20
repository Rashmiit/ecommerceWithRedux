import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';
import Cart from './Component/Cart';
import Shop from './Component/Shop';

function App() {

  const handleClick=(item)=>{
    console.log(item);
    
  }
  return (
    <>
    <Navbar />
    {/* <Footer /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='cart' element={<Cart />} />
      <Route path='shop' element={<Shop />} />


    </Routes>
    <Footer />

    
    </>
  );
}

export default App;
