import axios from "axios";
import qs from "query-string";
import FormData from "form-data";
import CONSTANTS from "../constants";

const httpClient = axios.create({
  baseURL: "http://localhost:3000/api",
});
//one user
export const getUsers = (options = {}) => {
  const defaultOptions = {
    limit: CONSTANTS.MIN_LIMIT,
    offset: 0,
  };
  const readyOptions = {
    ...defaultOptions,
    ...options,
  };
  return httpClient.get(`/users?${qs.stringify(readyOptions)}`);
};

export const postUser = (values) => httpClient.post("/users", values);

export const postGroup = (values) => {
  const formDataValues = new FormData();
  formDataValues.append('name', values.name);
  formDataValues.append('userId', values.userId);
  formDataValues.append('image', values.image);
  return httpClient.post("/groups", formDataValues, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};
