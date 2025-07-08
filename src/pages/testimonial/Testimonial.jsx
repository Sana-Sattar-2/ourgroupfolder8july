import React from 'react';
import client from "../../images/client.jpg";

const Testimonial = () => {
  return (
    <>
      <h2 className="text-center py-4 fs-2 fw-bold lh-sm mt-5">TESTIMONIAL</h2>
      <div className="container">
        <div
          id="carouselExampleAutoplaying1"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-sm-10 col-lg-9 mx-auto">
                  <div className="container">
                    <div className="row shadow my-5 d-flex px-3 py-4 justify-content-sm-center">
                      <div className="col-sm-5 col-md-4 col-lg-3 px-0 d-flex justify-content-center">
                        <img
                          src={client}
                          alt="client"
                          className="img-fluid rounded-circle"
                          style={{
                            objectFit: "contain",
                            border: "10px solid rgb(107, 183, 190)"
                          }}
                          id="broken-star2"
                        />
                      </div>
                      <div className="col-sm-12 col-lg-9 pt-3 ps-4">
                        <h4><i className="ri-double-quotes-l" /></h4>
                        <h3 style={{ color: "rgb(107, 183, 190)" }}>Sana</h3>
                        <p id="break">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Quasi doloribus temporibus quo molestiae fuga fugiat
                          commodi, quis officia quisquam, quas voluptates nesciunt
                          sunt dolore rem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-10 col-lg-9 mx-auto">
                  <div className="container">
                    <div className="row shadow my-5 d-flex px-3 py-4 justify-content-sm-center">
                      <div className="col-sm-5 col-md-4 col-lg-3 px-0 d-flex justify-content-center">
                        <img
                          src={client}
                          alt="client"
                          className="img-fluid rounded-circle"
                          style={{
                            objectFit: "contain",
                            border: "10px solid rgb(107, 183, 190)"
                          }}
                          id="broken-star2"
                        />
                      </div>
                      <div className="col-sm-12 col-lg-9 pt-3 ps-4">
                        <h4><i className="ri-double-quotes-l" /></h4>
                        <h3 style={{ color: "rgb(107, 183, 190)" }}>Sana</h3>
                        <p id="break">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Quasi doloribus temporibus quo molestiae fuga fugiat
                          commodi, quis officia quisquam, quas voluptates nesciunt
                          sunt dolore rem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-sm-10 col-lg-9 mx-auto">
                  <div className="container">
                    <div className="row shadow my-5 d-flex px-3 py-4 justify-content-sm-center">
                      <div className="col-sm-5 col-md-4 col-lg-3 px-0 d-flex justify-content-center">
                        <img
                          src={client}
                          alt="client"
                          className="img-fluid rounded-circle"
                          style={{
                            objectFit: "contain",
                            border: "10px solid rgb(107, 183, 190)"
                          }}
                          id="broken-star2"
                        />
                      </div>
                      <div className="col-sm-12 col-lg-9 pt-3 ps-4">
                        <h4><i className="ri-double-quotes-l" /></h4>
                        <h3 style={{ color: "rgb(107, 183, 190)" }}>Sana</h3>
                        <p id="break">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Quasi doloribus temporibus quo molestiae fuga fugiat
                          commodi, quis officia quisquam, quas voluptates nesciunt
                          sunt dolore rem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying1"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
