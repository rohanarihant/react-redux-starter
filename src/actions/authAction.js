import * as types from '../constants/constants';
import Axios from 'axios';
import {toastr} from 'react-redux-toastr';

export const getRegisterSuccess = (userData) => {
  return {
    type: types.GET_REGISTER_SUCCESS,
    userData
  };
};
export const getLoginSuccess = (loginData) => {
  return {
    type: types.GET_LOGIN_SUCCESS,
    loginData
  };
};

export const getRegister = (userData) => {
  return (dispatch) => {
    dispatch(getRegisterSuccess(userData));
  };
};

export const getLogin = (loginData) => {
  return (dispatch) => {
    dispatch(getLoginSuccess(loginData));
  };
};

