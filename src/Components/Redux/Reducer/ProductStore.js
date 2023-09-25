const StorageArea = {
    storeState: {
      productList: [],
      isUserAdmin: false
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
        deleteArry.splice(ind, 1)
        return {
          ...state,
          ...{
            storeState: {
              ...state.storeState,
              productList: deleteArry || []
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

      default:
        return {...state};
        break;
    }
  };