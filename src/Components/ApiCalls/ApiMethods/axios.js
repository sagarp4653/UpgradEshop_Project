import axios from 'axios';
import { baseURL } from './apiEndpoints';

const axiosConfig = {
  baseURL: baseURL,
  responseType: 'json',
  timeout: 60000,
  headers: {
    langId: 1,
    Authorization: '',
    Accept: 'application/json',
  },
};

const HTTP = axios.create(axiosConfig);

export default HTTP;
