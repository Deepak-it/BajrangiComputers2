import axios from "axios";
const API_BASE = 'http://localhost:5500';

export const LOGIN = (payload) =>  axios.post(`${API_BASE}/login`, payload);
export const REGISTER = (payload) => axios.post(`${API_BASE}/register`, payload);
export const CONTACT = (payload) =>  axios.post(`${API_BASE}/contact`, payload);

export const slideFormDataEndpoint = (payload) => axios.post(`${API_BASE}/admin/slideFormData`, payload)

// export const getSlideData = () => axios.get(`${API_BASE}/admin/getSlideFormData`)

export const testimonialFormDataEndpoint = (payload) => axios.post(`${API_BASE}/admin/testimonialFormData`, payload)

// export const getTestimonialFormData = () => axios.get(`${API_BASE}/admin/getTestimonialFormData`)

export const productFormDataEndpoint = (payload) => axios.post(`${API_BASE}/admin/productFormData`, payload)

// export const getProductFormData = () => axios.get(`${API_BASE}/admin/getProductFormData`)

