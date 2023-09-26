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
    Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyOUBtYWlsLmNvbSIsImlhdCI6MTY5NTc1MzA5NiwiZXhwIjoxNjk1NzYxNDk2fQ.NzeolRBTBzZWrteuIRlsrkSdJEboJvODmkZj2NGAPHQE4vPso0cBa9d3Y0kV7RTpgPZK0S25WE412cZsqko8QQ',
    Accept: 'application/json',
  },
};

const HTTP = axios.create(axiosConfig);

export default HTTP;
