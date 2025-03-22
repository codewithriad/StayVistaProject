import axios from "axios";


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URI,
    withCredentials: true,
})

export default axiosSecure;