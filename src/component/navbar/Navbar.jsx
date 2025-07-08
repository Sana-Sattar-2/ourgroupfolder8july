import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
  <div className="container-fluid ps-4 pe-4">
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand me-3 ms-2" href="#">
        <span className="h4 text-uppercase">Edgecut</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-xl-5 gap-md-2 ms-auto ps-5 text-dark">
          <li className="nav-item ps-5">
            <Link className="nav-link text-uppercase" to="/" id="we">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" to="/furniture">Furnitures</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" to="/testimonial">Testimonial</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-uppercase" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <form className="d-flex gap-5 me-3" role="search">
          <a className="nav-link text-uppercase">
            Login <i className="ri-user-3-fill" /> &nbsp;&nbsp;&nbsp;
            <i className="ri-search-line" />
          </a>
        </form>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Navbar