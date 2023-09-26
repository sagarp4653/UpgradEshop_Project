
const apiEndpoints = {

  SIGN_IN: `/auth/signin`,
  SIGN_UP: `/auth/signup`,
  PRODUCT_DETAILS: `/products`,
  BUY_PRODUCT: `/orders`,
  ADDRESSES: `/addresses`

}

const baseURL = "http://localhost:8080/api"

export {
  apiEndpoints,
  baseURL
};