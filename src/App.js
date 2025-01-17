import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Navbar />
    {/* <Footer /> */}
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />

    
    </>
  );
}

export default App;
