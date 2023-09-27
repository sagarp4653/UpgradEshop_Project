import axios from 'axios';
import { baseURL } from './apiEndpoints';

const token = JSON.parse(localStorage.getItem('token'));

const axiosConfig = {
  baseURL: baseURL,
  responseType: 'json',
  timeout: 60000,
  headers: {
    langId: 1,
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
  },
};

const HTTP = axios.create(axiosConfig);

export default HTTP;
