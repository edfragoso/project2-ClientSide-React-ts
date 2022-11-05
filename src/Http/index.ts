import axios from "axios";

const http = axios.create({
  baseURL: "https://gamingdev.onrender.com/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
       config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    console.log('error no interceptor http')
    return Promise.reject(error);
  }
);

export default http;
