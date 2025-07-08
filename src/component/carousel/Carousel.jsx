import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import img1 from "../../images/slider-img.png";
import About from '../../pages/about/About';
import Furniture from '../../pages/furniture/Furniture';
import Blog from '../../pages/blog/Blog';
import Testimonial from '../../pages/testimonial/Testimonial';
// Import Swiper styles
import 'swiper/css';

const Carousel = () => {
  return (
    <div style={{ width: '90%', margin: 'auto', padding: '20px 0' }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 1700,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-5">
                <h1
                  style={{ fontWeight: 760 }}
                  className="text-dark mt-5 text-uppercase"
                  data-aos="fade-up"
                >
                  For All Your <br />
                  Furniture Needs
                </h1>
                <p className="pt-3 pb-3" data-aos="fade-left" id="break">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                </p>
                <div className="d-flex align-items-center mb-5">
                  <button type="button" className="btn-box btn1 mb-md-5 mb-lg-5 ps-2 pe-2" data-aos="fade-up">
                    <strong>Contact us</strong>
                  </button>
                  <button type="button" className="btn-box btn2 ms-2 mb-md-5 mb-lg-5 ps-2 pe-2" data-aos="fade-up">
                    <strong>About Us</strong>
                  </button>
                </div>
              </div>
              <div className="col-md-7 ps-md-2 pe-md-2">
                <img
                  src={img1}
                  alt=""
                  className="w-100 pt-sm-0 pt-md-5 pt-lg-5"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 (copy) */}
        <SwiperSlide>
          <div className="container mt-5 mb-5">
            <div className="row">
              <div className="col-md-5">
                <h1
                  style={{ fontWeight: 760 }}
                  className="text-dark mt-5 text-uppercase"
                  data-aos="fade-up"
                >
                  For All Your <br />
                  Furniture Needs
                </h1>
                <p className="pt-3 pb-3" data-aos="fade-left" id="break">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                </p>
                <div className="d-flex align-items-center mb-5">
                  <button type="button" className="btn-box btn1 mb-md-5 mb-lg-5 ps-2 pe-2" data-aos="fade-up">
                    <strong>Contact us</strong>
                  </button>
                  <button type="button" className="btn-box btn2 ms-2 mb-md-5 mb-lg-5 ps-2 pe-2" data-aos="fade-up">
                    <strong>About Us</strong>
                  </button>
                </div>
              </div>
              <div className="col-md-7 ps-md-2 pe-md-2">
                <img
                  src={img1}
                  alt=""
                  className="w-100 pt-sm-0 pt-md-5 pt-lg-5"
                  data-aos="fade-up"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Page Sections */}
      <About />
      <Furniture />
      <Blog />
      <Testimonial />
    </div>
  );
}

export default Carousel