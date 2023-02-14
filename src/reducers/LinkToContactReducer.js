import {
    LINK_CREATE_REQUEST,
    LINK_CREATE_SUCCESS,
    LINK_CREATE_FAIL,
    LINK_CREATE_RESET
  } from '../constants/LinkToContactConstants';



export const CreateLinkReducer = (state = {}, action) => {
    switch (action.type) {
      case LINK_CREATE_REQUEST:
        return { loading: true };
      case LINK_CREATE_SUCCESS:
        return { loading: false, success: true, Link: action.payload };
      case LINK_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case LINK_CREATE_RESET:
        return {};
      default:
        return state;
    }
  
  };