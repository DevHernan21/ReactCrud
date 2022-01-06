import axios from "axios";

// I have searched the internet for the most common way to make a file with the http services to use, 
// guiding me from the axiosInstance that Gustavo made in the project with Vue Js


export default axios.create({
  baseURL: "http://localhost:3003/api",
  headers: {
    "Content-type": "application/json"
  }
});