import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    } else {
      /* window.location.href = "https://project2-client-side-react-onrht4oyj-edfragoso.vercel.app/login" */
/*      const navigate =  useNavigate()
     navigate('/login') */
     throw "NotAuthenticated"
    }

    return config;
  },
  function (error) {
    console.log('error no interceptor http')
    return Promise.reject(error);
  }
);

export default http;
