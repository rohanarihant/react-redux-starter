import * as types from '../constants/constants';
import Axios from 'axios';
import {toastr} from 'react-redux-toastr';

export const addUserSuccess = (newUser) => {
  return {
    type: types.ADD_USER_SUCCESS,
    newUser
  };
};
export const updateUserSuccess = (modifiedUser) => {
  return {
    type: types.EDIT_USER_SUCCESS,
    modifiedUser
  };
};

export const addUser = (newUser) => {
  return (dispatch) => {
    dispatch(addUserSuccess(newUser));
  };
};

export const updateUser = (user) => {
  console.log(user,'user in action')
  return (dispatch) => {
    dispatch(updateUserSuccess(user));
  };
};
