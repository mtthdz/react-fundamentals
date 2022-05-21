import React from "react";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Counter from "./pages/Counter";


const store = configureStore();

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <Counter/>
      </div>
    </Provider>
  );
}

export default App;
