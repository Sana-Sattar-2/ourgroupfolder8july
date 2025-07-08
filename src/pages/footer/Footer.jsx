import React from 'react';
import cardimg1 from "../../images/f1.png";
import cardimg2 from "../../images/f2.png";
import cardimg3 from "../../images/f3.png";
import cardimg4 from "../../images/f4.png";
import cardimg5 from "../../images/f5.png";
import cardimg6 from "../../images/f6.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-fluid bg-dark p-md-5">
          <div className="row">

            {/* First Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-light d-flex align-items-center justify-content-center flex-column col-xl-4 mt-4">
              <span id="sana" data-aos="fade-up">
                <h5 className="h4 d-flex align-items-center justify-content-center">
                  <i className="ri-phone-fill ps-4" />
                </h5>
                <h5 className="pb-4 d-flex align-items-center justify-content-center mb-4">
                  Call: +0030243435334
                </h5>
              </span>

              <h3 className="text-light mt-2 d-flex align-items-center justify-content-center gap-3 mb-3" data-aos="fade-up">
                QUICK LINKS
              </h3>

              <h6 className="d-flex align-items-center justify-content-center gap-3">
                <a href="" id="sana" data-aos="fade-up">Home</a>
                <a href="" id="sana" data-aos="fade-up">About</a>
              </h6>
              <h6 className="d-flex align-items-center justify-content-center gap-3">
                <a href="" id="sana" data-aos="fade-up">Furniture</a>
                <a href="" id="sana" data-aos="fade-up">Blog</a>
              </h6>
              <h6 className="d-flex align-items-center justify-content-center">
                <a href="" id="sana" data-aos="fade-up">Contact us</a>
              </h6>
            </div>

            {/* Second Column */}
            <div className="col-md-6 col-lg-6 col-sm-12 text-light d-flex align-items-center justify-content-center flex-column mt-5 col-xl-4">
              <span id="sana" data-aos="fade-up">
                <h5 className="d-flex align-items-center justify-content-center">
                  <i className="ri-mail-star-fill" />
                </h5>
                <h5 className="d-flex align-items-center justify-content-center mt-5">
                  Email: sanasattar@gmail.com
                </h5>
              </span>

              <h4 className="text-light mt-5 d-flex align-items-center justify-content-center" data-aos="fade-up">
                INSTAGRAM FEEDS
              </h4>

              <div className="d-flex align-items-center justify-content-center">
                <div className="table" width="100%" data-aos="fade-up">
                  <div className="row mb-1">
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <img src={cardimg1} alt="" height="65px" width="65px" />
                      <img src={cardimg2} alt="" height="65px" width="65px" />
                      <img src={cardimg3} alt="" height="65px" width="65px" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="d-flex align-items-center justify-content-center gap-2 mt-1">
                      <img src={cardimg4} alt="" height="65px" width="65px" />
                      <img src={cardimg5} alt="" height="65px" width="65px" />
                      <img src={cardimg6} alt="" height="65px" width="65px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div className="col-md-12 col-lg-6 col-sm-12 text-light d-flex align-items-center justify-content-center flex-column mt-5 col-xl-4 ps-lg-5">
              <span id="sana" data-aos="fade-up" className="mt-5">
                <h5 className="mt-5 d-flex align-items-center justify-content-center">
                  <i className="ri-map-pin-user-line" />
                </h5>
                <h5 className="mt-1 d-flex align-items-center justify-content-center">
                  Location
                </h5>
              </span>

              <h5 className="text-light mt-5 d-flex align-items-center justify-content-center" data-aos="fade-up">
                SIGN UP TO OUR NEWSLETTER
              </h5>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control p-3"
                data-aos="fade-up"
              />
              <button
                type="button"
                className="btn-box btn2 ms-1 mt-4"
                data-aos="fade-up"
              >
                <strong>Subscribe</strong>
              </button>

              <div className="d-flex align-items-center gap-3 my-5" data-aos="fade-up">
                <span className="btn3">
                  <i className="ri-instagram-line h4" />
                </span>
                <span className="btn3">
                  <i className="ri-facebook-box-line h4" />
                </span>
                <span className="btn3">
                  <i className="ri-twitter-line h4" />
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <section className="container pt-2 pb-4">
        <div className="row">
          <div className="col-12 col-lg-8 text-center text-lg-start h6 col-md-12 col-sm-12">
            © 2025 Redesign By Sana Sattar 👍 🙂 @Amina Girls Degree College — Bachelor in Computer Science 🐣
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
