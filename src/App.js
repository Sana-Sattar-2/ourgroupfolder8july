import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './component/navbar/Navbar';
import Home from './pages/home/Home';
import Furniture from './pages/furniture/Furniture';
import About from './pages/about/About';
import Contact from './pages/contact/ContactUS';
import Blog from './pages/blog/Blog';
import Testimonial from './pages/testimonial/Testimonial';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
