import {
    LINK_CREATE_REQUEST,
    LINK_CREATE_SUCCESS,
    LINK_CREATE_FAIL,

  } from '../constants/LinkToContactConstants';

  import {linkClientApi} from '../service/RestApiCalls';

  export const linkContactAction = (lINKReqBody) => async (dispatch) => {
    console.log(lINKReqBody)
    try {
      dispatch({
        type: LINK_CREATE_REQUEST
      });
      
        linkClientApi(lINKReqBody);
        
      dispatch({
        type: LINK_CREATE_SUCCESS
      });
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      dispatch({
        type: LINK_CREATE_FAIL,
        payload: message
      });
    }
  };

