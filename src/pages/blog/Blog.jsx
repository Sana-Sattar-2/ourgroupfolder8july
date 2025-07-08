import React from 'react';
import b1 from "../../images/b1.jpg";
import b2 from "../../images/b2.jpg";
import b3 from "../../images/b3.jpg";

const Blog = () => {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row d-flex align-items-center justify-content-center">
        <h1
          className="h2 text-uppercase text-center"
          style={{ fontWeight: 700 }}
          data-aos="fade-up"
        >
          Latest Blog
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="row mt-5 d-flex align-items-center justify-content-center">

        {/* Blog Card 1 */}
        <div className="col-md-6 col-sm-9 pt-3 col-lg-4">
          <div className="card shadow" data-aos="fade-up">
            <img src={b1} alt="blog-1" width="100%" />
            <div className="card-body" data-aos="fade-up">
              <div className="card-title h5" style={{ fontWeight: 700 }} id="break">
                Look even slightly believable. If you are
              </div>
              <p id="break">
                Alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>
              <button type="button" className="btn-box btn2">
                <strong>Read more</strong>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="col-md-6 col-sm-9 pt-3 col-lg-4">
          <div className="card shadow" data-aos="fade-up">
            <img src={b2} alt="blog-2" width="100%" />
            <div className="card-body" data-aos="fade-up">
              <div className="card-title h5" style={{ fontWeight: 700 }} id="break">
                Anything embarrassing hidden in the middle
              </div>
              <p id="break">
                Alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>
              <button type="button" className="btn-box btn2">
                <strong>Read more</strong>
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="col-md-6 col-sm-9 pt-3 col-lg-4">
          <div className="card shadow" data-aos="fade-up">
            <img src={b3} alt="blog-3" width="100%" />
            <div className="card-body" data-aos="fade-up">
              <div className="card-title h5" style={{ fontWeight: 700 }} id="break">
                Molestias magni natus dolores odio commodi. Quaerat!
              </div>
              <p id="break">
                Alteration in some form, by injected humour, or randomised words
                which don't look even slightly believable.
              </p>
              <button type="button" className="btn-box btn2">
                <strong>Read more</strong>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
