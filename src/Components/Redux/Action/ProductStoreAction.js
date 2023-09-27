export const ADD_PRODUCT_LIST = "ADD_PRODUCT_LIST";
export const DELETE_PRODUCT_LIST = "DELETE_PRODUCT_LIST";
export const UPDATE_PRODUCTS_LIST = "UPDATE_PRODUCTS_LIST";
export const UPDATE_ADMIN_STATUS = "UPDATE_ADMIN_STATUS";
export const UPDATE_PRODUCT_VIEW_STATE_STATUS = "UPDATE_PRODUCT_VIEW_STATE_STATUS";
export const UPDATE_SPECIFIC_PRODUCT = "UPDATE_SPECIFIC_PRODUCT";
export const UPDATE_DELETE_MODAL = "UPDATE_DELETE_MODAL";
export const UPDATE_ALERT_MODAL = "UPDATE_ALERT_MODAL";
export const UPDATE_ALERT_MODAL_MSG = "UPDATE_ALERT_MODAL_MSG";
export const ADD_TOKEN = "ADD_TOKEN";
export const UPDATE_PLACE_ORDER_STATE = "UPDATE_PLACE_ORDER_STATE";
export const UPDATE_MODAL_IS_ERROR = "UPDATE_MODAL_IS_ERROR";

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

export const updateProductViewStateAction = (STATE) => ({
  type: UPDATE_PRODUCT_VIEW_STATE_STATUS, // true or false if user is admin or not
  payload: { value: STATE },
});

export const updateSpecificProductAction = (STATE) => ({
  type: UPDATE_SPECIFIC_PRODUCT, // true or false if user is admin or not
  payload: { value: STATE },
});

export const updateDeleteModalAction = (STATE) => ({
  type: UPDATE_DELETE_MODAL, // true or false if user is admin or not
  payload: { value: STATE },
});

export const updateAlertModalAction = (STATE) => ({
  type: UPDATE_ALERT_MODAL, // true or false if user is admin or not
  payload: { value: STATE },
});

export const updateAlertModalMsgAction = (STATE) => ({
  type: UPDATE_ALERT_MODAL_MSG, // true or false if user is admin or not
  payload: { value: STATE },
});

export const addTokenAction = (STATE) => ({
  type: ADD_TOKEN,
  payload: { value: STATE }
})
export const updateUpdatePlaceOrderStateAction = (STATE) => ({
  type: UPDATE_PLACE_ORDER_STATE, // true or false if user is admin or not
  payload: { value: STATE },
});
export const updateModalIsError = (STATE) => ({
  type: UPDATE_MODAL_IS_ERROR, // true or false if user is admin or not
  payload: { value: STATE },
});
