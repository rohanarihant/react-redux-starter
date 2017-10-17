import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr';
// import {routerReducer } from 'react-router-redux';
import userReducer from "./userReducer";
import authReducer from "./authReducer";
const appReducer = combineReducers({
  toastr: toastrReducer,
  userReducer,
  authReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
