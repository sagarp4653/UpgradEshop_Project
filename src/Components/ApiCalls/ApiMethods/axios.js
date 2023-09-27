import axios from 'axios';
import { baseURL } from './apiEndpoints';
// import { useSelector } from "react-redux";
// import { store } from '../../Redux/Store/Store';


// const token = store.token || '';
// export const GetToken = () => {
//   const storeData = useSelector((state) => state.storeState.storeState) || {};  
//   token = storeData.token || '';
// }

const axiosConfig = {
  baseURL: baseURL,
  responseType: 'json',
  timeout: 60000,
  headers: {
    langId: 1,
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyMTBAbWFpbC5jb20iLCJpYXQiOjE2OTU4MDcyNTEsImV4cCI6MTY5NTgxNTY1MX0.jKn8HDVwHnraGsZN9SZCHERYLUNlyUzwIQXWnavxEwz_COQzIHIkGlo994aXZpaJkU3NnMH0MKxW71AATD-vTA',
    Accept: 'application/json',
  },
};

const HTTP = axios.create(axiosConfig);

export default HTTP;
