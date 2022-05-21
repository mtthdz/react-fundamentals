import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { Provider } from 'react-redux';
import storeConfig from "./store/storeConfig";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = storeConfig();

root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
);