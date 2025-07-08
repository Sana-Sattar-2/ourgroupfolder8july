import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import Furniture from './pages/furniture/Furniture';
import About from './pages/about/About';
import Contact from './pages/contact/ContactUS';
import Blog from './pages/blog/Blog';
import Testimonial from './pages/testimonial/Testimonial';
import Carousel from "./component/carousel/Carousel";
import ContactUs from "./pages/contact/ContactUS";


const App = () => {
  return (
    <div>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
       
      </Routes>
      <ContactUs/>
    </div>
  );
};

export default App;
