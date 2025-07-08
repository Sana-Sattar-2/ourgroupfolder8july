import React from 'react';
import cardimg1 from "../../images/f1.png";
import cardimg2 from "../../images/f2.png";
import cardimg3 from "../../images/f3.png";
import cardimg4 from "../../images/f4.png";
import cardimg5 from "../../images/f5.png";
import cardimg6 from "../../images/f6.png";

const Furniture = () => {
  return (
    <div>
      <div className="container pt-5 px-3">
        <h2 className="fs-2 fw-bold text-uppercase lh-sm" data-aos="fade-up">Our Furniture</h2>
        <p className="my-1 text-dark" data-aos="fade-up">
          Which don't look even slightly believable. If you are going to use a passage of
          Lorem Ipsum, you need to be sure there isn't.
        </p>
      </div>

      <div className="container my-5 text-white p-3">
        <div className="row">

          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg1} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">Brown Chair Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg2} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">Double Bed Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg3} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">House Chair Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg4} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">Brown Table Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg5} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">Blue Chair Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-lg-4 col-md-6 col-sm-12 col-12">
            <div className="card bg-light mb-3 p-4" style={{ border: 'none' }} data-aos="fade-up">
              <div className="imgbox">
                <img src={cardimg6} className="card-img-top p-4" alt="..." style={{ height: '275px', width: '100%', objectFit: 'contain' }} />
              </div>
              <h5 className="text-uppercase text-dark">Brown Chair Design</h5>
              <div className="d-flex justify-content-between">
                <h6 className="price_heading">
                  <span style={{ color: 'rgb(107, 183, 190)' }}>$</span> 100.00
                </h6>
                <a href="#" className="text-uppercase" style={{ color: 'rgb(107, 183, 190)', textDecoration: 'none' }}>Buy Now</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Furniture;
