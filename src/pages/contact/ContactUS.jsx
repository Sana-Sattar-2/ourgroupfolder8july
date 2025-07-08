import React from 'react'
import Footer from "../../pages/footer/Footer";
const ContactUS = () => {
 return (
    <div className="container-fluid">
      <div className="container-fluid p-md-5 p-md-3 bg-light h-sm-100">
        <div className="row" id="broken-star">
          <div className="col-md-12 col-lg-6 mb-3">
            <h1
              className="h2 text-uppercase"
              style={{ fontWeight: 700 }}
              data-aos="fade-up"
            >
              Contact us
            </h1>

            <div className="form" data-aos="fade-up">
              <input
                type="text"
                placeholder="Your Name"
                className="form-control pt-3 pb-3 shadow-sm"
                style={{ border: "none" }}
              />
              <input
                type="text"
                placeholder="Phone No"
                className="form-control mt-3 mb-3 pt-3 pb-3 shadow-sm"
                style={{ border: "none" }}
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control pt-3 pb-3 shadow-sm"
                style={{ border: "none" }}
              />
              <input
                type="text"
                placeholder="Message"
                className="form-control pt-5 pb-5 mb-3 mt-3 shadow-sm"
                style={{ border: "none" }}
              />
            </div>

            <button
              type="button"
              className="btn-box btn2 ms-1"
              data-aos="fade-up"
            >
              <strong>Send</strong>
            </button>
          </div>

          <div className="col-md-12 col-lg-6">
            <iframe
              className="w-100 h-100 mb-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.775281722194!2d71.5295182738037!3d29.66829463629776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b0d5e81bfc16f%3A0x6335ebeec830dd35!2sAGS%20Amina%20Girls%20Higher%20Secondary%20school!5e0!3m2!1sen!2s!4v1738283748633!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              data-aos="fade-up"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUS