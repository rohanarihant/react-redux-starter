import * as types from '../constants/constants';
import Axios from 'axios';
import {toastr} from 'react-redux-toastr';

export const getLoginSuccess = (userData) => {
  return {
    type: types.GET_LOGIN_SUCCESS,
    userData
  };
};

export const getLogin = (userData) => {
  return (dispatch) => {
    dispatch(getLoginSuccess(userData));
  };
};
