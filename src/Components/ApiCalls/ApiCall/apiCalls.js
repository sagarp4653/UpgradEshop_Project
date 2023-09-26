import { apiEndpoints as ApiEndpoints } from "../ApiMethods/apiEndpoints";
import HTTP from "../ApiMethods/axios";

export const USER_LOGIN_API = async (requestData) => 
  HTTP.post(
    ApiEndpoints.SIGN_IN,requestData
  ).catch((err) => {
    return err;
  });

export const USER_SIGN_UP_API = async (payload) => 
  HTTP.post(
    ApiEndpoints.SIGN_UP, payload
  ).catch((err) => {
    return err;
  });

export const PRODUCT_LIST_API = async () => 
  HTTP.get(
    ApiEndpoints.PRODUCT_DETAILS,
  ).catch((err) => {
    return err;
  });

export const GET_CATEGORIES_API = async () =>
    HTTP.get(ApiEndpoints.CATEGORIES).catch((err) => {
      return err;
    });

export const BUY_PRODUCTS_API = async () => 
  HTTP.post(
    ApiEndpoints.BUY_PRODUCT,
  ).catch((err) => {
    return err;
  });

export const GET_SPECIFIC_PRODUCT_ADDRESSES_API = async ({ id }) => 
  HTTP.get(
    `${ApiEndpoints.ADDRESSES}/${id}`,
  ).catch((err) => {
    return err;
  });