import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './App';
import './css/display.css';
import './css/index.css';

const INITIAL_STATE = {
  books: [
    {
      id: 0,
      title: 'My first Book',
      category: 'Action',
    },
    {
      id: 1,
      title: 'My Second Book',
      category: 'Biography',
    },
    {
      id: 2,
      title: 'My Third Book',
      category: 'History',
    },
    {
      id: 3,
      title: 'My Third Book',
      category: 'Horror',
    },
    {
      id: 4,
      title: 'My Third Book',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, INITIAL_STATE);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
