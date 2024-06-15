import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentTitle from '../changeTitle';
// import { getTestimonialFormData } from '../APIServices/APIEndpoints';
import '../assets/globals.css'; // Import the CSS file

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonialFormData();
        if (Array.isArray(response.data)) {
          setTestimonials(response.data);
        } else {
          console.error("API response data is not an array:", response);
          setTestimonials([]);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonials([]);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [testimonials]);

  DocumentTitle("Testimonials || Bajrang Computers");

  return (
    <section className='mt-5 mb-5'>
      <div className="row text-center">
        <div className="col-md-12">
          {/* Carousel wrapper */}
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            {/* Inner */}
            <div className="carousel-inner">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="testimonial-content">
                    <p className="lead font-italic mx-4 mx-md-5 testimonial-text">
                      {testimonial.testimonialDesc}
                    </p>
                    <div className="mt-5 mb-4">
                      <img
                        src={testimonial.image} // Replace with testimonial image source if available
                        className="rounded-circle img-fluid shadow-1-strong"
                        alt="sample image"
                        width="100"
                        height="100"
                      />
                    </div>
                    <p className="text-muted mb-0">- {testimonial.userName}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Inner */}

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span style={{ color: '#000000', filter: 'invert(100%)' }} className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span style={{ color: '#000000', filter: 'invert(100%)' }} className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          {/* Carousel wrapper */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
