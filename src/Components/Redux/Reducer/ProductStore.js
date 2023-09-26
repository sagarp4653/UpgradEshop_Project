const StorageArea = {
    storeState: {
      productList: [],
      productListViewState: [],
      isUserAdmin: false,
      isDeleteModal: false,
      updateProduct: {
        index: '',
        value: {}
      },
      isAlertModalOpen: false,
      alertModalMsg: "",
      token: ""
    },
    name: "storeState",
  };
  
  export const storeState = (state = StorageArea, action) => {
    
    switch (action.type) {
      case "ADD_PRODUCT_LIST":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: action.payload.value || []
            },
          },
        };
        break;

      case "DELETE_PRODUCT_LIST":
        const { id = "" } = action.payload.value || {}
        let deleteArry = [...state.storeState.productList].filter(i => i.id !== id)
        let deleteArr = [...state.storeState.productListViewState].filter(i => i.id !== id)
        // deleteArry.splice(ind, 1)
        console.log("", deleteArry, deleteArr)
        // deleteArr.splice(ind, 1)
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: deleteArry,
              productListViewState: deleteArr
            },
          },
        };
        break;

      case "UPDATE_PRODUCTS_LIST":
        // debugger
        const { index, product = {} } = action.payload.value || {}
        let updateArry = [...state.storeState.productList]
        let updateArr =  [...state.storeState.productListViewState]; // [1, 2, 3, 4, 5, 6] ind = 3
        updateArry = [...updateArry.slice(0, index), product, ...updateArry.slice(index + 1, updateArry.length)]
        updateArr = [...updateArr.slice(0, index), product, ...updateArr.slice(index + 1, updateArr.length)]
        console.log("store", updateArry)
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: updateArry || [],
              productListViewState: updateArr || []
            },
          },
        };
        break;

      case "UPDATE_ADMIN_STATUS":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              isUserAdmin: action.payload.value
            },
          },
        };
        break;

      case "UPDATE_PRODUCT_VIEW_STATE_STATUS":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productListViewState: action.payload.value || []
            },
          },
        };
        break;

      case "UPDATE_SPECIFIC_PRODUCT":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              updateProduct: action.payload.value || {}
            },
          },
        };
        break;

      case "UPDATE_DELETE_MODAL":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              isDeleteModal: action.payload.value
            },
          },
        };
        break;

      case "UPDATE_ALERT_MODAL":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              isAlertModalOpen: action.payload.value
            },
          },
        };
        break;

      case "UPDATE_ALERT_MODAL_MSG":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              alertModalMsg: action.payload.value
            },
          },
        };
        break;

      case "ADD_TOKEN":
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              token: action.payload.value
            },
          },
        };
        break;

      default:
        return {...state};
        break;
    }
  };