import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://michtoblog.herokuapp.com/api/"
})