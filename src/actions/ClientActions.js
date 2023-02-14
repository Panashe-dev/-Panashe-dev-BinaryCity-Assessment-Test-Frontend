
import {
    CLIENT_CREATE_REQUEST,
    CLIENT_CREATE_SUCCESS,
    CLIENT_CREATE_FAIL,
    CLIENT_LIST_REQUEST,
    CLIENT_LIST_SUCCESS,
    CLIENT_LIST_FAIL,

  } from '../constants/ClientConstacts';


  
  import { getErrorMessage } from '../service/Utils';
  import{
    createClientApi,
    getAllClientsApi
  } from '../service/RestApiCalls'

  export const createClientAction = (clientReqBody) => async (dispatch) => {
    try {
      dispatch({
        type: CLIENT_CREATE_REQUEST
      });
  
       await createClientApi(clientReqBody)
  
      dispatch({
        type: CLIENT_CREATE_SUCCESS
      });
    } catch (error) {
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      dispatch({
        type: CLIENT_CREATE_FAIL,
        payload: message
      });
    }
  };

  export const listClientctsAction = (pageNumber) => async (dispatch) => {
    try {
      dispatch({ type: CLIENT_LIST_REQUEST });
    
      const allClients = await getAllClientsApi(pageNumber || 0);
      
      dispatch({
        type: CLIENT_LIST_SUCCESS,
        payload: allClients.page.content,
        pageResponse: allClients.page
      });
    } catch (error) {
      dispatch({
        type: CLIENT_LIST_FAIL,
        payload: getErrorMessage(error)
      });
    }
  };