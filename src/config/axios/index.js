import axios from "axios";
import { BACKEND_URL } from "react-native-dotenv";
import userStore from "../../mobx/user";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Cache-Control"] = "no-cache";

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
});
axiosInstance.interceptors.request.use(
  (config) => {
    const token = userStore.userStore.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
