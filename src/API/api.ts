import axios from "axios";

const api = axios.create({
        baseURL: 'http://localhost:7000'
    }
)
api.interceptors.request.use(
    (config) => {
        if(config.headers) {
            config.headers['Authorization'] = localStorage.getItem('token');
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api
