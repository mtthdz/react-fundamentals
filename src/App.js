import React from "react";
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ReduxPage from "./pages/ReduxPage";


const store = configureStore();

const App = () => {
  return (
    <Provider store={ store }>
      <div className="App">
        <ReduxPage />
      </div>
    </Provider>
  );
}

export default App;
