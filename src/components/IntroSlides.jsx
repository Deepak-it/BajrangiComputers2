import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyContext";

const IntroSlides = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { state, setState } = useContext(MyContext);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (activeIndex + 1) % 3; // Assuming there are 3 slides
            setActiveIndex(newIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <section className="container-fluid p-0 mt-2">
            <div className="row text-center">
                <div className="col-md-12">
                    {/* Carousel wrapper */}
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">

                        {/* Inner */}
                        <div className="carousel-inner">
                            {/* Slide 1 */}
                            <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                                <img style={{ maxHeight: "80vh", objectFit: "cover" }} src="/assets/slide1.jpg" className="d-block w-100" alt="Slide 1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Work From Home SetUps</h5>
                                    <p>We Provide WFH setups at an affordable price. These setups are available in two forms. You can purchase them or can rent them.</p>
                                </div>
                            </div>

                            {/* Slide 2 */}
                            <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                                <img style={{ maxHeight: "80vh", objectFit: "cover" }} src="/assets/slide2111.jpg" className="d-block w-100" alt="Slide 2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>IT Solution</h5>
                                    <p>We have a dedicated and experienced team of Software Engineers who can help you with programming solutions. We can help you maintain your servers as well .</p>
                                </div>
                            </div>

                            {/* Slide 3 */}
                            <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                                <img style={{ maxHeight: "80vh", objectFit: "cover" }} src="/assets/slides41.jpg" className="d-block w-100" alt="Slide 4" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Laptops</h5>
                                    <p>We are reputed all over kaithal, Haryana for providing the best and affordable laptops</p>
                                </div>
                            </div>
                                                       {/* Slide 3 */}
                                {/* <div className={`carousel-item ${activeIndex === 3 ? 'active' : ''}`}>
                                <img style={{ maxHeight: "80vh", objectFit: "cover" }} src="/assets/cctv-slide2.jpeg" className="d-block w-100" alt="Slide 4" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Cameras</h5>
                                    <p>Full Proof Secuirty with HD Cameras</p>
                                </div>
                            </div> */}
                        </div>
                        {/* Inner */}

                        {/* Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Carousel wrapper */}
                </div>
            </div>
        </section>
    );
}

export default IntroSlides;
