import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { slideFormDataEndpoint, testimonialFormDataEndpoint, productFormDataEndpoint } from "../APIServices/APIEndpoints";

const AdminDashboard = () => {
    const [slideFormData, setSlideFormData] = useState({
        slideDesc: "",
        slideTitle: "",
        image: ""
    })
    const [testimonialsData, setTestimonialsData] = useState({
        testimonialDesc: "",
        userName: "",
        image: ""
    })
    const [productData, setProductData] = useState({
        name: "",
        desc: "",
        price: "",
        selectedCategory: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSlideFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleTestimonialsChange = (e) => {
        const { name, value } = e.target;
        setTestimonialsData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setTestimonialsData((prevState) => ({
                ...prevState,
                image: reader.result // Set image state to Base64 string
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleImageChangeSlides = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setSlideFormData((prevState) => ({
                ...prevState,
                image: reader.result // Set image state to Base64 string
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleProductChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmitSlideForm = async () => {
        const response = slideFormDataEndpoint(slideFormData)
    }

    const handleSubmitTestimonialForm = async () => {
        const response = testimonialFormDataEndpoint(testimonialsData)
    }

    const handleSubmitProductForm = async () => {
        const response = productFormDataEndpoint(productData)
    }

    const handleDeleteSlides = async () => {
        
    }

    const loginResponse = useSelector((state) => state.auth.loginResponse);
    const isAdmin = loginResponse?.isAdmin;
    return (
        isAdmin ? (<div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Intro Slides</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Testimonials</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Products</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <input onChange={handleChange} name="slideTitle" value={slideFormData.slideTitle}></input>
                    <input onChange={handleChange} name="slideDesc" value={slideFormData.slideDesc}></input>
                    <input type="file" onChange={handleImageChangeSlides} accept="image/*" />
                    <button type="submit" onClick={handleSubmitSlideForm}>Submit</button>
                    <button type="submit" onClick={handleDeleteSlides}>Delete</button>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <input onChange={handleTestimonialsChange} name="userName" value={testimonialsData.userName}></input>
                    <input onChange={handleTestimonialsChange} name="testimonialDesc" value={testimonialsData.testimonialDesc}></input>
                    <input type="file" onChange={handleImageChange} accept="image/*" />
                    <button type="submit" onClick={handleSubmitTestimonialForm}>Submit</button>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <input name = "name" onChange = {handleProductChange} value = {productData.name} placeholder="name"></input>
                    <input name = "desc" onChange = {handleProductChange} value = {productData.desc} placeholder="desc"></input>
                    <input name = "price" onChange = {handleProductChange} value = {productData.price} placeholder="price"></input>
                    <select name = "selectedCategory" value = {productData.selectedCategory} onChange={handleProductChange}>
                        <option value = "New Product">New Product</option>
                        <option value = "Most Popular Product">Most Popular Product</option>
                        <option value = "Best Value Product">Best Value Product</option>
                    </select>
                    <button type = "submit" onClick = {handleSubmitProductForm}>Submit</button>
                </div>
            </div>
        </div> ) : "You are not authorized to access this page"
        )
}
export default AdminDashboard;
