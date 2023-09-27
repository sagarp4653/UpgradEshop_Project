import axios from 'axios';
import { baseURL } from './apiEndpoints';
// import { useSelector } from "react-redux";
// import { store } from '../../Redux/Store/Store';


// const token = store.token || '';
// export const GetToken = () => {
//   const storeData = useSelector((state) => state.storeState.storeState) || {};  
//   token = storeData.token || '';
// }

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
