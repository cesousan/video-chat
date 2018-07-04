import axios from 'axios';
import Auth from '../modules/Auth';


const APIURL = 'http://localhost:5000/';

const customAxios = axios.create({
  baseURL: APIURL,
  timeout: 1000
});

customAxios.interceptors.request.use(
  config => {
    console.log('in request interceptor', config);
    if (config.baseURL === APIURL && !config.headers.Authorization) {
      const token = Auth.getToken();
      if(token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error  => Promise.reject(error)
);

customAxios.interceptors.response.use(
  config => {
    console.log('in response interceptor', config)
    localStorage.setItem('userTOKEN', (JSON.stringify(config.headers.access_token)))
  },
  error => Promise.reject(error)
);

export default customAxios;
