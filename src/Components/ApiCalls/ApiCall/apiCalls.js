import { apiEndpoints as ApiEndpoints } from "../ApiMethods/apiEndpoints";
import HTTP from "../ApiMethods/axios";

export const USER_LOGIN_API = async (payload) => 
  HTTP.post(
    ApiEndpoints.SIGN_IN, payload
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
    ApiEndpoints.PRODUCT,
  ).catch((err) => {
    return err;
  });

export const GET_ALL_USER_DETAILS = async () =>
  HTTP.get(ApiEndpoints.USERS).catch((err) => {
    return err;
  });

export const CREATE_PRODUCT_API = async (payload) =>
  HTTP.post(ApiEndpoints.PRODUCT, payload).catch((err) => {
    return err;
  });

export const MODIFY_PRODUCT_API = async (id, payload) =>
  HTTP.put(ApiEndpoints.PRODUCT + `/${id}`, payload).catch((err) => {
    return err;
  });

export const DELETE_PRODUCT_API = async (id, payload) =>
  HTTP.delete(ApiEndpoints.PRODUCT + `/${id}`, payload).catch((err) => {
    return err;
  });

export const GET_CATEGORIES_API = async () =>
    HTTP.get(ApiEndpoints.CATEGORIES).catch((err) => {
      return err;
    });

export const GET_ALL_ADDRESSES_API = async () => 
  HTTP.get(
    `${ApiEndpoints.ADDRESSES}`,
  ).catch((err) => {
    return err;
  });

export const CREATE_ADDRESS_API = async (payload) => 
  HTTP.post(
    `${ApiEndpoints.ADDRESSES}`, payload,
  ).catch((err) => {
    return err;
  });  

export const GET_ADDRESS_API = async (id) => 
  HTTP.get(
    ApiEndpoints.ADDRESSES + `/${id}`
  ).catch((err) => {
    return err;
  });

export const PLACE_ORDER_API = async (payload) => 
  HTTP.post(
    ApiEndpoints.ORDERS, payload
  ).catch((err) => {
    return err;
  });  