import { createStore } from "redux";
import mainReducer from '../Reducer/Reducers'

export const store = createStore(mainReducer ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
