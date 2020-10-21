import { GET_USER_LIST } from "../actions/userAction";
import { GET_USER_DETAIL } from "../actions/userAction";
import { POST_USER_CREATE } from "../actions/userAction";
import { PUT_USER_EDIT } from "../actions/userAction";

let initialState = {
  getUserList : false,
  errorUserList: false,
  getUserDetail : false,
  errorUserDetail: false,
  getResponDataUser: false,
  errorResponDataUser: false,
  title: "SYRENNE"
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST:
      return {
        ...state,
        getUserList: action.payload.data,
        errorUserList: action.payload.errorMessage,
      };

    case GET_USER_DETAIL:
      return {
        ...state,
        getUserDetail: action.payload.data,
        errorUserDetail: action.payload.errorMessage,
      };

    case POST_USER_CREATE:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
      
    case PUT_USER_EDIT:
      return {
        ...state,
        getResponDataUser: action.payload.data,
        errorResponDataUser: action.payload.errorMessage,
      };
        
    default:
      return state;
  }
}

export default users
