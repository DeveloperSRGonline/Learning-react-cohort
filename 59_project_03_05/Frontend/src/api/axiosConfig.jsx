import axios from "axios";
import { API_BASE_URL } from "../constants/apiConstants";

const instance = axios.create({
    baseURL: API_BASE_URL,
});

// You can add interceptors here for production logic (e.g., adding tokens)
instance.interceptors.request.use(
    (config) => {
        // Example: const token = localStorage.getItem('token');
        // if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

export default instance;