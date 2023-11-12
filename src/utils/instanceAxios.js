import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "https://miraplay-test-server-five.vercel.app/",
  headers: { "Content-Type": "application/json" },
});
instanceAxios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem("token")}`;

  return config;
});
