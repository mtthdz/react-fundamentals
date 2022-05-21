import React from "react";
import { Provider } from 'react-redux';
import ReduxPage from "./pages/ReduxPage";
import storeConfig from "./store/storeConfig";

const store = storeConfig();

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