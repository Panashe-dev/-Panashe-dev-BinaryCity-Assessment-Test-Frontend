import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { clientCreateReducer, clientListReducer } from './reducers/ClientReducer';
import { contactCreateReducer, contactsListReducer} from './reducers/ContactReducer';
import  {CreateLinkReducer} from './reducers/LinkToContactReducer';

const appReducer = combineReducers({
    clientCreate: clientCreateReducer,
    clientList: clientListReducer,
    contactCreate: contactCreateReducer,
    contactsList: contactsListReducer,
    createLink:  CreateLinkReducer
})

const middleware = [thunk];

const rootReducer = (state, action) => {
    return appReducer(state, action);
  };
  
  const initialState = {
  
   
  };
  
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;