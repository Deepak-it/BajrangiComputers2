import axios from "axios";
const API_BASE = 'http://localhost:5500/api';

export const LOGIN = (payload) =>  axios.post(`${API_BASE}/login`, payload);
// export const REGISTER = axios.post(`${API_BASE}/register`);
export const CONTACT = (payload) =>  axios.post(`${API_BASE}/contact`, payload);

console.log(`${API_BASE}/contact`)