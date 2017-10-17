import * as types from '../constants/constants';
import {browserHistory} from 'react-router';
const initialState = {
  registerData:[],
  loggedUser:[],
};

export default function(state=initialState, action){
  switch(action.type){

    case types.GET_REGISTER_SUCCESS :{
      browserHistory.push('login');
      return Object.assign({},state,{registerData:action.userData});
      console.log('push')
    }

    case types.GET_LOGIN_SUCCESS :{
      browserHistory.push('home');
      return Object.assign({},state,{loggedUser:action.loginData});
      console.log('push')
    }

    default:
    return state;
  }
};
