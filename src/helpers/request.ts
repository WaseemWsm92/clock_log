import axios from "axios";
import { getToken } from "../service/Tokens";

export const BASE_URL = "http://localhost:3001";


export const apiGetRequest = (endpoint: string, token = null, props = {}) => ApiRequest("GET", endpoint, token, props);
// Post request Function
export const apiPostRequest = (endpoint: string, payload: any, contentType?: string, token = null) => ApiRequest("POST", endpoint, token, { data: payload }, contentType);
// Patch request Function
export const apiPatchRequest = (endpoint: string, payload: any, contentType?: string, token = null) => ApiRequest("PATCH", endpoint, token, { data: payload }, contentType);
// Put Request Function
export const apiPutRequest = (endpoint: string, payload: any, contentType?: string, token = null) => ApiRequest("PUT", endpoint, token, { data: payload }, contentType);
// Delete Request Function
export const apiDeleteRequest = (endpoint: string, token = null, contentType?: string, props = {}) => ApiRequest("DELETE", endpoint, token, props, contentType);

// Api Request for all the api methods
export const ApiRequest = (method: string, endpoint: string, token: any = null, props: any = {}, contentType?: string) => {
  if (!token) {
    token = getToken();
  }
  const params: any = {
    method,
    baseURL: BASE_URL,
    url: endpoint,
    params: method.toLowerCase() === "get" || method.toLowerCase() === "delete" ? props : undefined,
    headers: {
      Accept: "application/json",
      "Content-Type": contentType ? `multipart/${contentType}` : `application/json`,
      Authorization: `Bearer ${token}`,
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }


  return axios(params);
};
