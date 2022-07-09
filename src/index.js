import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';

import store from './redux/store';
// import { ADD_CONTACT } from 'redux/contacts/action-types';
// import { addContact } from 'redux/contacts/actions';
// import { reducer } from './store/contacts/reducer';
// const store = createStore(reducer);

// store.dispatch({
//   type: ADD_CONTACT,
//   payload: {
//     id: 1,
//     contact: 'kate',
//   },
// });
// store.getState();
// store.dispatch(addContact('My first', 121212));
// store.dispatch(addContact('My second', 131313));
// const newState = store.getState();
// console.log(newState);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
