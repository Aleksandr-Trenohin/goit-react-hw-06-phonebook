import { createStore, combineReducers } from 'redux';

import contactsReducer from './contacts/reducer';

const store = createStore(
  // объединяет несколько reducesr
  combineReducers({
    contacts: contactsReducer,
  }) /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
