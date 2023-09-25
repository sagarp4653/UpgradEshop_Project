export const ADD_PRODUCT_LIST = "ADD_PRODUCT_LIST";
export const DELETE_PRODUCT_LIST = "DELETE_PRODUCT_LIST";
export const UPDATE_PRODUCTS_LIST = "UPDATE_PRODUCTS_LIST";
export const UPDATE_ADMIN_STATUS = "UPDATE_ADMIN_STATUS";

export const addProductsAction = (STATE) => ({
  type: ADD_PRODUCT_LIST, // pass product as in object to it
  payload: { value: STATE },
});

export const deleteProductFromProductListAction = (STATE) => ({
  type: DELETE_PRODUCT_LIST, // for delete user need to pass {ind: ''} index with value like this
  payload: { value: STATE },
});

export const updateProductInProductListAction = (STATE) => ({
  type: UPDATE_PRODUCTS_LIST, // for update user need to pass { index, product = {} }
  payload: { value: STATE },
});

export const updateAdminStatusAction = (STATE) => ({
  type: UPDATE_ADMIN_STATUS, // true or false if user is admin or not
  payload: { value: STATE },
});
