const StorageArea = {
    storeState: {
      productList: [],
      productListViewState: [],
      isUserAdmin: false,
      isDeleteModal: false,
      updateProduct: {}
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
        const { ind = "" } = action.payload.value || {}
        let deleteArry = [...state.storeState.productList];
        let deleteArr = [...state.storeState.productListViewState];
        deleteArry.splice(ind, 1)
        deleteArr.splice(ind, 1)
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: deleteArry || [],
              productListViewState: deleteArr || [],
            },
          },
        };
        break;

      case "UPDATE_PRODUCTS_LIST":
        const { index, product = {} } = action.payload.value || {}
        let updateArry = [...state.storeState.productList];
        updateArry = [...updateArry.slice(0, index + 1), ...product, ...updateArry.slice(index + 1, updateArry.length)]
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: updateArry || []
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

      default:
        return {...state};
        break;
    }
  };