import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StylePage from './pages/StylePage'
import ComponentPage from './pages/ComponentPage';
import StatePage from './pages/StatePage';
import Nav from './components/Nav';

/**
 * For simplicity and ease of reading,
 * 1. the Redux store provider has been wrapped around App on index.js
 * 2. the React Router wrapper has been wrapped around App on index.js
 * 3. Router routes and nav has been nested under App (below)
 *
 * React Router
 * Router is split into two parts:
 *  1. the list of routes (below) that define the page structure. We
 *     pass the page components and its URL append as arguments
 *  2. the nav of Link elements which act similar to anchors, but for
 *     directing to the other pages defined in the list of routes. They
 *     are designed as traditional nav elements, with nested ul/ol elements
 */
const App = () => {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={ <StylePage /> } /> 
        <Route path="/state" element={ <StatePage /> } /> 
        <Route path="/components" element={ <ComponentPage /> } /> 
      </Routes>
    </div>
  );
}

export default App;