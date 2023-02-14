import {
    CONTACTS_LIST_REQUEST,
    CONTACTS_LIST_SUCCESS,
    CONTACTS_LIST_FAIL,
    CONTACTS_CREATE_REQUEST,
    CONTACTS_CREATE_SUCCESS,
    CONTACTS_CREATE_FAIL,
    CONTACTS_CREATE_RESET
  } from '../constants/ContactCostants';


  export const contactsListReducer = (state = { contacts: [] }, action) => {
    switch (action.type) {
      case CONTACTS_LIST_REQUEST:
        return { loading: true, contacts: [] };
      case CONTACTS_LIST_SUCCESS:
        return { loading: false, contacts: action.payload, pageResponse: action.pageResponse};
      case CONTACTS_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  export const contactCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case CONTACTS_CREATE_REQUEST:
        return { loading: true };
      case CONTACTS_CREATE_SUCCESS:
        return { loading: false, success: true, contact: action.payload };
      case CONTACTS_CREATE_FAIL:
        return { loading: false, error: action.payload };
      case CONTACTS_CREATE_RESET:
        return {};
      default:
        return state;
    }
  };
  