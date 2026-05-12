import axios from "axios";

const api = axios.create({
  baseURL: "https://dogapi.dog/api",
});

export default api;