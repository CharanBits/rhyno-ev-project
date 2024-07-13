import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import Product3 from "./pages/Product3";
import Compare from "./pages/Compare";
import PreBook from "./pages/PreBook";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rentals from "./pages/Rentals";
import Footer from "./components/Footer";
import GlobalStyle from "./styles"
import PrivacyPolicy from "./components/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import  WebsitePolicy from "./components/WebsitePolicy";



function App() {
  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle />
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product1" element={<Product1 />} />
        <Route path="/product2" element={<Product2 />} />
        <Route path="/product3" element={<Product3 />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/prebook" element={<PreBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/website-policy" element={<WebsitePolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
