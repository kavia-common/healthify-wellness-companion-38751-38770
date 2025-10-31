import axios from 'axios';
import { getApiBase } from './config';

const instance = axios.create({
  baseURL: getApiBase() || undefined,
  timeout: 10000,
  withCredentials: true
});

// Interceptors skeleton for future auth headers/error handling
instance.interceptors.request.use((config) => config);
instance.interceptors.response.use(
  (resp) => resp,
  (err) => Promise.reject(err)
);

// PUBLIC_INTERFACE
export default instance;
