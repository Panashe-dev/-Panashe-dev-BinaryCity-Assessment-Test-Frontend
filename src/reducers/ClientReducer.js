import {
    CLIENT_LIST_REQUEST,
    CLIENT_LIST_SUCCESS,
    CLIENT_LIST_FAIL,
    CLIENT_CREATE_REQUEST,
    CLIENT_CREATE_SUCCESS,
    CLIENT_CREATE_FAIL,
    CLIENT_CREATE_RESET
  } from '../constants/ClientConstacts';


  export const clientListReducer = (state = { clients: [] }, action) => {
    switch (action.type) {
      case CLIENT_LIST_REQUEST:
        return { loading: true, clients: [] };
      case CLIENT_LIST_SUCCESS:
        return { loading: false,clients: action.payload, pageResponse: action.pageResponse};
      case CLIENT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const clientCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CLIENT_CREATE_REQUEST:
        return { loading: true };
      case CLIENT_CREATE_SUCCESS:
        return { loading: false, success: true, client: action.payload };
      case CLIENT_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CLIENT_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  