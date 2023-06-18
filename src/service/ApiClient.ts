import axios from "axios";
import { getToken } from "./Tokens";

const apiClient = () => {
  const defaultOptions = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  instance.interceptors.request.use(
    (request) => requestHandler(request),
    (error) => errorHandler(error)
  );

  instance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
  );
  return instance;
};

// Step-2: Create request, response & error handlers
const requestHandler = (request: any) => {
  let storedToken: any = getToken();
  request.headers.Authorization = storedToken ? `Bearer ${storedToken?.token}` : "";
  return request;
};

const responseHandler = (response: any) => {
  return response;
};

const errorHandler = (error: any) => {
  if (error?.response?.status === 401) {
    let userDataFromStorageLocal = localStorage.getItem("userData") || "{}";
    sessionStorage.setItem("tempRoute", JSON.stringify(window.location?.pathname));
    userDataFromStorageLocal !== "{}"
      ? localStorage.removeItem("userData")
      : sessionStorage.removeItem("userData");
    window.location.assign("/authentication/signin?tokenRevoked");
  }
  return Promise.reject(error);
};

export default apiClient();
