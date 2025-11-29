import './App.css'
import "./styles/animation.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div className="App"> 
    
   
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App
