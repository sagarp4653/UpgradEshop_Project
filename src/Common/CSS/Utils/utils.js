import { updateAlertModalAction, updateAlertModalMsgAction, updateModalIsError } from "../../../Components/Redux/Action/ProductStoreAction";

  // Generate a random integer between min (inclusive) and max (exclusive)
const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

const customAlertModalFun = (msg, dispatch, isError) => {
    dispatch(updateAlertModalAction(true))
    dispatch(updateAlertModalMsgAction(msg || "Action successfully"))
    dispatch(updateModalIsError(isError || false))
}

const setKeysAndValueToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const getKeysAndValueToLocalStorage = key => {
  // debugger
  return localStorage.getItem(key)
}

const ifUserIsAdminOrNot = (currentEmail, allUser) => {
  let index = -1
  if(allUser.length > 0)
    index = allUser.findIndex(i => i.email === currentEmail)
  return index;
}
export {
    getRandomInt,
    customAlertModalFun,
    setKeysAndValueToLocalStorage,
    getKeysAndValueToLocalStorage,
    ifUserIsAdminOrNot
}