import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import storeConfig from './store/storeConfig';
import { BrowserRouter } from 'react-router-dom';

/**
 * For simplicity and ease of reading,
 * 1. the Redux store provider has been wrapped around App (below)
 * 2. the React Router wrapper has been wrapped around App (below)
 * 3. Router routes and nav has been nested under App on App.js
 *
 * Redux
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig();

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);