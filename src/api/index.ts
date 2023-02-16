import axios from "axios";

export const HTTP = axios.create({
  baseURL: import.meta.env.VITE_API,
});

export const NEW_BACK_API = axios.create({
  baseURL: import.meta.env.NEW_BACK_API,
});
