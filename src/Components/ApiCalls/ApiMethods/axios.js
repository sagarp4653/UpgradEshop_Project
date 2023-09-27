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
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYWdhci5wcmFkaGFuNTgzQGdtYWlsLmNvbSIsImlhdCI6MTY5NTc5MzMzMiwiZXhwIjoxNjk1ODAxNzMyfQ.Vp0yD-xQivW-87oALj-ozvsjFmJr-oymwIiN8gPfXimfW0loILxewXowTnn8FmwBUr32oVD7A3JgcC24hHoEpQ',
    Accept: 'application/json',
  },
};

const HTTP = axios.create(axiosConfig);

export default HTTP;
