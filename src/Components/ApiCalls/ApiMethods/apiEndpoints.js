
const apiEndpoints = {

  SIGN_IN: `/auth/signin`,
  SIGN_UP: `/auth/signup`,
  PRODUCT: `/products`,
  BUY_PRODUCT: `/orders`,
  ADDRESSES: `/addresses`,
  CATEGORIES: `/products/categories`
}

const baseURL = "http://localhost:8081/api"

export {
  apiEndpoints,
  baseURL
};