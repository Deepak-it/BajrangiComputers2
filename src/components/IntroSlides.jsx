import React, { useEffect, useState } from "react";
import { getSlideData } from "../APIServices/APIEndpoints";
import { saveSlidesResponse, saveTestimonialResponse } from "../actions/index"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {API_BASE} from "../APIServices/APIEndpoints"

const IntroSlides = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = useSelector((state) => state.content.slides);
    const dispatch = useDispatch()

    useEffect(() => {
        debugger;
        // const fetchData = async () => {
        //     // try {
        //     //     // const response = await getSlideData();
        //     //     dispatch(saveSlidesResponse(response?.data || []));
        //     // } catch (error) {
        //     //     console.error("Error fetching slides data:", error);
        //     // }
        // };
        // if (slides.length === 0) {
        //     fetchData();
        // }
        // getSlideData.then((response) => dispatch(saveSlidesResponse(response.data)))
        axios.get(`${API_BASE}/admin/getSlideFormData`).then((response) => dispatch(saveSlidesResponse(response.data)))
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (activeIndex + 1) % slides.length;
            setActiveIndex(newIndex);
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex, slides.length]);

    return (
        <section className="container-fluid p-0 mt-2">
            <div className="row text-center">
                <div className="col-md-12">
                    {/* Carousel wrapper */}
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        {/* Inner */}
                        <div className="carousel-inner">
                            {slides.map((slide, index) => (
                                <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                                    <img
                                        style={{ maxHeight: "80vh", objectFit: "cover" }}
                                        src={slide.image}  // assuming 'image' is the key for the image URL in the slide object
                                        className="d-block w-100"
                                        alt={`Slide ${index + 1}`}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{slide.slideTitle}</h5>
                                        <p>{slide.slideDesc}</p>
                                    </div>
                                </div>
                            ))}
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
};

export default IntroSlides;

