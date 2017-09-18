import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr';
// import {routerReducer } from 'react-router-redux';
import registerReducer from "./registerReducer";
const appReducer = combineReducers({
  toastr: toastrReducer,
  registerReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
