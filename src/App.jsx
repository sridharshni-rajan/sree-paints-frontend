import './App.css'
import './Styles/animation.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from './Footer/Footer';
import Contact from './Components/Contact/Contact';
import Product from './pages/product';
import ScrollToTop from './Components/ScrollTop';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "./analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location.pathname]);

  return null;
}

function App() {

  return (
    <div className="App"> 
      <Router>
        <AnalyticsTracker />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router> 
    </div>
  );
}

export default App
