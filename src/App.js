import React from "react";
import { Routes, Route } from 'react-router-dom';
import StylePage from './pages/StylePage'
import ComponentPage from './pages/ComponentPage';
import ReduxPage from './pages/ReduxPage';
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={ <StylePage /> } /> 
        <Route path="/components" element={ <ComponentPage /> } /> 
        <Route path="/redux" element={ <ReduxPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;