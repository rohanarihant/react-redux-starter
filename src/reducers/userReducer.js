import * as types from '../constants/constants';
import {browserHistory} from 'react-router';
const initialState = {
  userList: [
    { firstName: 'Rohan', lastName: 'Arihant', phoneNumber: '9988776655', email: 'rohan@gmail.com' },
    { firstName: 'Akshay', lastName: 'Kumar', phoneNumber: '123456678', email: 'akshay@gmail.com' },
    { firstName: 'Virat', lastName: 'Kohli', phoneNumber: '1144772255', email: 'virat@gmail.com' },
    { firstName: 'Sachin', lastName: 'Tendulkar', phoneNumber: '852558258', email: 'sachin@gmail.com' }
  ]
};

export default function(state=initialState, action){
  switch(action.type){

    case types.ADD_USER_SUCCESS :{
      return { ...state, userList: [...state.userList,action.newUser]};
      console.log('addd')
    }

    case types.EDIT_USER_SUCCESS :{
      console.log(action.modifiedUser,'action.newUser')
      const updatedItems = state.userList.map((item,id) => {
        if(id === action.modifiedUser.id){
          return { ...state, userList: [...state.userList,action.modifiedUser]};
        }
        return { ...item, ...action.modifiedUser }
      })
return updatedItems
    }
    default:
    return state;
  }
};
