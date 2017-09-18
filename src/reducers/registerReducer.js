import * as types from '../constants/constants';
import {browserHistory} from 'react-router';
const initialState = {
  loginData:[]
};

export default function(state=initialState, action){
  switch(action.type){
    case types.GET_LOGIN_SUCCESS :{
      browserHistory.replace('home');
      return Object.assign({},state,{loginData:action.userData});
    }
    default:
    return state;
  }
};
