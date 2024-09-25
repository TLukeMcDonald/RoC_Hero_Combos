import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust this to your store path
import App from './App';
import { fetchInitialData } from './redux/myHerosSlice';

// Dispatch the fetch action when the store is initialized
store.dispatch(fetchInitialData());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
