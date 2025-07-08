import React from 'react'
import aboutimg from "../../images/about-img.png";
const About = () => {
 return (
  <div className="container-fluid pe-md-5 ps-md-5">
    <div className="container-fluid mt-5 mb-5">
      <div className="row bg-light p-4">
        {/* Left Side Image */}
        <div
          className="col-md-6 mt-5 mb-5 d-flex align-items-center"
          data-aos="fade-up"
        >
          <img
            src={aboutimg}
            alt="About Section"
            className="img-fluid"
            data-aos="fade-up"
          />
        </div>

        {/* Right Side Text */}
        <div className="col-md-6 mt-md-5 pt-sm-0 mb-5">
          <h1>
            <strong
              className="h2 text-uppercase"
              style={{ fontWeight: '700' }}
              data-aos="fade-up"
            >
              About Us
            </strong>
          </h1>
          <p className="pt-3 pb-3 text-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            <br />
            ut, quia aut veniam libero veritatis aspernatur nulla cum debitis
            consequuntur non vitae illum commodi, vel quas. Sed dolorum
            <br />
            sit alias!
          </p>
          <button type="button" className="btn-box btn2">
            <strong>Read More</strong>
          </button>
        </div>
      </div>
    </div>
  </div>
);

}

export default About