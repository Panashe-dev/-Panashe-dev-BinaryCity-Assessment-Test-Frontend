import {
    CONTACTS_CREATE_REQUEST,
    CONTACTS_CREATE_SUCCESS,
    CONTACTS_CREATE_FAIL,
    CONTACTS_LIST_REQUEST,
    CONTACTS_LIST_SUCCESS,
    CONTACTS_LIST_FAIL,

  } from '../constants/ContactCostants';


  import { getErrorMessage } from '../service/Utils';

  import{
    contactsClientApi,
    getAllContantsApi
  } from '../service/RestApiCalls'

  export const createContactsAction = (contactsReqBody) => async (dispatch) => {
    console.log(contactsReqBody)
    try {
      dispatch({
        type: CONTACTS_CREATE_REQUEST
      });
  
       await contactsClientApi(contactsReqBody)
  
      dispatch({
        type: CONTACTS_CREATE_SUCCESS
      });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      dispatch({
        type: CONTACTS_CREATE_FAIL,
        payload: message
      });
    }
  };

  export const listContactsAction = (pageNumber) => async (dispatch) => {
    try {
      dispatch({ type: CONTACTS_LIST_REQUEST });
    
      const allContacts = await getAllContantsApi(pageNumber || 0);
      console.log(pageNumber)
      dispatch({
        type: CONTACTS_LIST_SUCCESS,
        payload: allContacts.page.content,
        pageResponse: allContacts.page
      });
    } catch (error) {
      dispatch({
        type: CONTACTS_LIST_FAIL,
        payload: getErrorMessage(error)
      });
    }
  };