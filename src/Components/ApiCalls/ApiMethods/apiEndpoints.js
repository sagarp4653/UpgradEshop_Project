
const apiEndpoints = {

  SIGN_IN: `/auth/signin`,
  SIGN_UP: `/auth/signup`,
  USERS: `/users`,
  PRODUCT: `/products`,
  ORDERS: `/orders`,
  ADDRESSES: `/addresses`,
  CATEGORIES: `/products/categories`
}

const baseURL = "http://localhost:8080/api"

export {
  apiEndpoints,
  baseURL
};