import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./TestimonialCarousel.css";

const TestimonialCarousel = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="../src/assets/images/client-1.png"
                className="testimonial-img "
                alt="Client 1"
              />
            </div>

            <div className="carousel-item">
              <img
                src="../src/assets/images/client-2.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="../src/assets/images/client-3.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>

            <div className="carousel-item">
              <img
                src="../src/assets/images/client-4.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../src/assets/images/client-5.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../src/assets/images/client-6.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../src/assets/images/client-7.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="../src/assets/images/client-8.png"
                className="testimonial-img "
                alt="Client 2"
              />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
