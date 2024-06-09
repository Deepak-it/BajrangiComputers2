import React, {useState, useEffect, useContext} from 'react';
import { Carousel } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DocumentTitle from '../changeTitle';
import { MyContext } from '../context/MyContext';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { state, setState } = useContext(MyContext);
  
  useEffect(() => {
    const interval = setInterval(() => {
        const newIndex = (activeIndex + 1) % 3; // Assuming there are 3 slides
        setActiveIndex(newIndex);
    }, 5000);

    return () => clearInterval(interval);
}, [activeIndex]);

  DocumentTitle("Testimonials || Bajrang Computers")


  return (
    <section className='mt-5 mb-5'>
      <div className="row text-center">
        <div className="col-md-12">
          {/* Carousel wrapper */}
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            {/* Inner */}
            <div className="carousel-inner">
              {/* Single item */}
              <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                <p className="lead font-italic mx-4 mx-md-5">
                  "I highly recommend to work with Bajrang Computers as it is a renowned name of kaithal. I get in touch with Bajrang Computers through a common friend and then after seeing their excellent work we started doing business together."
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">- Anna Morian</p>
              </div>

              {/* Single item */}
              <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                <p className="lead font-italic mx-4 mx-md-5">
                  "Bajrang Computers is a leading IT related firm who can deliver latest IT products and can provide best services
                  . I am very happy to get in touch with them, as they always delivered products on time for my business."
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).w"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">Deepak Kalaramna</p>
              </div>

              {/* Single item */}
              <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                <p className="lead font-italic mx-4 mx-md-5">
                  "I have been working with bajrang computers from a quite long time. Their commitment to the work is excellent and they have an awesome team of dedicated and hardworking employees who can provide solution to every IT related problem"
                </p>
                <div className="mt-5 mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).we"
                    className="rounded-circle img-fluid shadow-1-strong"
                    alt="sample image"
                    width="100"
                    height="100"
                  />
                </div>
                <p className="text-muted mb-0">Mandeep Rana</p>
              </div>
            </div>
            {/* Inner */}

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span style = {{color: '#000000', filter: 'invert(100%)'}} className="carousel-control-prev-icon" aria-hidden="true">
                {/* <i className="fas fa-chevron-left"></i> */}
              </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span style = {{color: '#000000', filter: 'invert(100%)'}} className="carousel-control-next-icon" aria-hidden="true">
                {/* <i className="fas fa-chevron-right"></i> */}
              </span>
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