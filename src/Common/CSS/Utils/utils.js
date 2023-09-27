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

export {
    getRandomInt,
    customAlertModalFun
}