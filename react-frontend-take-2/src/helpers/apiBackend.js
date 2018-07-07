import axios from 'axios';
import { getToken } from './auth';

const APIURL = 'http://localhost:5000/';

export const customAxios = axios.create({
  baseURL: APIURL,
  timeout: 5000
});

customAxios.interceptors.request.use(
  config => {
    if (config.baseURL === APIURL && !config.headers.Authorization) {
      const token = getToken();
      if(token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error  => Promise.reject(error)
);

// edit config && error to handle systematic response behavior.
customAxios.interceptors.response.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

export const backend = customAxios;
